<hr>
<div align="center">
  <h1 align="center">
    @essentials/are-equal
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@essentials/are-equal">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@essentials/are-equal?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@essentials/are-equal">
    <img alt="Types" src="https://img.shields.io/npm/types/@essentials/are-equal?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@essentials/are-equal">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@essentials/are-equal?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@essentials/are-equal?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i @essentials/are-equal</pre>
<hr>

Blazing fast strict equality algorithms

## Quick Start

```js
import {areEqual, areEqualObjects, areEqualArrays} from '@essentials/are-equal'

areEqual(['a', 'b'], ['a', 'b'])
// true
areEqual(['a', {}], ['a', {}])
// false
areEqual({}, {})
// true
areEqual({a: 'b'}, {a: 'c'})
// false
```

## LICENSE

MIT
