const SYSTEM_NAME = "mobvue"

/** 缓存数据时用到的 Key */
export class CacheKey {
  static readonly TOKEN = `${SYSTEM_NAME}-token-key`
  static readonly IS_DARK = `${SYSTEM_NAME}-is-dark-key`
}
