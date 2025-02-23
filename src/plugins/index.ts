import type { App } from "vue"
import { installConsole } from "./console"
import { installPermissionDirective } from "./permission-directive"

export function installPlugins(app: App) {
  installPermissionDirective(app)
  installConsole()
}
