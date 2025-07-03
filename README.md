# is-nil
Checks if a value is null or undefined.

## Installation
```bash
$ npm install @is-(unknown)/is-nil
```

## Usage
```js
var isNil = require('@is-(unknown)/is-nil');

console.log(isNil(null)) // true
console.log(isNil(undefined)) // true
console.log(isNil('anything else')) // false
```