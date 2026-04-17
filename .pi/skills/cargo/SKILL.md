---
name: cargo
description: A comprehensive skill for managing Rust projects using Cargo. Provides shortcuts for building, testing, linting, and more.
---

# Cargo Skill

This skill provides a unified interface for the Rust `cargo` toolchain.

## Commands

- **Build**: `cargo build`
- **Test**: `cargo test`
- **Check**: `cargo check`
- **Clippy**: `cargo clippy --all-targets --all-features -- -D warnings`
- **Expand**: `cargo expand` (if installed)
- **Doc**: `cargo doc --no-deps --open`

## Usage for Agents

When you need to interact with the Rust toolchain, use the following patterns:

### Verifying Code
```bash
cargo check
```

### Running Tests
```bash
cargo test
```

### Checking Lints
```bash
cargo clippy --all-targets --all-features -- -D warnings
```

### Viewing Expanded Macros
```bash
cargo expand <module_or_item>
```

### Adding Dependencies
```bash
cargo add <crate_name>
```
