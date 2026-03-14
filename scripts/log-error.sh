#!/bin/bash

# UXUI Design Corp - Log AI Error
# Quick way to document AI mistakes for future sessions
# Usage: ./scripts/log-error.sh "Used font-semibold" "Replace with font-bold"

if [ -z "$1" ]; then
    echo "Usage: ./scripts/log-error.sh \"ERROR DESCRIPTION\" \"FIX\""
    echo ""
    echo "Examples:"
    echo "  ./scripts/log-error.sh \"Used font-semibold\" \"Replace with font-bold\""
    echo "  ./scripts/log-error.sh \"Wrote well-being with hyphen\" \"Use wellbeing\""
    exit 1
fi

ERROR="$1"
FIX="${2:-Not specified}"
DATE=$(date +%Y-%m-%d)

echo "${DATE} | ${ERROR} | ${FIX}" >> .ai-errors.log

echo "✓ Error logged to .ai-errors.log"
echo ""
echo "Entry: ${DATE} | ${ERROR} | ${FIX}"
