#!/bin/sh

export $(grep -v '^#' .env | xargs)

[ "$NODE_ENV" = "dev" ] && npm install -g nodemon || echo "Not in development mode, skipping Nodemon installation."

npm install
npm cache clean --force

command -v nodemon >/dev/null && exec nodemon server.js || exec node server.js