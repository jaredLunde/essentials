<hr>
<div align="center">
  <h1 align="center">
    @essentials/one-key-map
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@essentials/one-key-map">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@essentials/one-key-map?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@essentials/one-key-map">
    <img alt="Types" src="https://img.shields.io/npm/types/@essentials/one-key-map?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@essentials/one-key-map">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@essentials/one-key-map?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@essentials/one-key-map?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i @essentials/one-key-map</pre>
<hr>

A Map-like data structure that only stores the most recently set key/value pair

## Quick Start

```js
import OneKeyMap from '@essentials/one-key-map'

const map = new OneKeyMap()
map.set('foo', 'bar')
map.get('foo')
// bar
map.set('foo2', 'bar2')
map.get('foo')
// undefined
map.get('foo2')
// bar2
```

## LICENSE

MIT
