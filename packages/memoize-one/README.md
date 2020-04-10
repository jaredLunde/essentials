<hr>
<div align="center">
  <h1 align="center">
    @essentials/memoize-one
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@essentials/memoize-one">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@essentials/memoize-one?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@essentials/memoize-one">
    <img alt="Types" src="https://img.shields.io/npm/types/@essentials/memoize-one?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@essentials/memoize-one">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@essentials/memoize-one?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@essentials/memoize-one?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i @essentials/memoize-one</pre>
<hr>

A memoization algorithm that only caches the result of the latest set of arguments, where argument equality is determined via a provided equality function.
The default `areEqual` function is a strict equality check on the first four arguments provided.

## Quick Start

```js
import memoOne from '@essentials/memoize-one'

const toUpper = memoOne(
  (value) => value.toUpperCase(),
  // are equal?
  (args, prevArgs) => args[0] === prevArgs[0]
)

toUpper('foo')
// FOO (uncached)
toUpper('foo')
// FOO (cached)
toUpper('foobar')
// FOOBAR (uncached)
toUpper('foo')
// FOO (uncached)
```

## API

### `memoOne(fn: Function, areEqual?: Function): any`

| Argument | Description                                                                     |
| -------- | ------------------------------------------------------------------------------- |
| fn       | The function you're memoizing the arguments and result of                       |
| areEqual | An equality function. Return `true` if the arguments are equal, `false` if not. |

## LICENSE

MIT
