#!/bin/bash

# UXUI Design Corp - Pre-commit Validation
# Validates code against project rules before allowing commit
# Install: Add to .git/hooks/pre-commit or use with husky

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

ERRORS=0

echo ""
echo "╔════════════════════════════════════════════╗"
echo "║  Pre-commit Validation                     ║"
echo "╚════════════════════════════════════════════╝"
echo ""

# Get staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(tsx?|jsx?|css|md)$' || true)

if [ -z "$STAGED_FILES" ]; then
    echo -e "${GREEN}No relevant files staged. Skipping checks.${NC}"
    exit 0
fi

# Check 1: Forbidden font weights
echo "Checking font weights..."
FORBIDDEN_WEIGHTS=$(grep -l -E 'font-(medium|semibold|extrabold|black)' $STAGED_FILES 2>/dev/null || true)
if [ -n "$FORBIDDEN_WEIGHTS" ]; then
    echo -e "${RED}ERROR: Forbidden font weights found in:${NC}"
    echo "$FORBIDDEN_WEIGHTS"
    echo "Only font-light (300), font-normal (400), font-bold (700) allowed."
    ERRORS=$((ERRORS + 1))
else
    echo -e "${GREEN}✓ Font weights OK${NC}"
fi

# Check 2: Hyphens in copy (check .tsx/.jsx files for common hyphenated words)
echo "Checking for hyphens in copy..."
HYPHEN_PATTERNS='well-being|state-of-the-art|user-friendly|high-quality|real-time|self-service|e-mail|co-ordinate'
HYPHEN_FILES=$(grep -l -E "$HYPHEN_PATTERNS" $STAGED_FILES 2>/dev/null || true)
if [ -n "$HYPHEN_FILES" ]; then
    echo -e "${YELLOW}WARNING: Possible hyphenated words found in:${NC}"
    echo "$HYPHEN_FILES"
    echo "Review and rewrite to avoid hyphens."
    # Warning only, not blocking
fi

# Check 3: AI phrases
echo "Checking for AI phrases..."
AI_PHRASES="I'd be happy to|Let's dive into|It's important to note|Let's explore|I'll help you|leverage|utilize|in order to|due to the fact that"
AI_FILES=$(grep -l -iE "$AI_PHRASES" $STAGED_FILES 2>/dev/null || true)
if [ -n "$AI_FILES" ]; then
    echo -e "${YELLOW}WARNING: Possible AI phrases found in:${NC}"
    echo "$AI_FILES"
    echo "Review and rewrite in natural voice."
    # Warning only, not blocking
else
    echo -e "${GREEN}✓ No AI phrases detected${NC}"
fi

# Check 4: Console.log statements
echo "Checking for console.log..."
CONSOLE_FILES=$(grep -l -E 'console\.(log|debug|info)' $STAGED_FILES 2>/dev/null | grep -v '.md$' || true)
if [ -n "$CONSOLE_FILES" ]; then
    echo -e "${YELLOW}WARNING: console.log found in:${NC}"
    echo "$CONSOLE_FILES"
    echo "Remove before production."
fi

# Check 5: Build passes
if [ -f "package.json" ]; then
    echo "Running build check..."
    if npm run build --silent 2>/dev/null; then
        echo -e "${GREEN}✓ Build passes${NC}"
    else
        echo -e "${RED}ERROR: Build failed${NC}"
        ERRORS=$((ERRORS + 1))
    fi
fi

# Summary
echo ""
if [ $ERRORS -gt 0 ]; then
    echo -e "${RED}╔════════════════════════════════════════════╗${NC}"
    echo -e "${RED}║  COMMIT BLOCKED - $ERRORS error(s) found          ║${NC}"
    echo -e "${RED}╚════════════════════════════════════════════╝${NC}"
    exit 1
else
    echo -e "${GREEN}╔════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║  All checks passed - ready to commit       ║${NC}"
    echo -e "${GREEN}╚════════════════════════════════════════════╝${NC}"
    exit 0
fi
