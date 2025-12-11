# Docker Types

Automatically generated TypeScript types for the Docker Engine API.

## Overview

This package provides TypeScript type definitions for various versions of the Docker Engine API, generated from the official Docker API documentation.

## Installation

```bash
npm install docker-types
# or
yarn add docker-types
```

## Usage

### Import from Package Root (Recommended)

Import types from the package root to automatically use the version you've installed:

```typescript
import type { Container, Image, ContainerSummary } from "docker-types";

// The types automatically match your installed package version:
// docker-types@1.48.0 → Docker API 1.48 types
// docker-types@1.49.0 → Docker API 1.49 types
```

When you upgrade the `docker-types` package, your imports automatically receive the newer types without any code changes.

### Import Specific Version

You can still import specific Docker API versions explicitly if needed:

```typescript
import type { Container, Image } from "docker-types/generated/1.45";
import type { ContainerSummary } from "docker-types/generated/1.48";

// Useful for:
// - Supporting multiple Docker API versions
// - Comparing type differences between versions
// - Gradual migration between versions
```

## Available Versions

The package includes types for Docker API versions 1.35 through the latest available version. Each version is available under `generated/{version}/`.

## Nightly Builds

This package uses an automated nightly build system that:

1. Checks for new Docker API versions daily at 2 AM UTC
2. Attempts to generate types for the next version
3. If successful, automatically:
   - Updates the package version
   - Commits the changes
   - Creates a git tag
   - Publishes to npm
   - Pushes to GitHub

## Manual Type Generation

To manually generate types for a specific Docker API version:

```bash
# Install dependencies
yarn install

# Generate types for a specific version
./generate-version-types.sh 1.46

# Generate all versions (1.35 through 1.45)
./generate-all-versions.sh
```

## Manual Testing

You can manually trigger the nightly build workflow for testing:

1. Go to the Actions tab in GitHub
2. Select "nightly-build" workflow
3. Click "Run workflow"
4. Choose the branch and click "Run workflow"

## Development

### Requirements

- Node.js 20.x or later
- Yarn package manager

### Scripts

- `yarn install` - Install dependencies
- `./generate-version-types.sh <version>` - Generate types for a specific version
- `./generate-all-versions.sh` - Generate types for all versions

## License

MIT
