'use strict'
Object.defineProperty(exports, '__esModule', {value: true})
var OneKeyMap = /** @class */ (function() {
  function OneKeyMap() {
    var _this = this
    this.key = null
    this.value = null
    this.get = function(k) {
      return k === _this.key ? _this.value : void 0
    }
    this.set = function(k, v) {
      _this.key = k
      _this.value = v
    }
  }
  return OneKeyMap
})()
exports.default = OneKeyMap
