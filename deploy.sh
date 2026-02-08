#!/bin/bash
cd $HOME/chillers-dev

git fetch

# Check if the local branch is behind the remote
UPSTREAM=${1:-'@{u}'}
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse "$UPSTREAM")

if [ $LOCAL != $REMOTE ]; then
    echo "Changes detected. Deploying..."
    git pull
    npm install
    npm run build
    cp -r out/* /var/www/html/
    echo "Deployment complete."
else
    echo "No changes detected."
fi