import {v4 as uuidv4} from 'uuid'
import GetSystemInfoResult = UniApp.GetSystemInfoResult;
import GetProviderRes = UniApp.GetProviderRes;

export default class UniUtils {
  public static delayTime(millisecond: number): Promise<any> {
    return new Promise<any>(resolve =>
      setTimeout(() => {
        resolve()
      }, millisecond))
  }

  public static textCopy(copyText: string) {
    uni.setClipboardData({
      data: copyText
    })
  }

  public static getUUID(): string {
    const randoms: number[] = []
    for (let i = 0; i < 16; i++) {
      randoms.push(Math.round(Math.random() * 255))
    }
    return uuidv4({
      random: randoms
    }).replace(/-/g, '')
  }

  public static upxToPx(rpx: number): number {
    return uni.upx2px(rpx)
  }

  public static getSystemInfo(): GetSystemInfoResult {
    return uni.getSystemInfoSync()
  }

  public static getSystemInfoSync(): Promise<GetSystemInfoResult> {
    return new Promise<any>(resolve =>
      uni.getSystemInfo({
        success: (res) => {
          resolve(res)
        }
      })
    )
  }

  public static getProviderSync(): Promise<GetProviderRes> {
    return new Promise<any>(resolve =>
      uni.getProvider({
        service: 'oauth',
        success: (res) => {
          resolve(res)
        }
      })
    )
  }

  //交互
  public static toast(title: string, time?: number) {
    return new Promise((resolve, reject) => {
      uni.showToast({
        icon: 'none',
        title: title,
        duration: time || 600,
        success() {
          resolve()
        },
        fail() {
          reject()
        }
      })
    })
  }

  public static toastLong(title: string) {
    return new Promise((resolve, reject) => {
      uni.showToast({
        icon: 'none',
        title: title,
        duration: 1500,
        success() {
          resolve()
        },
        fail() {
          reject()
        }
      })
    })
  }

  public static action(msg: string, okLabel?: string) {
    return new Promise((resolve, reject) => {
      uni.showModal({
        content: msg,
        confirmText: okLabel || '确定',
        success(res) {
          if (res.confirm) {
            resolve()
          } else if (res.cancel) {
            reject()
          }
        }
      })
    })
  }

  public static info(msg: string, okLabel?: string) {
    return new Promise((resolve, reject) => {
      uni.showModal({
        title: '提示',
        content: msg,
        confirmText: okLabel || '确定',
        success(res) {
          if (res.confirm) {
            resolve()
          } else if (res.cancel) {
            reject()
          }
        }
      })
    })
  }

  public static hint(msg: string, okLabel?: string) {
    return new Promise((resolve, reject) => {
      uni.showModal({
        content: msg,
        showCancel: false,
        confirmText: okLabel || '确定',
        success(res) {
          if (res.confirm) {
            resolve()
          } else if (res.cancel) {
            reject()
          }
        }
      })
    })
  }

  public static warning(msg: string, okLabel?: string) {
    return new Promise((resolve, reject) => {
      uni.showModal({
        title: '警告',
        content: msg,
        confirmText: okLabel || '确定',
        success(res) {
          if (res.confirm) {
            resolve()
          } else if (res.cancel) {
            reject()
          }
        }
      })
    })
  }

  public static error(msg: string, title?: string) {
    return new Promise((resolve, reject) => {
      uni.showModal({
        title: title || '错误',
        content: msg,
        showCancel: false,
        success(res) {
          if (res.confirm) {
            resolve()
          } else if (res.cancel) {
            reject()
          }
        }
      })
    })
  }

  public static showLoading(loadText: string) {
    uni.showLoading({title: loadText || ''})
  }

  public static hideLoading() {
    uni.hideLoading()
  }

  public static actionSheet(itemList: string[]): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      uni.showActionSheet({
        itemList: itemList,
        success(res) {
          resolve(res.tapIndex)
        },
        fail(res) {
          reject(res.errMsg)
        }
      })
    })
  }
}
