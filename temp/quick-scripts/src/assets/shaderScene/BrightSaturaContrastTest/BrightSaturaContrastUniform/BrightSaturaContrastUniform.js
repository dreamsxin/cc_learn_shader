"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'BrightSaturaContrastUniform');
// demo01/BrightSaturaContrastUniform/BrightSaturaContrastUniform.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent;
var BrightSaturaContrastUniform = /** @class */ (function (_super) {
    __extends(BrightSaturaContrastUniform, _super);
    function BrightSaturaContrastUniform() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._sprite = null;
        _this._brightness = 1.0;
        _this._saturation = 1.0;
        _this._constrast = 1.0;
        return _this;
    }
    Object.defineProperty(BrightSaturaContrastUniform.prototype, "brightness", {
        get: function () {
            return this._brightness;
        },
        set: function (b) {
            this._brightness = b;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BrightSaturaContrastUniform.prototype, "saturation", {
        get: function () {
            return this._saturation;
        },
        set: function (b) {
            this._saturation = b;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BrightSaturaContrastUniform.prototype, "constrast", {
        get: function () {
            return this._constrast;
        },
        set: function (b) {
            this._constrast = b;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    BrightSaturaContrastUniform.prototype.onEnable = function () {
        if (!this._sprite) {
            this._sprite = this.getComponent(cc.Sprite);
        }
        this.updateProperties();
    };
    BrightSaturaContrastUniform.prototype.updateProperties = function () {
        if (!this._sprite)
            return;
        this._sprite.getMaterial(0).setProperty('brightness', this._brightness);
        this._sprite.getMaterial(0).setProperty('saturation', this._saturation);
        this._sprite.getMaterial(0).setProperty('constrast', this._constrast);
    };
    __decorate([
        property
    ], BrightSaturaContrastUniform.prototype, "_brightness", void 0);
    __decorate([
        property({ type: cc.Float, range: [0, 3], slide: true })
    ], BrightSaturaContrastUniform.prototype, "brightness", null);
    __decorate([
        property
    ], BrightSaturaContrastUniform.prototype, "_saturation", void 0);
    __decorate([
        property({ type: cc.Float, range: [0, 3], slide: true })
    ], BrightSaturaContrastUniform.prototype, "saturation", null);
    __decorate([
        property
    ], BrightSaturaContrastUniform.prototype, "_constrast", void 0);
    __decorate([
        property({ type: cc.Float, range: [0, 3], slide: true })
    ], BrightSaturaContrastUniform.prototype, "constrast", null);
    BrightSaturaContrastUniform = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.Sprite)
    ], BrightSaturaContrastUniform);
    return BrightSaturaContrastUniform;
}(cc.Component));
exports.default = BrightSaturaContrastUniform;

cc._RF.pop();