#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

set +x

# Generate all versions of the Docker API ()
for VERSION in $(seq 35 42); do
  ./generate-version-types.sh 1."$VERSION"
done