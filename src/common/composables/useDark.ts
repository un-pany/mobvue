import { getIsDark, setIsDark } from "@@/utils/cache/local-storage"
import { setCssVar } from "@@/utils/css"

const isDark = ref<boolean>(getIsDark() === "true")

function _handler() {
  isDark.value = !isDark.value
}

function changeDark({ clientX, clientY }: MouseEvent) {
  const maxRadius = Math.hypot(
    Math.max(clientX, window.innerWidth - clientX),
    Math.max(clientY, window.innerHeight - clientY)
  )
  setCssVar("--mobvue-dark-x", `${clientX}px`)
  setCssVar("--mobvue-dark-y", `${clientY}px`)
  setCssVar("--mobvue-dark-r", `${maxRadius}px`)
  document.startViewTransition ? document.startViewTransition(_handler) : _handler()
}

/** 初始化 */
function initDark() {
  // watchEffect 来收集副作用
  watchEffect(() => {
    document.documentElement.classList.toggle("dark", isDark.value)
    setIsDark(isDark.value)
  })
}

/** 黑暗模式 Composable */
export function useDark() {
  return { isDark, changeDark, initDark }
}
