import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default function (pi: ExtensionAPI) {
  const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];
  let frameIdx = 0;
  let isWorking = false;
  let activeTools: Map<string, string> = new Map();
  let spinnerInterval: ReturnType<typeof setInterval> | null = null;
  let detectedAgent = "Facilitator";

  function identifyAgent(text: string) {
    if (!text) return;
    const lower = text.toLowerCase();
    
    for (const toolName of activeTools.values()) {
        if (toolName.startsWith("call_")) {
            const agentName = toolName.replace("call_", "");
            detectedAgent = agentName.charAt(0).toUpperCase() + agentName.slice(1);
            return;
        }
    }

    if (lower.includes("/architect")) detectedAgent = "Architect";
    else if (lower.includes("/coder")) detectedAgent = "Coder";
    else if (lower.includes("/researcher")) detectedAgent = "Researcher";
    else if (lower.includes("/validator")) detectedAgent = "Validator";
    else if (lower.includes("/documenter")) detectedAgent = "Documenter";
    else if (lower.includes("facilitator")) detectedAgent = "Facilitator";
  }

  function updateStatus(ctx: any) {
    if (!isWorking && activeTools.size === 0) {
        ctx.ui.setWidget("team-status", undefined);
        return;
    }
    const frame = frames[frameIdx];
    frameIdx = (frameIdx + 1) % frames.length;
    const text = ctx.ui.theme.fg("accent", `${frame} ${detectedAgent} is active...`);
    ctx.ui.setWidget("team-status", [text]);
  }

  pi.on("message_update", (event, ctx) => {
    if (event.content) {
        identifyAgent(event.content);
        updateStatus(ctx);
    }
  });

  pi.on("agent_start", (event, ctx) => {
    isWorking = true;
    if (spinnerInterval) clearInterval(spinnerInterval);
    spinnerInterval = setInterval(() => updateStatus(ctx), 80);
  });

  pi.on("agent_end", (event, ctx) => {
    isWorking = false;
    if (spinnerInterval) clearInterval(spinnerInterval);
    spinnerInterval = null;
    ctx.ui.setWidget("team-status", undefined);
  });

  pi.on("tool_execution_start", (event, ctx) => {
    // @ts-ignore
    activeTools.set(event.toolCallId || event.toolName, event.toolName);
    identifyAgent(event.toolName);
    updateStatus(ctx);
  });

  pi.on("tool_execution_end", (event, ctx) => {
    // @ts-ignore
    activeTools.delete(event.toolCallId || event.toolName);
    updateStatus(ctx);
  });
}
