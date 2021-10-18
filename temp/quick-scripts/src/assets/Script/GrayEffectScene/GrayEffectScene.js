"use strict";
cc._RF.push(module, '0b2eeYO0iZEr7/PlbdSZuUf', 'GrayEffectScene');
// Script/GrayEffectScene.ts

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
/** 老照片特效 */
var GrayEffectScene = /** @class */ (function (_super) {
    __extends(GrayEffectScene, _super);
    function GrayEffectScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._grayLevelSlider = null;
        _this._grayLevelSliderLabel = null;
        _this._examplesParentNode = null;
        return _this;
    }
    GrayEffectScene.prototype.onLoad = function () {
        this._grayLevelSlider = cc.find("Canvas/Content/Sliders/GrayLevelSlider/Slider").getComponent(cc.Slider);
        this._grayLevelSliderLabel = cc.find("Canvas/Content/Sliders/GrayLevelSlider/ValueLabel").getComponent(cc.Label);
        this._examplesParentNode = cc.find("Canvas/Content/Examples");
    };
    GrayEffectScene.prototype.onEnable = function () {
        this._grayLevelSlider.node.on("slide", this._onSliderChanged, this);
    };
    GrayEffectScene.prototype.onDisable = function () {
        this._grayLevelSlider.node.off("slide", this._onSliderChanged, this);
    };
    GrayEffectScene.prototype.start = function () {
        this._onSliderChanged();
    };
    GrayEffectScene.prototype._onSliderChanged = function () {
        this._grayLevelSliderLabel.string = "" + this._grayLevelSlider.progress.toFixed(2);
        // 更新材质
        this._updateRenderComponentMaterial({
            grayLevel: this._grayLevelSlider.progress
        });
    };
    /**
     * 更新渲染组件的材质
     *
     * 1. 获取材质
     * 2. 给材质的 unitform 变量赋值
     * 3. 重新将材质赋值回去
     */
    GrayEffectScene.prototype._updateRenderComponentMaterial = function (param) {
        this._examplesParentNode.children.forEach(function (childNode) {
            // 获取节点的渲染组件的基类
            childNode.getComponents(cc.RenderComponent).forEach(function (renderComponent) {
                // 1.获取材质
                var material = renderComponent.getMaterial(0);
                // 2.给材质的 unitform 变量赋值
                material.setProperty("grayLevel", param.grayLevel);
                // 3.重新将材质赋值回去
                renderComponent.setMaterial(0, material);
            });
        });
    };
    GrayEffectScene = __decorate([
        ccclass
    ], GrayEffectScene);
    return GrayEffectScene;
}(cc.Component));
exports.default = GrayEffectScene;

cc._RF.pop();