<hr>
<div align="center">
  <h1 align="center">
    @essentials/request-interval
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@essentials/request-interval">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@essentials/request-interval?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@essentials/request-interval">
    <img alt="Types" src="https://img.shields.io/npm/types/@essentials/request-interval?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@essentials/request-interval">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@essentials/request-interval?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@essentials/request-interval?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i @essentials/request-interval</pre>
<hr>

A `setInterval()` function that uses `requestAnimationFrame()` in the background for ticks

## Quick Start

```js
import {
  requestInterval,
  clearRequestInterval,
} from '@essentials/request-interval'

// Has the same API as setInterval
const handle = requestInterval(() => {}, 300)
// Has the same API as clearInterval
clearRequestTimeout(handle)
```

## LICENSE

MIT
