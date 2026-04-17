---
name: tdd
description: A workflow skill for Test-Driven Development in Rust. Guides the Red-Green-Refactor cycle.
---

# TDD Workflow

Use this skill to follow the Test-Driven Development cycle.

## The Cycle

### 1. RED (Write a failing test)
Identify the next small piece of functionality. Write a test in `src/` or `tests/` that describes this behavior.
Run the test and ensure it fails.
```bash
cargo test <test_name>
```

### 2. GREEN (Make it pass)
Write the minimum amount of code necessary to make the test pass.
Don't worry about perfection yet; just get it working.
```bash
cargo test <test_name>
```

### 3. REFACTOR (Clean up)
Refactor the code while keeping the tests passing.
- Improve naming.
- Remove duplication.
- Ensure idiomatic Rust patterns.
Run all tests to ensure no regressions.
```bash
cargo test
```

## Guidelines
- Keep tests small and focused.
- Use `assert_eq!`, `assert_ne!`, and `assert!` effectively.
- For API design, start by writing how the user would call your code.
