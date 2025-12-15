#!/bin/bash
set -euo pipefail

# Usage: ./scripts/publish-patch-version.sh 48
# This will create a release/1.48 branch, cherry-pick changes from release/1.47, and publish 1.48.2

if [ $# -eq 0 ]; then
  echo "Error: Version number required"
  echo "Usage: ./scripts/publish-patch-version.sh <version>"
  echo "Example: ./scripts/publish-patch-version.sh 48"
  exit 1
fi

VERSION=$1
DOCKER_VERSION="1.$VERSION"
PACKAGE_VERSION="1.$VERSION.2"
BRANCH_NAME="release/$DOCKER_VERSION"

echo "========================================="
echo "Publishing patch release for $DOCKER_VERSION"
echo "Package version: $PACKAGE_VERSION"
echo "========================================="

# Check if the generated types directory exists
if [ ! -d "generated/$DOCKER_VERSION" ]; then
  echo "❌ Error: generated/$DOCKER_VERSION directory not found"
  echo "This version doesn't exist in the repository"
  exit 1
fi

# Store the current branch to return to it later
ORIGINAL_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Fetch latest changes
echo "Fetching latest changes..."
git fetch origin

git checkout -b "$BRANCH_NAME" "v$DOCKER_VERSION.1"


# Update package.json exports to add "default" fields
echo "Updating package.json exports..."
node -e "
const fs = require('fs');
const pkg = require('./package.json');

// Update exports to include 'default' fields
pkg.exports = {
  '.': {
    'types': './index.ts',
    'default': './index.ts'
  },
  './generated/*': {
    'types': './generated/*/index.ts',
    'default': './generated/*/index.ts'
  }
};

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');
console.log('✓ package.json exports updated');
"

# Update package.json to the correct version
echo "Updating package.json to version $PACKAGE_VERSION..."
npm version "$PACKAGE_VERSION" --no-git-tag-version

# Commit the changes
echo "Committing changes..."
git add .
git commit -m "feat: add default exports for v$DOCKER_VERSION

This patch release adds default export fields to package.json exports."

# Create a git tag
echo "Creating tag v$PACKAGE_VERSION..."
git tag "v$PACKAGE_VERSION"

# Push the branch and tag
echo "Pushing branch and tag to origin..."
git push origin "$BRANCH_NAME" --tags

# Publish to npm
echo "Publishing to npm..."
npm publish --access public

echo ""
echo "✅ Successfully published $PACKAGE_VERSION!"
echo ""

# Return to the original branch
echo "Returning to $ORIGINAL_BRANCH branch..."
git checkout "$ORIGINAL_BRANCH"

echo ""
echo "========================================="
echo "Done! Published $PACKAGE_VERSION"
echo "Branch: $BRANCH_NAME"
echo "Tag: v$PACKAGE_VERSION"
echo "========================================="
