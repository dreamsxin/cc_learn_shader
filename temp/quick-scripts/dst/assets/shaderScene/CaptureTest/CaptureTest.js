
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
// demo06/CaptureTest.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9kZW1vMDYvQ2FwdHVyZVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBRWxDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBOEpDO1FBNUpHLFFBQUUsR0FBYSxJQUFJLENBQUE7O0lBNEp2QixDQUFDO0lBekpXLHNDQUFnQixHQUF4QjtRQUNJLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFHLDJFQUFpQyxJQUFJLENBQUMsR0FBRyxFQUFJLENBQUE7UUFFOUQsZ0ZBQWdGO1FBQ2hGLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFBO1FBQzdDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUE7UUFDMUcsMEJBQTBCO1FBQzFCLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBRWhDLDJHQUEyRztRQUMzRyxJQUFJLE9BQU8sR0FBRyxJQUFJLEVBQUUsQ0FBQyxh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QUFFLENBQUE7UUFDbEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUdELDRCQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsSUFBSSxDQUNILGt6SEE2QkMsQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQTNKRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzJDQUNBO0lBRkYsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQThKL0I7SUFBRCxrQkFBQztDQTlKRCxBQThKQyxDQTlKd0MsRUFBRSxDQUFDLFNBQVMsR0E4SnBEO2tCQTlKb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVuY29kZUpQRyB9IGZyb20gXCIuL0VuY29kZUpQR1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcHR1cmVUZXN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxiOiBjYy5MYWJlbCA9IG51bGxcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBlbmNvZGVKcGdDYXB0dXJlKCkge1xyXG4gICAgICAgIHRoaXMubGIuc3RyaW5nID0gYGVuY29kZUpwZ0NhcHR1cmUgXFxu57uT5p6c6KeB5o6n5Yi25Y+w5pel5b+XIFxcbiR7RGF0ZS5ub3coKX1gXHJcblxyXG4gICAgICAgIC8vIOatpOS7o+eggeS7hemAgueUqOS6jiB3ZWIg5bmz5Y+w44CC6KaB5ZyoIG5hdGl2ZSDlubPlj7DkuK3kvb/nlKjov5nkuKrlip/og73vvIzor7flj4LogIMgZXhhbXBsZSAtY2FzZSDkuK3nmoQgY2FwdHVyZV90b19uYXRpdmUg5Zy65pmv44CCXHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIG5vZGUuekluZGV4ID0gY2MubWFjcm8uTUFYX1pJTkRFWDtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgbGV0IGNhbWVyYSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkNhbWVyYSk7XHJcbiAgICAgICAgY2FtZXJhLmJhY2tncm91bmRDb2xvciA9IGNjLkNvbG9yLlRSQU5TUEFSRU5UXHJcbiAgICAgICAgY2FtZXJhLmNsZWFyRmxhZ3MgPSBjYy5DYW1lcmEuQ2xlYXJGbGFncy5ERVBUSCB8IGNjLkNhbWVyYS5DbGVhckZsYWdzLlNURU5DSUwgfCBjYy5DYW1lcmEuQ2xlYXJGbGFncy5DT0xPUlxyXG4gICAgICAgIC8vIOiuvue9ruS9oOaDs+imgeeahOaIquWbvuWGheWuueeahCBjdWxsaW5nTWFza1xyXG4gICAgICAgIGNhbWVyYS5jdWxsaW5nTWFzayA9IDB4ZmZmZmZmZmY7XHJcblxyXG4gICAgICAgIC8vIOaWsOW7uuS4gOS4qiBSZW5kZXJUZXh0dXJl77yM5bm25LiU6K6+572uIGNhbWVyYSDnmoQgdGFyZ2V0VGV4dHVyZSDkuLrmlrDlu7rnmoQgUmVuZGVyVGV4dHVyZe+8jOi/meagtyBjYW1lcmEg55qE5YaF5a655bCG5Lya5riy5p+T5Yiw5paw5bu655qEIFJlbmRlclRleHR1cmUg5Lit44CCXHJcbiAgICAgICAgbGV0IHRleHR1cmUgPSBuZXcgY2MuUmVuZGVyVGV4dHVyZSgpO1xyXG4gICAgICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgICAgIGxldCBnbCA9IGNjLmdhbWUuX3JlbmRlckNvbnRleHQ7XHJcbiAgICAgICAgLy8g5aaC5p6c5oiq5Zu+5YaF5a655Lit5LiN5YyF5ZCrIE1hc2sg57uE5Lu277yM5Y+v5Lul5LiN55So5Lyg6YCS56ys5LiJ5Liq5Y+C5pWwXHJcbiAgICAgICAgdGV4dHVyZS5pbml0V2l0aFNpemUodGhpcy5ub2RlLnBhcmVudC53aWR0aCwgdGhpcy5ub2RlLnBhcmVudC5oZWlnaHQsIGdsLlNURU5DSUxfSU5ERVg4KTtcclxuICAgICAgICBjYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRleHR1cmU7XHJcblxyXG4gICAgICAgIC8vIOa4suafk+S4gOasoeaRhOWDj+acuu+8jOWNs+abtOaWsOS4gOasoeWGheWuueWIsCBSZW5kZXJUZXh0dXJlIOS4rVxyXG4gICAgICAgIGNhbWVyYS5yZW5kZXIoKTtcclxuICAgICAgICBjYW1lcmEuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyDov5nmoLfmiJHku6zlsLHog73ku44gUmVuZGVyVGV4dHVyZSDkuK3ojrflj5bliLDmlbDmja7kuoZcclxuICAgICAgICBsZXQgZGF0YSA9IHRleHR1cmUucmVhZFBpeGVscygpO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHRleHR1cmUud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHRleHR1cmUuaGVpZ2h0O1xyXG5cclxuICAgICAgICBjb25zdCBmbGlwWURhdGEgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xyXG4gICAgICAgIGxldCByb3dCeXRlcyA9IHdpZHRoICogNDtcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBoZWlnaHQ7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFJvdyA9IGhlaWdodCAtIDEgLSByb3c7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHN0YXJ0Um93ICogd2lkdGggKiA0O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0J5dGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZsaXBZRGF0YVtyb3cgKiB3aWR0aCAqIDQgKyBpXSA9IGRhdGFbc3RhcnQgKyBpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgXHJcblxyXG4gICAgICAgIGNvbnN0IHJhd0ltYWdlRGF0YSA9IHtcclxuICAgICAgICAgICAgZGF0YTogZmxpcFlEYXRhLFxyXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QganBlZ0ltYWdlRGF0YSA9IGVuY29kZUpQRyhyYXdJbWFnZURhdGEsIDUwKTtcclxuICAgICAgICBjYy5sb2coJ2pwZWdJbWFnZURhdGEnLCBqcGVnSW1hZ2VEYXRhKTtcclxuICAgICAgICBmdW5jdGlvbiB1aW50OFRvU3RyaW5nKGJ1Zikge1xyXG4gICAgICAgICAgICB2YXIgaSwgbGVuZ3RoLCBvdXQgPSAnJztcclxuICAgICAgICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0gYnVmLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBvdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJhc2U2NCA9IGJ0b2EodWludDhUb1N0cmluZyhqcGVnSW1hZ2VEYXRhLmRhdGEpKTsvL1xyXG4gICAgICAgIGNjLndhcm4oJ2Jhc2U2NCcsIFwiZGF0YTppbWFnZS9qcGc7YmFzZTY0LFwiICsgYmFzZTY0KVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgfSwgMClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjYW52YXNUb0RhdGFVUkxDYXB0dXJlKCkge1xyXG4gICAgICAgIHRoaXMubGIuc3RyaW5nID0gYGNhbnZhcyB0b0RhdGFVUkwgXFxu57uT5p6c6KeB5o6n5Yi25Y+w5pel5b+XIFxcbiR7RGF0ZS5ub3coKX1gXHJcbiAgICAgICAgLy8g5q2k5Luj56CB5LuF6YCC55So5LqOIHdlYiDlubPlj7DjgILopoHlnKggbmF0aXZlIOW5s+WPsOS4reS9v+eUqOi/meS4quWKn+iDve+8jOivt+WPguiAgyBleGFtcGxlLWNhc2Ug5Lit55qEIGNhcHR1cmVfdG9fbmF0aXZlIOWcuuaZr+OAglxyXG4gICAgICAgIGxldCBub2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgbGV0IGNhbWVyYSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkNhbWVyYSk7XHJcbiAgICAgICAgY2FtZXJhLmJhY2tncm91bmRDb2xvciA9IGNjLkNvbG9yLlRSQU5TUEFSRU5UXHJcbiAgICAgICAgY2FtZXJhLmNsZWFyRmxhZ3MgPSBjYy5DYW1lcmEuQ2xlYXJGbGFncy5ERVBUSCB8IGNjLkNhbWVyYS5DbGVhckZsYWdzLlNURU5DSUwgfCBjYy5DYW1lcmEuQ2xlYXJGbGFncy5DT0xPUlxyXG4gICAgICAgIC8vIOiuvue9ruS9oOaDs+imgeeahOaIquWbvuWGheWuueeahCBjdWxsaW5nTWFza1xyXG4gICAgICAgIGNhbWVyYS5jdWxsaW5nTWFzayA9IDB4ZmZmZmZmZmY7XHJcblxyXG4gICAgICAgIC8vIOaWsOW7uuS4gOS4qiBSZW5kZXJUZXh0dXJl77yM5bm25LiU6K6+572uIGNhbWVyYSDnmoQgdGFyZ2V0VGV4dHVyZSDkuLrmlrDlu7rnmoQgUmVuZGVyVGV4dHVyZe+8jOi/meagtyBjYW1lcmEg55qE5YaF5a655bCG5Lya5riy5p+T5Yiw5paw5bu655qEIFJlbmRlclRleHR1cmUg5Lit44CCXHJcbiAgICAgICAgbGV0IHRleHR1cmUgPSBuZXcgY2MuUmVuZGVyVGV4dHVyZSgpO1xyXG4gICAgICAgIGxldCBnbCA9IGNjLmdhbWUuX3JlbmRlckNvbnRleHQ7XHJcbiAgICAgICAgLy8g5aaC5p6c5oiq5Zu+5YaF5a655Lit5LiN5YyF5ZCrIE1hc2sg57uE5Lu277yM5Y+v5Lul5LiN55So5Lyg6YCS56ys5LiJ5Liq5Y+C5pWwXHJcbiAgICAgICAgdGV4dHVyZS5pbml0V2l0aFNpemUodGhpcy5ub2RlLnBhcmVudC53aWR0aCwgdGhpcy5ub2RlLnBhcmVudC5oZWlnaHQsIGdsLlNURU5DSUxfSU5ERVg4KTtcclxuICAgICAgICBjYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRleHR1cmU7XHJcblxyXG4gICAgICAgIC8vIOa4suafk+S4gOasoeaRhOWDj+acuu+8jOWNs+abtOaWsOS4gOasoeWGheWuueWIsCBSZW5kZXJUZXh0dXJlIOS4rVxyXG4gICAgICAgIGNhbWVyYS5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgLy8g6L+Z5qC35oiR5Lus5bCx6IO95LuOIFJlbmRlclRleHR1cmUg5Lit6I635Y+W5Yiw5pWw5o2u5LqGXHJcbiAgICAgICAgbGV0IGRhdGEgPSB0ZXh0dXJlLnJlYWRQaXhlbHMoKTtcclxuXHJcbiAgICAgICAgLy8g5o6l5LiL5p2l5bCx5Y+v5Lul5a+56L+Z5Lqb5pWw5o2u6L+b6KGM5pON5L2c5LqGXHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBsZXQgd2lkdGggPSBjYW52YXMud2lkdGggPSB0ZXh0dXJlLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0ID0gdGV4dHVyZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHRleHR1cmUud2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRleHR1cmUuaGVpZ2h0O1xyXG5cclxuICAgICAgICBsZXQgcm93Qnl0ZXMgPSB3aWR0aCAqIDQ7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgaGVpZ2h0OyByb3crKykge1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRSb3cgPSBoZWlnaHQgLSAxIC0gcm93O1xyXG4gICAgICAgICAgICBsZXQgaW1hZ2VEYXRhID0gY3R4LmNyZWF0ZUltYWdlRGF0YSh3aWR0aCwgMSk7XHJcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHN0YXJ0Um93ICogd2lkdGggKiA0O1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd0J5dGVzOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGltYWdlRGF0YS5kYXRhW2ldID0gZGF0YVtzdGFydCArIGldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCByb3cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRhdGFVUkwgPSBjYW52YXMudG9EYXRhVVJMKFwiaW1hZ2UvanBlZ1wiKTtcclxuICAgICAgICBjYy53YXJuKCdjYW52YXNUb0RhdGFVUkxDYXB0dXJlJywgZGF0YVVSTClcclxuICAgICAgICAvLyBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAvLyBpbWcuc3JjID0gZGF0YVVSTDtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgIH0sIDApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uTG9hZCAoKXtcclxuICAgICAgICBjYy53YXJuKFxyXG4gICAgICAgICAgICBgXHJcbi8qXHJcbmh0dHBzOi8vbXAud2VpeGluLnFxLmNvbS9zL0h0MGtJYmFlQkVkc193VWVVbHU4SlFcclxuXHJcbiovXHJcblxyXG4vLyDmrKLov47lhbPms6jlvq7kv6HlhazkvJflj7db55m9546J5peg5YawXVxyXG5cclxuLyoqXHJcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcclxu4paI4paI4paI4paIIOKWhOKWhOKWhOKWhOKWhCDilojiloDilogg4paI4paE4paI4paI4paA4paEIOKWhOKWhOKWiOKWiCDiloTiloTiloTiloTiloQg4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiCDiloggICDilogg4paI4paA4paA4paA4paIIOKWgOKWhOKWgOKWgOKWgOKWiOKWhOKWgOKWiCDiloggICDilogg4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiCDilojiloTiloTiloTilogg4paI4paAIOKWiOKWgOKWgOKWgCDiloDiloTiloQg4paEIOKWiCDilojiloTiloTiloTilogg4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWhOKWhOKWhOKWhOKWhOKWhOKWhOKWiOKWhOKWgCDiloDiloTilogg4paA4paE4paI4paE4paAIOKWiOKWhOKWhOKWhOKWhOKWhOKWhOKWhOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojiloTiloQgIOKWhOKWgOKWhOKWhCDiloTiloDiloTiloDiloDiloTiloTiloQg4paIIOKWiCDiloAg4paA4paE4paI4paE4paA4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWgCDiloQgIOKWiOKWhOKWiOKWgOKWiOKWhOKWiOKWgOKWiCAg4paA4paEIOKWiCDiloAg4paE4paE4paI4paI4paA4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiCDiloTiloDiloTiloTiloDiloQg4paI4paE4paE4paI4paEIOKWgOKWhOKWgCDiloAg4paAIOKWgOKWgOKWgOKWhCDilojiloDilojilojilojilohcclxu4paI4paI4paI4paI4paAIOKWiOKWiCDiloDiloQg4paE4paI4paIIOKWhOKWiOKWgOKWhCDilojilojiloAg4paAIOKWiOKWhOKWiOKWhOKWgOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojiloggICDiloTilojilojiloTiloAg4paI4paA4paE4paA4paE4paA4paE4paE4paE4paEIOKWgOKWiOKWgCDiloDiloAg4paI4paA4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiCDilojiloQg4paIIOKWhCDilojiloAg4paI4paA4paE4paI4paE4paE4paE4paE4paA4paE4paE4paI4paE4paE4paE4paE4paA4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWhOKWiOKWhOKWiOKWhOKWiOKWhOKWiOKWgCDiloTilojiloQgICDiloDiloTilojilogg4paE4paE4paEIOKWgCAgIOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilogg4paE4paE4paE4paE4paEIOKWiOKWhOKWiOKWiCDiloTilojiloAgIOKWhCAgIOKWiOKWhOKWiCAg4paE4paA4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiCDiloggICDilogg4paIIOKWhOKWiOKWhCDiloAgIOKWgOKWgOKWiOKWiCDiloTiloTiloTiloQg4paE4paAIOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilogg4paI4paE4paE4paE4paIIOKWiCDiloTiloTiloAg4paE4paI4paE4paI4paE4paI4paEIOKWgOKWhCAgIOKWhCDilojilojilojilojilohcclxu4paI4paI4paI4paI4paE4paE4paE4paE4paE4paE4paE4paI4paE4paI4paI4paE4paE4paI4paI4paE4paE4paE4paI4paI4paI4paI4paI4paE4paE4paI4paE4paI4paI4paI4paI4paI4paIXHJcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxyXG7ilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcclxuICAgICovXHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19