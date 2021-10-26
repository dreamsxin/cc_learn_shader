
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/BrightSaturaContrastTest/BrightSaturaContrastAssembler/BrightSaturaContrastAssembler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9CcmlnaHRTYXR1cmFDb250cmFzdFRlc3QvQnJpZ2h0U2F0dXJhQ29udHJhc3RBc3NlbWJsZXIvQnJpZ2h0U2F0dXJhQ29udHJhc3RBc3NlbWJsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0ZBQStFO0FBRS9FLHdFQUF3RTtBQUN4RSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO0FBQ2pCLElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQztJQUNwQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtJQUNoRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtJQUMzRCxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRTtJQUM1RSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO0lBQzdELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7SUFDN0QsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtDQUMvRCxDQUFDLENBQUM7QUFHSDtJQUEyRCxpREFBeUI7SUFBcEY7UUFBQSxxRUFtRUM7UUFs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QUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDaEQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FFckM7SUFFTCxDQUFDO0lBQ0wsb0NBQUM7QUFBRCxDQW5FQSxBQW1FQyxDQW5FMEQsbUNBQXlCLEdBbUVuRiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHVFNpbXBsZVNwcml0ZUFzc2VtYmxlcjJEIGZyb20gXCIuLi8uLi9jb21tb24vR1RTaW1wbGVTcHJpdGVBc3NlbWJsZXIyRFwiO1xuXG4vLyDoh6rlrprkuYnpobbngrnmoLzlvI/vvIzlnKh2Zm10UG9zVXZDb2xvcuWfuuehgOS4iu+8jOWKoOWFpSBhX2JyaWdodG5lc3MgIGFfc2F0dXJhdGlvbiAgYV9jb25zdHJhc3RcbmxldCBnZnggPSBjYy5nZng7XG5jb25zdCB2Zm10Q3VzdG9tID0gbmV3IGdmeC5WZXJ0ZXhGb3JtYXQoW1xuICAgIHsgbmFtZTogZ2Z4LkFUVFJfUE9TSVRJT04sIHR5cGU6IGdmeC5BVFRSX1RZUEVfRkxPQVQzMiwgbnVtOiAyIH0sXG4gICAgeyBuYW1lOiBnZnguQVRUUl9VVjAsIHR5cGU6IGdmeC5BVFRSX1RZUEVfRkxPQVQzMiwgbnVtOiAyIH0sXG4gICAgeyBuYW1lOiBnZnguQVRUUl9DT0xPUiwgdHlwZTogZ2Z4LkFUVFJfVFlQRV9VSU5UOCwgbnVtOiA0LCBub3JtYWxpemU6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdhX2JyaWdodG5lc3MnLCB0eXBlOiBnZnguQVRUUl9UWVBFX0ZMT0FUMzIsIG51bTogMSB9LFxuICAgIHsgbmFtZTogJ2Ffc2F0dXJhdGlvbicsIHR5cGU6IGdmeC5BVFRSX1RZUEVfRkxPQVQzMiwgbnVtOiAxIH0sXG4gICAgeyBuYW1lOiAnYV9jb25zdHJhc3QnLCB0eXBlOiBnZnguQVRUUl9UWVBFX0ZMT0FUMzIsIG51bTogMSB9LFxuXSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJpZ2h0U2F0dXJhQ29udHJhc3RBc3NlbWJsZXIgZXh0ZW5kcyBHVFNpbXBsZVNwcml0ZUFzc2VtYmxlcjJEIHtcbiAgICAvLyDmoLnmja7oh6rlrprkuYnpobbngrnmoLzlvI/vvIzosIPmlbTkuIvov7DluLjph49cbiAgICB2ZXJ0aWNlc0NvdW50ID0gNDtcbiAgICBpbmRpY2VzQ291bnQgPSA2O1xuICAgIHV2T2Zmc2V0ID0gMjtcbiAgICBjb2xvck9mZnNldCA9IDQ7XG4gICAgYnJpZ2h0bmVzc09mZnNldCA9IDU7XG4gICAgc2F0dXJhdGlvbk9mZnNldCA9IDY7XG4gICAgY29uc3RyYXN0T2Zmc2V0ID0gNztcbiAgICBmbG9hdHNQZXJWZXJ0ID0gODtcblxuXG4gICAgYnJpZ2h0bmVzcyA9IDE7XG4gICAgc2F0dXJhdGlvbiA9IDE7XG4gICAgY29uc3RyYXN0ID0gMTtcblxuICAgIGluaXREYXRhKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuX3JlbmRlckRhdGE7XG4gICAgICAgIC8vIGNyZWF0ZUZsZXhEYXRh5pSv5oyB5Yib5bu65oyH5a6a5qC85byP55qEcmVuZGVyRGF0YVxuICAgICAgICBkYXRhLmNyZWF0ZUZsZXhEYXRhKDAsIHRoaXMudmVydGljZXNDb3VudCwgdGhpcy5pbmRpY2VzQ291bnQsIHRoaXMuZ2V0VmZtdCgpKTtcblxuICAgICAgICAvLyBjcmVhdGVGbGV4RGF0YeS4jeS8muWhq+WFhemhtueCuee0ouW8leS/oeaBr++8jOaJi+WKqOihpeWFheS4gOS4i1xuICAgICAgICBsZXQgaW5kaWNlcyA9IGRhdGEuaURhdGFzWzBdO1xuICAgICAgICBsZXQgY291bnQgPSBpbmRpY2VzLmxlbmd0aCAvIDY7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpZHggPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHZlcnRleHRJRCA9IGkgKiA0O1xuICAgICAgICAgICAgaW5kaWNlc1tpZHgrK10gPSB2ZXJ0ZXh0SUQ7XG4gICAgICAgICAgICBpbmRpY2VzW2lkeCsrXSA9IHZlcnRleHRJRCArIDE7XG4gICAgICAgICAgICBpbmRpY2VzW2lkeCsrXSA9IHZlcnRleHRJRCArIDI7XG4gICAgICAgICAgICBpbmRpY2VzW2lkeCsrXSA9IHZlcnRleHRJRCArIDE7XG4gICAgICAgICAgICBpbmRpY2VzW2lkeCsrXSA9IHZlcnRleHRJRCArIDM7XG4gICAgICAgICAgICBpbmRpY2VzW2lkeCsrXSA9IHZlcnRleHRJRCArIDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDoh6rlrprkuYnmoLzlvI/ku6VnZXRWZm10KCnmlrnlvI/mj5Dkvpvlh7rljrvvvIzpmaTkuoblvZPliY1hc3NlbWJsZXLvvIxyZW5kZXItZmxvd+eahOWFtuS7luWcsOaWueS5n+S8mueUqOWIsFxuICAgIGdldFZmbXQoKSB7XG4gICAgICAgIHJldHVybiB2Zm10Q3VzdG9tO1xuICAgIH1cblxuICAgIC8vIOmHjei9vWdldEJ1ZmZlcigpLCDov5Tlm57kuIDkuKrog73lrrnnurPoh6rlrprkuYnpobbngrnmlbDmja7nmoRidWZmZXJcbiAgICAvLyDpu5jorqRmaWxsQnVmZmVycygp5pa55rOV5Lit5Lya6LCD55So5YiwXG4gICAgZ2V0QnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gY2MucmVuZGVyZXIuX2hhbmRsZS5nZXRCdWZmZXIoXCJtZXNoXCIsIHRoaXMuZ2V0VmZtdCgpKTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZVVWcyhzcHJpdGUpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlVVZzKHNwcml0ZSk7XG4gICAgICAgIGxldCBkc3RPZmZzZXQ7XG4gICAgICAgIGxldCB2ZXJ0cyA9IHRoaXMuX3JlbmRlckRhdGEudkRhdGFzWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXNDb3VudDsgKytpKSB7XG4gICAgICAgICAgICAvLyBmaWxsIFxuICAgICAgICAgICAgbGV0IGZsb2F0c09mZnNldCA9IHRoaXMuZmxvYXRzUGVyVmVydCAqIGk7XG5cbiAgICAgICAgICAgIGRzdE9mZnNldCA9IGZsb2F0c09mZnNldCArIHRoaXMuYnJpZ2h0bmVzc09mZnNldDtcbiAgICAgICAgICAgIHZlcnRzW2RzdE9mZnNldF0gPSB0aGlzLmJyaWdodG5lc3M7XG5cbiAgICAgICAgICAgIGRzdE9mZnNldCA9IGZsb2F0c09mZnNldCArIHRoaXMuc2F0dXJhdGlvbk9mZnNldDtcbiAgICAgICAgICAgIHZlcnRzW2RzdE9mZnNldF0gPSB0aGlzLnNhdHVyYXRpb247XG5cbiAgICAgICAgICAgIGRzdE9mZnNldCA9IGZsb2F0c09mZnNldCArIHRoaXMuY29uc3RyYXN0T2Zmc2V0O1xuICAgICAgICAgICAgdmVydHNbZHN0T2Zmc2V0XSA9IHRoaXMuY29uc3RyYXN0O1xuXG4gICAgICAgIH1cblxuICAgIH1cbn1cbiJdfQ==