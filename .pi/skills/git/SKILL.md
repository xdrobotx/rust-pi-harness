---
name: git
description: A skill for managing version control using Git. Focuses on safe committing, branching, and status reporting.
---

# Git Skill

This skill provides idiomatic workflows for version control.

## Workflow

### 1. Check Status
```bash
git status
```

### 2. Stage Changes
```bash
git add <files>
```

### 3. Commit with Meaningful Message
```bash
git commit -m "<type>: <description>"
```
*Follow conventional commits: feat, fix, docs, style, refactor, test, chore.*

### 4. Branch Management
```bash
git checkout -b <branch-name>
```

## Safety Guidelines
- Always check `git diff --cached` before committing.
- Avoid committing large binary files or secrets.
- Keep commits atomic and focused.
