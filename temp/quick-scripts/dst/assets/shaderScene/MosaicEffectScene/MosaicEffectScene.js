
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
// Script/MosaicEffectScene/MosaicEffectScene.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTW9zYWljRWZmZWN0U2NlbmUvTW9zYWljRWZmZWN0U2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUFtSEM7UUFsSFMseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBQ3RDLDhCQUF3QixHQUFhLElBQUksQ0FBQztRQUMxQyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFDdEMsOEJBQXdCLEdBQWEsSUFBSSxDQUFDO1FBQzFDLHdCQUFrQixHQUFjLElBQUksQ0FBQztRQUNyQyw2QkFBdUIsR0FBYSxJQUFJLENBQUM7UUFFekMseUJBQW1CLEdBQVksSUFBSSxDQUFDOztRQTBHNUMsaUJBQWlCO0lBQ25CLENBQUM7SUF6R0Msa0NBQU0sR0FBTjtRQUNFLFNBQVM7UUFDVCxFQUFFLENBQUMsbUJBQW1CLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUV2QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRTthQUMxQixJQUFJLENBQUMsa0RBQWtELENBQUM7YUFDeEQsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsRUFBRTthQUMvQixJQUFJLENBQUMsc0RBQXNELENBQUM7YUFDNUQsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsRUFBRTthQUMxQixJQUFJLENBQUMsa0RBQWtELENBQUM7YUFDeEQsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsd0JBQXdCLEdBQUcsRUFBRTthQUMvQixJQUFJLENBQUMsc0RBQXNE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YSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxlQUFlO2dCQUMvRCxJQUFJLFFBQVEsR0FBZ0IsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0QsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN2RCxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3ZELGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBaEhnQixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQW1IckM7SUFBRCx3QkFBQztDQW5IRCxBQW1IQyxDQW5IOEMsRUFBRSxDQUFDLFNBQVMsR0FtSDFEO2tCQW5Ib0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vc2FpY0VmZmVjdFNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfeE1vc2FpY0NvdW50U2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICBwcml2YXRlIF94TW9zYWljQ291bnRTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICBwcml2YXRlIF95TW9zYWljQ291bnRTbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gIHByaXZhdGUgX3lNb3NhaWNDb3VudFNsaWRlckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gIHByaXZhdGUgX21vc2FpY0NvdW50U2xpZGVyOiBjYy5TbGlkZXIgPSBudWxsO1xuICBwcml2YXRlIF9tb3NhaWNDb3VudFNsaWRlckxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBfZXhhbXBsZXNQYXJlbnROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICBvbkxvYWQoKSB7XG4gICAgLy8g5YWz6Zet5Yqo5oCB5ZCI5Zu+XG4gICAgY2MuZHluYW1pY0F0bGFzTWFuYWdlci5lbmFibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLl94TW9zYWljQ291bnRTbGlkZXIgPSBjY1xuICAgICAgLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL1hNb3NhaWNDb3VudFNsaWRlci9TbGlkZXJcIilcbiAgICAgIC5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICB0aGlzLl94TW9zYWljQ291bnRTbGlkZXJMYWJlbCA9IGNjXG4gICAgICAuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvWE1vc2FpY0NvdW50U2xpZGVyL1ZhbHVlTGFiZWxcIilcbiAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIHRoaXMuX3lNb3NhaWNDb3VudFNsaWRlciA9IGNjXG4gICAgICAuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvWU1vc2FpY0NvdW50U2xpZGVyL1NsaWRlclwiKVxuICAgICAgLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgIHRoaXMuX3lNb3NhaWNDb3VudFNsaWRlckxhYmVsID0gY2NcbiAgICAgIC5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9ZTW9zYWljQ291bnRTbGlkZXIvVmFsdWVMYWJlbFwiKVxuICAgICAgLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgdGhpcy5fbW9zYWljQ291bnRTbGlkZXIgPSBjY1xuICAgICAgLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL01vc2FpY0NvdW50U2xpZGVyL1NsaWRlclwiKVxuICAgICAgLmdldENvbXBvbmVudChjYy5TbGlkZXIpO1xuICAgIHRoaXMuX21vc2FpY0NvdW50U2xpZGVyTGFiZWwgPSBjY1xuICAgICAgLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL01vc2FpY0NvdW50U2xpZGVyL1ZhbHVlTGFiZWxcIilcbiAgICAgIC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgdGhpcy5fZXhhbXBsZXNQYXJlbnROb2RlID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L0V4YW1wbGVzXCIpO1xuICB9XG5cbiAgb25FbmFibGUoKSB7XG4gICAgdGhpcy5feE1vc2FpY0NvdW50U2xpZGVyLm5vZGUub24oXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgIHRoaXMuX3lNb3NhaWNDb3VudFNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcbiAgICB0aGlzLl9tb3NhaWNDb3VudFNsaWRlci5ub2RlLm9uKFxuICAgICAgXCJzbGlkZVwiLFxuICAgICAgdGhpcy5fb25TbGlkZXJDaGFuZ2VkVG9nZXRoZXIsXG4gICAgICB0aGlzXG4gICAgKTtcbiAgfVxuXG4gIG9uRGlzYWJsZSgpIHtcbiAgICB0aGlzLl94TW9zYWljQ291bnRTbGlkZXIubm9kZS5vZmYoXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgIHRoaXMuX3lNb3NhaWNDb3VudFNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgdGhpcy5fbW9zYWljQ291bnRTbGlkZXIubm9kZS5vZmYoXG4gICAgICBcInNsaWRlXCIsXG4gICAgICB0aGlzLl9vblNsaWRlckNoYW5nZWRUb2dldGhlcixcbiAgICAgIHRoaXNcbiAgICApO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5fb25TbGlkZXJDaGFuZ2VkKCk7XG4gIH1cblxuICBwcml2YXRlIF9vblNsaWRlckNoYW5nZWRUb2dldGhlcigpIHtcbiAgICBsZXQgbW9zYWljQ291bnQgPSBNYXRoLnJvdW5kKHRoaXMuX21vc2FpY0NvdW50U2xpZGVyLnByb2dyZXNzICogMzAwKTtcbiAgICB0aGlzLl9tb3NhaWNDb3VudFNsaWRlckxhYmVsLnN0cmluZyA9IGAke21vc2FpY0NvdW50fWA7XG5cbiAgICAvLyDmm7TmlrDmnZDotKhcbiAgICB0aGlzLl91cGRhdGVSZW5kZXJDb21wb25lbnRNYXRlcmlhbCh7XG4gICAgICB4QmxvY2tDb3VudDogbW9zYWljQ291bnQsXG4gICAgICB5QmxvY2tDb3VudDogbW9zYWljQ291bnQsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9vblNsaWRlckNoYW5nZWQoKSB7XG4gICAgbGV0IHhNb3NhaWNDb3VudCA9IE1hdGgucm91bmQodGhpcy5feE1vc2FpY0NvdW50U2xpZGVyLnByb2dyZXNzICogMzAwKTtcbiAgICB0aGlzLl94TW9zYWljQ291bnRTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt4TW9zYWljQ291bnR9YDtcblxuICAgIGxldCB5TW9zYWljQ291bnQgPSBNYXRoLnJvdW5kKHRoaXMuX3lNb3NhaWNDb3VudFNsaWRlci5wcm9ncmVzcyAqIDMwMCk7XG4gICAgdGhpcy5feU1vc2FpY0NvdW50U2xpZGVyTGFiZWwuc3RyaW5nID0gYCR7eU1vc2FpY0NvdW50fWA7XG5cbiAgICAvLyDmm7TmlrDmnZDotKhcbiAgICB0aGlzLl91cGRhdGVSZW5kZXJDb21wb25lbnRNYXRlcmlhbCh7XG4gICAgICB4QmxvY2tDb3VudDogeE1vc2FpY0NvdW50LFxuICAgICAgeUJsb2NrQ291bnQ6IHlNb3NhaWNDb3VudCxcbiAgICB9KTtcbiAgfVxuXG5cbiAgICAvKipcbiAgICAgKiDmm7TmlrDmuLLmn5Pnu4Tku7bnmoTmnZDotKhcbiAgICAgKlxuICAgICAqIDEuIOiOt+WPluadkOi0qFxuICAgICAqIDIuIOe7meadkOi0qOeahCB1bml0Zm9ybSDlj5jph4/otYvlgLxcbiAgICAgKiAzLiDph43mlrDlsIbmnZDotKjotYvlgLzlm57ljrtcbiAgICAgKi9cbiAgICAgcHJpdmF0ZSBfdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwocGFyYW06IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFjovbTmlrnlnZfmlbDph48gWzEuMCwg5q2j5peg56m3XVxuICAgICAgICAgKi9cbiAgICAgICAgeEJsb2NrQ291bnQ6IG51bWJlcjtcblxuICAgICAgICAvKipcbiAgICAgICAgICogWei9tOaWueWdl+aVsOmHjyBbMS4wLCDmraPml6DnqbddXG4gICAgICAgICAqL1xuICAgICAgICB5QmxvY2tDb3VudDogbnVtYmVyO1xuICAgIH0pIHtcbiAgICAgICAgdGhpcy5fZXhhbXBsZXNQYXJlbnROb2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgIGNoaWxkTm9kZS5nZXRDb21wb25lbnRzKGNjLlJlbmRlckNvbXBvbmVudCkuZm9yRWFjaChyZW5kZXJDb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBtYXRlcmlhbDogY2MuTWF0ZXJpYWwgPSByZW5kZXJDb21wb25lbnQuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJ4QmxvY2tDb3VudFwiLCBwYXJhbS54QmxvY2tDb3VudCk7XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJ5QmxvY2tDb3VudFwiLCBwYXJhbS55QmxvY2tDb3VudCk7XG4gICAgICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50LnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==