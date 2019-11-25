import raf, {cancel} from 'raf'
import now from 'performance-now'

export interface RequestTimeoutHandle {
  value?: number
}

/**  Copyright 2011, Joe Lambert.
 **  Free to use under the MIT license.
 **  http://www.opensource.org/licenses/mit-license.php
 **/

export const clearRequestTimeout = (handle: RequestTimeoutHandle): void => {
  cancel(handle.value)
}

export const requestTimeout = (
  fn: Function,
  delay: number
): RequestTimeoutHandle => {
  const start = now(),
    handle: RequestTimeoutHandle = {}

  const loop = () => {
    now() - start >= delay ? fn.call(null) : (handle.value = raf(loop))
  }

  handle.value = raf(loop)
  return handle
}

export default requestTimeout
