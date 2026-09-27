#!/usr/bin/env bash
# Pull the latest code, rebuild and restart the site.
# Run on the VPS from the project folder:  ./deploy/deploy.sh
set -euo pipefail
cd "$(dirname "$0")/.."

BRANCH="${1:-main}"
echo "→ Updating from origin/$BRANCH"
git fetch origin "$BRANCH"
git checkout "$BRANCH"
git pull --ff-only origin "$BRANCH"

echo "→ Installing dependencies"
npm ci --no-audit --no-fund

echo "→ Building"
npm run build

echo "→ Restarting"
if pm2 describe tech-abreast > /dev/null 2>&1; then
  pm2 reload tech-abreast --update-env
else
  pm2 start ecosystem.config.js
  pm2 save
fi

echo "✓ Deployed"
