import raf, {cancel} from 'raf'
import now from 'performance-now'


/**  Copyright 2011, Joe Lambert.
 **  Free to use under the MIT license.
 **  http://www.opensource.org/licenses/mit-license.php
 **/

export const clearRequestTimeout = handle => { cancel(handle.value) }
export const requestTimeout = (fn, delay) => {
  let start = now(), handle = {}

  const loop = () => {
    now() - start >= delay
      ? fn.call()
      : handle.value = raf(loop)
  }

  handle.value = raf(loop)
  return handle
}

export default requestTimeout