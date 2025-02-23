import { CacheKey } from "@@/constants/cache-key"

export function getIsDark() {
  return localStorage.getItem(CacheKey.IS_DARK)
}

export function setIsDark(isDark: boolean) {
  localStorage.setItem(CacheKey.IS_DARK, isDark.toString())
}
