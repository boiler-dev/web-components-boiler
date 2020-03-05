import { BoilerAction, InstallBoiler } from "boiler-dev"

export const install: InstallBoiler = async () => {
  const actions: BoilerAction[] = []

  actions.push({
    action: "generate",
    source: [
      "git@github.com:boiler-dev/dep-graph-boiler.git",
      "git@github.com:boiler-dev/fn2-boiler.git",
      "git@github.com:boiler-dev/form-parser-boiler.git",
      "git@github.com:boiler-dev/loaded-boiler.git",
      "git@github.com:boiler-dev/logger-boiler.git",
      "git@github.com:boiler-dev/patch-boiler.git",
      "git@github.com:boiler-dev/render-boiler.git",
      "git@github.com:boiler-dev/render-client-boiler.git",
      "git@github.com:boiler-dev/render-server-boiler.git",
      "git@github.com:boiler-dev/router-boiler.git",
      "git@github.com:boiler-dev/ssr-boiler.git",
      "git@github.com:boiler-dev/tiny-id-boiler.git",
    ],
  })

  return actions
}
