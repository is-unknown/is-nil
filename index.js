var isNull      = require('@is-(unknown)/is-null')
var isUndefined = require('@is-(unknown)/is-undefined')

module.exports = function isNil(value) {
  return isNull(value) || isUndefined(value)
}