/** 声明 vite 环境变量的类型（如果未声明则默认是 any） */
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_ROUTER_HISTORY: "hash" | "html5"
  readonly VITE_CONSOLE: "true" | "false"
  readonly VITE_PWA_DESCRIPTION: string
  readonly VITE_PWA_THEME_COLOR: string
  readonly VITE_BASE_URL: string
  readonly VITE_PUBLIC_PATH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
