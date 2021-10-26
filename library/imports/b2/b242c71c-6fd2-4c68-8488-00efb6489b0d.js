"use strict";
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