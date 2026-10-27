# sbx environment-file demos

Examples of `sbxenv.yaml` for Docker Sandboxes (`sbx env`, experimental) used with Claude Code.
Docs: https://docs.docker.com/ai/sandboxes/configuration/environment-files/

Each example keeps `sbxenv.yaml` *beside* the workspace (`web-app/`), never inside a mounted dir.

| Example | Shows | Try |
|---|---|---|
| `01-basic` | minimal agent, env, ports | `sbx env run examples/01-basic` |
| `02-args` | `args`, `--env-arg`, `--env-args-file` | `sbx env run examples/02-args --env-args-file examples/02-args/staging.args` |
| `03-layered` | base + gitignored local, merge order | `sbx env run examples/03-layered/base.sbxenv.yaml examples/03-layered/local.sbxenv.yaml` |
| `04-multi-repo` | `additionalWorkspaces`, read-only mount | `sbx env run examples/04-multi-repo` |
| `05-lifecycle` | initialize / postCreate / preRemove host commands | `sbx env plan examples/05-lifecycle` |
| `06-secrets-mcp` | secrets, bindings, registries, MCP, ports | `sbx env plan examples/06-secrets-mcp` |
| `07-kits` | kits v2 (`sbxenv.yaml.v2`) vs v3 | `sbx env plan examples/07-kits` |
| `08-user-defaults` | `~/.sbxenv.yaml` defaults + precedence | `cp examples/08-user-defaults/home.sbxenv.yaml ~/.sbxenv.yaml` |

## Workflow

```sh
sbx env plan  examples/01-basic                 # review, change nothing
sbx env create examples/01-basic --force        # create without attaching
sbx env exec  --name demo-basic -- npm test     # run inside
sbx env rm    examples/01-basic --force         # tear down
```

Notes: host commands (lifecycle, secret `command`, local MCP) run on your machine and need
approval each run (`sbx settings set env.rememberHostCommands true` to remember). Changes to
workspaces, kits, ports, secrets and `sandboxOptions` need rm + recreate; `env` changes apply on `run`.
Examples 05/06/07 use placeholder URLs, kit tags and `gh auth token` — adjust before running.
