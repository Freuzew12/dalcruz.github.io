#!/usr/bin/env bash
set -euo pipefail

# Helper script to prepare web files and scaffold Capacitor Android project.
# Run these commands locally after installing Node.js and Android Studio/SDK.

echo "1) Ensure Node.js and npm are installed"
echo "2) From this project folder run the following commands (copy-paste):"

cat <<'CMD'
# install Capacitor CLI and core
npm install --save @capacitor/core @capacitor/cli

# initialize Capacitor config (if you didn't create it already)
npx cap init dino-runner com.example.dinorunner --web-dir=www

# prepare web assets: copy project files to the www folder
rm -rf www
mkdir -p www
# exclude node_modules, venv and .git
rsync -av --exclude='node_modules' --exclude='venv' --exclude='.git' --exclude='www' ./ www/

# add Android platform
npx cap add android

# copy web assets into native project
npx cap copy android

# open Android project in Android Studio
npx cap open android
CMD

echo
echo "If you prefer step-by-step, open README.md 'Capacitor packaging' section."
