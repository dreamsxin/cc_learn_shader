"use strict";
cc._RF.push(module, 'b4f05e15K9Bj72pJrMlUulO', 'BrightSaturaContrastTest');
// demo01/BrightSaturaContrastTest.ts

"use strict";
// author: http://lamyoung.com/
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
var BrightSaturaContrastAssemblerSprite_1 = require("./BrightSaturaContrastAssembler/BrightSaturaContrastAssemblerSprite");
var BrightSaturaContrastUniform_1 = require("./BrightSaturaContrastUniform/BrightSaturaContrastUniform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrightSaturaContrastTest = /** @class */ (function (_super) {
    __extends(BrightSaturaContrastTest, _super);
    function BrightSaturaContrastTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bscAS = null;
        _this.bscU = null;
        return _this;
    }
    BrightSaturaContrastTest.prototype.sliderCallback = function (slider, customEventData) {
        var value = slider.progress * 3;
        switch (customEventData) {
            case 'b': {
                this.bscU.brightness = this.bscAS.brightness = value;
                break;
            }
            case 's': {
                this.bscU.saturation = this.bscAS.saturation = value;
                break;
            }
            case 'c': {
                this.bscU.constrast = this.bscAS.constrast = value;
                break;
            }
        }
    };
    __decorate([
        property(BrightSaturaContrastAssemblerSprite_1.default)
    ], BrightSaturaContrastTest.prototype, "bscAS", void 0);
    __decorate([
        property(BrightSaturaContrastUniform_1.default)
    ], BrightSaturaContrastTest.prototype, "bscU", void 0);
    BrightSaturaContrastTest = __decorate([
        ccclass
    ], BrightSaturaContrastTest);
    return BrightSaturaContrastTest;
}(cc.Component));
exports.default = BrightSaturaContrastTest;
/*
https://mp.weixin.qq.com/s/Ht0kIbaeBEds_wUeUlu8JQ

*/
// 欢迎关注微信公众号[白玉无冰]
/**
█████████████████████████████████████
█████████████████████████████████████
████ ▄▄▄▄▄ █▀█ █▄██▀▄ ▄▄██ ▄▄▄▄▄ ████
████ █   █ █▀▀▀█ ▀▄▀▀▀█▄▀█ █   █ ████
████ █▄▄▄█ █▀ █▀▀▀ ▀▄▄ ▄ █ █▄▄▄█ ████
████▄▄▄▄▄▄▄█▄▀ ▀▄█ ▀▄█▄▀ █▄▄▄▄▄▄▄████
████▄▄  ▄▀▄▄ ▄▀▄▀▀▄▄▄ █ █ ▀ ▀▄█▄▀████
████▀ ▄  █▄█▀█▄█▀█  ▀▄ █ ▀ ▄▄██▀█████
████ ▄▀▄▄▀▄ █▄▄█▄ ▀▄▀ ▀ ▀ ▀▀▀▄ █▀████
████▀ ██ ▀▄ ▄██ ▄█▀▄ ██▀ ▀ █▄█▄▀█████
████   ▄██▄▀ █▀▄▀▄▀▄▄▄▄ ▀█▀ ▀▀ █▀████
████ █▄ █ ▄ █▀ █▀▄█▄▄▄▄▀▄▄█▄▄▄▄▀█████
████▄█▄█▄█▄█▀ ▄█▄   ▀▄██ ▄▄▄ ▀   ████
████ ▄▄▄▄▄ █▄██ ▄█▀  ▄   █▄█  ▄▀█████
████ █   █ █ ▄█▄ ▀  ▀▀██ ▄▄▄▄ ▄▀ ████
████ █▄▄▄█ █ ▄▄▀ ▄█▄█▄█▄ ▀▄   ▄ █████
████▄▄▄▄▄▄▄█▄██▄▄██▄▄▄█████▄▄█▄██████
█████████████████████████████████████
█████████████████████████████████████
 */ 

cc._RF.pop();