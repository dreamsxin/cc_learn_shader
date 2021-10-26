
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/CaptureTest/CaptureTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b242cccb9JMaISIAO+2SJsN', 'CaptureTest');
// shaderScene/CaptureTest/CaptureTest.ts

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
var EncodeJPG_1 = require("./EncodeJPG");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CaptureTest = /** @class */ (function (_super) {
    __extends(CaptureTest, _super);
    function CaptureTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb = null;
        return _this;
    }
    CaptureTest.prototype.encodeJpgCapture = function () {
        this.lb.string = "encodeJpgCapture \n\u7ED3\u679C\u89C1\u63A7\u5236\u53F0\u65E5\u5FD7 \n" + Date.now();
        // 此代码仅适用于 web 平台。要在 native 平台中使用这个功能，请参考 example -case 中的 capture_to_native 场景。
        var node = new cc.Node();
        node.zIndex = cc.macro.MAX_ZINDEX;
        node.parent = this.node.parent;
        var camera = node.addComponent(cc.Camera);
        camera.backgroundColor = cc.Color.TRANSPARENT;
        camera.clearFlags = cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL | cc.Camera.ClearFlags.COLOR;
        // 设置你想要的截图内容的 cullingMask
        camera.cullingMask = 0xffffffff;
        // 新建一个 RenderTexture，并且设置 camera 的 targetTexture 为新建的 RenderTexture，这样 camera 的内容将会渲染到新建的 RenderTexture 中。
        var texture = new cc.RenderTexture();
        //@ts-ignore
        var gl = cc.game._renderContext;
        // 如果截图内容中不包含 Mask 组件，可以不用传递第三个参数
        texture.initWithSize(this.node.parent.width, this.node.parent.height, gl.STENCIL_INDEX8);
        camera.targetTexture = texture;
        // 渲染一次摄像机，即更新一次内容到 RenderTexture 中
        camera.render();
        camera.enabled = false;
        // 这样我们就能从 RenderTexture 中获取到数据了
        var data = texture.readPixels();
        var width = texture.width;
        var height = texture.height;
        var flipYData = new Uint8Array(width * height * 4);
        var rowBytes = width * 4;
        for (var row = 0; row < height; row++) {
            var startRow = height - 1 - row;
            var start = startRow * width * 4;
            for (var i = 0; i < rowBytes; i++) {
                flipYData[row * width * 4 + i] = data[start + i];
            }
        }
        var rawImageData = {
            data: flipYData,
            width: width,
            height: height,
        };
        var jpegImageData = EncodeJPG_1.encodeJPG(rawImageData, 50);
        cc.log('jpegImageData', jpegImageData);
        function uint8ToString(buf) {
            var i, length, out = '';
            for (i = 0, length = buf.length; i < length; i += 1) {
                out += String.fromCharCode(buf[i]);
            }
            return out;
        }
        var base64 = btoa(uint8ToString(jpegImageData.data)); //
        cc.warn('base64', "data:image/jpg;base64," + base64);
        this.scheduleOnce(function () {
            node.destroy();
        }, 0);
    };
    CaptureTest.prototype.canvasToDataURLCapture = function () {
        this.lb.string = "canvas toDataURL \n\u7ED3\u679C\u89C1\u63A7\u5236\u53F0\u65E5\u5FD7 \n" + Date.now();
        // 此代码仅适用于 web 平台。要在 native 平台中使用这个功能，请参考 example-case 中的 capture_to_native 场景。
        var node = new cc.Node();
        node.parent = this.node.parent;
        var camera = node.addComponent(cc.Camera);
        camera.backgroundColor = cc.Color.TRANSPARENT;
        camera.clearFlags = cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL | cc.Camera.ClearFlags.COLOR;
        // 设置你想要的截图内容的 cullingMask
        camera.cullingMask = 0xffffffff;
        // 新建一个 RenderTexture，并且设置 camera 的 targetTexture 为新建的 RenderTexture，这样 camera 的内容将会渲染到新建的 RenderTexture 中。
        var texture = new cc.RenderTexture();
        var gl = cc.game._renderContext;
        // 如果截图内容中不包含 Mask 组件，可以不用传递第三个参数
        texture.initWithSize(this.node.parent.width, this.node.parent.height, gl.STENCIL_INDEX8);
        camera.targetTexture = texture;
        // 渲染一次摄像机，即更新一次内容到 RenderTexture 中
        camera.render();
        // 这样我们就能从 RenderTexture 中获取到数据了
        var data = texture.readPixels();
        // 接下来就可以对这些数据进行操作了
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var width = canvas.width = texture.width;
        var height = canvas.height = texture.height;
        canvas.width = texture.width;
        canvas.height = texture.height;
        var rowBytes = width * 4;
        for (var row = 0; row < height; row++) {
            var startRow = height - 1 - row;
            var imageData = ctx.createImageData(width, 1);
            var start = startRow * width * 4;
            for (var i = 0; i < rowBytes; i++) {
                imageData.data[i] = data[start + i];
            }
            ctx.putImageData(imageData, 0, row);
        }
        var dataURL = canvas.toDataURL("image/jpeg");
        cc.warn('canvasToDataURLCapture', dataURL);
        // let img = document.createElement("img");
        // img.src = dataURL;
        this.scheduleOnce(function () {
            node.destroy();
        }, 0);
    };
    CaptureTest.prototype.onLoad = function () {
        cc.warn("\n/*\nhttps://mp.weixin.qq.com/s/Ht0kIbaeBEds_wUeUlu8JQ\n\n*/\n\n// \u6B22\u8FCE\u5173\u6CE8\u5FAE\u4FE1\u516C\u4F17\u53F7[\u767D\u7389\u65E0\u51B0]\n\n/**\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588 \u2584\u2584\u2584\u2584\u2584 \u2588\u2580\u2588 \u2588\u2584\u2588\u2588\u2580\u2584 \u2584\u2584\u2588\u2588 \u2584\u2584\u2584\u2584\u2584 \u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588 \u2588   \u2588 \u2588\u2580\u2580\u2580\u2588 \u2580\u2584\u2580\u2580\u2580\u2588\u2584\u2580\u2588 \u2588   \u2588 \u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588 \u2588\u2584\u2584\u2584\u2588 \u2588\u2580 \u2588\u2580\u2580\u2580 \u2580\u2584\u2584 \u2584 \u2588 \u2588\u2584\u2584\u2584\u2588 \u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2588\u2584\u2580 \u2580\u2584\u2588 \u2580\u2584\u2588\u2584\u2580 \u2588\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2584\u2584  \u2584\u2580\u2584\u2584 \u2584\u2580\u2584\u2580\u2580\u2584\u2584\u2584 \u2588 \u2588 \u2580 \u2580\u2584\u2588\u2584\u2580\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2580 \u2584  \u2588\u2584\u2588\u2580\u2588\u2584\u2588\u2580\u2588  \u2580\u2584 \u2588 \u2580 \u2584\u2584\u2588\u2588\u2580\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588 \u2584\u2580\u2584\u2584\u2580\u2584 \u2588\u2584\u2584\u2588\u2584 \u2580\u2584\u2580 \u2580 \u2580 \u2580\u2580\u2580\u2584 \u2588\u2580\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2580 \u2588\u2588 \u2580\u2584 \u2584\u2588\u2588 \u2584\u2588\u2580\u2584 \u2588\u2588\u2580 \u2580 \u2588\u2584\u2588\u2584\u2580\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588   \u2584\u2588\u2588\u2584\u2580 \u2588\u2580\u2584\u2580\u2584\u2580\u2584\u2584\u2584\u2584 \u2580\u2588\u2580 \u2580\u2580 \u2588\u2580\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588 \u2588\u2584 \u2588 \u2584 \u2588\u2580 \u2588\u2580\u2584\u2588\u2584\u2584\u2584\u2584\u2580\u2584\u2584\u2588\u2584\u2584\u2584\u2584\u2580\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2584\u2588\u2584\u2588\u2584\u2588\u2584\u2588\u2580 \u2584\u2588\u2584   \u2580\u2584\u2588\u2588 \u2584\u2584\u2584 \u2580   \u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588 \u2584\u2584\u2584\u2584\u2584 \u2588\u2584\u2588\u2588 \u2584\u2588\u2580  \u2584   \u2588\u2584\u2588  \u2584\u2580\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588 \u2588   \u2588 \u2588 \u2584\u2588\u2584 \u2580  \u2580\u2580\u2588\u2588 \u2584\u2584\u2584\u2584 \u2584\u2580 \u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588 \u2588\u2584\u2584\u2584\u2588 \u2588 \u2584\u2584\u2580 \u2584\u2588\u2584\u2588\u2584\u2588\u2584 \u2580\u2584   \u2584 \u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2588\u2584\u2588\u2588\u2584\u2584\u2588\u2588\u2584\u2584\u2584\u2588\u2588\u2588\u2588\u2588\u2584\u2584\u2588\u2584\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n    */\n            ");
    };
    __decorate([
        property(cc.Label)
    ], CaptureTest.prototype, "lb", void 0);
    CaptureTest = __decorate([
        ccclass
    ], CaptureTest);
    return CaptureTest;
}(cc.Component));
exports.default = CaptureTest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9DYXB0dXJlVGVzdC9DYXB0dXJlVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0M7QUFFbEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUE4SkM7UUE1SkcsUUFBRSxHQUFhLElBQUksQ0FBQTs7SUE0SnZCLENBQUM7SUF6Slcsc0NBQWdCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEdBQUcsMkVBQWlDLElBQUksQ0FBQyxHQUFHLEVBQUksQ0FBQTtRQUU5RCxnRkFBZ0Y7UUFDaEYsSUFBSSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUE7UUFDN0MsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQTtRQUMxRywwQkFBMEI7UUFDMUIsTUFBTSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFFaEMsMkdBQTJHO1FBQzNHLElBQUksT0FBTyxHQUFH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LElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNsQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDVCxDQUFDO0lBR0QsNEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQ0gsa3pIQTZCQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBM0pEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0E7SUFGRixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBOEovQjtJQUFELGtCQUFDO0NBOUpELEFBOEpDLENBOUp3QyxFQUFFLENBQUMsU0FBUyxHQThKcEQ7a0JBOUpvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW5jb2RlSlBHIH0gZnJvbSBcIi4vRW5jb2RlSlBHXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FwdHVyZVRlc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGI6IGNjLkxhYmVsID0gbnVsbFxyXG5cclxuXHJcbiAgICBwcml2YXRlIGVuY29kZUpwZ0NhcHR1cmUoKSB7XHJcbiAgICAgICAgdGhpcy5sYi5zdHJpbmcgPSBgZW5jb2RlSnBnQ2FwdHVyZSBcXG7nu5Pmnpzop4HmjqfliLblj7Dml6Xlv5cgXFxuJHtEYXRlLm5vdygpfWBcclxuXHJcbiAgICAgICAgLy8g5q2k5Luj56CB5LuF6YCC55So5LqOIHdlYiDlubPlj7DjgILopoHlnKggbmF0aXZlIOW5s+WPsOS4reS9v+eUqOi/meS4quWKn+iDve+8jOivt+WPguiAgyBleGFtcGxlIC1jYXNlIOS4reeahCBjYXB0dXJlX3RvX25hdGl2ZSDlnLrmma/jgIJcclxuICAgICAgICBsZXQgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgbm9kZS56SW5kZXggPSBjYy5tYWNyby5NQVhfWklOREVYO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICBsZXQgY2FtZXJhID0gbm9kZS5hZGRDb21wb25lbnQoY2MuQ2FtZXJhKTtcclxuICAgICAgICBjYW1lcmEuYmFja2dyb3VuZENvbG9yID0gY2MuQ29sb3IuVFJBTlNQQVJFTlRcclxuICAgICAgICBjYW1lcmEuY2xlYXJGbGFncyA9IGNjLkNhbWVyYS5DbGVhckZsYWdzLkRFUFRIIHwgY2MuQ2FtZXJhLkNsZWFyRmxhZ3MuU1RFTkNJTCB8IGNjLkNhbWVyYS5DbGVhckZsYWdzLkNPTE9SXHJcbiAgICAgICAgLy8g6K6+572u5L2g5oOz6KaB55qE5oiq5Zu+5YaF5a6555qEIGN1bGxpbmdNYXNrXHJcbiAgICAgICAgY2FtZXJhLmN1bGxpbmdNYXNrID0gMHhmZmZmZmZmZjtcclxuXHJcbiAgICAgICAgLy8g5paw5bu65LiA5LiqIFJlbmRlclRleHR1cmXvvIzlubbkuJTorr7nva4gY2FtZXJhIOeahCB0YXJnZXRUZXh0dXJlIOS4uuaWsOW7uueahCBSZW5kZXJUZXh0dXJl77yM6L+Z5qC3IGNhbWVyYSDnmoTlhoXlrrnlsIbkvJrmuLLmn5PliLDmlrDlu7rnmoQgUmVuZGVyVGV4dHVyZSDkuK3jgIJcclxuICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XHJcbiAgICAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgbGV0IGdsID0gY2MuZ2FtZS5fcmVuZGVyQ29udGV4dDtcclxuICAgICAgICAvLyDlpoLmnpzmiKrlm77lhoXlrrnkuK3kuI3ljIXlkKsgTWFzayDnu4Tku7bvvIzlj6/ku6XkuI3nlKjkvKDpgJLnrKzkuInkuKrlj4LmlbBcclxuICAgICAgICB0ZXh0dXJlLmluaXRXaXRoU2l6ZSh0aGlzLm5vZGUucGFyZW50LndpZHRoLCB0aGlzLm5vZGUucGFyZW50LmhlaWdodCwgZ2wuU1RFTkNJTF9JTkRFWDgpO1xyXG4gICAgICAgIGNhbWVyYS50YXJnZXRUZXh0dXJlID0gdGV4dHVyZTtcclxuXHJcbiAgICAgICAgLy8g5riy5p+T5LiA5qyh5pGE5YOP5py677yM5Y2z5pu05paw5LiA5qyh5YaF5a655YiwIFJlbmRlclRleHR1cmUg5LitXHJcbiAgICAgICAgY2FtZXJhLnJlbmRlcigpO1xyXG4gICAgICAgIGNhbWVyYS5lbmFibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIOi/meagt+aIkeS7rOWwseiDveS7jiBSZW5kZXJUZXh0dXJlIOS4reiOt+WPluWIsOaVsOaNruS6hlxyXG4gICAgICAgIGxldCBkYXRhID0gdGV4dHVyZS5yZWFkUGl4ZWxzKCk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gdGV4dHVyZS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gdGV4dHVyZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGZsaXBZRGF0YSA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogNCk7XHJcbiAgICAgICAgbGV0IHJvd0J5dGVzID0gd2lkdGggKiA0O1xyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGhlaWdodDsgcm93KyspIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0Um93ID0gaGVpZ2h0IC0gMSAtIHJvdztcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gc3RhcnRSb3cgKiB3aWR0aCAqIDQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Qnl0ZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZmxpcFlEYXRhW3JvdyAqIHdpZHRoICogNCArIGldID0gZGF0YVtzdGFydCArIGldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICBcclxuXHJcbiAgICAgICAgY29uc3QgcmF3SW1hZ2VEYXRhID0ge1xyXG4gICAgICAgICAgICBkYXRhOiBmbGlwWURhdGEsXHJcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBqcGVnSW1hZ2VEYXRhID0gZW5jb2RlSlBHKHJhd0ltYWdlRGF0YSwgNTApO1xyXG4gICAgICAgIGNjLmxvZygnanBlZ0ltYWdlRGF0YScsIGpwZWdJbWFnZURhdGEpO1xyXG4gICAgICAgIGZ1bmN0aW9uIHVpbnQ4VG9TdHJpbmcoYnVmKSB7XHJcbiAgICAgICAgICAgIHZhciBpLCBsZW5ndGgsIG91dCA9ICcnO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSBidWYubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIG91dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYmFzZTY0ID0gYnRvYSh1aW50OFRvU3RyaW5nKGpwZWdJbWFnZURhdGEuZGF0YSkpOy8vXHJcbiAgICAgICAgY2Mud2FybignYmFzZTY0JywgXCJkYXRhOmltYWdlL2pwZztiYXNlNjQsXCIgKyBiYXNlNjQpXHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgbm9kZS5kZXN0cm95KClcclxuICAgICAgICB9LCAwKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNhbnZhc1RvRGF0YVVSTENhcHR1cmUoKSB7XHJcbiAgICAgICAgdGhpcy5sYi5zdHJpbmcgPSBgY2FudmFzIHRvRGF0YVVSTCBcXG7nu5Pmnpzop4HmjqfliLblj7Dml6Xlv5cgXFxuJHtEYXRlLm5vdygpfWBcclxuICAgICAgICAvLyDmraTku6PnoIHku4XpgILnlKjkuo4gd2ViIOW5s+WPsOOAguimgeWcqCBuYXRpdmUg5bmz5Y+w5Lit5L2/55So6L+Z5Liq5Yqf6IO977yM6K+35Y+C6ICDIGV4YW1wbGUtY2FzZSDkuK3nmoQgY2FwdHVyZV90b19uYXRpdmUg5Zy65pmv44CCXHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5ub2RlLnBhcmVudDtcclxuICAgICAgICBsZXQgY2FtZXJhID0gbm9kZS5hZGRDb21wb25lbnQoY2MuQ2FtZXJhKTtcclxuICAgICAgICBjYW1lcmEuYmFja2dyb3VuZENvbG9yID0gY2MuQ29sb3IuVFJBTlNQQVJFTlRcclxuICAgICAgICBjYW1lcmEuY2xlYXJGbGFncyA9IGNjLkNhbWVyYS5DbGVhckZsYWdzLkRFUFRIIHwgY2MuQ2FtZXJhLkNsZWFyRmxhZ3MuU1RFTkNJTCB8IGNjLkNhbWVyYS5DbGVhckZsYWdzLkNPTE9SXHJcbiAgICAgICAgLy8g6K6+572u5L2g5oOz6KaB55qE5oiq5Zu+5YaF5a6555qEIGN1bGxpbmdNYXNrXHJcbiAgICAgICAgY2FtZXJhLmN1bGxpbmdNYXNrID0gMHhmZmZmZmZmZjtcclxuXHJcbiAgICAgICAgLy8g5paw5bu65LiA5LiqIFJlbmRlclRleHR1cmXvvIzlubbkuJTorr7nva4gY2FtZXJhIOeahCB0YXJnZXRUZXh0dXJlIOS4uuaWsOW7uueahCBSZW5kZXJUZXh0dXJl77yM6L+Z5qC3IGNhbWVyYSDnmoTlhoXlrrnlsIbkvJrmuLLmn5PliLDmlrDlu7rnmoQgUmVuZGVyVGV4dHVyZSDkuK3jgIJcclxuICAgICAgICBsZXQgdGV4dHVyZSA9IG5ldyBjYy5SZW5kZXJUZXh0dXJlKCk7XHJcbiAgICAgICAgbGV0IGdsID0gY2MuZ2FtZS5fcmVuZGVyQ29udGV4dDtcclxuICAgICAgICAvLyDlpoLmnpzmiKrlm77lhoXlrrnkuK3kuI3ljIXlkKsgTWFzayDnu4Tku7bvvIzlj6/ku6XkuI3nlKjkvKDpgJLnrKzkuInkuKrlj4LmlbBcclxuICAgICAgICB0ZXh0dXJlLmluaXRXaXRoU2l6ZSh0aGlzLm5vZGUucGFyZW50LndpZHRoLCB0aGlzLm5vZGUucGFyZW50LmhlaWdodCwgZ2wuU1RFTkNJTF9JTkRFWDgpO1xyXG4gICAgICAgIGNhbWVyYS50YXJnZXRUZXh0dXJlID0gdGV4dHVyZTtcclxuXHJcbiAgICAgICAgLy8g5riy5p+T5LiA5qyh5pGE5YOP5py677yM5Y2z5pu05paw5LiA5qyh5YaF5a655YiwIFJlbmRlclRleHR1cmUg5LitXHJcbiAgICAgICAgY2FtZXJhLnJlbmRlcigpO1xyXG5cclxuICAgICAgICAvLyDov5nmoLfmiJHku6zlsLHog73ku44gUmVuZGVyVGV4dHVyZSDkuK3ojrflj5bliLDmlbDmja7kuoZcclxuICAgICAgICBsZXQgZGF0YSA9IHRleHR1cmUucmVhZFBpeGVscygpO1xyXG5cclxuICAgICAgICAvLyDmjqXkuIvmnaXlsLHlj6/ku6Xlr7nov5nkupvmlbDmja7ov5vooYzmk43kvZzkuoZcclxuICAgICAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgbGV0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNhbnZhcy53aWR0aCA9IHRleHR1cmUud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGNhbnZhcy5oZWlnaHQgPSB0ZXh0dXJlLmhlaWdodDtcclxuXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGV4dHVyZS53aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gdGV4dHVyZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGxldCByb3dCeXRlcyA9IHdpZHRoICogNDtcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBoZWlnaHQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFJvdyA9IGhlaWdodCAtIDEgLSByb3c7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZURhdGEgPSBjdHguY3JlYXRlSW1hZ2VEYXRhKHdpZHRoLCAxKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0ID0gc3RhcnRSb3cgKiB3aWR0aCAqIDQ7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Qnl0ZXM7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaV0gPSBkYXRhW3N0YXJ0ICsgaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIHJvdyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGF0YVVSTCA9IGNhbnZhcy50b0RhdGFVUkwoXCJpbWFnZS9qcGVnXCIpO1xyXG4gICAgICAgIGNjLndhcm4oJ2NhbnZhc1RvRGF0YVVSTENhcHR1cmUnLCBkYXRhVVJMKVxyXG4gICAgICAgIC8vIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIC8vIGltZy5zcmMgPSBkYXRhVVJMO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgfSwgMClcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Mb2FkICgpe1xyXG4gICAgICAgIGNjLndhcm4oXHJcbiAgICAgICAgICAgIGBcclxuLypcclxuaHR0cHM6Ly9tcC53ZWl4aW4ucXEuY29tL3MvSHQwa0liYWVCRWRzX3dVZVVsdThKUVxyXG5cclxuKi9cclxuXHJcbi8vIOasoui/juWFs+azqOW+ruS/oeWFrOS8l+WPt1vnmb3njonml6DlhrBdXHJcblxyXG4vKipcclxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilogg4paE4paE4paE4paE4paEIOKWiOKWgOKWiCDilojiloTilojilojiloDiloQg4paE4paE4paI4paIIOKWhOKWhOKWhOKWhOKWhCDilojilojilojilohcclxu4paI4paI4paI4paIIOKWiCAgIOKWiCDilojiloDiloDiloDilogg4paA4paE4paA4paA4paA4paI4paE4paA4paIIOKWiCAgIOKWiCDilojilojilojilohcclxu4paI4paI4paI4paIIOKWiOKWhOKWhOKWhOKWiCDilojiloAg4paI4paA4paA4paAIOKWgOKWhOKWhCDiloQg4paIIOKWiOKWhOKWhOKWhOKWiCDilojilojilojilohcclxu4paI4paI4paI4paI4paE4paE4paE4paE4paE4paE4paE4paI4paE4paAIOKWgOKWhOKWiCDiloDiloTilojiloTiloAg4paI4paE4paE4paE4paE4paE4paE4paE4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWhOKWhCAg4paE4paA4paE4paEIOKWhOKWgOKWhOKWgOKWgOKWhOKWhOKWhCDilogg4paIIOKWgCDiloDiloTilojiloTiloDilojilojilojilohcclxu4paI4paI4paI4paI4paAIOKWhCAg4paI4paE4paI4paA4paI4paE4paI4paA4paIICDiloDiloQg4paIIOKWgCDiloTiloTilojilojiloDilojilojilojilojilohcclxu4paI4paI4paI4paIIOKWhOKWgOKWhOKWhOKWgOKWhCDilojiloTiloTilojiloQg4paA4paE4paAIOKWgCDiloAg4paA4paA4paA4paEIOKWiOKWgOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojiloAg4paI4paIIOKWgOKWhCDiloTilojilogg4paE4paI4paA4paEIOKWiOKWiOKWgCDiloAg4paI4paE4paI4paE4paA4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiCAgIOKWhOKWiOKWiOKWhOKWgCDilojiloDiloTiloDiloTiloDiloTiloTiloTiloQg4paA4paI4paAIOKWgOKWgCDilojiloDilojilojilojilohcclxu4paI4paI4paI4paIIOKWiOKWhCDilogg4paEIOKWiOKWgCDilojiloDiloTilojiloTiloTiloTiloTiloDiloTiloTilojiloTiloTiloTiloTiloDilojilojilojilojilohcclxu4paI4paI4paI4paI4paE4paI4paE4paI4paE4paI4paE4paI4paAIOKWhOKWiOKWhCAgIOKWgOKWhOKWiOKWiCDiloTiloTiloQg4paAICAg4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiCDiloTiloTiloTiloTiloQg4paI4paE4paI4paIIOKWhOKWiOKWgCAg4paEICAg4paI4paE4paIICDiloTiloDilojilojilojilojilohcclxu4paI4paI4paI4paIIOKWiCAgIOKWiCDilogg4paE4paI4paEIOKWgCAg4paA4paA4paI4paIIOKWhOKWhOKWhOKWhCDiloTiloAg4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiCDilojiloTiloTiloTilogg4paIIOKWhOKWhOKWgCDiloTilojiloTilojiloTilojiloQg4paA4paEICAg4paEIOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojiloTiloTiloTiloTiloTiloTiloTilojiloTilojilojiloTiloTilojilojiloTiloTiloTilojilojilojilojilojiloTiloTilojiloTilojilojilojilojilojilohcclxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG4gICAgKi9cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXX0=