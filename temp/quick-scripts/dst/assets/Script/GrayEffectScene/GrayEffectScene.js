
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
// Script/GrayEffectScene/GrayEffectScene.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR3JheUVmZmVjdFNjZW5lL0dyYXlFZmZlY3RTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxZQUFZO0FBRVo7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUE0REM7UUEzRFcsc0JBQWdCLEdBQWMsSUFBSSxDQUFDO1FBQ25DLDJCQUFxQixHQUFhLElBQUksQ0FBQztRQUV2Qyx5QkFBbUIsR0FBWSxJQUFJLENBQUM7O0lBd0RoRCxDQUFDO0lBdERHLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbURBQW1ELENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWpILElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsK0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTywwQ0FBZ0IsR0FBeEI7UUFDSSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLEtBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFHLENBQUM7UUFDbkYsT0FBTztRQUNQLElBQUksQ0FBQyw4QkFBOEIsQ0FBQztZQUNoQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVE7U0FDNUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLHdEQUE4QixHQUF0QyxVQUF1QyxLQUt0QztRQUNHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsU0FBUztZQUNoRCxlQUFlO1lBQ2QsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsZUFBZTtnQkFDOUQsU0FBUztnQkFDVixJQUFJLFFBQVEsR0FBZ0IsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFM0QsdUJBQXVCO2dCQUN2QixRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRW5ELGNBQWM7Z0JBQ2QsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUEzRGdCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0E0RG5DO0lBQUQsc0JBQUM7Q0E1REQsQUE0REMsQ0E1RDRDLEVBQUUsQ0FBQyxTQUFTLEdBNER4RDtrQkE1RG9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKiog6ICB54Wn54mH54m55pWIICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JheUVmZmVjdFNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9ncmF5TGV2ZWxTbGlkZXI6IGNjLlNsaWRlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBfZ3JheUxldmVsU2xpZGVyTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICAgIHByaXZhdGUgX2V4YW1wbGVzUGFyZW50Tm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuX2dyYXlMZXZlbFNsaWRlciA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9TbGlkZXJzL0dyYXlMZXZlbFNsaWRlci9TbGlkZXJcIikuZ2V0Q29tcG9uZW50KGNjLlNsaWRlcik7XG4gICAgICAgIHRoaXMuX2dyYXlMZXZlbFNsaWRlckxhYmVsID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvR3JheUxldmVsU2xpZGVyL1ZhbHVlTGFiZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcblxuICAgICAgICB0aGlzLl9leGFtcGxlc1BhcmVudE5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvRXhhbXBsZXNcIik7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIHRoaXMuX2dyYXlMZXZlbFNsaWRlci5ub2RlLm9uKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX2dyYXlMZXZlbFNsaWRlci5ub2RlLm9mZihcInNsaWRlXCIsIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCwgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuX29uU2xpZGVyQ2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX29uU2xpZGVyQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5fZ3JheUxldmVsU2xpZGVyTGFiZWwuc3RyaW5nID0gYCR7dGhpcy5fZ3JheUxldmVsU2xpZGVyLnByb2dyZXNzLnRvRml4ZWQoMil9YDtcbiAgICAgICAgLy8g5pu05paw5p2Q6LSoXG4gICAgICAgIHRoaXMuX3VwZGF0ZVJlbmRlckNvbXBvbmVudE1hdGVyaWFsKHtcbiAgICAgICAgICAgIGdyYXlMZXZlbDogdGhpcy5fZ3JheUxldmVsU2xpZGVyLnByb2dyZXNzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOabtOaWsOa4suafk+e7hOS7tueahOadkOi0qFxuICAgICAqXG4gICAgICogMS4g6I635Y+W5p2Q6LSoXG4gICAgICogMi4g57uZ5p2Q6LSo55qEIHVuaXRmb3JtIOWPmOmHj+i1i+WAvFxuICAgICAqIDMuIOmHjeaWsOWwhuadkOi0qOi1i+WAvOWbnuWOu1xuICAgICAqL1xuICAgIHByaXZhdGUgX3VwZGF0ZVJlbmRlckNvbXBvbmVudE1hdGVyaWFsKHBhcmFtOiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDngbDljJbnqIvluqYgWzAuMCwgMS4wXSDvvIwxLjAg6KGo56S65a6M5YWo54Gw5YyWXG4gICAgICAgICAqL1xuICAgICAgICBncmF5TGV2ZWw6IG51bWJlcjtcbiAgICB9KSB7XG4gICAgICAgIHRoaXMuX2V4YW1wbGVzUGFyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICAgICAgIC8vIOiOt+WPluiKgueCueeahOa4suafk+e7hOS7tueahOWfuuexu1xuICAgICAgICAgICAgY2hpbGROb2RlLmdldENvbXBvbmVudHMoY2MuUmVuZGVyQ29tcG9uZW50KS5mb3JFYWNoKHJlbmRlckNvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICAgICAgIC8vIDEu6I635Y+W5p2Q6LSoXG4gICAgICAgICAgICAgICAgbGV0IG1hdGVyaWFsOiBjYy5NYXRlcmlhbCA9IHJlbmRlckNvbXBvbmVudC5nZXRNYXRlcmlhbCgwKTtcblxuICAgICAgICAgICAgICAgIC8vIDIu57uZ5p2Q6LSo55qEIHVuaXRmb3JtIOWPmOmHj+i1i+WAvFxuICAgICAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KFwiZ3JheUxldmVsXCIsIHBhcmFtLmdyYXlMZXZlbCk7XG5cbiAgICAgICAgICAgICAgICAvLyAzLumHjeaWsOWwhuadkOi0qOi1i+WAvOWbnuWOu1xuICAgICAgICAgICAgICAgIHJlbmRlckNvbXBvbmVudC5zZXRNYXRlcmlhbCgwLCBtYXRlcmlhbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19