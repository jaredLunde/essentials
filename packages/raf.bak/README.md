<hr>
<div align="center">
  <h1 align="center">
    @essentials/raf
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@essentials/raf">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@essentials/raf?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@essentials/raf">
    <img alt="Types" src="https://img.shields.io/npm/types/@essentials/raf?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@essentials/raf">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@essentials/raf?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@essentials/raf?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i @essentials/raf</pre>
<hr>

A tiny `requestAnimationFrame` and `cancelAnimationFrame` ponyfill

## Quick Start

```js
import {raf, caf} from '@essentials/raf'

const handle = raf(tick)
caf(handle)
```

## LICENSE

MIT
