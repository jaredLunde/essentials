/**
 * Copyright 2011, Joe Lambert.
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 **/
import {raf, caf, now} from '@essentials/raf'

export interface RequestTimeoutHandle {
  v?: number
}

export const clearRequestTimeout = (handle: RequestTimeoutHandle): void => {
  caf(handle.v || -1)
}

export const requestTimeout = (
  fn: (...args: any[]) => void,
  ms: number
): RequestTimeoutHandle => {
  const start = now(),
    handle: RequestTimeoutHandle = {}

  const loop = () => {
    now() - start >= ms ? fn.call(null) : (handle.v = raf(loop))
  }

  handle.v = raf(loop)
  return handle
}

export default requestTimeout
