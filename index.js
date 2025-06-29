var aply = require('aply')
var isNilX = require('is-nil-x')

module.exports = function isNil(value) {
  return aply(isNilX, this, [value])
}