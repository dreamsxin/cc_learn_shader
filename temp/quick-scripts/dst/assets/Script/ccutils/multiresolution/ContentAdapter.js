
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