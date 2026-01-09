#!/bin/bash

# Script to fix Next.js dev server stalling issues

echo "🔧 Fixing Next.js dev server issues..."

# 1. Clear Next.js cache
echo "📦 Clearing .next cache..."
rm -rf .next
echo "✅ Cleared .next cache"

# 2. Clear node_modules and reinstall (optional, uncomment if needed)
# echo "📦 Reinstalling node_modules..."
# rm -rf node_modules package-lock.json
# npm install

# 3. Fix file permissions
echo "🔐 Fixing file permissions..."
chmod -R u+r . 2>/dev/null || true
chmod u+r .env 2>/dev/null || true

# 4. Check for port conflicts
echo "🔍 Checking for port conflicts..."
if lsof -ti:3000 > /dev/null 2>&1; then
    echo "⚠️  Port 3000 is in use. Killing process..."
    kill -9 $(lsof -ti:3000) 2>/dev/null || true
    sleep 2
fi

echo ""
echo "✅ Fixes applied! Try running 'npm run dev' again."
echo ""
echo "If issues persist, try:"
echo "  1. Grant Full Disk Access to Terminal/VS Code in System Settings > Privacy & Security"
echo "  2. Run: rm -rf node_modules && npm install"
echo "  3. Check if .env file has correct permissions"



