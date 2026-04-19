# Rust Pi Harness Template Guide

This document describes how to use this template and its integrated Pi agents. **You can delete this file once you are comfortable with the workflow.**

## 🚀 Key Features

- **Multi-Agent Orchestration**: A Lead Orchestrator coordinating five specialized subagents (Architect, Coder, Researcher, Validator, Documenter).
- **Safety Guardrails**: Strict **Restrictions** and **Deliverables** for each agent.
- **Feasibility & Discovery**: Built-in workflows for technical brainstorming via `/fstudy`.
- **Visual Documentation**: Standardized **Mermaid.js** integration.
- **Integrated Skills**: Pre-configured skills for `cargo`, `git`, `tdd`, and `mermaid`.

## 🛠 Quick Start

1. **Initialize the Team**:
   Inside the Pi agent, run:
   ```text
   /init
   ```

2. **Start Brainstorming**:
   If you have a new idea, start a feasibility study:
   ```text
   /fstudy "my awesome idea"
   ```

3. **Generate your Project README**:
   Ask the **Documenter** to populate the main `README.md`:
   *"Documenter, please update the README.md with our project's purpose and architecture."*

## 📖 Detailed Documentation

See [GETTING_STARTED.md](GETTING_STARTED.md) for the full agent manual.
