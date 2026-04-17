---
name: mermaid
description: A skill for creating visual diagrams using Mermaid.js syntax. Use this for flowcharts, sequence diagrams, class diagrams, and state machines.
---

# Mermaid Diagramming Skill

Use Mermaid syntax to create visual representations of architecture, logic, and processes.

## Basic Syntax

### Flowchart
```mermaid
graph TD
    A[Start] --> B{Is it viable?}
    B -- Yes --> C[Plan]
    B -- No --> D[Research More]
```

### Sequence Diagram
```mermaid
sequenceDiagram
    User->>Orchestrator: Request Feature
    Orchestrator->>Architect: Design API
    Architect-->>Orchestrator: Design Doc
    Orchestrator->>User: Present Plan
```

### Class Diagram (for Rust Structs/Traits)
```mermaid
classDiagram
    class DataProvider {
        <<trait>>
        +fetch_data()
    }
    class SqliteProvider {
        +fetch_data()
    }
    DataProvider <|-- SqliteProvider
```

## Guidelines for Agents
- Always wrap Mermaid code in ` ```mermaid ` blocks.
- Use `graph TD` (Top Down) or `graph LR` (Left to Right) for flowcharts.
- Use Mermaid for:
    - **Architect**: System module maps and trait hierarchies.
    - **Researcher**: Data flow and logic exploration.
    - **Documenter**: User guides and README visuals.
    - **Validator**: Test coverage maps or state transitions.
