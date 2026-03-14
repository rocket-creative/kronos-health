#!/bin/bash

# UXUI Design Corp - Project Initialization Script
# Run this when starting a new project: ./scripts/init-project.sh PROJECT_NAME
# Or run without args in an existing project to just set up git

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo ""
echo "╔════════════════════════════════════════════╗"
echo "║  UXUI Design Corp - Project Initializer    ║"
echo "╚════════════════════════════════════════════╝"
echo ""

# Get project name from argument or current directory
if [ -n "$1" ]; then
    PROJECT_NAME="$1"
    echo -e "${YELLOW}Creating new project: ${PROJECT_NAME}${NC}"
    mkdir -p "$PROJECT_NAME"
    cd "$PROJECT_NAME"
else
    PROJECT_NAME=$(basename "$(pwd)")
    echo -e "${YELLOW}Initializing in current directory: ${PROJECT_NAME}${NC}"
fi

# Convert to uppercase for branch names
PROJECT_UPPER=$(echo "$PROJECT_NAME" | tr '[:lower:]' '[:upper:]' | tr '-' '_')

# Initialize git if not already
if [ ! -d ".git" ]; then
    echo -e "\n${GREEN}Initializing git repository...${NC}"
    git init
    
    # Create initial .gitignore
    cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnp
.pnp.js

# Build
.next/
out/
build/
dist/

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts

# AI Error Log (keep for learning)
# .ai-errors.log
EOF

    echo -e "${GREEN}Created .gitignore${NC}"
fi

# Set up branch structure
CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "")

if [ -z "$CURRENT_BRANCH" ]; then
    # No commits yet, create initial commit
    echo -e "\n${GREEN}Creating initial commit...${NC}"
    
    # Create placeholder if nothing exists
    if [ ! -f "README.md" ]; then
        echo "# ${PROJECT_NAME}" > README.md
    fi
    
    git add -A
    git commit -m "001_chore_initial-setup"
    
    # Rename to MAIN
    git branch -M "${PROJECT_UPPER}_MAIN"
    echo -e "${GREEN}Created branch: ${PROJECT_UPPER}_MAIN${NC}"
    
    # Create DEV branch
    git checkout -b "${PROJECT_UPPER}_DEV"
    echo -e "${GREEN}Created and switched to: ${PROJECT_UPPER}_DEV${NC}"
else
    echo -e "${YELLOW}Git already initialized. Current branch: ${CURRENT_BRANCH}${NC}"
fi

# Create AI error log
if [ ! -f ".ai-errors.log" ]; then
    cat > .ai-errors.log << 'EOF'
# AI Error Log
# Document errors made by AI assistants so they can learn from them.
# Format: DATE | ERROR | FIX

# Example:
# 2025-02-05 | Used font-semibold instead of font-bold | Replace with font-bold (only 300/400/700 allowed)
# 2025-02-05 | Used "well-being" with hyphen | Replace with "wellbeing"
EOF
    echo -e "${GREEN}Created .ai-errors.log${NC}"
fi

# Summary
echo ""
echo "╔════════════════════════════════════════════╗"
echo "║  Project Ready                             ║"
echo "╠════════════════════════════════════════════╣"
echo "║  Branches:                                 ║"
echo "║    ${PROJECT_UPPER}_MAIN (production)              "
echo "║    ${PROJECT_UPPER}_DEV  (development) ← you are here"
echo "║                                            ║"
echo "║  Next commit number: 002                   ║"
echo "║                                            ║"
echo "║  Remember:                                 ║"
echo "║    • Font weights: 300, 400, 700 only     ║"
echo "║    • No hyphens in copy                   ║"
echo "║    • Mobile-first responsive              ║"
echo "╚════════════════════════════════════════════╝"
echo ""
echo -e "${GREEN}Run 'npm run dev' to start developing.${NC}"
echo ""
