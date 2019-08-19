# @essentials/compose

## Installation
#### `npm i @essentials/compose`
#### `yarn add @essentials/compose`

## Usage
```js
import compose from '@essentials/compose'

const add1 = compose(v => ++v, parseInt)
add1('3')
// 4

const concat21 = compose(v => v + 1, v => v + 2)
concat21('3')
// 321
````

## LICENSE
MIT