<hr>
<div align="center">
  <h1 align="center">
    @essentials/request-timeout
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@essentials/request-timeout">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@essentials/request-timeout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@essentials/request-timeout">
    <img alt="Types" src="https://img.shields.io/npm/types/@essentials/request-timeout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@essentials/request-timeout">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@essentials/request-timeout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@essentials/request-timeout?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i @essentials/request-timeout</pre>
<hr>

A `setTimeout()` function that uses `requestAnimationFrame()` in the background for ticks

## Quick Start

```js
import {requestTimeout, clearRequestTimeout} from '@essentials/request-timeout'

// Has the same API as setTimeout
const handle = requestTimeout(() => {}, 300)
// Has the same API as clearTimeout
clearRequestTimeout(handle)
```

## LICENSE

MIT
