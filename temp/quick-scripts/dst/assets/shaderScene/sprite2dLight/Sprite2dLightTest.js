
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
// demo05/Sprite2dLightTest.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9kZW1vMDUvU3ByaXRlMmRMaWdodFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFlQztRQVpHLHlCQUFtQixHQUFnQixJQUFJLENBQUM7UUFFaEMsZUFBUyxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTs7SUFVL0MsQ0FBQztJQVJXLDBDQUFjLEdBQXRCLFVBQXVCLE1BQWlCLEVBQUUsZUFBdUI7UUFDdkQsSUFBQSxLQUFrQixlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUEzQyxHQUFHLFFBQUEsRUFBRSxHQUFHLFFBQUEsRUFBRSxHQUFHLFFBQThCLENBQUM7UUFDbkQsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzVCLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUNqRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7a0VBQ2tCO0lBSHZCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBZXJDO0lBQUQsd0JBQUM7Q0FmRCxBQWVDLENBZjhDLEVBQUUsQ0FBQyxTQUFTLEdBZTFEO2tCQWZvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwcml0ZTJkTGlnaHRUZXN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5NYXRlcmlhbClcbiAgICBtdGxfc3ByaXRlXzJkX2xpZ2h0OiBjYy5NYXRlcmlhbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9saWdodFBvcyA9IG5ldyBjYy5WZWM0KDAsIDAsIDEsIDEpXG5cbiAgICBwcml2YXRlIHNsaWRlckNhbGxiYWNrKHNsaWRlcjogY2MuU2xpZGVyLCBjdXN0b21FdmVudERhdGE6IHN0cmluZykge1xuICAgICAgICBjb25zdCBba2V5LCBtaW4sIG1heF0gPSBjdXN0b21FdmVudERhdGEuc3BsaXQoJywnKTtcbiAgICAgICAgY29uc3QgbWF4VmFsdWUgPSBOdW1iZXIobWF4KVxuICAgICAgICBjb25zdCBtaW5WYWx1ZSA9IE51bWJlcihtaW4pXG4gICAgICAgIGNvbnN0IHZhbHVlID0gc2xpZGVyLnByb2dyZXNzICogKG1heFZhbHVlIC0gbWluVmFsdWUpICsgbWluVmFsdWU7XG4gICAgICAgIHRoaXMuX2xpZ2h0UG9zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5tdGxfc3ByaXRlXzJkX2xpZ2h0LnNldFByb3BlcnR5KCdsaWdodFBvcycsIHRoaXMuX2xpZ2h0UG9zKTtcbiAgICB9XG59XG4iXX0=