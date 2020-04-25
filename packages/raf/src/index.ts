let p = typeof performance !== 'undefined' ? performance : Date
let raf: typeof window.requestAnimationFrame | undefined,
  caf: typeof window.cancelAnimationFrame | undefined,
  win = typeof window !== 'undefined' ? window : void 0

if (win) {
  let af = 'AnimationFrame',
    Raf = 'Request' + af
  raf = win.requestAnimationFrame.bind(win)
  caf = win.cancelAnimationFrame.bind(win)

  if (!raf || !caf) {
    // eslint-disable-next-line no-extra-semi
    ;['webkit', 'moz', 'ms', 'o'].forEach((vp) => {
      //@ts-ignore
      raf = raf || win[vp + Raf]
      //@ts-ignore
      caf = caf || win[vp + 'Cancel' + af] || win[vp + 'Cancel' + Raf]
    })
  }
}

if (!raf || !caf) {
  let lastTime = 0
  raf = (callback: FrameRequestCallback) => {
    let curr = p.now()
    let next = Math.max(lastTime + 1000 / 60, curr)
    return setTimeout(() => {
      callback((lastTime = next))
    }, next - curr)
  }
  caf = (h) => clearTimeout(h)
}

export {raf, caf}
