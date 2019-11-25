import raf, {cancel} from 'raf'
import now from 'performance-now'

export interface RequestIntervalHandle {
  value?: number
}

/**  Copyright 2011, Joe Lambert.
 **  Free to use under the MIT license.
 **  http://www.opensource.org/licenses/mit-license.php
 **/
export const clearRequestInterval = (handle: RequestIntervalHandle): void => {
  cancel(handle.value)
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

    handle.value = raf(loop)
  }

  handle.value = raf(loop)
  return handle
}

export default requestInterval
