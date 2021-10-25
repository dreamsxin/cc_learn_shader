"use strict";
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