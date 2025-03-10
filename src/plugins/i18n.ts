import type { App } from "vue"
import { createI18n } from "vue-i18n"

const i18n = createI18n({
  locale: "zh-CN",
  fallbackLocale: "zh-CN",
  messages: {
    "zh-CN": {
      text: "现在语言环境为中文",
      title: "切换语言"
    },
    "en": {
      text: "The current language is English",
      title: "Switch language"
    }
  }
})

export function installI18n(app: App) {
  app.use(i18n)
}
