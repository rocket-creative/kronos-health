#!/bin/bash

# UXUI Design Corp - Session Start
# Run at the beginning of each Cursor session to align context
# Usage: ./scripts/session-start.sh

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

echo ""
echo "╔════════════════════════════════════════════╗"
echo "║  SESSION START                             ║"
echo "╚════════════════════════════════════════════╝"
echo ""

# Git status
echo -e "${CYAN}Git Status:${NC}"
BRANCH=$(git branch --show-current 2>/dev/null || echo "Not a git repo")
echo "  Branch: $BRANCH"

# Last commit and next number
LAST_COMMIT=$(git log --oneline -1 2>/dev/null || echo "No commits")
echo "  Last commit: $LAST_COMMIT"

# Extract number and calculate next
if [[ $LAST_COMMIT =~ ^([0-9]+)_ ]]; then
    NEXT_NUM=$(printf "%03d" $((10#${BASH_REMATCH[1]} + 1)))
    echo -e "  ${GREEN}Next commit number: ${NEXT_NUM}${NC}"
fi

# Check for uncommitted changes
CHANGES=$(git status --porcelain 2>/dev/null | wc -l | tr -d ' ')
if [ "$CHANGES" -gt 0 ]; then
    echo -e "  ${YELLOW}Uncommitted changes: $CHANGES files${NC}"
fi

echo ""

# AI error log
if [ -f ".ai-errors.log" ]; then
    ERROR_COUNT=$(grep -c "^[0-9]" .ai-errors.log 2>/dev/null || echo "0")
    if [ "$ERROR_COUNT" -gt 0 ]; then
        echo -e "${YELLOW}AI Error Log (learn from these):${NC}"
        tail -5 .ai-errors.log | grep "^[0-9]" || true
        echo ""
    fi
fi

# Key reminders
echo -e "${CYAN}Key Rules:${NC}"
echo "  • Font weights: 300, 400, 700 ONLY"
echo "  • No hyphens in copy (wellbeing not well-being)"
echo "  • Mobile-first responsive"
echo "  • Read .cursor/rules/ for relevant tasks"
echo ""

# Skill files available
if [ -d ".cursor/rules" ]; then
    echo -e "${CYAN}Available Skills:${NC}"
    ls -1 .cursor/rules/*.md 2>/dev/null | xargs -I {} basename {} | sed 's/^/  • /'
    echo ""
fi

echo -e "${GREEN}Ready to work. Remember to commit frequently.${NC}"
echo ""
