<hr>
<div align="center">
  <h1 align="center">
    @essentials/pending
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@essentials/pending">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@essentials/pending?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@essentials/pending">
    <img alt="Types" src="https://img.shields.io/npm/types/@essentials/pending?style=for-the-badge&labelColor=24292e">
  </a>
  <!--
  <a aria-label="Code coverage report" href="https://codecov.io/gh/jaredLunde/essentials">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/jaredLunde/essentials?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://travis-ci.com/jaredLunde/essentials">
    <img alt="Build status" src="https://img.shields.io/travis/com/jaredLunde/essentials?style=for-the-badge&labelColor=24292e">
  </a>-->
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@essentials/pending">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@essentials/pending?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@essentials/pending?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i @essentials/pending</pre>
<hr>

A helper function that adds error handling to async/await without having to use try/catch block

## Quick Start

```js
import pending from '@essentials/pending'

const someAsyncFunc = async () => {
  const [result, error] = await pending(() => Promise.resolve(true))

  if (error) {
    doSomethingWith(error)
  }

  return result
}
```

## API

```ts
async function pending<
  PromiseReturnType extends any = any,
  ErrorType extends any = Error
>(
  callback: () => Promise<PromiseReturnType>
): Promise<[PromiseReturnType | undefined, ErrorType | undefined]>
```

| Argument | Type                               | Default     | Required | Description                                                                                     |
| -------- | ---------------------------------- | ----------- | -------- | ----------------------------------------------------------------------------------------------- |
| callback | `() => Promise<PromiseReturnType>` | `undefined` | Yes      | A callback or async function that returns the promise you want to gracefully handle errors for. |

## LICENSE

MIT
