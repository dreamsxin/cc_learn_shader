"use strict";
cc._RF.push(module, '643a4aINe5NvYWLBXS8AkMb', 'BrightSaturaContrastAssembler');
// shaderScene/BrightSaturaContrastTest/BrightSaturaContrastAssembler/BrightSaturaContrastAssembler.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var GTSimpleSpriteAssembler2D_1 = require("../../common/GTSimpleSpriteAssembler2D");
// 自定义顶点格式，在vfmtPosUvColor基础上，加入 a_brightness  a_saturation  a_constrast
var gfx = cc.gfx;
var vfmtCustom = new gfx.VertexFormat([
    { name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
    { name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
    { name: gfx.ATTR_COLOR, type: gfx.ATTR_TYPE_UINT8, num: 4, normalize: true },
    { name: 'a_brightness', type: gfx.ATTR_TYPE_FLOAT32, num: 1 },
    { name: 'a_saturation', type: gfx.ATTR_TYPE_FLOAT32, num: 1 },
    { name: 'a_constrast', type: gfx.ATTR_TYPE_FLOAT32, num: 1 },
]);
var BrightSaturaContrastAssembler = /** @class */ (function (_super) {
    __extends(BrightSaturaContrastAssembler, _super);
    function BrightSaturaContrastAssembler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 根据自定义顶点格式，调整下述常量
        _this.verticesCount = 4;
        _this.indicesCount = 6;
        _this.uvOffset = 2;
        _this.colorOffset = 4;
        _this.brightnessOffset = 5;
        _this.saturationOffset = 6;
        _this.constrastOffset = 7;
        _this.floatsPerVert = 8;
        _this.brightness = 1;
        _this.saturation = 1;
        _this.constrast = 1;
        return _this;
    }
    BrightSaturaContrastAssembler.prototype.initData = function () {
        var data = this._renderData;
        // createFlexData支持创建指定格式的renderData
        data.createFlexData(0, this.verticesCount, this.indicesCount, this.getVfmt());
        // createFlexData不会填充顶点索引信息，手动补充一下
        var indices = data.iDatas[0];
        var count = indices.length / 6;
        for (var i = 0, idx = 0; i < count; i++) {
            var vertextID = i * 4;
            indices[idx++] = vertextID;
            indices[idx++] = vertextID + 1;
            indices[idx++] = vertextID + 2;
            indices[idx++] = vertextID + 1;
            indices[idx++] = vertextID + 3;
            indices[idx++] = vertextID + 2;
        }
    };
    // 自定义格式以getVfmt()方式提供出去，除了当前assembler，render-flow的其他地方也会用到
    BrightSaturaContrastAssembler.prototype.getVfmt = function () {
        return vfmtCustom;
    };
    // 重载getBuffer(), 返回一个能容纳自定义顶点数据的buffer
    // 默认fillBuffers()方法中会调用到
    BrightSaturaContrastAssembler.prototype.getBuffer = function () {
        return cc.renderer._handle.getBuffer("mesh", this.getVfmt());
    };
    BrightSaturaContrastAssembler.prototype.updateUVs = function (sprite) {
        _super.prototype.updateUVs.call(this, sprite);
        var dstOffset;
        var verts = this._renderData.vDatas[0];
        for (var i = 0; i < this.verticesCount; ++i) {
            // fill 
            var floatsOffset = this.floatsPerVert * i;
            dstOffset = floatsOffset + this.brightnessOffset;
            verts[dstOffset] = this.brightness;
            dstOffset = floatsOffset + this.saturationOffset;
            verts[dstOffset] = this.saturation;
            dstOffset = floatsOffset + this.constrastOffset;
            verts[dstOffset] = this.constrast;
        }
    };
    return BrightSaturaContrastAssembler;
}(GTSimpleSpriteAssembler2D_1.default));
exports.default = BrightSaturaContrastAssembler;

cc._RF.pop();