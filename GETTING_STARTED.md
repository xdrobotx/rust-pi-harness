# Getting Started with Rust Pi Harness

This guide explains how to use the Pi Coding Agent and its specialized subagents to build high-quality Rust projects.

## 1. The Agent Team

When you start this project, you have a full team at your disposal. You interact primarily with the **Orchestrator**, who delegates tasks to others.

| Agent | When to use | Primary Output |
| :--- | :--- | :--- |
| **Orchestrator** | General interaction, planning, and coordination. | Task Plans & Summaries |
| **Researcher** | Investigating crates, technical feasibility, or codebase logic. | Feasibility Reports |
| **Architect** | Designing APIs, system structure, and trait hierarchies. | Design Documents |
| **Coder** | Writing implementation code, refactoring, and logic. | Source Code |
| **Validator** | Running tests, checking lints, and verifying fixes. | Verification Reports |
| **Documenter** | Writing `rustdoc`, READMEs, and Mermaid diagrams. | Documentation |

## 2. Core Workflows

### Phase 1: Discovery & Feasibility
Before coding, use the `/feasibility` command.
- **Goal**: Validate if your idea is technically sound in Rust.
- **Process**: The Researcher looks for risks and crates, while the Architect sketches a viability blueprint.
- **Command**: `/feasibility "Your idea description"`

### Phase 2: Design
Once the idea is validated, ask the Orchestrator to have the Architect design the API.
- **Deliverable**: A `DESIGN.md` file with Mermaid diagrams.
- **Command**: "Ask the Architect to design the public API for the data processor module."

### Phase 3: Implementation (TDD)
Use the `tdd` skill to drive implementation.
- **Process**: Coder writes a failing test, then the logic, then refactors.
- **Command**: "Start the TDD cycle for the feature we just designed."

### Phase 4: Verification
Before finalizing, always involve the Validator.
- **Process**: Validator runs `cargo clippy` and `cargo test`.
- **Command**: "Have the Validator verify the current implementation."

## 3. Best Practices

### Output Validation
The Orchestrator is configured to perform **Quality Control**. If an agent produces code that doesn't compile or a report that is too vague, the Orchestrator will intervene. You can also manually ask: *"Orchestrator, did the Coder follow the Architect's design exactly?"*

### Visual Documentation
This template uses **Mermaid.js**. When you need to understand complex logic, ask: *"Researcher, can you provide a Mermaid flowchart of how data moves through the `worker` module?"*

### Agent Restrictions
To maintain high code quality, agents are restricted:
- The **Researcher** and **Architect** cannot modify production code.
- The **Coder** cannot change the architectural design without approval.
- The **Validator** cannot implement features.

## 4. File Structure

- **`README.md`**: Your project's main documentation (to be populated by the **Documenter**).
- **`TEMPLATE_GUIDE.md`**: A quick reference for the template features.
- **`GETTING_STARTED.md`**: This detailed manual.
- **`.pi/`**: Contains the agents, skills, and prompts that power your development team.

## 5. Useful Commands

- `/init`: Greet the team and confirm project setup.
- `/feasibility`: Start a strategic research session.
- `/cargo`: View available cargo shortcuts.
- `/mermaid`: See diagramming syntax.

Happy coding!
