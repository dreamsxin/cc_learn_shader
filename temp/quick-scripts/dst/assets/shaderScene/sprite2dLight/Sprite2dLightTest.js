
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/sprite2dLight/Sprite2dLightTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a81dFtSHFEzqrH1552t4PQ', 'Sprite2dLightTest');
// shaderScene/sprite2dLight/Sprite2dLightTest.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Sprite2dLightTest = /** @class */ (function (_super) {
    __extends(Sprite2dLightTest, _super);
    function Sprite2dLightTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mtl_sprite_2d_light = null;
        _this._lightPos = new cc.Vec4(0, 0, 1, 1);
        return _this;
    }
    Sprite2dLightTest.prototype.sliderCallback = function (slider, customEventData) {
        var _a = customEventData.split(','), key = _a[0], min = _a[1], max = _a[2];
        var maxValue = Number(max);
        var minValue = Number(min);
        var value = slider.progress * (maxValue - minValue) + minValue;
        this._lightPos[key] = value;
        this.mtl_sprite_2d_light.setProperty('lightPos', this._lightPos);
    };
    __decorate([
        property(cc.Material)
    ], Sprite2dLightTest.prototype, "mtl_sprite_2d_light", void 0);
    Sprite2dLightTest = __decorate([
        ccclass
    ], Sprite2dLightTest);
    return Sprite2dLightTest;
}(cc.Component));
exports.default = Sprite2dLightTest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9zcHJpdGUyZExpZ2h0L1Nwcml0ZTJkTGlnaHRUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBZUM7UUFaRyx5QkFBbUIsR0FBZ0IsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7O0lBVS9DLENBQUM7SUFSVywwQ0FBYyxHQUF0QixVQUF1QixNQUFpQixFQUFFLGVBQXVCO1FBQ3ZELElBQUEsS0FBa0IsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBM0MsR0FBRyxRQUFBLEVBQUUsR0FBRyxRQUFBLEVBQUUsR0FBRyxRQUE4QixDQUFDO1FBQ25ELElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDNUIsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2tFQUNrQjtJQUh2QixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQWVyQztJQUFELHdCQUFDO0NBZkQsQUFlQyxDQWY4QyxFQUFFLENBQUMsU0FBUyxHQWUxRDtrQkFmb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJpdGUyZExpZ2h0VGVzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTWF0ZXJpYWwpXG4gICAgbXRsX3Nwcml0ZV8yZF9saWdodDogY2MuTWF0ZXJpYWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfbGlnaHRQb3MgPSBuZXcgY2MuVmVjNCgwLCAwLCAxLCAxKVxuXG4gICAgcHJpdmF0ZSBzbGlkZXJDYWxsYmFjayhzbGlkZXI6IGNjLlNsaWRlciwgY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgW2tleSwgbWluLCBtYXhdID0gY3VzdG9tRXZlbnREYXRhLnNwbGl0KCcsJyk7XG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gTnVtYmVyKG1heClcbiAgICAgICAgY29uc3QgbWluVmFsdWUgPSBOdW1iZXIobWluKVxuICAgICAgICBjb25zdCB2YWx1ZSA9IHNsaWRlci5wcm9ncmVzcyAqIChtYXhWYWx1ZSAtIG1pblZhbHVlKSArIG1pblZhbHVlO1xuICAgICAgICB0aGlzLl9saWdodFBvc1trZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMubXRsX3Nwcml0ZV8yZF9saWdodC5zZXRQcm9wZXJ0eSgnbGlnaHRQb3MnLCB0aGlzLl9saWdodFBvcyk7XG4gICAgfVxufVxuIl19