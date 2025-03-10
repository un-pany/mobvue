import type { App } from "vue"
import { createI18n } from "vue-i18n"
import en from "./en"
import zh from "./zh"

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: "zh", // 默认语言
  fallbackLocale: "en", // 备用语言
  globalInjection: true, // 全局注入 $t 方法
  messages: {
    en,
    zh
  },
  // 新增配置
  useScope: "global", // 使用全局作用域
  allowComposition: true, // 允许组合式API
  missingWarn: false, // 关闭缺失警告
  fallbackWarn: false // 关闭回退警告
})

export function installI18n(app: App) {
  app.use(i18n)
}
