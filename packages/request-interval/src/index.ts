import {raf, caf, now} from '@essentials/raf'

export interface RequestIntervalHandle {
  v?: number
}

/**  Copyright 2011, Joe Lambert.
 **  Free to use under the MIT license.
 **  http://www.opensource.org/licenses/mit-license.php
 **/
export const clearRequestInterval = (handle: RequestIntervalHandle): void => {
  caf(handle.v || -1)
}

export const requestInterval = (
  fn: Function,
  delay: number
): RequestIntervalHandle => {
  let start = now()
  const handle: RequestIntervalHandle = {}

  const loop = (): void => {
    if (now() - start >= delay) {
      fn.call(null)
      start = now()
    }

    handle.v = raf(loop)
  }

  handle.v = raf(loop)
  return handle
}

export default requestInterval
