import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import * as fs from "fs";
import * as path from "path";

export default function (pi: ExtensionAPI) {
  const CONFIG_PATH = path.join(process.cwd(), ".pi", "team_config.md");
  const AGENTS_DIR = path.join(process.cwd(), ".pi", "agents");

  function getAgentStatus(id: string): boolean {
    try {
      const content = fs.readFileSync(CONFIG_PATH, "utf8");
      return content.includes(`${id}_enabled: true`);
    } catch (e) { return true; }
  }

  const subagents = ["architect", "coder", "researcher", "validator", "documenter"];
  
  subagents.forEach(id => {
    pi.registerTool({
      name: `call_${id}`,
      description: `Delegate an atomic technical task to the ${id} specialist.`,
      parameters: {
        type: "object",
        properties: {
          task: { type: "string", description: "Narrow scope task description." }
        },
        required: ["task"]
      },
      async execute(params: any) {
        if (!getAgentStatus(id)) {
            return { content: [{ type: "text", text: `Error: ${id} is currently disabled in /team.` }] };
        }

        const agentFile = path.join(AGENTS_DIR, id + ".md");
        let content = fs.readFileSync(agentFile, "utf8").replace(/^---[\s\S]*?---/m, "");
        
        const triggerMessage = `### 🚨 ${id.toUpperCase()} ACTIVATED\n[TASK]: ${params.task || "Proceed"}\n\n[YOUR MISSION]:\n${content}`;
        
        // SDK Fidelity: deliverAs followUp is the correct way to queue turns
        // @ts-ignore
        await pi.sendUserMessage(triggerMessage, { deliverAs: "followUp" });

        return {
            content: [{ type: "text", text: `Handoff to ${id} initiated.` }],
            details: { agent: id }
        };
      }
    });
  });

  pi.on("session_start", (_event, ctx) => {
    ctx.ui.setStatus("pi-core", "");
  });

  pi.registerCommand("team", {
    description: "Manage Team Specialist Status",
    handler: async (_args, ctx) => {
      let running = true;
      while (running) {
        const action = await ctx.ui.select("🤖 Specialist Management:", ["Toggle Agents", "Exit"]);
        if (!action || action === "Exit") break;
        if (action === "Toggle Agents") {
          const options = subagents.map(id => `${getAgentStatus(id) ? "✅" : "❌"} ${id.toUpperCase()}`);
          options.push("⬅️ Back");
          const choice = await ctx.ui.select("Toggle Status:", options);
          if (choice && choice !== "⬅️ Back") {
              const id = choice.split(" ")[1].toLowerCase();
              let content = fs.readFileSync(CONFIG_PATH, "utf8");
              const current = getAgentStatus(id);
              content = content.replace(`${id}_enabled: ${current}`, `${id}_enabled: ${!current}`);
              fs.writeFileSync(CONFIG_PATH, content, "utf8");
          }
        }
      }
    }
  });
}
