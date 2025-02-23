import presetRemToPx from "@unocss/preset-rem-to-px"
import { defineConfig, presetAttributify, presetWind3 } from "unocss"

export default defineConfig({
  // 预设
  presets: [
    // 属性化模式 & 无值的属性模式
    presetAttributify({
      prefix: "un-",
      prefixedOnly: true
    }),
    // 默认预设
    presetWind3({
      important: "#app"
    }),
    // 将 unocss 默认采用的 rem 单位转为 px 单位
    presetRemToPx()
  ],
  // 自定义主题
  theme: {
    colors: {
      primary: "var(--mobvue-primary-color)",
      bg: "var(--mobvue-bg-color)"
    }
  },
  // 自定义规则
  rules: [
    // use un-after-clearfix
    ["clearfix", { content: "''", display: "table", clear: "both" }],
    // use un-no-select
    ["no-select", { "user-select": "none", "touch-action": "none" }],
    // use un-ellipsis
    ["ellipsis", { "white-space": "nowrap", "overflow": "hidden", "text-overflow": "ellipsis" }],
    // use un-multi-ellipsis-2
    [/^multi-ellipsis-(\d+)$/, ([, d]) => ({ "display": "-webkit-box", "-webkit-line-clamp": d, "-webkit-box-orient": "vertical", "overflow": "hidden", "text-overflow": "ellipsis" })],
    // use un-color-hex-000000
    [/^color-hex-(.+)$/, ([, color]) => ({ color: `#${color}` })]
  ],
  // 自定义快捷方式
  shortcuts: {
    "wh-full": "w-full h-full",
    "flex-center": "flex justify-center items-center",
    "flex-x-center": "flex justify-center",
    "flex-y-center": "flex items-center"
  }
})
