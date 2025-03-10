import type { App } from "vue"
import { installConsole } from "./console"
import { installI18n } from "./i18n"
import { installPermissionDirective } from "./permission-directive"

export function installPlugins(app: App) {
  installPermissionDirective(app)
  installConsole()
  installI18n(app)
}
