# Rust Pi Agent Harness

This guide explains how to build high-quality Rust projects using the **Facilitator** and the specialized specialist team.

## 1. The specialist Team

| Specialist | Role | Boundary |
| :--- | :--- | :--- |
| **Facilitator** | Coordination & Routing | Does not generate technical content. |
| **Researcher** | Rust Crate/Ecosystem & General Research | Does not write code or designs. |
| **Architect** | API Design & Structure | Does not write production code. |
| **Coder** | Logic & Implementation | Only one with `src/` write access. |
| **Validator** | QA & Verification | Does not implement features. |
| **Documenter** | READMEs & Mermaid Diagrams | Does not write production logic. |

## 2. The "Transparent Waterfall" Workflow

1. **Intake**: Ask the **Facilitator** for a feature or research.
2. **Delegation**: The Facilitator will call the relevant specialist via a tool.
3. **Activity**: You will see a separate, color-coded response header for each specialist.
4. **Fidelity**: Each specialist uses the artifacts produced by the previous turn.

## 3. Specialist Management

Use the `/team` command to:
- Toggle specialists on/off for specific project phases.
- Assign specific LLM models to specific specialists (coming soon).

## 4. Useful Commands

- `/init`: Initialize the team.
- `/team`: Manage your specialists.
- `/cargo`: Standard Rust build commands.
- `/mermaid`: Diagram syntax help.
