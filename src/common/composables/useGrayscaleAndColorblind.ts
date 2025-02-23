export type Mode = "" | "grayscale" | "colorblind"

const GRAYSCALE_MODE = "grayscale-mode"

const COLORBLIND_MODE = "colorblind-mode"

const classList = document.documentElement.classList

const mode = ref<Mode>("")

function setMode(_mdoe: Mode) {
  mode.value = _mdoe
}

watchEffect(() => {
  classList.toggle(GRAYSCALE_MODE, mode.value === "grayscale")
  classList.toggle(COLORBLIND_MODE, mode.value === "colorblind")
})

/** 灰色模式和色弱模式 Composable */
export function useGrayscaleAndColorblind() {
  return { mode, setMode }
}
