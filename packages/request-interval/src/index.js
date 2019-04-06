import raf, {cancel} from 'raf'
import now from 'performance-now'


/**  Copyright 2011, Joe Lambert.
 **  Free to use under the MIT license.
 **  http://www.opensource.org/licenses/mit-license.php
 **/
export const clearRequestInterval = handle => { cancel(handle.value) }
export const requestInterval = (fn, delay) => {
  let start = now()
  let handle = {}

  const loop = () => {
    const current = now()

    if((current - start) >= delay) {
      fn.call()
      start = now()
    }

    handle.value = raf(loop)
  }

  handle.value = raf(loop)
  return handle
}

export default requestInterval
