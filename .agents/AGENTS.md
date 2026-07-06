# Project Custom Rules

## Workspace Isolation
- **Rule**: Keep all workspaces isolated regardless of similarity in naming, unless explicitly instructed otherwise.
- **Guidance**: Before scaffolding or initializing any new project or modifying files, check if the target directory already contains files or belongs to another workspace. If the folder is in use or contains an existing project, create a new, uniquely named directory (e.g. by appending a descriptive suffix or serial index like `graphics-portfolio`) to ensure codebase isolation and avoid overwriting any existing code.
