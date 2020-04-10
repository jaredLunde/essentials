'use strict'
Object.defineProperty(exports, '__esModule', {value: true})
var OneKeyMap = /** @class */ (function() {
  function OneKeyMap() {
    var _this = this
    this.get = function(k) {
      return k === _this.k ? _this.v : void 0
    }
    this.set = function(k, v) {
      _this.k = k
      _this.v = v
    }
  }
  return OneKeyMap
})()
exports.default = OneKeyMap
