
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/GrayEffectScene/GrayEffectScene');
require('./assets/Script/MosaicEffectScene/MosaicEffectScene');
require('./assets/Script/ccutils/multiresolution/ContentAdapter');
require('./assets/Script/waterEffectScene/touch');
require('./assets/Script/waterEffectScene/wave');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/GrayEffectScene/GrayEffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR3JheUVmZmVjdFNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLFlBQVk7QUFFWjtJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQTREQztRQTNEVyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFDbkMsMkJBQXFCLEdBQWEsSUFBSSxDQUFDO1FBRXZDLHlCQUFtQixHQUFZLElBQUksQ0FBQzs7SUF3RGhELENBQUM7SUF0REcsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLCtDQUErQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakgsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELG1DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCwrQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLDBDQUFnQixHQUF4QjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsS0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUcsQ0FBQztRQUNuRixPQUFPO1FBQ1AsSUFBSSxDQUFDLDhCQUE4QixDQUFDO1lBQ2hDLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUTtTQUM1QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssd0RBQThCLEdBQXRDLFVBQXVDLEtBS3RDO1FBQ0csSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTO1lBQ2hELGVBQWU7WUFDZCxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxlQUFlO2dCQUM5RCxTQUFTO2dCQUNWLElBQUksUUFBUSxHQUFnQixlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUUzRCx1QkFBdUI7Z0JBQ3ZCLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFbkQsY0FBYztnQkFDZCxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTNEZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQTREbkM7SUFBRCxzQkFBQztDQTVERCxBQTREQyxDQTVENEMsRUFBRSxDQUFDLFNBQVMsR0E0RHhEO2tCQTVEb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKiDogIHnhafniYfnibnmlYggKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmF5RWZmZWN0U2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgX2dyYXlMZXZlbFNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9ncmF5TGV2ZWxTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZXhhbXBsZXNQYXJlbnROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5fZ3JheUxldmVsU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvR3JheUxldmVsU2xpZGVyL1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgdGhpcy5fZ3JheUxldmVsU2xpZGVyTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9HcmF5TGV2ZWxTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHRoaXMuX2V4YW1wbGVzUGFyZW50Tm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9FeGFtcGxlc1wiKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fZ3JheUxldmVsU2xpZGVyLm5vZGUub24oXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fZ3JheUxldmVsU2xpZGVyLm5vZGUub2ZmKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5fb25TbGlkZXJDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25TbGlkZXJDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLl9ncmF5TGV2ZWxTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLl9ncmF5TGV2ZWxTbGlkZXIucHJvZ3Jlc3MudG9GaXhlZCgyKX1gO1xuICAgICAgICAvLyDmm7TmlrDmnZDotKhcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwoe1xuICAgICAgICAgICAgZ3JheUxldmVsOiB0aGlzLl9ncmF5TGV2ZWxTbGlkZXIucHJvZ3Jlc3NcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pu05paw5riy5p+T57uE5Lu255qE5p2Q6LSoXG4gICAgICpcbiAgICAgKiAxLiDojrflj5bmnZDotKhcbiAgICAgKiAyLiDnu5nmnZDotKjnmoQgdW5pdGZvcm0g5Y+Y6YeP6LWL5YC8XG4gICAgICogMy4g6YeN5paw5bCG5p2Q6LSo6LWL5YC85Zue5Y67XG4gICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwocGFyYW06IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeBsOWMlueoi+W6piBbMC4wLCAxLjBdIO+8jDEuMCDooajnpLrlrozlhajngbDljJZcbiAgICAgICAgICovXG4gICAgICAgIGdyYXlMZXZlbDogbnVtYmVyO1xuICAgIH0pIHtcbiAgICAgICAgdGhpcy5fZXhhbXBsZXNQYXJlbnROb2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgLy8g6I635Y+W6IqC54K555qE5riy5p+T57uE5Lu255qE5Z+657G7XG4gICAgICAgICAgICBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50cyhjYy5SZW5kZXJDb21wb25lbnQpLmZvckVhY2gocmVuZGVyQ29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgLy8gMS7ojrflj5bmnZDotKhcbiAgICAgICAgICAgICAgICBsZXQgbWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gcmVuZGVyQ29tcG9uZW50LmdldE1hdGVyaWFsKDApO1xuXG4gICAgICAgICAgICAgICAgLy8gMi7nu5nmnZDotKjnmoQgdW5pdGZvcm0g5Y+Y6YeP6LWL5YC8XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJncmF5TGV2ZWxcIiwgcGFyYW0uZ3JheUxldmVsKTtcblxuICAgICAgICAgICAgICAgIC8vIDMu6YeN5paw5bCG5p2Q6LSo6LWL5YC85Zue5Y67XG4gICAgICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50LnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MosaicEffectScene/MosaicEffectScene.js';
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/waterEffectScene/touch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9963bP2sC9OnLmQuEEmLX1A', 'touch');
// Script/waterEffectScene/touch.ts

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
var wave_1 = require("./wave");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Touch = /** @class */ (function (_super) {
    __extends(Touch, _super);
    function Touch() {
        // LIFE-CYCLE CALLBACKS:
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wave = null;
        return _this;
        // update (dt) {}
    }
    // onLoad () {}
    Touch.prototype.start = function () {
        var _this = this;
        var self = this;
        this.node.on('touchend', function (e) {
            _this.touchedFunc(e);
        }, this);
    };
    Touch.prototype.touchedFunc = function (e) {
        var index = Math.floor(e.getLocation().x / 720 * this.wave.nWater);
        this.wave.energyArray[index] += 800;
    };
    __decorate([
        property(wave_1.default)
    ], Touch.prototype, "wave", void 0);
    Touch = __decorate([
        ccclass
    ], Touch);
    return Touch;
}(cc.Component));
exports.default = Touch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvd2F0ZXJFZmZlY3RTY2VuZS90b3VjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBMEI7QUFFcEIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBbUMseUJBQVk7SUFBL0M7UUFDSSx3QkFBd0I7UUFENUIscUVBb0JDO1FBaEJHLFVBQUksR0FBUSxJQUFJLENBQUM7O1FBZWpCLGlCQUFpQjtJQUNyQixDQUFDO0lBZkcsZUFBZTtJQUVmLHFCQUFLLEdBQUw7UUFBQSxpQkFLQztRQUpHLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFBO0lBQ1gsQ0FBQztJQUVELDJCQUFXLEdBQVgsVUFBWSxDQUFDO1FBQ1QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQztJQUN4QyxDQUFDO0lBYkQ7UUFEQyxRQUFRLENBQUMsY0FBSSxDQUFDO3VDQUNFO0lBSkEsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQW9CekI7SUFBRCxZQUFDO0NBcEJELEFBb0JDLENBcEJrQyxFQUFFLENBQUMsU0FBUyxHQW9COUM7a0JBcEJvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdhdmUgZnJvbSBcIi4vd2F2ZVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIEBwcm9wZXJ0eSh3YXZlKVxuICAgIHdhdmU6d2F2ZSA9IG51bGw7XG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaGVuZCcsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvdWNoZWRGdW5jKGUpO1xuICAgICAgICB9LHRoaXMpXG4gICAgfVxuXG4gICAgdG91Y2hlZEZ1bmMoZSl7XG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoZS5nZXRMb2NhdGlvbigpLnggLyA3MjAgKiB0aGlzLndhdmUubldhdGVyKTtcbiAgICAgICAgdGhpcy53YXZlLmVuZXJneUFycmF5W2luZGV4XSArPSA4MDA7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/waterEffectScene/wave.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b5ebDRHUNGq7qfLsLe2Wrm', 'wave');
// Script/waterEffectScene/wave.ts

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
var Wave = /** @class */ (function (_super) {
    __extends(Wave, _super);
    function Wave() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskNode = null;
        _this.hWater = 200; // 水面高度
        _this.nodeArray = []; // 装载水面的点
        _this.energyArray = []; // 每个点的能量
        _this.nWater = 20; // 细分数
        return _this;
    }
    Wave.prototype.onLoad = function () {
        // 赋予初始值
        for (var i = 0; i < this.nWater; i++) {
            this.energyArray[i] = 0;
        }
    };
    Wave.prototype.start = function () {
        // 创建水面上点
        for (var i = 0; i < this.nWater; i++) {
            var node = { x: 0, y: 0 };
            node.y = this.hWater;
            node.x = -360 + ((i + 1) * 720) / this.nWater;
            this.nodeArray[i] = node;
        }
        cc.log(this.nodeArray);
        // 最右侧点缓动
        var obj = this.nodeArray[this.nWater - 1];
        var time = 0.5;
        cc.tween(obj)
            .repeatForever(cc
            .tween()
            .to(time, { y: 40 + this.hWater }, { easing: "sineOut" })
            .to(time, { y: 0 + this.hWater }, { easing: "sineIn" })
            .to(time, { y: -40 + this.hWater }, { easing: "sineOut" })
            .to(time, { y: 0 + this.hWater }, { easing: "sineIn" }))
            .start();
    };
    // 利用遮罩原理，把下方显示
    Wave.prototype.showWater = function () {
        // cc.log(this.maskNode)
        var draw = this.maskNode._graphics;
        // let draw = this.maskNode._graphics;
        // cc.log(draw)
        draw.clear();
        draw.lineWidth = 1;
        draw.strokeColor = cc.color(255, 0, 0);
        draw.fillColor = cc.color(0, 255, 0);
        draw.moveTo(-360, this.hWater);
        for (var i = 0; i < this.nWater; i += 2) {
            // 贝塞尔
            draw.quadraticCurveTo(this.nodeArray[i].x, this.nodeArray[i].y, this.nodeArray[i + 1].x, this.nodeArray[i + 1].y);
        }
        // 封闭区域
        draw.lineTo(360, -640);
        draw.lineTo(-360, -640);
        draw.lineTo(-360, this.hWater);
        draw.fill();
        draw.stroke();
    };
    Wave.prototype.update = function (dt) {
        // return;
        // 左右点互相影响 2 次, 决定波的传播快慢
        for (var k = 0; k < 2; k++) {
            for (var i = 0; i < this.nWater; i++) {
                if (i > 0) {
                    // 0.02 的传播损失
                    // 向左传
                    this.energyArray[i - 1] += 0.98 * (this.nodeArray[i].y - this.nodeArray[i - 1].y);
                }
                if (i < this.nWater - 1) {
                    // 向右传
                    this.energyArray[i + 1] += 0.98 * (this.nodeArray[i].y - this.nodeArray[i + 1].y);
                }
            }
        }
        // 最右侧的跳过
        for (var i = 0; i < this.nWater - 1; i++) {
            // 0.02 速度损失
            this.energyArray[i] *= 0.98;
            // 改变位置
            this.nodeArray[i].y += this.energyArray[i] * dt;
        }
        this.showWater();
    };
    __decorate([
        property(cc.Mask)
    ], Wave.prototype, "maskNode", void 0);
    Wave = __decorate([
        ccclass
    ], Wave);
    return Wave;
}(cc.Component));
exports.default = Wave;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvd2F0ZXJFZmZlY3RTY2VuZS93YXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBaUdDO1FBOUZTLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU87UUFDckIsZUFBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVM7UUFDMUIsaUJBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO1FBQzNCLFlBQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNOztJQXlGNUIsQ0FBQztJQXZGQyxxQkFBTSxHQUFOO1FBQ0UsUUFBUTtRQUNSLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELG9CQUFLLEdBQUw7UUFDRSxTQUFTO1FBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFH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QUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDbkQ7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQTdGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNlO0lBSGQsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWlHeEI7SUFBRCxXQUFDO0NBakdELEFBaUdDLENBakdpQyxFQUFFLENBQUMsU0FBUyxHQWlHN0M7a0JBakdvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gIEBwcm9wZXJ0eShjYy5NYXNrKVxuICBwcml2YXRlIG1hc2tOb2RlOiBjYy5NYXNrID0gbnVsbDtcblxuICBwcml2YXRlIGhXYXRlciA9IDIwMDsgLy8g5rC06Z2i6auY5bqmXG4gIHByaXZhdGUgbm9kZUFycmF5ID0gW107IC8vIOijhei9veawtOmdoueahOeCuVxuICBwdWJsaWMgZW5lcmd5QXJyYXkgPSBbXTsgLy8g5q+P5Liq54K555qE6IO96YePXG4gIHB1YmxpYyBuV2F0ZXIgPSAyMDsgLy8g57uG5YiG5pWwXG5cbiAgb25Mb2FkKCkge1xuICAgIC8vIOi1i+S6iOWIneWni+WAvFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uV2F0ZXI7IGkrKykge1xuICAgICAgdGhpcy5lbmVyZ3lBcnJheVtpXSA9IDA7XG4gICAgfVxuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgLy8g5Yib5bu65rC06Z2i5LiK54K5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5XYXRlcjsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgbm9kZS55ID0gdGhpcy5oV2F0ZXI7XG4gICAgICBub2RlLnggPSAtMzYwICsgKChpICsgMSkgKiA3MjApIC8gdGhpcy5uV2F0ZXI7XG4gICAgICB0aGlzLm5vZGVBcnJheVtpXSA9IG5vZGU7XG4gICAgfVxuXG4gICAgY2MubG9nKHRoaXMubm9kZUFycmF5KTtcblxuICAgIC8vIOacgOWPs+S+p+eCuee8k+WKqFxuICAgIGxldCBvYmogPSB0aGlzLm5vZGVBcnJheVt0aGlzLm5XYXRlciAtIDFdO1xuICAgIGxldCB0aW1lID0gMC41O1xuICAgIGNjLnR3ZWVuKG9iailcbiAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICBjY1xuICAgICAgICAgIC50d2VlbigpXG4gICAgICAgICAgLnRvKHRpbWUsIHsgeTogNDAgKyB0aGlzLmhXYXRlciB9LCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSlcbiAgICAgICAgICAudG8odGltZSwgeyB5OiAwICsgdGhpcy5oV2F0ZXIgfSwgeyBlYXNpbmc6IFwic2luZUluXCIgfSlcbiAgICAgICAgICAudG8odGltZSwgeyB5OiAtNDAgKyB0aGlzLmhXYXRlciB9LCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSlcbiAgICAgICAgICAudG8odGltZSwgeyB5OiAwICsgdGhpcy5oV2F0ZXIgfSwgeyBlYXNpbmc6IFwic2luZUluXCIgfSlcbiAgICAgIClcbiAgICAgIC5zdGFydCgpO1xuICB9XG5cbiAgLy8g5Yip55So6YGu572p5Y6f55CG77yM5oqK5LiL5pa55pi+56S6XG4gIHByaXZhdGUgc2hvd1dhdGVyKCkge1xuICAgIC8vIGNjLmxvZyh0aGlzLm1hc2tOb2RlKVxuICAgXG4gICAgbGV0IGRyYXcgPSAoPGFueT50aGlzLm1hc2tOb2RlKS5fZ3JhcGhpY3M7XG4gICAgLy8gbGV0IGRyYXcgPSB0aGlzLm1hc2tOb2RlLl9ncmFwaGljcztcbiAgICAvLyBjYy5sb2coZHJhdylcbiAgICBkcmF3LmNsZWFyKCk7XG4gICAgZHJhdy5saW5lV2lkdGggPSAxO1xuICAgIGRyYXcuc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigyNTUsIDAsIDApO1xuICAgIGRyYXcuZmlsbENvbG9yID0gY2MuY29sb3IoMCwgMjU1LCAwKTtcbiAgICBkcmF3Lm1vdmVUbygtMzYwLCB0aGlzLmhXYXRlcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5XYXRlcjsgaSArPSAyKSB7XG4gICAgICAvLyDotJ3loZ7lsJRcbiAgICAgIGRyYXcucXVhZHJhdGljQ3VydmVUbyhcbiAgICAgICAgdGhpcy5ub2RlQXJyYXlbaV0ueCxcbiAgICAgICAgdGhpcy5ub2RlQXJyYXlbaV0ueSxcbiAgICAgICAgdGhpcy5ub2RlQXJyYXlbaSArIDFdLngsXG4gICAgICAgIHRoaXMubm9kZUFycmF5W2kgKyAxXS55XG4gICAgICApO1xuICAgIH1cbiAgICAvLyDlsIHpl63ljLrln59cbiAgICBkcmF3LmxpbmVUbygzNjAsIC02NDApO1xuICAgIGRyYXcubGluZVRvKC0zNjAsIC02NDApO1xuICAgIGRyYXcubGluZVRvKC0zNjAsIHRoaXMuaFdhdGVyKTtcbiAgICBkcmF3LmZpbGwoKTtcbiAgICBkcmF3LnN0cm9rZSgpO1xuICB9XG5cbiAgdXBkYXRlIChkdCkge1xuICAgIC8vIHJldHVybjtcbiAgICAgICAvLyDlt6blj7PngrnkupLnm7jlvbHlk40gMiDmrKEsIOWGs+WumuazoueahOS8oOaSreW/q+aFolxuICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMjsgaysrKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uV2F0ZXI7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gMC4wMiDnmoTkvKDmkq3mjZ/lpLFcbiAgICAgICAgICAgICAgICAvLyDlkJHlt6bkvKBcbiAgICAgICAgICAgICAgICB0aGlzLmVuZXJneUFycmF5W2ktMV0gKz0gMC45OCAqICh0aGlzLm5vZGVBcnJheVtpXS55IC0gdGhpcy5ub2RlQXJyYXlbaS0xXS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpIDwgdGhpcy5uV2F0ZXIgLSAxKSB7XG4gICAgICAgICAgICAgICAgLy8g5ZCR5Y+z5LygXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVyZ3lBcnJheVtpKzFdICs9IDAuOTggKiAodGhpcy5ub2RlQXJyYXlbaV0ueSAtIHRoaXMubm9kZUFycmF5W2krMV0ueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICBcbiAgICAvLyDmnIDlj7PkvqfnmoTot7Pov4dcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubldhdGVyIC0gMTsgaSsrKSB7XG4gICAgICAgIC8vIDAuMDIg6YCf5bqm5o2f5aSxXG4gICAgICAgIHRoaXMuZW5lcmd5QXJyYXlbaV0gKj0gMC45ODtcbiAgICAgICAgLy8g5pS55Y+Y5L2N572uXG4gICAgICAgIHRoaXMubm9kZUFycmF5W2ldLnkgKz0gdGhpcy5lbmVyZ3lBcnJheVtpXSAqIGR0O1xuICAgIH1cbiAgICB0aGlzLnNob3dXYXRlcigpO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/ccutils/multiresolution/ContentAdapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68622NlRNJFN4QrXlFCQMe/', 'ContentAdapter');
// Script/ccutils/multiresolution/ContentAdapter.ts

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
/**
 * @classdesc  游戏主内容节点自适应所有分辨率的脚本
 * @author cc
 * @version 0.1.0
 * @since 2021-08-10
 * @description
 *
 * 用法：
 *      1. 将本组件挂载在节点上即可
 *
 * 适配原理：
 *      1. 将游戏主内容节点的宽高调整为画布的大小，以进行Size适配
 *
 * 注意：
 *      1. 挂载这个脚本的节点不能加入Widget组件，不然这个适配是没有效果的
 *      2. 目前只支持 SHOW_ALL 模式下的背景缩放适配，不支持其他模式的背景缩放
 *
 *  @example
    ```
    // e.g.
    // 代码中设置 SHOW_ALL 模式的参考代码
    cc.view.setDesignResolutionSize(720, 1280, cc.ResolutionPolicy.SHOW_ALL);

    // 或者 Canvas 组件中，同时勾选 Fit Width 和 Fit Height
    ```
 */
var ContentAdapter = /** @class */ (function (_super) {
    __extends(ContentAdapter, _super);
    function ContentAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentAdapter.prototype.onLoad = function () {
        // if (CC_DEBUG) {
        //     cc.log("调整前");
        //     cc.log(`屏幕分辨率: ${cc.view.getCanvasSize().width} x ${cc.view.getCanvasSize().height}`);
        //     cc.log(`视图窗口可见区域分辨率: ${cc.view.getVisibleSize().width} x ${cc.view.getVisibleSize().height}`);
        //     cc.log(`视图中边框尺寸: ${cc.view.getFrameSize().width} x ${cc.view.getFrameSize().height}`);
        //     cc.log(`设备或浏览器像素比例: ${cc.view.getDevicePixelRatio()}`);
        //     cc.log(`节点宽高: ${this.node.width} x ${this.node.height}`);
        // }
        // 1. 先找到 SHOW_ALL 模式适配之后，本节点的实际宽高以及初始缩放值
        var srcScaleForShowAll = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height);
        var realWidth = this.node.width * srcScaleForShowAll;
        var realHeight = this.node.height * srcScaleForShowAll;
        // 2. 基于第一步的数据，再做节点宽高适配
        this.node.width = this.node.width * (cc.view.getCanvasSize().width / realWidth);
        this.node.height = this.node.height * (cc.view.getCanvasSize().height / realHeight);
        // // 3. 因为本节点的宽高发生了改变，所以要手动更新剩下子节点的宽高
        // this._updateAllChildNodeWidget(this.node);
        // if (CC_DEBUG) {
        //     cc.log(`节点在SHOW_ALL模式下展示的宽高: ${realWidth} x ${realHeight}`);
        //     cc.log(`节点在SHOW_ALL模式下展示的缩放: ${srcScaleForShowAll}`);
        //     cc.log(
        //         `节点在SHOW_ALL模式下做全屏处理后的实际宽高（${cc.view.getCanvasSize().width}x${
        //             cc.view.getCanvasSize().height
        //         }）等价于于原节点的宽高(${this.node.width}x${this.node.height})`
        //     );
        // }
    };
    ContentAdapter = __decorate([
        ccclass
    ], ContentAdapter);
    return ContentAdapter;
}(cc.Component));
exports.default = ContentAdapter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvY2N1dGlscy9tdWx0aXJlc29sdXRpb24vQ29udGVudEFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Qkc7QUFFSDtJQUE0QyxrQ0FBWTtJQUF4RDs7SUFpREEsQ0FBQztJQWhERywrQkFBTSxHQUFOO1FBQ0ksa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQiw2RkFBNkY7UUFDN0YscUdBQXFHO1FBQ3JHLDZGQUE2RjtRQUM3Riw4REFBOEQ7UUFDOUQsZ0VBQWdFO1FBQ2hFLElBQUk7UUFFSix5Q0FBeUM7UUFDekMsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEksSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsa0JBQWtCLENBQUM7UUFDckQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7UUFFdkQsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQztRQUVwRixzQ0FBc0M7UUFDdEMsNkNBQTZDO1FBRTdDLGtCQUFrQjtRQUNsQixtRUFBbUU7UUFDbkUsNERBQTREO1FBQzVELGNBQWM7UUFDZCx5RUFBeUU7UUFDekUsNkNBQTZDO1FBQzdDLGdFQUFnRTtRQUNoRSxTQUFTO1FBQ1QsSUFBSTtJQUNSLENBQUM7SUFoQ2dCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FpRGxDO0lBQUQscUJBQUM7Q0FqREQsQUFpREMsQ0FqRDJDLEVBQUUsQ0FBQyxTQUFTLEdBaUR2RDtrQkFqRG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIEBjbGFzc2Rlc2MgIOa4uOaIj+S4u+WGheWuueiKgueCueiHqumAguW6lOaJgOacieWIhui+qOeOh+eahOiEmuacrFxuICogQGF1dGhvciBjY1xuICogQHZlcnNpb24gMC4xLjBcbiAqIEBzaW5jZSAyMDIxLTA4LTEwXG4gKiBAZGVzY3JpcHRpb25cbiAqXG4gKiDnlKjms5XvvJpcbiAqICAgICAgMS4g5bCG5pys57uE5Lu25oyC6L295Zyo6IqC54K55LiK5Y2z5Y+vXG4gKlxuICog6YCC6YWN5Y6f55CG77yaXG4gKiAgICAgIDEuIOWwhua4uOaIj+S4u+WGheWuueiKgueCueeahOWuvemrmOiwg+aVtOS4uueUu+W4g+eahOWkp+Wwj++8jOS7pei/m+ihjFNpemXpgILphY1cbiAqXG4gKiDms6jmhI/vvJpcbiAqICAgICAgMS4g5oyC6L296L+Z5Liq6ISa5pys55qE6IqC54K55LiN6IO95Yqg5YWlV2lkZ2V057uE5Lu277yM5LiN54S26L+Z5Liq6YCC6YWN5piv5rKh5pyJ5pWI5p6c55qEXG4gKiAgICAgIDIuIOebruWJjeWPquaUr+aMgSBTSE9XX0FMTCDmqKHlvI/kuIvnmoTog4zmma/nvKnmlL7pgILphY3vvIzkuI3mlK/mjIHlhbbku5bmqKHlvI/nmoTog4zmma/nvKnmlL5cbiAqXG4gKiAgQGV4YW1wbGVcbiAgICBgYGBcbiAgICAvLyBlLmcuXG4gICAgLy8g5Luj56CB5Lit6K6+572uIFNIT1dfQUxMIOaooeW8j+eahOWPguiAg+S7o+eggVxuICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoNzIwLCAxMjgwLCBjYy5SZXNvbHV0aW9uUG9saWN5LlNIT1dfQUxMKTtcblxuICAgIC8vIOaIluiAhSBDYW52YXMg57uE5Lu25Lit77yM5ZCM5pe25Yu+6YCJIEZpdCBXaWR0aCDlkowgRml0IEhlaWdodCBcbiAgICBgYGBcbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnRBZGFwdGVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIGlmIChDQ19ERUJVRykge1xuICAgICAgICAvLyAgICAgY2MubG9nKFwi6LCD5pW05YmNXCIpO1xuICAgICAgICAvLyAgICAgY2MubG9nKGDlsY/luZXliIbovqjnjoc6ICR7Y2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGh9IHggJHtjYy52aWV3LmdldENhbnZhc1NpemUoKS5oZWlnaHR9YCk7XG4gICAgICAgIC8vICAgICBjYy5sb2coYOinhuWbvueql+WPo+WPr+ingeWMuuWfn+WIhui+qOeOhzogJHtjYy52aWV3LmdldFZpc2libGVTaXplKCkud2lkdGh9IHggJHtjYy52aWV3LmdldFZpc2libGVTaXplKCkuaGVpZ2h0fWApO1xuICAgICAgICAvLyAgICAgY2MubG9nKGDop4blm77kuK3ovrnmoYblsLrlr7g6ICR7Y2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aH0geCAke2NjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0fWApO1xuICAgICAgICAvLyAgICAgY2MubG9nKGDorr7lpIfmiJbmtY/op4jlmajlg4/ntKDmr5Tkvos6ICR7Y2Mudmlldy5nZXREZXZpY2VQaXhlbFJhdGlvKCl9YCk7XG4gICAgICAgIC8vICAgICBjYy5sb2coYOiKgueCueWuvemrmDogJHt0aGlzLm5vZGUud2lkdGh9IHggJHt0aGlzLm5vZGUuaGVpZ2h0fWApO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gMS4g5YWI5om+5YiwIFNIT1dfQUxMIOaooeW8j+mAgumFjeS5i+WQju+8jOacrOiKgueCueeahOWunumZheWuvemrmOS7peWPiuWIneWni+e8qeaUvuWAvFxuICAgICAgICBsZXQgc3JjU2NhbGVGb3JTaG93QWxsID0gTWF0aC5taW4oY2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGggLyB0aGlzLm5vZGUud2lkdGgsIGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodCAvIHRoaXMubm9kZS5oZWlnaHQpO1xuICAgICAgICBsZXQgcmVhbFdpZHRoID0gdGhpcy5ub2RlLndpZHRoICogc3JjU2NhbGVGb3JTaG93QWxsO1xuICAgICAgICBsZXQgcmVhbEhlaWdodCA9IHRoaXMubm9kZS5oZWlnaHQgKiBzcmNTY2FsZUZvclNob3dBbGw7XG5cbiAgICAgICAgLy8gMi4g5Z+65LqO56ys5LiA5q2l55qE5pWw5o2u77yM5YaN5YGa6IqC54K55a696auY6YCC6YWNXG4gICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHRoaXMubm9kZS53aWR0aCAqIChjYy52aWV3LmdldENhbnZhc1NpemUoKS53aWR0aCAvIHJlYWxXaWR0aCk7XG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSB0aGlzLm5vZGUuaGVpZ2h0ICogKGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodCAvIHJlYWxIZWlnaHQpO1xuXG4gICAgICAgIC8vIC8vIDMuIOWboOS4uuacrOiKgueCueeahOWuvemrmOWPkeeUn+S6huaUueWPmO+8jOaJgOS7peimgeaJi+WKqOabtOaWsOWJqeS4i+WtkOiKgueCueeahOWuvemrmFxuICAgICAgICAvLyB0aGlzLl91cGRhdGVBbGxDaGlsZE5vZGVXaWRnZXQodGhpcy5ub2RlKTtcblxuICAgICAgICAvLyBpZiAoQ0NfREVCVUcpIHtcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg6IqC54K55ZyoU0hPV19BTEzmqKHlvI/kuIvlsZXnpLrnmoTlrr3pq5g6ICR7cmVhbFdpZHRofSB4ICR7cmVhbEhlaWdodH1gKTtcbiAgICAgICAgLy8gICAgIGNjLmxvZyhg6IqC54K55ZyoU0hPV19BTEzmqKHlvI/kuIvlsZXnpLrnmoTnvKnmlL46ICR7c3JjU2NhbGVGb3JTaG93QWxsfWApO1xuICAgICAgICAvLyAgICAgY2MubG9nKFxuICAgICAgICAvLyAgICAgICAgIGDoioLngrnlnKhTSE9XX0FMTOaooeW8j+S4i+WBmuWFqOWxj+WkhOeQhuWQjueahOWunumZheWuvemrmO+8iCR7Y2Mudmlldy5nZXRDYW52YXNTaXplKCkud2lkdGh9eCR7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpLmhlaWdodFxuICAgICAgICAvLyAgICAgICAgIH3vvInnrYnku7fkuo7kuo7ljp/oioLngrnnmoTlrr3pq5goJHt0aGlzLm5vZGUud2lkdGh9eCR7dGhpcy5ub2RlLmhlaWdodH0pYFxuICAgICAgICAvLyAgICAgKTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIC8vIHByaXZhdGUgX3VwZGF0ZUFsbENoaWxkTm9kZVdpZGdldChwYXJlbnROb2RlOiBjYy5Ob2RlKSB7XG4gICAgLy8gICAgIGlmIChwYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBsZXQgd2lkZ2V0ID0gcGFyZW50Tm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcbiAgICAvLyAgICAgaWYgKHdpZGdldCAhPSBudWxsKSB7XG4gICAgLy8gICAgICAgICB3aWRnZXQudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgaWYgKHBhcmVudE5vZGUuY2hpbGRyZW5Db3VudCA9PSAwKSB7XG4gICAgLy8gICAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcGFyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGU6IGNjLk5vZGUpID0+IHtcbiAgICAvLyAgICAgICAgIHRoaXMuX3VwZGF0ZUFsbENoaWxkTm9kZVdpZGdldChjaGlsZE5vZGUpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
