#!/bin/sh
# Runs on the HOST. Gets SBX_* vars, not the file's env values.
echo "[$SBX_LIFECYCLE_PHASE] sandbox=$SBX_SANDBOX_NAME workspace=$SBX_WORKSPACE"
echo '{"users":[]}' > fixtures.json
