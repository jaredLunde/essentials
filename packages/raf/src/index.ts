export type Raf = (callback: (timestamp: number) => void) => number
export type Caf = (handle: number) => void

let win = typeof window !== 'undefined' ? window : {},
  p = typeof performance !== 'undefined' ? performance : Date,
  now = () => p.now(),
  af = 'AnimationFrame',
  Caf = 'cancel' + af,
  Raf = 'request' + af,
  raf: Raf = win[Raf] !== void 0 && win[Raf].bind(win),
  caf: Caf = win[Caf] !== void 0 && win[Caf].bind(win)

if (!raf || !caf) {
  let lastTime = 0
  raf = (callback: FrameRequestCallback) => {
    let curr = now(),
      next = Math.max(lastTime + 1000 / 60, curr)
    return setTimeout(() => {
      callback((lastTime = next))
    }, next - curr)
  }
  caf = (h) => clearTimeout(h)
}

export {raf, caf, now}
