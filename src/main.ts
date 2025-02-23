/* eslint-disable perfectionist/sort-imports */

// core
import { pinia } from "@/pinia"
import { router } from "@/router"
import App from "@/App.vue"
// vant
import "@vant/touch-emulator"
// css
import "normalize.css"
import "nprogress/nprogress.css"
import "@@/assets/styles/index.css"
import "virtual:uno.css"
import i18n from "@/pages/demo/components/i18n/index.ts"

// 创建应用实例
const app = createApp(App)

// 安装 pinia 和 router
app.use(pinia).use(router).use(i18n)

// router 准备就绪后挂载应用
router.isReady().then(() => {
  app.mount("#app")
})
