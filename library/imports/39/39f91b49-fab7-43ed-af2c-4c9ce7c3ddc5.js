"use strict";
cc._RF.push(module, '39f91tJ+rdD7a8sTJznw93F', 'BrightSaturaContrastAssemblerSprite');
// demo01/BrightSaturaContrastAssembler/BrightSaturaContrastAssemblerSprite.ts

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
var BrightSaturaContrastAssembler_1 = require("./BrightSaturaContrastAssembler");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var BrightSaturaContrastAssemblerSprite = /** @class */ (function (_super) {
    __extends(BrightSaturaContrastAssemblerSprite, _super);
    function BrightSaturaContrastAssemblerSprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._brightness = 1.0;
        _this._saturation = 1.0;
        _this._constrast = 1.0;
        return _this;
    }
    Object.defineProperty(BrightSaturaContrastAssemblerSprite.prototype, "brightness", {
        get: function () {
            return this._brightness;
        },
        set: function (v) {
            this._brightness = v;
            this.flushProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BrightSaturaContrastAssemblerSprite.prototype, "saturation", {
        get: function () {
            return this._saturation;
        },
        set: function (v) {
            this._saturation = v;
            this.flushProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BrightSaturaContrastAssemblerSprite.prototype, "constrast", {
        get: function () {
            return this._constrast;
        },
        set: function (v) {
            this._constrast = v;
            this.flushProperties();
        },
        enumerable: false,
        configurable: true
    });
    BrightSaturaContrastAssemblerSprite.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        this.flushProperties();
    };
    BrightSaturaContrastAssemblerSprite.prototype.flushProperties = function () {
        //@ts-ignore
        var assembler = this._assembler;
        if (!assembler)
            return;
        assembler.brightness = this.brightness;
        assembler.constrast = this.constrast;
        assembler.saturation = this.saturation;
        this.setVertsDirty();
    };
    // // 使用cc.Sprite默认逻辑
    BrightSaturaContrastAssemblerSprite.prototype._resetAssembler = function () {
        var assembler = this._assembler = new BrightSaturaContrastAssembler_1.default();
        this.flushProperties();
        assembler.init(this);
        this._updateColor();
    };
    __decorate([
        property
    ], BrightSaturaContrastAssemblerSprite.prototype, "_brightness", void 0);
    __decorate([
        property({ type: cc.Float, range: [0, 3], slide: true })
    ], BrightSaturaContrastAssemblerSprite.prototype, "brightness", null);
    __decorate([
        property
    ], BrightSaturaContrastAssemblerSprite.prototype, "_saturation", void 0);
    __decorate([
        property({ type: cc.Float, range: [0, 3], slide: true })
    ], BrightSaturaContrastAssemblerSprite.prototype, "saturation", null);
    __decorate([
        property
    ], BrightSaturaContrastAssemblerSprite.prototype, "_constrast", void 0);
    __decorate([
        property({ type: cc.Float, range: [0, 3], slide: true })
    ], BrightSaturaContrastAssemblerSprite.prototype, "constrast", null);
    BrightSaturaContrastAssemblerSprite = __decorate([
        ccclass,
        executeInEditMode
    ], BrightSaturaContrastAssemblerSprite);
    return BrightSaturaContrastAssemblerSprite;
}(cc.Sprite));
exports.default = BrightSaturaContrastAssemblerSprite;

cc._RF.pop();