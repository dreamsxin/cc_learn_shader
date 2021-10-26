
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/waterEffectScene/touch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9963bP2sC9OnLmQuEEmLX1A', 'touch');
// shaderScene/waterEffectScene/touch.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS93YXRlckVmZmVjdFNjZW5lL3RvdWNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUVwQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUEvQztRQUNJLHdCQUF3QjtRQUQ1QixxRUFvQkM7UUFoQkcsVUFBSSxHQUFRLElBQUksQ0FBQzs7UUFlakIsaUJBQWlCO0lBQ3JCLENBQUM7SUFmRyxlQUFlO0lBRWYscUJBQUssR0FBTDtRQUFBLGlCQUtDO1FBSkcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFDWCxDQUFDO0lBRUQsMkJBQVcsR0FBWCxVQUFZLENBQUM7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDO0lBQ3hDLENBQUM7SUFiRDtRQURDLFFBQVEsQ0FBQyxjQUFJLENBQUM7dUNBQ0U7SUFKQSxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBb0J6QjtJQUFELFlBQUM7Q0FwQkQsQUFvQkMsQ0FwQmtDLEVBQUUsQ0FBQyxTQUFTLEdBb0I5QztrQkFwQm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2F2ZSBmcm9tIFwiLi93YXZlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgQHByb3BlcnR5KHdhdmUpXG4gICAgd2F2ZTp3YXZlID0gbnVsbDtcbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoZW5kJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG91Y2hlZEZ1bmMoZSk7XG4gICAgICAgIH0sdGhpcylcbiAgICB9XG5cbiAgICB0b3VjaGVkRnVuYyhlKXtcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihlLmdldExvY2F0aW9uKCkueCAvIDcyMCAqIHRoaXMud2F2ZS5uV2F0ZXIpO1xuICAgICAgICB0aGlzLndhdmUuZW5lcmd5QXJyYXlbaW5kZXhdICs9IDgwMDtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19