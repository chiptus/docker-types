#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

VERSION=$1

yarn openapi --input "https://docs.docker.com/reference/engine/v$VERSION.yaml" --useUnionTypes --useOptions --exportCore false --exportServices false -o "./generated/$VERSION" 
