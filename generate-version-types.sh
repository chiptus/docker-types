#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

VERSION=$1

yarn openapi-typescript "https://docs.docker.com/engine/api/v$VERSION.yaml" --output "$VERSION.d.ts"