'use strict'
Object.defineProperty(exports, '__esModule', {value: true})
var OneKeyMap = /** @class */ (function() {
  function OneKeyMap() {
    var key, val
    this.get = function(k) {
      return k === key ? val : void 0
    }
    this.set = function(k, v) {
      key = k
      val = v
    }
  }
  return OneKeyMap
})()
exports.default = OneKeyMap
