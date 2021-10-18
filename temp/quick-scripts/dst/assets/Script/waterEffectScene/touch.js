
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/waterEffectScene/touch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9963bP2sC9OnLmQuEEmLX1A', 'touch');
// Script/waterEffectScene/touch.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var wave_1 = require("./wave");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Touch = /** @class */ (function (_super) {
    __extends(Touch, _super);
    function Touch() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wave = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    Touch.prototype.start = function () {
        var _this = this;
        var self = this;
        this.node.on('touchend', function (e) {
            _this.touchedFunc(e);
        }, this);
    };
    Touch.prototype.touchedFunc = function (e) {
        var index = Math.floor(e.getLocation().x / 720 * this.wave.nWater);
        this.wave.energyArray[index] += 800;
    };
    __decorate([
        property(wave_1.default)
    ], Touch.prototype, "wave", void 0);
    Touch = __decorate([
        ccclass
    ], Touch);
    return Touch;
}(cc.Component));
exports.default = Touch;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvd2F0ZXJFZmZlY3RTY2VuZS90b3VjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFDSSx3QkFBd0I7UUFENUIscUVBb0JDO1FBaEJHLFVBQUksR0FBUSxJQUFJLENBQUM7O1FBZWpCLGlCQUFpQjtJQUNyQixDQUFDO0lBZkcsZUFBZTtJQUVmLHFCQUFLLEdBQUw7UUFBQSxpQkFLQztRQUpHLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFBO0lBQ1gsQ0FBQztJQUVELDJCQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUN4QyxDQUFDO0lBYkQ7UUFEQyxRQUFRLENBQUMsY0FBSSxDQUFDO3VDQUNFO0lBSkEsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQW9CekI7SUFBRCxZQUFDO0NBcEJELEFBb0JDLENBcEJrQyxFQUFFLENBQUMsU0FBUyxHQW9COUM7a0JBcEJvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdhdmUgZnJvbSBcIi4vd2F2ZVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIEBwcm9wZXJ0eSh3YXZlKVxuICAgIHdhdmU6d2F2ZSA9IG51bGw7XG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaGVuZCcsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvdWNoZWRGdW5jKGUpO1xuICAgICAgICB9LHRoaXMpXG4gICAgfVxuXG4gICAgdG91Y2hlZEZ1bmMoZSl7XG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoZS5nZXRMb2NhdGlvbigpLnggLyA3MjAgKiB0aGlzLndhdmUubldhdGVyKTtcbiAgICAgICAgdGhpcy53YXZlLmVuZXJneUFycmF5W2luZGV4XSArPSA4MDA7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==