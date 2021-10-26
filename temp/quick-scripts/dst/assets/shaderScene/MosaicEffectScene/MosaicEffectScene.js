
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/MosaicEffectScene/MosaicEffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0262diwIuhPAI3WYjShcK/m', 'MosaicEffectScene');
// shaderScene/MosaicEffectScene/MosaicEffectScene.ts

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
var MosaicEffectScene = /** @class */ (function (_super) {
    __extends(MosaicEffectScene, _super);
    function MosaicEffectScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._xMosaicCountSlider = null;
        _this._xMosaicCountSliderLabel = null;
        _this._yMosaicCountSlider = null;
        _this._yMosaicCountSliderLabel = null;
        _this._mosaicCountSlider = null;
        _this._mosaicCountSliderLabel = null;
        _this._examplesParentNode = null;
        return _this;
        // update (dt) {}
    }
    MosaicEffectScene.prototype.onLoad = function () {
        // 关闭动态合图
        cc.dynamicAtlasManager.enabled = false;
        this._xMosaicCountSlider = cc
            .find("Canvas/Content/Sliders/XMosaicCountSlider/Slider")
            .getComponent(cc.Slider);
        this._xMosaicCountSliderLabel = cc
            .find("Canvas/Content/Sliders/XMosaicCountSlider/ValueLabel")
            .getComponent(cc.Label);
        this._yMosaicCountSlider = cc
            .find("Canvas/Content/Sliders/YMosaicCountSlider/Slider")
            .getComponent(cc.Slider);
        this._yMosaicCountSliderLabel = cc
            .find("Canvas/Content/Sliders/YMosaicCountSlider/ValueLabel")
            .getComponent(cc.Label);
        this._mosaicCountSlider = cc
            .find("Canvas/Content/Sliders/MosaicCountSlider/Slider")
            .getComponent(cc.Slider);
        this._mosaicCountSliderLabel = cc
            .find("Canvas/Content/Sliders/MosaicCountSlider/ValueLabel")
            .getComponent(cc.Label);
        this._examplesParentNode = cc.find("Canvas/Content/Examples");
    };
    MosaicEffectScene.prototype.onEnable = function () {
        this._xMosaicCountSlider.node.on("slide", this._onSliderChanged, this);
        this._yMosaicCountSlider.node.on("slide", this._onSliderChanged, this);
        this._mosaicCountSlider.node.on("slide", this._onSliderChangedTogether, this);
    };
    MosaicEffectScene.prototype.onDisable = function () {
        this._xMosaicCountSlider.node.off("slide", this._onSliderChanged, this);
        this._yMosaicCountSlider.node.off("slide", this._onSliderChanged, this);
        this._mosaicCountSlider.node.off("slide", this._onSliderChangedTogether, this);
    };
    MosaicEffectScene.prototype.start = function () {
        this._onSliderChanged();
    };
    MosaicEffectScene.prototype._onSliderChangedTogether = function () {
        var mosaicCount = Math.round(this._mosaicCountSlider.progress * 300);
        this._mosaicCountSliderLabel.string = "" + mosaicCount;
        // 更新材质
        this._updateRenderComponentMaterial({
            xBlockCount: mosaicCount,
            yBlockCount: mosaicCount,
        });
    };
    MosaicEffectScene.prototype._onSliderChanged = function () {
        var xMosaicCount = Math.round(this._xMosaicCountSlider.progress * 300);
        this._xMosaicCountSliderLabel.string = "" + xMosaicCount;
        var yMosaicCount = Math.round(this._yMosaicCountSlider.progress * 300);
        this._yMosaicCountSliderLabel.string = "" + yMosaicCount;
        // 更新材质
        this._updateRenderComponentMaterial({
            xBlockCount: xMosaicCount,
            yBlockCount: yMosaicCount,
        });
    };
    /**
     * 更新渲染组件的材质
     *
     * 1. 获取材质
     * 2. 给材质的 unitform 变量赋值
     * 3. 重新将材质赋值回去
     */
    MosaicEffectScene.prototype._updateRenderComponentMaterial = function (param) {
        this._examplesParentNode.children.forEach(function (childNode) {
            childNode.getComponents(cc.RenderComponent).forEach(function (renderComponent) {
                var material = renderComponent.getMaterial(0);
                material.setProperty("xBlockCount", param.xBlockCount);
                material.setProperty("yBlockCount", param.yBlockCount);
                renderComponent.setMaterial(0, material);
            });
        });
    };
    MosaicEffectScene = __decorate([
        ccclass
    ], MosaicEffectScene);
    return MosaicEffectScene;
}(cc.Component));
exports.default = MosaicEffectScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9Nb3NhaWNFZmZlY3RTY2VuZS9Nb3NhaWNFZmZlY3RTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQW1IQztRQWxIUyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFDdEMsOEJBQXdCLEdBQWEsSUFBSSxDQUFDO1FBQzFDLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUN0Qyw4QkFBd0IsR0FBYSxJQUFJLENBQUM7UUFDMUMsd0JBQWtCLEdBQWMsSUFBSSxDQUFDO1FBQ3JDLDZCQUF1QixHQUFhLElBQUksQ0FBQztRQUV6Qyx5QkFBbUIsR0FBWSxJQUFJLENBQUM7O1FBMEc1QyxpQkFBaUI7SUFDbkIsQ0FBQztJQXpHQyxrQ0FBTSxHQUFOO1FBQ0UsU0FBUztRQUNULEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXZDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFO2FBQzFCLElBQUksQ0FBQyxrREFBa0QsQ0FBQzthQUN4RCxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxFQUFFO2FBQy9CLElBQUksQ0FBQyxzREFBc0QsQ0FBQzthQUM1RCxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFO2FBQzFCLElBQUksQ0FBQyxrREFBa0QsQ0FBQzthQUN4RCxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxFQUFFO2FBQy9CLElBQUksQ0FBQyxz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QyxhQUFhLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLGVBQWU7Z0JBQy9ELElBQUksUUFBUSxHQUFnQixlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3ZELFFBQVEsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDdkQsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFoSGdCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBbUhyQztJQUFELHdCQUFDO0NBbkhELEFBbUhDLENBbkg4QyxFQUFFLENBQUMsU0FBUyxHQW1IMUQ7a0JBbkhvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9zYWljRWZmZWN0U2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBwcml2YXRlIF94TW9zYWljQ291bnRTbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gIHByaXZhdGUgX3hNb3NhaWNDb3VudFNsaWRlckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gIHByaXZhdGUgX3lNb3NhaWNDb3VudFNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgcHJpdmF0ZSBfeU1vc2FpY0NvdW50U2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgcHJpdmF0ZSBfbW9zYWljQ291bnRTbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gIHByaXZhdGUgX21vc2FpY0NvdW50U2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICBwcml2YXRlIF9leGFtcGxlc1BhcmVudE5vZGU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIG9uTG9hZCgpIHtcbiAgICAvLyDlhbPpl63liqjmgIHlkIjlm75cbiAgICBjYy5keW5hbWljQXRsYXNNYW5hZ2VyLmVuYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuX3hNb3NhaWNDb3VudFNsaWRlciA9IGNjXG4gICAgICAuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvWE1vc2FpY0NvdW50U2xpZGVyL1NsaWRlclwiKVxuICAgICAgLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgIHRoaXMuX3hNb3NhaWNDb3VudFNsaWRlckxhYmVsID0gY2NcbiAgICAgIC5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9YTW9zYWljQ291bnRTbGlkZXIvVmFsdWVMYWJlbFwiKVxuICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5feU1vc2FpY0NvdW50U2xpZGVyID0gY2NcbiAgICAgIC5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9ZTW9zYWljQ291bnRTbGlkZXIvU2xpZGVyXCIpXG4gICAgICAuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgdGhpcy5feU1vc2FpY0NvdW50U2xpZGVyTGFiZWwgPSBjY1xuICAgICAgLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL1lNb3NhaWNDb3VudFNsaWRlci9WYWx1ZUxhYmVsXCIpXG4gICAgICAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB0aGlzLl9tb3NhaWNDb3VudFNsaWRlciA9IGNjXG4gICAgICAuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvTW9zYWljQ291bnRTbGlkZXIvU2xpZGVyXCIpXG4gICAgICAuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgdGhpcy5fbW9zYWljQ291bnRTbGlkZXJMYWJlbCA9IGNjXG4gICAgICAuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvTW9zYWljQ291bnRTbGlkZXIvVmFsdWVMYWJlbFwiKVxuICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG5cbiAgICB0aGlzLl9leGFtcGxlc1BhcmVudE5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvRXhhbXBsZXNcIik7XG4gIH1cblxuICBvbkVuYWJsZSgpIHtcbiAgICB0aGlzLl94TW9zYWljQ291bnRTbGlkZXIubm9kZS5vbihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgdGhpcy5feU1vc2FpY0NvdW50U2xpZGVyLm5vZGUub24oXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgIHRoaXMuX21vc2FpY0NvdW50U2xpZGVyLm5vZGUub24oXG4gICAgICBcInNsaWRlXCIsXG4gICAgICB0aGlzLl9vblNsaWRlckNoYW5nZWRUb2dldGhlcixcbiAgICAgIHRoaXNcbiAgICApO1xuICB9XG5cbiAgb25EaXNhYmxlKCkge1xuICAgIHRoaXMuX3hNb3NhaWNDb3VudFNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgdGhpcy5feU1vc2FpY0NvdW50U2xpZGVyLm5vZGUub2ZmKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcbiAgICB0aGlzLl9tb3NhaWNDb3VudFNsaWRlci5ub2RlLm9mZihcbiAgICAgIFwic2xpZGVcIixcbiAgICAgIHRoaXMuX29uU2xpZGVyQ2hhbmdlZFRvZ2V0aGVyLFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLl9vblNsaWRlckNoYW5nZWQoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uU2xpZGVyQ2hhbmdlZFRvZ2V0aGVyKCkge1xuICAgIGxldCBtb3NhaWNDb3VudCA9IE1hdGgucm91bmQodGhpcy5fbW9zYWljQ291bnRTbGlkZXIucHJvZ3Jlc3MgKiAzMDApO1xuICAgIHRoaXMuX21vc2FpY0NvdW50U2xpZGVyTGFiZWwuc3RyaW5nID0gYCR7bW9zYWljQ291bnR9YDtcblxuICAgIC8vIOabtOaWsOadkOi0qFxuICAgIHRoaXMuX3VwZGF0ZVJlbmRlckNvbXBvbmVudE1hdGVyaWFsKHtcbiAgICAgIHhCbG9ja0NvdW50OiBtb3NhaWNDb3VudCxcbiAgICAgIHlCbG9ja0NvdW50OiBtb3NhaWNDb3VudCxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX29uU2xpZGVyQ2hhbmdlZCgpIHtcbiAgICBsZXQgeE1vc2FpY0NvdW50ID0gTWF0aC5yb3VuZCh0aGlzLl94TW9zYWljQ291bnRTbGlkZXIucHJvZ3Jlc3MgKiAzMDApO1xuICAgIHRoaXMuX3hNb3NhaWNDb3VudFNsaWRlckxhYmVsLnN0cmluZyA9IGAke3hNb3NhaWNDb3VudH1gO1xuXG4gICAgbGV0IHlNb3NhaWNDb3VudCA9IE1hdGgucm91bmQodGhpcy5feU1vc2FpY0NvdW50U2xpZGVyLnByb2dyZXNzICogMzAwKTtcbiAgICB0aGlzLl95TW9zYWljQ291bnRTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt5TW9zYWljQ291bnR9YDtcblxuICAgIC8vIOabtOaWsOadkOi0qFxuICAgIHRoaXMuX3VwZGF0ZVJlbmRlckNvbXBvbmVudE1hdGVyaWFsKHtcbiAgICAgIHhCbG9ja0NvdW50OiB4TW9zYWljQ291bnQsXG4gICAgICB5QmxvY2tDb3VudDogeU1vc2FpY0NvdW50LFxuICAgIH0pO1xuICB9XG5cblxuICAgIC8qKlxuICAgICAqIOabtOaWsOa4suafk+e7hOS7tueahOadkOi0qFxuICAgICAqXG4gICAgICogMS4g6I635Y+W5p2Q6LSoXG4gICAgICogMi4g57uZ5p2Q6LSo55qEIHVuaXRmb3JtIOWPmOmHj+i1i+WAvFxuICAgICAqIDMuIOmHjeaWsOWwhuadkOi0qOi1i+WAvOWbnuWOu1xuICAgICAqL1xuICAgICBwcml2YXRlIF91cGRhdGVSZW5kZXJDb21wb25lbnRNYXRlcmlhbChwYXJhbToge1xuICAgICAgICAvKipcbiAgICAgICAgICogWOi9tOaWueWdl+aVsOmHjyBbMS4wLCDmraPml6DnqbddXG4gICAgICAgICAqL1xuICAgICAgICB4QmxvY2tDb3VudDogbnVtYmVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBZ6L205pa55Z2X5pWw6YePIFsxLjAsIOato+aXoOept11cbiAgICAgICAgICovXG4gICAgICAgIHlCbG9ja0NvdW50OiBudW1iZXI7XG4gICAgfSkge1xuICAgICAgICB0aGlzLl9leGFtcGxlc1BhcmVudE5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xuICAgICAgICAgICAgY2hpbGROb2RlLmdldENvbXBvbmVudHMoY2MuUmVuZGVyQ29tcG9uZW50KS5mb3JFYWNoKHJlbmRlckNvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG1hdGVyaWFsOiBjYy5NYXRlcmlhbCA9IHJlbmRlckNvbXBvbmVudC5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcInhCbG9ja0NvdW50XCIsIHBhcmFtLnhCbG9ja0NvdW50KTtcbiAgICAgICAgICAgICAgICBtYXRlcmlhbC5zZXRQcm9wZXJ0eShcInlCbG9ja0NvdW50XCIsIHBhcmFtLnlCbG9ja0NvdW50KTtcbiAgICAgICAgICAgICAgICByZW5kZXJDb21wb25lbnQuc2V0TWF0ZXJpYWwoMCwgbWF0ZXJpYWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19