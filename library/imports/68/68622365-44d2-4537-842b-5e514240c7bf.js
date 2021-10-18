"use strict";
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