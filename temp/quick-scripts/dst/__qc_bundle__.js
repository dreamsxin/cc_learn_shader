
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
require('./assets/Scenes/GoToScene');
require('./assets/Script/ccutils/multiresolution/ContentAdapter');
require('./assets/shaderScene/BrightSaturaContrastTest/BrightSaturaContrastAssembler/BrightSaturaContrastAssembler');
require('./assets/shaderScene/BrightSaturaContrastTest/BrightSaturaContrastAssembler/BrightSaturaContrastAssemblerSprite');
require('./assets/shaderScene/BrightSaturaContrastTest/BrightSaturaContrastTest');
require('./assets/shaderScene/BrightSaturaContrastTest/BrightSaturaContrastUniform/BrightSaturaContrastUniform');
require('./assets/shaderScene/CaptureTest/CaptureTest');
require('./assets/shaderScene/CaptureTest/EncodeJPG');
require('./assets/shaderScene/ColorAssembler2D/ColorAssembler2D');
require('./assets/shaderScene/LiquidBox2dTest/LiquidBox2dTest');
require('./assets/shaderScene/MeshPolygonSpriteTest/MeshPolygonSprite');
require('./assets/shaderScene/MosaicEffectScene/MosaicEffectScene');
require('./assets/shaderScene/common/GTAssembler2D');
require('./assets/shaderScene/common/GTSimpleSpriteAssembler2D');
require('./assets/shaderScene/dissolveTest/DissolveTest');
require('./assets/shaderScene/dissolveTest/GrayEffectScene');
require('./assets/shaderScene/sprite2dLight/Sprite2dLightTest');
require('./assets/shaderScene/waterEffectScene/touch');
require('./assets/shaderScene/waterEffectScene/wave');

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
                    var __filename = 'preview-scripts/assets/Scenes/GoToScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36bcaLAH0xPprqVrxzX0FT/', 'GoToScene');
// Scenes/GoToScene.ts

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
var GoToScene = /** @class */ (function (_super) {
    __extends(GoToScene, _super);
    function GoToScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sceneName = 'home';
        return _this;
    }
    GoToScene.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_END, this.gotoScene, this);
    };
    GoToScene.prototype.gotoScene = function () {
        cc.director.loadScene(this.sceneName);
    };
    __decorate([
        property
    ], GoToScene.prototype, "sceneName", void 0);
    GoToScene = __decorate([
        ccclass
    ], GoToScene);
    return GoToScene;
}(cc.Component));
exports.default = GoToScene;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY2VuZXMvR29Ub1NjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBYUM7UUFWRyxlQUFTLEdBQVcsTUFBTSxDQUFDOztJQVUvQixDQUFDO0lBUkcsMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCw2QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFSRDtRQURDLFFBQVE7Z0RBQ2tCO0lBSFYsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQWE3QjtJQUFELGdCQUFDO0NBYkQsQUFhQyxDQWJzQyxFQUFFLENBQUMsU0FBUyxHQWFsRDtrQkFib0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvVG9TY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHlcbiAgICBzY2VuZU5hbWU6IHN0cmluZyA9ICdob21lJztcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5nb3RvU2NlbmUsIHRoaXMpO1xuICAgIH1cblxuICAgIGdvdG9TY2VuZSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKHRoaXMuc2NlbmVOYW1lKTtcbiAgICB9XG5cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/ColorAssembler2D/ColorAssembler2D.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0bef19S8UJFmKSg8UJ1+nuW', 'ColorAssembler2D');
// shaderScene/ColorAssembler2D/ColorAssembler2D.ts

"use strict";
// author: http://lamyoung.com/
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent, menu = _a.menu;
var ColorAssembler2D = /** @class */ (function (_super) {
    __extends(ColorAssembler2D, _super);
    function ColorAssembler2D() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._colors = [];
        return _this;
    }
    Object.defineProperty(ColorAssembler2D.prototype, "colors", {
        get: function () {
            return this._colors;
        },
        set: function (colors) {
            this._colors = colors;
            this._updateColors();
        },
        enumerable: false,
        configurable: true
    });
    ColorAssembler2D.prototype.onEnable = function () {
        cc.director.once(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
    };
    ColorAssembler2D.prototype.onDisable = function () {
        cc.director.off(cc.Director.EVENT_AFTER_DRAW, this._updateColors, this);
        this.node['_renderFlag'] |= cc['RenderFlow'].FLAG_COLOR;
    };
    ColorAssembler2D.prototype._updateColors = function () {
        var cmp = this.getComponent(cc.RenderComponent);
        if (!cmp)
            return;
        var _assembler = cmp['_assembler'];
        if (!(_assembler instanceof cc['Assembler2D']))
            return;
        // const uintVerts = _assembler._renderData.uintVDatas[0];
        var uintVerts = _assembler["_renderData"].uintVDatas[0];
        if (!uintVerts)
            return;
        var color = this.node.color;
        var floatsPerVert = _assembler["floatsPerVert"];
        var colorOffset = _assembler["colorOffset"];
        var count = 0;
        for (var i = colorOffset, l = uintVerts.length; i < l; i += floatsPerVert) {
            uintVerts[i] = (this.colors[count++] || color)['_val'];
        }
    };
    __decorate([
        property
    ], ColorAssembler2D.prototype, "_colors", void 0);
    __decorate([
        property({ type: [cc.Color] })
    ], ColorAssembler2D.prototype, "colors", null);
    ColorAssembler2D = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.RenderComponent),
        menu('i18n:MAIN_MENU.component.renderers/ColorAssembler2D-lamyoung.com')
    ], ColorAssembler2D);
    return ColorAssembler2D;
}(cc.Component));
exports.default = ColorAssembler2D;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9Db2xvckFzc2VtYmxlcjJEL0NvbG9yQXNzZW1ibGVyMkQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQUEsS0FBbUUsRUFBRSxDQUFDLFVBQVUsRUFBOUUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFBLEVBQUUsZ0JBQWdCLHNCQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBTXZGO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBd0NDO1FBckNXLGFBQU8sR0FBZSxFQUFFLENBQUM7O0lBcUNyQyxDQUFDO0lBbkNHLHNCQUFXLG9DQUFNO2FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFDRCxVQUFrQixNQUFNO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixDQUFDOzs7T0FKQTtJQU1ELG1DQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQzVELENBQUM7SUFFTyx3Q0FBYSxHQUFyQjtRQUNJLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTztRQUNqQixJQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLENBQUMsVUFBVSxZQUFZLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUFFLE9BQU87UUFDdkQsMERBQTBEO1FBQzFELElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPO1FBQ3ZCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksYUFBYSxFQUFFO1lBQ3ZFLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMxRDtJQUNMLENBQUM7SUFsQ0Q7UUFEQyxRQUFRO3FEQUN3QjtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2tEQUc5QjtJQVBnQixnQkFBZ0I7UUFKcEMsT0FBTztRQUNQLGlCQUFpQjtRQUNqQixnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxrRUFBa0UsQ0FBQztPQUNwRCxnQkFBZ0IsQ0F3Q3BDO0lBQUQsdUJBQUM7Q0F4Q0QsQUF3Q0MsQ0F4QzZDLEVBQUUsQ0FBQyxTQUFTLEdBd0N6RDtrQkF4Q29CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGF1dGhvcjogaHR0cDovL2xhbXlvdW5nLmNvbS9cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUsIHJlcXVpcmVDb21wb25lbnQsIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkByZXF1aXJlQ29tcG9uZW50KGNjLlJlbmRlckNvbXBvbmVudClcbkBtZW51KCdpMThuOk1BSU5fTUVOVS5jb21wb25lbnQucmVuZGVyZXJzL0NvbG9yQXNzZW1ibGVyMkQtbGFteW91bmcuY29tJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG9yQXNzZW1ibGVyMkQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5XG4gICAgcHJpdmF0ZSBfY29sb3JzOiBjYy5Db2xvcltdID0gW107XG4gICAgQHByb3BlcnR5KHsgdHlwZTogW2NjLkNvbG9yXSB9KVxuICAgIHB1YmxpYyBnZXQgY29sb3JzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29sb3JzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGNvbG9ycyhjb2xvcnMpIHtcbiAgICAgICAgdGhpcy5fY29sb3JzID0gY29sb3JzO1xuICAgICAgICB0aGlzLl91cGRhdGVDb2xvcnMoKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3Iub25jZShjYy5EaXJlY3Rvci5FVkVOVF9BRlRFUl9EUkFXLCB0aGlzLl91cGRhdGVDb2xvcnMsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3Iub2ZmKGNjLkRpcmVjdG9yLkVWRU5UX0FGVEVSX0RSQVcsIHRoaXMuX3VwZGF0ZUNvbG9ycywgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZVsnX3JlbmRlckZsYWcnXSB8PSBjY1snUmVuZGVyRmxvdyddLkZMQUdfQ09MT1I7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlQ29sb3JzKCkge1xuICAgICAgICBjb25zdCBjbXAgPSB0aGlzLmdldENvbXBvbmVudChjYy5SZW5kZXJDb21wb25lbnQpO1xuICAgICAgICBpZiAoIWNtcCkgcmV0dXJuO1xuICAgICAgICBjb25zdCBfYXNzZW1ibGVyID0gY21wWydfYXNzZW1ibGVyJ107XG4gICAgICAgIGlmICghKF9hc3NlbWJsZXIgaW5zdGFuY2VvZiBjY1snQXNzZW1ibGVyMkQnXSkpIHJldHVybjtcbiAgICAgICAgLy8gY29uc3QgdWludFZlcnRzID0gX2Fzc2VtYmxlci5fcmVuZGVyRGF0YS51aW50VkRhdGFzWzBdO1xuICAgICAgICBjb25zdCB1aW50VmVydHMgPSBfYXNzZW1ibGVyW1wiX3JlbmRlckRhdGFcIl0udWludFZEYXRhc1swXTtcbiAgICAgICAgaWYgKCF1aW50VmVydHMpIHJldHVybjtcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLm5vZGUuY29sb3I7XG4gICAgICAgIGNvbnN0IGZsb2F0c1BlclZlcnQgPSBfYXNzZW1ibGVyW1wiZmxvYXRzUGVyVmVydFwiXTtcbiAgICAgICAgY29uc3QgY29sb3JPZmZzZXQgPSBfYXNzZW1ibGVyW1wiY29sb3JPZmZzZXRcIl07XG4gICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSBjb2xvck9mZnNldCwgbCA9IHVpbnRWZXJ0cy5sZW5ndGg7IGkgPCBsOyBpICs9IGZsb2F0c1BlclZlcnQpIHtcbiAgICAgICAgICAgIHVpbnRWZXJ0c1tpXSA9ICh0aGlzLmNvbG9yc1tjb3VudCsrXSB8fCBjb2xvcilbJ192YWwnXTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/BrightSaturaContrastTest/BrightSaturaContrastAssembler/BrightSaturaContrastAssembler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '643a4aINe5NvYWLBXS8AkMb', 'BrightSaturaContrastAssembler');
// shaderScene/BrightSaturaContrastTest/BrightSaturaContrastAssembler/BrightSaturaContrastAssembler.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var GTSimpleSpriteAssembler2D_1 = require("../../common/GTSimpleSpriteAssembler2D");
// 自定义顶点格式，在vfmtPosUvColor基础上，加入 a_brightness  a_saturation  a_constrast
var gfx = cc.gfx;
var vfmtCustom = new gfx.VertexFormat([
    { name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
    { name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
    { name: gfx.ATTR_COLOR, type: gfx.ATTR_TYPE_UINT8, num: 4, normalize: true },
    { name: 'a_brightness', type: gfx.ATTR_TYPE_FLOAT32, num: 1 },
    { name: 'a_saturation', type: gfx.ATTR_TYPE_FLOAT32, num: 1 },
    { name: 'a_constrast', type: gfx.ATTR_TYPE_FLOAT32, num: 1 },
]);
var BrightSaturaContrastAssembler = /** @class */ (function (_super) {
    __extends(BrightSaturaContrastAssembler, _super);
    function BrightSaturaContrastAssembler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 根据自定义顶点格式，调整下述常量
        _this.verticesCount = 4;
        _this.indicesCount = 6;
        _this.uvOffset = 2;
        _this.colorOffset = 4;
        _this.brightnessOffset = 5;
        _this.saturationOffset = 6;
        _this.constrastOffset = 7;
        _this.floatsPerVert = 8;
        _this.brightness = 1;
        _this.saturation = 1;
        _this.constrast = 1;
        return _this;
    }
    BrightSaturaContrastAssembler.prototype.initData = function () {
        var data = this._renderData;
        // createFlexData支持创建指定格式的renderData
        data.createFlexData(0, this.verticesCount, this.indicesCount, this.getVfmt());
        // createFlexData不会填充顶点索引信息，手动补充一下
        var indices = data.iDatas[0];
        var count = indices.length / 6;
        for (var i = 0, idx = 0; i < count; i++) {
            var vertextID = i * 4;
            indices[idx++] = vertextID;
            indices[idx++] = vertextID + 1;
            indices[idx++] = vertextID + 2;
            indices[idx++] = vertextID + 1;
            indices[idx++] = vertextID + 3;
            indices[idx++] = vertextID + 2;
        }
    };
    // 自定义格式以getVfmt()方式提供出去，除了当前assembler，render-flow的其他地方也会用到
    BrightSaturaContrastAssembler.prototype.getVfmt = function () {
        return vfmtCustom;
    };
    // 重载getBuffer(), 返回一个能容纳自定义顶点数据的buffer
    // 默认fillBuffers()方法中会调用到
    BrightSaturaContrastAssembler.prototype.getBuffer = function () {
        return cc.renderer._handle.getBuffer("mesh", this.getVfmt());
    };
    BrightSaturaContrastAssembler.prototype.updateUVs = function (sprite) {
        _super.prototype.updateUVs.call(this, sprite);
        var dstOffset;
        var verts = this._renderData.vDatas[0];
        for (var i = 0; i < this.verticesCount; ++i) {
            // fill 
            var floatsOffset = this.floatsPerVert * i;
            dstOffset = floatsOffset + this.brightnessOffset;
            verts[dstOffset] = this.brightness;
            dstOffset = floatsOffset + this.saturationOffset;
            verts[dstOffset] = this.saturation;
            dstOffset = floatsOffset + this.constrastOffset;
            verts[dstOffset] = this.constrast;
        }
    };
    return BrightSaturaContrastAssembler;
}(GTSimpleSpriteAssembler2D_1.default));
exports.default = BrightSaturaContrastAssembler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9CcmlnaHRTYXR1cmFDb250cmFzdFRlc3QvQnJpZ2h0U2F0dXJhQ29udHJhc3RBc3NlbWJsZXIvQnJpZ2h0U2F0dXJhQ29udHJhc3RBc3NlbWJsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0ZBQStFO0FBRS9FLHdFQUF3RTtBQUN4RSxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO0FBQ2pCLElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQztJQUNwQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtJQUNoRSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtJQUMzRCxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRTtJQUM1RSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO0lBQzdELEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7SUFDN0QsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsaUJBQWlCLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtDQUMvRCxDQUFDLENBQUM7QUFHSDtJQUEyRCxpREFBeUI7SUFBcEY7UUFBQSxxRUFtRUM7UUFs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QUFHLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDaEQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FFckM7SUFFTCxDQUFDO0lBQ0wsb0NBQUM7QUFBRCxDQW5FQSxBQW1FQyxDQW5FMEQsbUNBQXlCLEdBbUVuRiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHVFNpbXBsZVNwcml0ZUFzc2VtYmxlcjJEIGZyb20gXCIuLi8uLi9jb21tb24vR1RTaW1wbGVTcHJpdGVBc3NlbWJsZXIyRFwiO1xuXG4vLyDoh6rlrprkuYnpobbngrnmoLzlvI/vvIzlnKh2Zm10UG9zVXZDb2xvcuWfuuehgOS4iu+8jOWKoOWFpSBhX2JyaWdodG5lc3MgIGFfc2F0dXJhdGlvbiAgYV9jb25zdHJhc3RcbmxldCBnZnggPSBjYy5nZng7XG5jb25zdCB2Zm10Q3VzdG9tID0gbmV3IGdmeC5WZXJ0ZXhGb3JtYXQoW1xuICAgIHsgbmFtZTogZ2Z4LkFUVFJfUE9TSVRJT04sIHR5cGU6IGdmeC5BVFRSX1RZUEVfRkxPQVQzMiwgbnVtOiAyIH0sXG4gICAgeyBuYW1lOiBnZnguQVRUUl9VVjAsIHR5cGU6IGdmeC5BVFRSX1RZUEVfRkxPQVQzMiwgbnVtOiAyIH0sXG4gICAgeyBuYW1lOiBnZnguQVRUUl9DT0xPUiwgdHlwZTogZ2Z4LkFUVFJfVFlQRV9VSU5UOCwgbnVtOiA0LCBub3JtYWxpemU6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdhX2JyaWdodG5lc3MnLCB0eXBlOiBnZnguQVRUUl9UWVBFX0ZMT0FUMzIsIG51bTogMSB9LFxuICAgIHsgbmFtZTogJ2Ffc2F0dXJhdGlvbicsIHR5cGU6IGdmeC5BVFRSX1RZUEVfRkxPQVQzMiwgbnVtOiAxIH0sXG4gICAgeyBuYW1lOiAnYV9jb25zdHJhc3QnLCB0eXBlOiBnZnguQVRUUl9UWVBFX0ZMT0FUMzIsIG51bTogMSB9LFxuXSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJpZ2h0U2F0dXJhQ29udHJhc3RBc3NlbWJsZXIgZXh0ZW5kcyBHVFNpbXBsZVNwcml0ZUFzc2VtYmxlcjJEIHtcbiAgICAvLyDmoLnmja7oh6rlrprkuYnpobbngrnmoLzlvI/vvIzosIPmlbTkuIvov7DluLjph49cbiAgICB2ZXJ0aWNlc0NvdW50ID0gNDtcbiAgICBpbmRpY2VzQ291bnQgPSA2O1xuICAgIHV2T2Zmc2V0ID0gMjtcbiAgICBjb2xvck9mZnNldCA9IDQ7XG4gICAgYnJpZ2h0bmVzc09mZnNldCA9IDU7XG4gICAgc2F0dXJhdGlvbk9mZnNldCA9IDY7XG4gICAgY29uc3RyYXN0T2Zmc2V0ID0gNztcbiAgICBmbG9hdHNQZXJWZXJ0ID0gODtcblxuXG4gICAgYnJpZ2h0bmVzcyA9IDE7XG4gICAgc2F0dXJhdGlvbiA9IDE7XG4gICAgY29uc3RyYXN0ID0gMTtcblxuICAgIGluaXREYXRhKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuX3JlbmRlckRhdGE7XG4gICAgICAgIC8vIGNyZWF0ZUZsZXhEYXRh5pSv5oyB5Yib5bu65oyH5a6a5qC85byP55qEcmVuZGVyRGF0YVxuICAgICAgICBkYXRhLmNyZWF0ZUZsZXhEYXRhKDAsIHRoaXMudmVydGljZXNDb3VudCwgdGhpcy5pbmRpY2VzQ291bnQsIHRoaXMuZ2V0VmZtdCgpKTtcblxuICAgICAgICAvLyBjcmVhdGVGbGV4RGF0YeS4jeS8muWhq+WFhemhtueCuee0ouW8leS/oeaBr++8jOaJi+WKqOihpeWFheS4gOS4i1xuICAgICAgICBsZXQgaW5kaWNlcyA9IGRhdGEuaURhdGFzWzBdO1xuICAgICAgICBsZXQgY291bnQgPSBpbmRpY2VzLmxlbmd0aCAvIDY7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpZHggPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHZlcnRleHRJRCA9IGkgKiA0O1xuICAgICAgICAgICAgaW5kaWNlc1tpZHgrK10gPSB2ZXJ0ZXh0SUQ7XG4gICAgICAgICAgICBpbmRpY2VzW2lkeCsrXSA9IHZlcnRleHRJRCArIDE7XG4gICAgICAgICAgICBpbmRpY2VzW2lkeCsrXSA9IHZlcnRleHRJRCArIDI7XG4gICAgICAgICAgICBpbmRpY2VzW2lkeCsrXSA9IHZlcnRleHRJRCArIDE7XG4gICAgICAgICAgICBpbmRpY2VzW2lkeCsrXSA9IHZlcnRleHRJRCArIDM7XG4gICAgICAgICAgICBpbmRpY2VzW2lkeCsrXSA9IHZlcnRleHRJRCArIDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDoh6rlrprkuYnmoLzlvI/ku6VnZXRWZm10KCnmlrnlvI/mj5Dkvpvlh7rljrvvvIzpmaTkuoblvZPliY1hc3NlbWJsZXLvvIxyZW5kZXItZmxvd+eahOWFtuS7luWcsOaWueS5n+S8mueUqOWIsFxuICAgIGdldFZmbXQoKSB7XG4gICAgICAgIHJldHVybiB2Zm10Q3VzdG9tO1xuICAgIH1cblxuICAgIC8vIOmHjei9vWdldEJ1ZmZlcigpLCDov5Tlm57kuIDkuKrog73lrrnnurPoh6rlrprkuYnpobbngrnmlbDmja7nmoRidWZmZXJcbiAgICAvLyDpu5jorqRmaWxsQnVmZmVycygp5pa55rOV5Lit5Lya6LCD55So5YiwXG4gICAgZ2V0QnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gY2MucmVuZGVyZXIuX2hhbmRsZS5nZXRCdWZmZXIoXCJtZXNoXCIsIHRoaXMuZ2V0VmZtdCgpKTtcbiAgICB9XG5cblxuICAgIHVwZGF0ZVVWcyhzcHJpdGUpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlVVZzKHNwcml0ZSk7XG4gICAgICAgIGxldCBkc3RPZmZzZXQ7XG4gICAgICAgIGxldCB2ZXJ0cyA9IHRoaXMuX3JlbmRlckRhdGEudkRhdGFzWzBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXNDb3VudDsgKytpKSB7XG4gICAgICAgICAgICAvLyBmaWxsIFxuICAgICAgICAgICAgbGV0IGZsb2F0c09mZnNldCA9IHRoaXMuZmxvYXRzUGVyVmVydCAqIGk7XG5cbiAgICAgICAgICAgIGRzdE9mZnNldCA9IGZsb2F0c09mZnNldCArIHRoaXMuYnJpZ2h0bmVzc09mZnNldDtcbiAgICAgICAgICAgIHZlcnRzW2RzdE9mZnNldF0gPSB0aGlzLmJyaWdodG5lc3M7XG5cbiAgICAgICAgICAgIGRzdE9mZnNldCA9IGZsb2F0c09mZnNldCArIHRoaXMuc2F0dXJhdGlvbk9mZnNldDtcbiAgICAgICAgICAgIHZlcnRzW2RzdE9mZnNldF0gPSB0aGlzLnNhdHVyYXRpb247XG5cbiAgICAgICAgICAgIGRzdE9mZnNldCA9IGZsb2F0c09mZnNldCArIHRoaXMuY29uc3RyYXN0T2Zmc2V0O1xuICAgICAgICAgICAgdmVydHNbZHN0T2Zmc2V0XSA9IHRoaXMuY29uc3RyYXN0O1xuXG4gICAgICAgIH1cblxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/LiquidBox2dTest/LiquidBox2dTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1c1dIqiXhGe6Jt5QXa0MOB', 'LiquidBox2dTest');
// shaderScene/LiquidBox2dTest/LiquidBox2dTest.ts

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
// author: http://lamyoung.com/
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// https://mp.weixin.qq.com/s/T-xkgkLonYqA_4yqPIYLSg
var particleSystem;
var PTM_RATIO = cc.PhysicsManager.PTM_RATIO;
var PSD_RADIUS = 2;
var gfx = cc['gfx'];
var LiquidBox2dTest = /** @class */ (function (_super) {
    __extends(LiquidBox2dTest, _super);
    function LiquidBox2dTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.meshRenderer = null;
        _this.spriteFrame = null;
        return _this;
    }
    LiquidBox2dTest.prototype.onLoad = function () {
        var phyMgr = cc.director.getPhysicsManager();
        phyMgr.enabled = true;
        phyMgr.debugDrawFlags = 7;
        var spriteFrame = this.spriteFrame;
        if (spriteFrame) {
            var newTexture = spriteFrame.getTexture();
            if (newTexture && newTexture.loaded) {
                this.onSpriteFrameLoaded();
            }
            else {
                spriteFrame.once('load', this.onSpriteFrameLoaded, this);
            }
        }
    };
    LiquidBox2dTest.prototype.onSpriteFrameLoaded = function () {
        var texture = this.spriteFrame.getTexture();
        this.meshRenderer.node.width = texture.width;
        this.meshRenderer.node.height = texture.height;
        var phyMgr = cc.director.getPhysicsManager();
        var world = phyMgr['_world'];
        var psd = new b2.ParticleSystemDef();
        psd.radius = PSD_RADIUS / PTM_RATIO; //每个粒子的半径
        // psd.dampingStrength = 0.2;//阻尼
        psd.elasticStrength = 0.5;
        particleSystem = world.CreateParticleSystem(psd);
        // particleSystem.SetGravityScale(0.4);//重力比例
        // particleSystem.SetDensity(1);//粒子的密度
        // cc.log('third group');
        // third group
        var box = new b2.PolygonShape();
        var pgd = new b2.ParticleGroupDef();
        box.SetAsBox(this.meshRenderer.node.width / 2 / PTM_RATIO, this.meshRenderer.node.height / 2 / PTM_RATIO);
        pgd.flags = b2.ParticleFlag.b2_elasticParticle;
        pgd.groupFlags = b2.ParticleGroupFlag.b2_solidParticleGroup;
        var pos = this.meshRenderer.node.convertToWorldSpaceAR(cc.Vec2.ZERO).divSelf(PTM_RATIO);
        pgd.position.Set(pos.x, pos.y);
        // pgd.angle = -0.5;
        pgd.angularVelocity = Math.random() - 0.5;
        pgd.shape = box;
        // pgd.color.Set(0, 0, 255, 255);
        var particleGroup = particleSystem.CreateParticleGroup(pgd);
        // cc.log('third pgd', pgd);
        // cc.log('third particleGroup', particleGroup);
        var particleCount = particleSystem.GetParticleCount();
        // cc.log('particleCount', particleCount);
        var posBuff = particleSystem.GetPositionBuffer();
        // cc.log('posBuff', posBuff);
        // cc.log('particleSystem', particleSystem);
        var mesh = new cc.Mesh();
        mesh.init(new gfx.VertexFormat([
            { name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
            { name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
        ]), particleCount, true);
        var material = this.meshRenderer.getMaterial(0);
        var uv = this.spriteFrame.uv;
        /**
         *    t
         * l     r
         *    b
         */
        var uv_l = uv[0];
        var uv_r = uv[6];
        var uv_b = uv[3];
        var uv_t = uv[5];
        material.setProperty('texture', texture);
        material.setProperty('u_pointSize', PSD_RADIUS * 2);
        var vertexes = [];
        var ids = [];
        var uvs = [];
        for (var i = 0; i < particleCount; ++i) {
            var x = posBuff[i].x * PTM_RATIO;
            var y = posBuff[i].y * PTM_RATIO;
            var pt = this.meshRenderer.node.convertToNodeSpaceAR(cc.v2(x, y));
            vertexes.push(pt);
            var u = this._lerp(uv_l, uv_r, (pt.x + texture.width / 2) / texture.width);
            var v = this._lerp(uv_b, uv_t, (pt.y + texture.height / 2) / texture.height);
            uvs.push(cc.v2(u, v));
            var indexOffset = i;
            ids.push(indexOffset);
        }
        mesh.setVertices(gfx.ATTR_POSITION, vertexes);
        mesh.setVertices(gfx.ATTR_UV0, uvs);
        mesh.setPrimitiveType(gfx.PT_POINTS, 0);
        mesh.setIndices(ids);
        this.meshRenderer.mesh = mesh;
        cc.log('this.meshRenderer', this.meshRenderer);
        cc.log('vertexes', vertexes);
        cc.log('uvs', uvs);
        cc.log('ids', ids);
    };
    LiquidBox2dTest.prototype._lerp = function (a, b, w) {
        return a + w * (b - a);
    };
    LiquidBox2dTest.prototype.lateUpdate = function () {
        if (!particleSystem)
            return;
        var particleCount = particleSystem.GetParticleCount();
        var posBuff = particleSystem.GetPositionBuffer();
        var vertexes = [];
        // this.graphics.clear();
        for (var i = 0; i < particleCount; ++i) {
            var x = posBuff[i].x * PTM_RATIO;
            var y = posBuff[i].y * PTM_RATIO;
            var pt = this.meshRenderer.node.convertToNodeSpaceAR(cc.v2(x, y));
            vertexes.push(pt);
            // vertexes.push(cc.v2(x, y));
            // const p2 = this.graphics.node.parent.convertToNodeSpaceAR(cc.v2(x, y))
            // this.graphics.circle(p2.x, p2.y, PSD_RADIUS);
        }
        this.meshRenderer.mesh.setVertices(gfx.ATTR_POSITION, vertexes);
        this.meshRenderer.markForRender(true);
        // this.graphics.fill();
    };
    LiquidBox2dTest.prototype.onDestroy = function () {
        cc.log('onDestroy');
        var phyMgr = cc.director.getPhysicsManager();
        var world = phyMgr['_world'];
        world.DestroyParticleSystem(particleSystem);
        particleSystem = null;
    };
    __decorate([
        property(cc.MeshRenderer)
    ], LiquidBox2dTest.prototype, "meshRenderer", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], LiquidBox2dTest.prototype, "spriteFrame", void 0);
    LiquidBox2dTest = __decorate([
        ccclass
    ], LiquidBox2dTest);
    return LiquidBox2dTest;
}(cc.Component));
exports.default = LiquidBox2dTest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9MaXF1aWRCb3gyZFRlc3QvTGlxdWlkQm94MmRUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtCQUErQjtBQUN6QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxvREFBb0Q7QUFDcEQsSUFBSSxjQUFjLENBQUM7QUFDbkIsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFDOUMsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBRXJCLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUd0QjtJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQTJKQztRQXZKRyxrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFHckMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDOztJQW9KdkMsQ0FBQztJQWxKRyxnQ0FBTSxHQUFOO1FBQ0ksSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbkMsSUFBSSxXQUFXLEVBQUU7WUFDYixJQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDMUMsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDakMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFD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d0JBQXdCO0lBQzVCLENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwQixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDL0MsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUF0SkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQzt5REFDVztJQUdyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dEQUNVO0lBUGxCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0EySm5DO0lBQUQsc0JBQUM7Q0EzSkQsQUEySkMsQ0EzSjRDLEVBQUUsQ0FBQyxTQUFTLEdBMkp4RDtrQkEzSm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGF1dGhvcjogaHR0cDovL2xhbXlvdW5nLmNvbS9cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIGh0dHBzOi8vbXAud2VpeGluLnFxLmNvbS9zL1QteGtna0xvbllxQV80eXFQSVlMU2dcbmxldCBwYXJ0aWNsZVN5c3RlbTtcbmNvbnN0IFBUTV9SQVRJTyA9IGNjLlBoeXNpY3NNYW5hZ2VyLlBUTV9SQVRJTztcbmNvbnN0IFBTRF9SQURJVVMgPSAyO1xuXG5jb25zdCBnZnggPSBjY1snZ2Z4J107XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXF1aWRCb3gyZFRlc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTWVzaFJlbmRlcmVyKVxuICAgIG1lc2hSZW5kZXJlcjogY2MuTWVzaFJlbmRlcmVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjb25zdCBwaHlNZ3IgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICBwaHlNZ3IuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHBoeU1nci5kZWJ1Z0RyYXdGbGFncyA9IDc7XG5cbiAgICAgICAgbGV0IHNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZTtcbiAgICAgICAgaWYgKHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICBsZXQgbmV3VGV4dHVyZSA9IHNwcml0ZUZyYW1lLmdldFRleHR1cmUoKTtcbiAgICAgICAgICAgIGlmIChuZXdUZXh0dXJlICYmIG5ld1RleHR1cmUubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblNwcml0ZUZyYW1lTG9hZGVkKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLm9uY2UoJ2xvYWQnLCB0aGlzLm9uU3ByaXRlRnJhbWVMb2FkZWQsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvblNwcml0ZUZyYW1lTG9hZGVkKCkge1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5zcHJpdGVGcmFtZS5nZXRUZXh0dXJlKCk7XG4gICAgICAgIHRoaXMubWVzaFJlbmRlcmVyLm5vZGUud2lkdGggPSB0ZXh0dXJlLndpZHRoO1xuICAgICAgICB0aGlzLm1lc2hSZW5kZXJlci5ub2RlLmhlaWdodCA9IHRleHR1cmUuaGVpZ2h0O1xuXG5cbiAgICAgICAgY29uc3QgcGh5TWdyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcbiAgICAgICAgY29uc3Qgd29ybGQgPSBwaHlNZ3JbJ193b3JsZCddO1xuICAgICAgICBjb25zdCBwc2QgPSBuZXcgYjIuUGFydGljbGVTeXN0ZW1EZWYoKTtcbiAgICAgICAgcHNkLnJhZGl1cyA9IFBTRF9SQURJVVMgLyBQVE1fUkFUSU87IC8v5q+P5Liq57KS5a2Q55qE5Y2K5b6EXG4gICAgICAgIC8vIHBzZC5kYW1waW5nU3RyZW5ndGggPSAwLjI7Ly/pmLvlsLxcbiAgICAgICAgcHNkLmVsYXN0aWNTdHJlbmd0aCA9IDAuNTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW0gPSB3b3JsZC5DcmVhdGVQYXJ0aWNsZVN5c3RlbShwc2QpO1xuICAgICAgICAvLyBwYXJ0aWNsZVN5c3RlbS5TZXRHcmF2aXR5U2NhbGUoMC40KTsvL+mHjeWKm+avlOS+i1xuICAgICAgICAvLyBwYXJ0aWNsZVN5c3RlbS5TZXREZW5zaXR5KDEpOy8v57KS5a2Q55qE5a+G5bqmXG5cblxuICAgICAgICAvLyBjYy5sb2coJ3RoaXJkIGdyb3VwJyk7XG4gICAgICAgIC8vIHRoaXJkIGdyb3VwXG4gICAgICAgIGNvbnN0IGJveCA9IG5ldyBiMi5Qb2x5Z29uU2hhcGUoKTtcbiAgICAgICAgY29uc3QgcGdkID0gbmV3IGIyLlBhcnRpY2xlR3JvdXBEZWYoKTtcbiAgICAgICAgYm94LlNldEFzQm94KHRoaXMubWVzaFJlbmRlcmVyLm5vZGUud2lkdGggLyAyIC8gUFRNX1JBVElPLCB0aGlzLm1lc2hSZW5kZXJlci5ub2RlLmhlaWdodCAvIDIgLyBQVE1fUkFUSU8pO1xuICAgICAgICBwZ2QuZmxhZ3MgPSBiMi5QYXJ0aWNsZUZsYWcuYjJfZWxhc3RpY1BhcnRpY2xlO1xuICAgICAgICBwZ2QuZ3JvdXBGbGFncyA9IGIyLlBhcnRpY2xlR3JvdXBGbGFnLmIyX3NvbGlkUGFydGljbGVHcm91cDtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5tZXNoUmVuZGVyZXIubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKS5kaXZTZWxmKFBUTV9SQVRJTyk7XG4gICAgICAgIHBnZC5wb3NpdGlvbi5TZXQocG9zLngsIHBvcy55KTtcbiAgICAgICAgLy8gcGdkLmFuZ2xlID0gLTAuNTtcbiAgICAgICAgcGdkLmFuZ3VsYXJWZWxvY2l0eSA9IE1hdGgucmFuZG9tKCkgLSAwLjU7XG4gICAgICAgIHBnZC5zaGFwZSA9IGJveDtcbiAgICAgICAgLy8gcGdkLmNvbG9yLlNldCgwLCAwLCAyNTUsIDI1NSk7XG4gICAgICAgIGNvbnN0IHBhcnRpY2xlR3JvdXAgPSBwYXJ0aWNsZVN5c3RlbS5DcmVhdGVQYXJ0aWNsZUdyb3VwKHBnZCk7XG5cblxuICAgICAgICAvLyBjYy5sb2coJ3RoaXJkIHBnZCcsIHBnZCk7XG4gICAgICAgIC8vIGNjLmxvZygndGhpcmQgcGFydGljbGVHcm91cCcsIHBhcnRpY2xlR3JvdXApO1xuXG4gICAgICAgIGxldCBwYXJ0aWNsZUNvdW50ID0gcGFydGljbGVTeXN0ZW0uR2V0UGFydGljbGVDb3VudCgpO1xuICAgICAgICAvLyBjYy5sb2coJ3BhcnRpY2xlQ291bnQnLCBwYXJ0aWNsZUNvdW50KTtcbiAgICAgICAgbGV0IHBvc0J1ZmYgPSBwYXJ0aWNsZVN5c3RlbS5HZXRQb3NpdGlvbkJ1ZmZlcigpO1xuICAgICAgICAvLyBjYy5sb2coJ3Bvc0J1ZmYnLCBwb3NCdWZmKTtcbiAgICAgICAgLy8gY2MubG9nKCdwYXJ0aWNsZVN5c3RlbScsIHBhcnRpY2xlU3lzdGVtKTtcblxuICAgICAgICBjb25zdCBtZXNoID0gbmV3IGNjLk1lc2goKTtcbiAgICAgICAgbWVzaC5pbml0KG5ldyBnZnguVmVydGV4Rm9ybWF0KFtcbiAgICAgICAgICAgIHsgbmFtZTogZ2Z4LkFUVFJfUE9TSVRJT04sIHR5cGU6IGdmeC5BVFRSX1RZUEVfRkxPQVQzMiwgbnVtOiAyIH0sXG4gICAgICAgICAgICB7IG5hbWU6IGdmeC5BVFRSX1VWMCwgdHlwZTogZ2Z4LkFUVFJfVFlQRV9GTE9BVDMyLCBudW06IDIgfSxcbiAgICAgICAgXSksIHBhcnRpY2xlQ291bnQsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tZXNoUmVuZGVyZXIuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgIGNvbnN0IHV2ID0gdGhpcy5zcHJpdGVGcmFtZS51djtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICAgIHRcbiAgICAgICAgICogbCAgICAgclxuICAgICAgICAgKiAgICBiXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB1dl9sID0gdXZbMF07XG4gICAgICAgIGNvbnN0IHV2X3IgPSB1dls2XTtcbiAgICAgICAgY29uc3QgdXZfYiA9IHV2WzNdO1xuICAgICAgICBjb25zdCB1dl90ID0gdXZbNV07XG5cbiAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3RleHR1cmUnLCB0ZXh0dXJlKTtcbiAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3VfcG9pbnRTaXplJywgUFNEX1JBRElVUyAqIDIpO1xuXG4gICAgICAgIGNvbnN0IHZlcnRleGVzID0gW107XG4gICAgICAgIGNvbnN0IGlkcyA9IFtdO1xuICAgICAgICBjb25zdCB1dnMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlQ291bnQ7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgeCA9IHBvc0J1ZmZbaV0ueCAqIFBUTV9SQVRJTztcbiAgICAgICAgICAgIGNvbnN0IHkgPSBwb3NCdWZmW2ldLnkgKiBQVE1fUkFUSU87XG4gICAgICAgICAgICBjb25zdCBwdCA9IHRoaXMubWVzaFJlbmRlcmVyLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoeCwgeSkpO1xuICAgICAgICAgICAgdmVydGV4ZXMucHVzaChwdCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHUgPSB0aGlzLl9sZXJwKHV2X2wsIHV2X3IsIChwdC54ICsgdGV4dHVyZS53aWR0aCAvIDIpIC8gdGV4dHVyZS53aWR0aCk7XG4gICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5fbGVycCh1dl9iLCB1dl90LCAocHQueSArIHRleHR1cmUuaGVpZ2h0IC8gMikgLyB0ZXh0dXJlLmhlaWdodCk7XG4gICAgICAgICAgICB1dnMucHVzaChjYy52Mih1LCB2KSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGluZGV4T2Zmc2V0ID0gaTtcbiAgICAgICAgICAgIGlkcy5wdXNoKGluZGV4T2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBtZXNoLnNldFZlcnRpY2VzKGdmeC5BVFRSX1BPU0lUSU9OLCB2ZXJ0ZXhlcyk7XG4gICAgICAgIG1lc2guc2V0VmVydGljZXMoZ2Z4LkFUVFJfVVYwLCB1dnMpO1xuICAgICAgICBtZXNoLnNldFByaW1pdGl2ZVR5cGUoZ2Z4LlBUX1BPSU5UUywgMCk7XG4gICAgICAgIG1lc2guc2V0SW5kaWNlcyhpZHMpO1xuXG4gICAgICAgIHRoaXMubWVzaFJlbmRlcmVyLm1lc2ggPSBtZXNoO1xuXG5cbiAgICAgICAgY2MubG9nKCd0aGlzLm1lc2hSZW5kZXJlcicsIHRoaXMubWVzaFJlbmRlcmVyKTtcbiAgICAgICAgY2MubG9nKCd2ZXJ0ZXhlcycsIHZlcnRleGVzKTtcbiAgICAgICAgY2MubG9nKCd1dnMnLCB1dnMpO1xuICAgICAgICBjYy5sb2coJ2lkcycsIGlkcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF9sZXJwKGE6IG51bWJlciwgYjogbnVtYmVyLCB3OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGEgKyB3ICogKGIgLSBhKTtcbiAgICB9XG5cbiAgICBsYXRlVXBkYXRlKCkge1xuICAgICAgICBpZiAoIXBhcnRpY2xlU3lzdGVtKSByZXR1cm47XG4gICAgICAgIGxldCBwYXJ0aWNsZUNvdW50ID0gcGFydGljbGVTeXN0ZW0uR2V0UGFydGljbGVDb3VudCgpO1xuICAgICAgICBsZXQgcG9zQnVmZiA9IHBhcnRpY2xlU3lzdGVtLkdldFBvc2l0aW9uQnVmZmVyKCk7XG5cbiAgICAgICAgY29uc3QgdmVydGV4ZXMgPSBbXTtcblxuICAgICAgICAvLyB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVDb3VudDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gcG9zQnVmZltpXS54ICogUFRNX1JBVElPO1xuICAgICAgICAgICAgY29uc3QgeSA9IHBvc0J1ZmZbaV0ueSAqIFBUTV9SQVRJTztcbiAgICAgICAgICAgIGNvbnN0IHB0ID0gdGhpcy5tZXNoUmVuZGVyZXIubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52Mih4LCB5KSk7XG4gICAgICAgICAgICB2ZXJ0ZXhlcy5wdXNoKHB0KTtcbiAgICAgICAgICAgIC8vIHZlcnRleGVzLnB1c2goY2MudjIoeCwgeSkpO1xuICAgICAgICAgICAgLy8gY29uc3QgcDIgPSB0aGlzLmdyYXBoaWNzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKHgsIHkpKVxuICAgICAgICAgICAgLy8gdGhpcy5ncmFwaGljcy5jaXJjbGUocDIueCwgcDIueSwgUFNEX1JBRElVUyk7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1lc2hSZW5kZXJlci5tZXNoLnNldFZlcnRpY2VzKGdmeC5BVFRSX1BPU0lUSU9OLCB2ZXJ0ZXhlcyk7XG4gICAgICAgIHRoaXMubWVzaFJlbmRlcmVyLm1hcmtGb3JSZW5kZXIodHJ1ZSk7XG4gICAgICAgIC8vIHRoaXMuZ3JhcGhpY3MuZmlsbCgpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2MubG9nKCdvbkRlc3Ryb3knKTtcbiAgICAgICAgY29uc3QgcGh5TWdyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcbiAgICAgICAgY29uc3Qgd29ybGQgPSBwaHlNZ3JbJ193b3JsZCddO1xuICAgICAgICB3b3JsZC5EZXN0cm95UGFydGljbGVTeXN0ZW0ocGFydGljbGVTeXN0ZW0pO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbSA9IG51bGw7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/MeshPolygonSpriteTest/MeshPolygonSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f082dK7mmJB7afrjpa3Fd7b', 'MeshPolygonSprite');
// shaderScene/MeshPolygonSpriteTest/MeshPolygonSprite.ts

"use strict";
// author: http://lamyoung.com/
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
// https://mp.weixin.qq.com/s/EkMP_UcFcWTlSn_4Ml8zsA
var gfx = cc.gfx;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent, menu = _a.menu;
var MeshPolygonSprite = /** @class */ (function (_super) {
    __extends(MeshPolygonSprite, _super);
    function MeshPolygonSprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._offset = cc.v2(0, 0);
        _this._spriteFrame = null;
        _this._vertexes = [cc.v2(0, 0), cc.v2(0, 100), cc.v2(100, 100), cc.v2(100, 0)];
        _this.renderer = null;
        _this.mesh = null;
        _this._meshCache = {};
        return _this;
    }
    Object.defineProperty(MeshPolygonSprite.prototype, "offset", {
        /**
         * !#en Position offset
         * !#zh 位置偏移量
         * @property offset
         * @type {Vec2}
         */
        get: function () {
            return this._offset;
        },
        set: function (value) {
            this._offset = value;
            this._updateMesh();
            this._applyVertexes();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeshPolygonSprite.prototype, "spriteFrame", {
        /**
        * !#en The sprite frame of the sprite.
        * !#zh 精灵的精灵帧
        * @property spriteFrame
        * @type {SpriteFrame}
        * @example
        * sprite.spriteFrame = newSpriteFrame;
        */
        get: function () {
            return this._spriteFrame;
        },
        set: function (value) {
            this._spriteFrame = value;
            this._refreshAll();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MeshPolygonSprite.prototype, "vertexes", {
        /**
         * !#en Position vertexes
         * !#zh 顶点坐标
         * @property vertexes
         * @type {Vec2}
         */
        get: function () {
            return this._vertexes;
        },
        set: function (value) {
            this._vertexes = value;
            this._updateMesh();
            this._applyVertexes();
        },
        enumerable: false,
        configurable: true
    });
    MeshPolygonSprite.prototype.onLoad = function () {
        this._meshCache = {};
        var renderer = this.node.getComponent(cc.MeshRenderer) || this.node.addComponent(cc.MeshRenderer);
        renderer.mesh = null;
        this.renderer = renderer;
        var builtinMaterial = cc.Material.getBuiltinMaterial("unlit"); //createWithBuiltin("unlit");
        renderer.setMaterial(0, builtinMaterial);
    };
    MeshPolygonSprite.prototype.onEnable = function () {
        this._refreshAll();
    };
    MeshPolygonSprite.prototype._refreshAll = function () {
        this._updateMesh();
        this._applySpriteFrame();
        this._applyVertexes();
    };
    MeshPolygonSprite.prototype._updateMesh = function () {
        // cc.log('_updateMesh')
        var mesh = this._meshCache[this.vertexes.length];
        if (!mesh) {
            mesh = new cc.Mesh();
            mesh.init(new gfx.VertexFormat([
                { name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
                { name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
            ]), this.vertexes.length, true);
            this._meshCache[this.vertexes.length] = mesh;
        }
        cc.log(mesh.nativeUrl);
        this.mesh = mesh;
    };
    MeshPolygonSprite.prototype._lerp = function (a, b, w) {
        return a + w * (b - a);
    };
    // 更新顶点
    MeshPolygonSprite.prototype._applyVertexes = function () {
        // cc.log('_applyVertexes');
        // 设置坐标
        var mesh = this.mesh;
        mesh.setVertices(gfx.ATTR_POSITION, this.vertexes);
        this._calculateUV();
        if (this.vertexes.length >= 3) {
            // 计算顶点索引 
            var ids_1 = [];
            // 多边形切割 poly2tri，支持简单的多边形，确保顶点按顺序且不自交
            var countor_1 = this.vertexes.map(function (p) { return { x: p.x, y: p.y }; });
            var swctx = new poly2tri.SweepContext(countor_1, { cloneArrays: true });
            // cc.log('countor', countor.length, countor);
            try {
                // 防止失败 使用try 
                swctx.triangulate();
                // cc.log('triangulate');
                var triangles = swctx.getTriangles();
                // cc.log('triangles', triangles.length, triangles);
                triangles.forEach(function (tri) {
                    tri.getPoints().forEach(function (p) {
                        var i = countor_1.indexOf(p);
                        ids_1.push(i);
                    });
                });
            }
            catch (e) {
                cc.error('poly2tri error', e);
            }
            if (ids_1.length === 0) {
                cc.log('计算顶点索引 失败');
                ids_1.push.apply(ids_1, this.vertexes.map(function (v, i) { return i; }));
            }
            // cc.log('ids');
            // cc.log(ids);
            mesh.setIndices(ids_1);
            this.renderer.mesh = mesh;
        }
    };
    MeshPolygonSprite.prototype._calculateUV = function () {
        var mesh = this.mesh;
        if (this.spriteFrame) {
            // cc.log('_calculateUV')
            var uv = this.spriteFrame.uv;
            var texture = this.spriteFrame.getTexture();
            /**
             *    t
             * l     r
             *    b
             */
            var uv_l = uv[0];
            var uv_r = uv[6];
            var uv_b = uv[3];
            var uv_t = uv[5];
            // cc.log('uv', uv)
            // 计算uv
            var uvs = [];
            for (var _i = 0, _a = this.vertexes; _i < _a.length; _i++) {
                var pt = _a[_i];
                var u = this._lerp(uv_l, uv_r, (pt.x + texture.width / 2 + this.offset.x) / texture.width);
                var v = this._lerp(uv_b, uv_t, (pt.y + texture.height / 2 - this.offset.y) / texture.height);
                uvs.push(cc.v2(u, v));
            }
            mesh.setVertices(gfx.ATTR_UV0, uvs);
        }
    };
    // 更新图片
    MeshPolygonSprite.prototype._applySpriteFrame = function () {
        // cc.log('_applySpriteFrame');
        if (this.spriteFrame) {
            var renderer = this.renderer;
            var material = renderer.getMaterial(0);
            // Reset material
            var texture = this.spriteFrame.getTexture();
            material.define("USE_DIFFUSE_TEXTURE", true);
            material.setProperty('diffuseTexture', texture);
        }
    };
    __decorate([
        property
    ], MeshPolygonSprite.prototype, "_offset", void 0);
    __decorate([
        property({ type: cc.Vec2, tooltip: '位置偏移量' })
    ], MeshPolygonSprite.prototype, "offset", null);
    __decorate([
        property
    ], MeshPolygonSprite.prototype, "_spriteFrame", void 0);
    __decorate([
        property({ type: cc.SpriteFrame, tooltip: '精灵的精灵帧' })
    ], MeshPolygonSprite.prototype, "spriteFrame", null);
    __decorate([
        property
    ], MeshPolygonSprite.prototype, "_vertexes", void 0);
    __decorate([
        property({ type: cc.Vec2, tooltip: '顶点坐标' })
    ], MeshPolygonSprite.prototype, "vertexes", null);
    MeshPolygonSprite = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.MeshRenderer),
        menu("lamyoung.com/MeshPolygonSprite")
    ], MeshPolygonSprite);
    return MeshPolygonSprite;
}(cc.Component));
exports.default = MeshPolygonSprite;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9NZXNoUG9seWdvblNwcml0ZVRlc3QvTWVzaFBvbHlnb25TcHJpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLG9EQUFvRDtBQUVwRCxJQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDO0FBRWIsSUFBQSxLQUFtRSxFQUFFLENBQUMsVUFBVSxFQUE5RSxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxpQkFBaUIsdUJBQUEsRUFBRSxnQkFBZ0Isc0JBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFNdkY7SUFBK0MscUNBQVk7SUFBM0Q7UUFBQSxxRUE4TEM7UUE1TEcsYUFBTyxHQUFZLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBa0I5QixrQkFBWSxHQUFtQixJQUFJLENBQUM7UUFtQnBDLGVBQVMsR0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFpQjNFLGNBQVEsR0FBb0IsSUFBSSxDQUFDO1FBQ2pDLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsZ0JBQVUsR0FBK0IsRUFBRSxDQUFDOztJQW9JeEQsQ0FBQztJQXJMRyxzQkFBSSxxQ0FBTTtRQU5WOzs7OztXQUtHO2FBQ0g7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQVcsS0FBSztZQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUks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QUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ25EO0lBQ0wsQ0FBQztJQTNMRDtRQURDLFFBQVE7c0RBQ3FCO0lBVzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO21EQUs3QztJQUdEO1FBREMsUUFBUTsyREFDMkI7SUFhcEM7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUM7d0RBSXJEO0lBR0Q7UUFEQyxRQUFRO3dEQUMwRTtJQVduRjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQztxREFLNUM7SUF0RGdCLGlCQUFpQjtRQUpyQyxPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDO09BQ2xCLGlCQUFpQixDQThMckM7SUFBRCx3QkFBQztDQTlMRCxBQThMQyxDQTlMOEMsRUFBRSxDQUFDLFNBQVMsR0E4TDFEO2tCQTlMb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXV0aG9yOiBodHRwOi8vbGFteW91bmcuY29tL1xuXG4vLyBodHRwczovL21wLndlaXhpbi5xcS5jb20vcy9Fa01QX1VjRmNXVGxTbl80TWw4enNBXG5cbmNvbnN0IGdmeCA9IGNjLmdmeDtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUsIHJlcXVpcmVDb21wb25lbnQsIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbkByZXF1aXJlQ29tcG9uZW50KGNjLk1lc2hSZW5kZXJlcilcbkBtZW51KFwibGFteW91bmcuY29tL01lc2hQb2x5Z29uU3ByaXRlXCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNoUG9seWdvblNwcml0ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5XG4gICAgX29mZnNldDogY2MuVmVjMiA9IGNjLnYyKDAsIDApXG4gICAgLyoqXG4gICAgICogISNlbiBQb3NpdGlvbiBvZmZzZXRcbiAgICAgKiAhI3poIOS9jee9ruWBj+enu+mHj1xuICAgICAqIEBwcm9wZXJ0eSBvZmZzZXRcbiAgICAgKiBAdHlwZSB7VmVjMn1cbiAgICAgKi9cbiAgICBnZXQgb2Zmc2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb2Zmc2V0O1xuICAgIH1cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5WZWMyLCB0b29sdGlwOiAn5L2N572u5YGP56e76YePJyB9KVxuICAgIHNldCBvZmZzZXQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fb2Zmc2V0ID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU1lc2goKTtcbiAgICAgICAgdGhpcy5fYXBwbHlWZXJ0ZXhlcygpO1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eVxuICAgIF9zcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuICAgIC8qKlxuICAgICogISNlbiBUaGUgc3ByaXRlIGZyYW1lIG9mIHRoZSBzcHJpdGUuXG4gICAgKiAhI3poIOeyvueBteeahOeyvueBteW4p1xuICAgICogQHByb3BlcnR5IHNwcml0ZUZyYW1lXG4gICAgKiBAdHlwZSB7U3ByaXRlRnJhbWV9XG4gICAgKiBAZXhhbXBsZVxuICAgICogc3ByaXRlLnNwcml0ZUZyYW1lID0gbmV3U3ByaXRlRnJhbWU7XG4gICAgKi9cbiAgICBnZXQgc3ByaXRlRnJhbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcHJpdGVGcmFtZTtcbiAgICB9XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuU3ByaXRlRnJhbWUsIHRvb2x0aXA6ICfnsr7ngbXnmoTnsr7ngbXluKcnIH0pXG4gICAgc2V0IHNwcml0ZUZyYW1lKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3Nwcml0ZUZyYW1lID0gdmFsdWU7XG4gICAgICAgIHRoaXMuX3JlZnJlc2hBbGwoKTtcbiAgICB9XG5cbiAgICBAcHJvcGVydHlcbiAgICBfdmVydGV4ZXM6IGNjLlZlYzJbXSA9IFtjYy52MigwLCAwKSwgY2MudjIoMCwgMTAwKSwgY2MudjIoMTAwLCAxMDApLCBjYy52MigxMDAsIDApXVxuICAgIC8qKlxuICAgICAqICEjZW4gUG9zaXRpb24gdmVydGV4ZXNcbiAgICAgKiAhI3poIOmhtueCueWdkOagh1xuICAgICAqIEBwcm9wZXJ0eSB2ZXJ0ZXhlc1xuICAgICAqIEB0eXBlIHtWZWMyfVxuICAgICAqL1xuICAgIGdldCB2ZXJ0ZXhlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZlcnRleGVzO1xuICAgIH1cbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5WZWMyLCB0b29sdGlwOiAn6aG254K55Z2Q5qCHJyB9KVxuICAgIHNldCB2ZXJ0ZXhlcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92ZXJ0ZXhlcyA9IHZhbHVlO1xuICAgICAgICB0aGlzLl91cGRhdGVNZXNoKCk7XG4gICAgICAgIHRoaXMuX2FwcGx5VmVydGV4ZXMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlcmVyOiBjYy5NZXNoUmVuZGVyZXIgPSBudWxsO1xuICAgIHByaXZhdGUgbWVzaDogY2MuTWVzaCA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbWVzaENhY2hlOiB7IFtrZXk6IG51bWJlcl06IGNjLk1lc2ggfSA9IHt9O1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl9tZXNoQ2FjaGUgPSB7fTtcbiAgICAgICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLk1lc2hSZW5kZXJlcikgfHwgdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5NZXNoUmVuZGVyZXIpO1xuXG4gICAgICAgIHJlbmRlcmVyLm1lc2ggPSBudWxsO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICAgICAgbGV0IGJ1aWx0aW5NYXRlcmlhbCA9IGNjLk1hdGVyaWFsLmdldEJ1aWx0aW5NYXRlcmlhbChcInVubGl0XCIpOy8vY3JlYXRlV2l0aEJ1aWx0aW4oXCJ1bmxpdFwiKTtcbiAgICAgICAgcmVuZGVyZXIuc2V0TWF0ZXJpYWwoMCwgYnVpbHRpbk1hdGVyaWFsKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fcmVmcmVzaEFsbCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3JlZnJlc2hBbGwoKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU1lc2goKTtcbiAgICAgICAgdGhpcy5fYXBwbHlTcHJpdGVGcmFtZSgpO1xuICAgICAgICB0aGlzLl9hcHBseVZlcnRleGVzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlTWVzaCgpIHtcbiAgICAgICAgXG4gICAgICAgIC8vIGNjLmxvZygnX3VwZGF0ZU1lc2gnKVxuICAgICAgICBsZXQgbWVzaCA9IHRoaXMuX21lc2hDYWNoZVt0aGlzLnZlcnRleGVzLmxlbmd0aF07XG4gICAgICAgIGlmICghbWVzaCkge1xuICAgICAgICAgICAgbWVzaCA9IG5ldyBjYy5NZXNoKCk7XG4gICAgICAgICAgICBtZXNoLmluaXQobmV3IGdmeC5WZXJ0ZXhGb3JtYXQoW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogZ2Z4LkFUVFJfUE9TSVRJT04sIHR5cGU6IGdmeC5BVFRSX1RZUEVfRkxPQVQzMiwgbnVtOiAyIH0sXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBnZnguQVRUUl9VVjAsIHR5cGU6IGdmeC5BVFRSX1RZUEVfRkxPQVQzMiwgbnVtOiAyIH0sXG4gICAgICAgICAgICBdKSwgdGhpcy52ZXJ0ZXhlcy5sZW5ndGgsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5fbWVzaENhY2hlW3RoaXMudmVydGV4ZXMubGVuZ3RoXSA9IG1lc2g7XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9nKG1lc2gubmF0aXZlVXJsKVxuICAgICAgICB0aGlzLm1lc2ggPSBtZXNoO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xlcnAoYTogbnVtYmVyLCBiOiBudW1iZXIsIHc6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gYSArIHcgKiAoYiAtIGEpO1xuICAgIH1cblxuXG4gICAgLy8g5pu05paw6aG254K5XG4gICAgcHJpdmF0ZSBfYXBwbHlWZXJ0ZXhlcygpIHtcbiAgICAgICAgLy8gY2MubG9nKCdfYXBwbHlWZXJ0ZXhlcycpO1xuXG4gICAgICAgIC8vIOiuvue9ruWdkOagh1xuICAgICAgICBjb25zdCBtZXNoID0gdGhpcy5tZXNoO1xuICAgICAgICBtZXNoLnNldFZlcnRpY2VzKGdmeC5BVFRSX1BPU0lUSU9OLCB0aGlzLnZlcnRleGVzKTtcblxuICAgICAgICB0aGlzLl9jYWxjdWxhdGVVVigpO1xuXG4gICAgICAgIGlmICh0aGlzLnZlcnRleGVzLmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICAvLyDorqHnrpfpobbngrnntKLlvJUgXG4gICAgICAgICAgICBjb25zdCBpZHMgPSBbXTtcbiAgICAgICAgICAgIC8vIOWkmui+ueW9ouWIh+WJsiBwb2x5MnRyae+8jOaUr+aMgeeugOWNleeahOWkmui+ueW9ou+8jOehruS/nemhtueCueaMiemhuuW6j+S4lOS4jeiHquS6pFxuICAgICAgICAgICAgY29uc3QgY291bnRvciA9IHRoaXMudmVydGV4ZXMubWFwKChwKSA9PiB7IHJldHVybiB7IHg6IHAueCwgeTogcC55IH0gfSk7XG4gICAgICAgICAgICBjb25zdCBzd2N0eCA9IG5ldyBwb2x5MnRyaS5Td2VlcENvbnRleHQoY291bnRvciwgeyBjbG9uZUFycmF5czogdHJ1ZSB9KTtcbiAgICAgICAgICAgIC8vIGNjLmxvZygnY291bnRvcicsIGNvdW50b3IubGVuZ3RoLCBjb3VudG9yKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8g6Ziy5q2i5aSx6LSlIOS9v+eUqHRyeSBcbiAgICAgICAgICAgICAgICBzd2N0eC50cmlhbmd1bGF0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIGNjLmxvZygndHJpYW5ndWxhdGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmlhbmdsZXMgPSBzd2N0eC5nZXRUcmlhbmdsZXMoKTtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ3RyaWFuZ2xlcycsIHRyaWFuZ2xlcy5sZW5ndGgsIHRyaWFuZ2xlcyk7XG5cbiAgICAgICAgICAgICAgICB0cmlhbmdsZXMuZm9yRWFjaCgodHJpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyaS5nZXRQb2ludHMoKS5mb3JFYWNoKHAgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaSA9IGNvdW50b3IuaW5kZXhPZihwIGFzIGFueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHMucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcigncG9seTJ0cmkgZXJyb3InLCBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coJ+iuoeeul+mhtueCuee0ouW8lSDlpLHotKUnKTtcbiAgICAgICAgICAgICAgICBpZHMucHVzaCguLi50aGlzLnZlcnRleGVzLm1hcCgodiwgaSkgPT4geyByZXR1cm4gaSB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjYy5sb2coJ2lkcycpO1xuICAgICAgICAgICAgLy8gY2MubG9nKGlkcyk7XG4gICAgICAgICAgICBtZXNoLnNldEluZGljZXMoaWRzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5tZXNoID0gbWVzaDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZVVWKCkge1xuICAgICAgICBjb25zdCBtZXNoID0gdGhpcy5tZXNoO1xuICAgICAgICBpZiAodGhpcy5zcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgLy8gY2MubG9nKCdfY2FsY3VsYXRlVVYnKVxuICAgICAgICAgICAgY29uc3QgdXYgPSB0aGlzLnNwcml0ZUZyYW1lLnV2O1xuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IHRoaXMuc3ByaXRlRnJhbWUuZ2V0VGV4dHVyZSgpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiAgICB0XG4gICAgICAgICAgICAgKiBsICAgICByXG4gICAgICAgICAgICAgKiAgICBiXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGNvbnN0IHV2X2wgPSB1dlswXTtcbiAgICAgICAgICAgIGNvbnN0IHV2X3IgPSB1dls2XTtcbiAgICAgICAgICAgIGNvbnN0IHV2X2IgPSB1dlszXTtcbiAgICAgICAgICAgIGNvbnN0IHV2X3QgPSB1dls1XTtcblxuICAgICAgICAgICAgLy8gY2MubG9nKCd1dicsIHV2KVxuXG4gICAgICAgICAgICAvLyDorqHnrpd1dlxuICAgICAgICAgICAgY29uc3QgdXZzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHB0IG9mIHRoaXMudmVydGV4ZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1ID0gdGhpcy5fbGVycCh1dl9sLCB1dl9yLCAocHQueCArIHRleHR1cmUud2lkdGggLyAyICsgdGhpcy5vZmZzZXQueCkgLyB0ZXh0dXJlLndpZHRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5fbGVycCh1dl9iLCB1dl90LCAocHQueSArIHRleHR1cmUuaGVpZ2h0IC8gMiAtIHRoaXMub2Zmc2V0LnkpIC8gdGV4dHVyZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIHV2cy5wdXNoKGNjLnYyKHUsIHYpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc2guc2V0VmVydGljZXMoZ2Z4LkFUVFJfVVYwLCB1dnMpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICAvLyDmm7TmlrDlm77niYdcbiAgICBwcml2YXRlIF9hcHBseVNwcml0ZUZyYW1lKCkge1xuICAgICAgICAvLyBjYy5sb2coJ19hcHBseVNwcml0ZUZyYW1lJyk7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICBjb25zdCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXI7XG4gICAgICAgICAgICBsZXQgbWF0ZXJpYWwgPSByZW5kZXJlci5nZXRNYXRlcmlhbCgwKTtcbiAgICAgICAgICAgIC8vIFJlc2V0IG1hdGVyaWFsXG4gICAgICAgICAgICBsZXQgdGV4dHVyZSA9IHRoaXMuc3ByaXRlRnJhbWUuZ2V0VGV4dHVyZSgpO1xuICAgICAgICAgICAgbWF0ZXJpYWwuZGVmaW5lKFwiVVNFX0RJRkZVU0VfVEVYVFVSRVwiLCB0cnVlKTtcbiAgICAgICAgICAgIG1hdGVyaWFsLnNldFByb3BlcnR5KCdkaWZmdXNlVGV4dHVyZScsIHRleHR1cmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/common/GTAssembler2D.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd779c1vtRNPkJC/CpqlAJrQ', 'GTAssembler2D');
// shaderScene/common/GTAssembler2D.ts

"use strict";
// author: https://github.com/caogtaa/CCBatchingTricks   GT
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
Object.defineProperty(exports, "__esModule", { value: true });
// 自定义渲染
// https://docs.cocos.com/creator/manual/zh/advanced-topics/custom-render.html 
var GTAssembler2D = /** @class */ (function (_super) {
    __extends(GTAssembler2D, _super);
    function GTAssembler2D() {
        // 每个2d渲染单元里的有:
        // 4个顶点属性数据
        // 6个顶点索引 -> 三角剖分成2个三角形
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 每个顶点属性由5个32位数据组成
        // 顶点属性声明:
        // var vfmtPosUvColor = new gfx.VertexFormat([
        //     { name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
        //     { name: gfx.ATTR_UV0, type: gfx.ATTR_TYPE_FLOAT32, num: 2 },
        //     { name: gfx.ATTR_COLOR, type: gfx.ATTR_TYPE_UINT8, num: 4, normalize: true },       // 4个uint8
        // ]);
        // 顶点属性数据排列，每一格是32位 (float32/uint32)
        // x|y|u|v|color|x|y|u|v|color|...
        // 其中uv在一组数据中的偏移是2，color的偏移是4
        _this.verticesCount = 4;
        _this.indicesCount = 6;
        _this.floatsPerVert = 5;
        // vdata offset info
        _this.uvOffset = 2;
        _this.colorOffset = 4;
        _this._renderData = null;
        _this._local = null; // 中间结果。[l,b,r,t]。node对象左下、右上顶点的本地坐标，即相对于锚点的偏移
        return _this;
    }
    GTAssembler2D.prototype.init = function (comp) {
        _super.prototype.init.call(this, comp);
        // cc.Assembler2D的初始化放在constructor里
        // 此处把初始化放在init里，以便成员变量能够有机会修改
        this._renderData = new cc.RenderData();
        this._renderData.init(this);
        this.initLocal();
        this.initData();
    };
    Object.defineProperty(GTAssembler2D.prototype, "verticesFloats", {
        get: function () {
            return this.verticesCount * this.floatsPerVert;
        },
        enumerable: false,
        configurable: true
    });
    GTAssembler2D.prototype.initData = function () {
        var data = this._renderData;
        data.createQuadData(0, this.verticesFloats, this.indicesCount);
        // createQuadData内部会调用initQuadIndices初始化索引信息
        // 如果是用用flexbuffer创建则需要自己初始化
    };
    GTAssembler2D.prototype.initLocal = function () {
        this._local = [];
        this._local.length = 4;
    };
    GTAssembler2D.prototype.updateColor = function (comp, color) {
        // render data = verts = x|y|u|v|color|x|y|u|v|color|...
        // 填充render data中4个顶点的color部分
        var uintVerts = this._renderData.uintVDatas[0];
        if (!uintVerts)
            return;
        color = color != null ? color : comp.node.color._val;
        var floatsPerVert = this.floatsPerVert;
        var colorOffset = this.colorOffset;
        for (var i = colorOffset, l = uintVerts.length; i < l; i += floatsPerVert) {
            uintVerts[i] = color;
        }
    };
    GTAssembler2D.prototype.getBuffer = function () {
        //@ts-ignore
        return cc.renderer._handle._meshBuffer;
    };
    GTAssembler2D.prototype.updateWorldVerts = function (comp) {
        if (CC_NATIVERENDERER) {
            this.updateWorldVertsNative(comp);
        }
        else {
            this.updateWorldVertsWebGL(comp);
        }
    };
    GTAssembler2D.prototype.updateWorldVertsWebGL = function (comp) {
        var local = this._local;
        var verts = this._renderData.vDatas[0];
        var matrix = comp.node._worldMatrix;
        var matrixm = matrix.m, a = matrixm[0], b = matrixm[1], c = matrixm[4], d = matrixm[5], tx = matrixm[12], ty = matrixm[13];
        var vl = local[0], vr = local[2], vb = local[1], vt = local[3];
        /*
        m00 = 1, m01 = 0, m02 = 0, m03 = 0,
        m04 = 0, m05 = 1, m06 = 0, m07 = 0,
        m08 = 0, m09 = 0, m10 = 1, m11 = 0,
        m12 = 0, m13 = 0, m14 = 0, m15 = 1
        */
        // [a,b,c,d] = _worldMatrix[1,2,4,5] == [1,0,0,1]
        // _worldMatrix[12,13]是xy的平移量
        // 即世界矩阵的左上角2x2是单元矩阵，说明在2D场景内没有出现旋转或者缩放
        var justTranslate = a === 1 && b === 0 && c === 0 && d === 1;
        // render data = verts = x|y|u|v|color|x|y|u|v|color|...
        // 填充render data中4个顶点的xy部分
        var index = 0;
        var floatsPerVert = this.floatsPerVert;
        if (justTranslate) {
            // left bottom
            verts[index] = vl + tx;
            verts[index + 1] = vb + ty;
            index += floatsPerVert;
            // right bottom
            verts[index] = vr + tx;
            verts[index + 1] = vb + ty;
            index += floatsPerVert;
            // left top
            verts[index] = vl + tx;
            verts[index + 1] = vt + ty;
            index += floatsPerVert;
            // right top
            verts[index] = vr + tx;
            verts[index + 1] = vt + ty;
        }
        else {
            // 4对xy分别乘以 [2,2]仿射矩阵，然后+平移量
            var al = a * vl, ar = a * vr, bl = b * vl, br = b * vr, cb = c * vb, ct = c * vt, db = d * vb, dt = d * vt;
            // left bottom
            // newx = vl * a + vb * c + tx
            // newy = vl * b + vb * d + ty
            verts[index] = al + cb + tx;
            verts[index + 1] = bl + db + ty;
            index += floatsPerVert;
            // right bottom
            verts[index] = ar + cb + tx;
            verts[index + 1] = br + db + ty;
            index += floatsPerVert;
            // left top
            verts[index] = al + ct + tx;
            verts[index + 1] = bl + dt + ty;
            index += floatsPerVert;
            // right top
            verts[index] = ar + ct + tx;
            verts[index + 1] = br + dt + ty;
        }
    };
    // native场景下使用的updateWorldVerts
    // copy from \jsb-adapter-master\engine\assemblers\assembler-2d.js
    GTAssembler2D.prototype.updateWorldVertsNative = function (comp) {
        var local = this._local;
        var verts = this._renderData.vDatas[0];
        var floatsPerVert = this.floatsPerVert;
        var vl = local[0], vr = local[2], vb = local[1], vt = local[3];
        var index = 0;
        // left bottom
        verts[index] = vl;
        verts[index + 1] = vb;
        index += floatsPerVert;
        // right bottom
        verts[index] = vr;
        verts[index + 1] = vb;
        index += floatsPerVert;
        // left top
        verts[index] = vl;
        verts[index + 1] = vt;
        index += floatsPerVert;
        // right top
        verts[index] = vr;
        verts[index + 1] = vt;
    };
    // 将准备好的顶点数据填充进 VertexBuffer 和 IndiceBuffer
    GTAssembler2D.prototype.fillBuffers = function (comp, renderer) {
        if (renderer.worldMatDirty) {
            this.updateWorldVerts(comp);
        }
        var renderData = this._renderData;
        var vData = renderData.vDatas[0];
        var iData = renderData.iDatas[0];
        var buffer = this.getBuffer( /*renderer*/);
        var offsetInfo = buffer.request(this.verticesCount, this.indicesCount);
        // buffer data may be realloc, need get reference after request.
        // fill vertices
        var vertexOffset = offsetInfo.byteOffset >> 2, vbuf = buffer._vData;
        if (vData.length + vertexOffset > vbuf.length) {
            vbuf.set(vData.subarray(0, vbuf.length - vertexOffset), vertexOffset);
        }
        else {
            vbuf.set(vData, vertexOffset);
        }
        // fill indices
        var ibuf = buffer._iData, indiceOffset = offsetInfo.indiceOffset, vertexId = offsetInfo.vertexOffset; // vertexId是已经在buffer里的顶点数，也是当前顶点序号的基数
        for (var i = 0, l = iData.length; i < l; i++) {
            ibuf[indiceOffset++] = vertexId + iData[i];
        }
    };
    GTAssembler2D.prototype.packToDynamicAtlas = function (comp, frame) {
        if (CC_TEST)
            return;
        if (!frame._original && cc.dynamicAtlasManager && frame._texture.packable) {
            var packedFrame = cc.dynamicAtlasManager.insertSpriteFrame(frame);
            //@ts-ignore
            if (packedFrame) {
                frame._setDynamicAtlasFrame(packedFrame);
            }
        }
        var material = comp._materials[0];
        if (!material)
            return;
        if (material.getProperty('texture') !== frame._texture) {
            // texture was packed to dynamic atlas, should update uvs
            comp._vertsDirty = true;
            comp._updateMaterial();
        }
    };
    GTAssembler2D.prototype.updateUVs = function (comp) {
        // 4个顶点的uv坐标，对应左下、右下、左上、右上
        // 如果是cc.Sprite组件，这里取sprite._spriteFrame.uv;
        var uv = [0, 0, 1, 0, 0, 1, 1, 1];
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        // render data = verts = x|y|u|v|color|x|y|u|v|color|...
        // 填充render data中4个顶点的uv部分
        for (var i = 0; i < 4; i++) {
            var srcOffset = i * 2;
            var dstOffset = floatsPerVert * i + uvOffset;
            verts[dstOffset] = uv[srcOffset];
            verts[dstOffset + 1] = uv[srcOffset + 1];
        }
    };
    GTAssembler2D.prototype.updateVerts = function (comp) {
        var node = comp.node, cw = node.width, ch = node.height, appx = node.anchorX * cw, appy = node.anchorY * ch, l, b, r, t;
        l = -appx;
        b = -appy;
        r = cw - appx;
        t = ch - appy;
        var local = this._local;
        local[0] = l;
        local[1] = b;
        local[2] = r;
        local[3] = t;
        this.updateWorldVerts(comp);
    };
    GTAssembler2D.prototype.updateRenderData = function (comp) {
        if (comp._vertsDirty) {
            this.updateUVs(comp);
            this.updateVerts(comp);
            comp._vertsDirty = false;
        }
    };
    return GTAssembler2D;
}(cc.Assembler));
exports.default = GTAssembler2D;
// more info:  https://mp.weixin.qq.com/s/YaPHcTN1lkgo5eiYoG3p9A

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9jb21tb24vR1RBc3NlbWJsZXIyRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTJEOzs7Ozs7Ozs7Ozs7Ozs7QUFFM0QsUUFBUTtBQUNSLCtFQUErRTtBQUMvRTtJQUEyQyxpQ0FBWTtJQUF2RDtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsdUJBQXVCO1FBSDNCLHFFQTJSQztRQXRSRyxtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLDhDQUE4QztRQUM5Qyx3RUFBd0U7UUFDeEUsbUVBQW1FO1FBQ25FLHFHQUFxRztRQUNyRyxNQUFNO1FBQ04sb0NBQW9DO1FBQ3BDLGtDQUFrQztRQUNsQyw2QkFBNkI7UUFDN0IsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFFbEIsb0JBQW9CO1FBQ3BCLGNBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUVOLGlCQUFXLEdBQWtCLElBQUksQ0FBQztRQUNsQyxZQUFNLEdBQVEsSUFBSSxDQUFDLENBQVUsOENBQThDOztJQW1RekYsQ0FBQztJQWpRRyw0QkFBSSxHQUFKLFVBQUssSUFBd0I7UUFDekIsaUJBQU0sSUFBSSxZQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpCLG1DQUFtQztRQUNuQyw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxzQkFBSSx5Q0FBYzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsR0FBRyxJ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LENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRVMsd0NBQWdCLEdBQTFCLFVBQTJCLElBQXdCO1FBQy9DLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQTNSQSxBQTJSQyxDQTNSMEMsRUFBRSxDQUFDLFNBQVMsR0EyUnREOztBQUVELGdFQUFnRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGF1dGhvcjogaHR0cHM6Ly9naXRodWIuY29tL2Nhb2d0YWEvQ0NCYXRjaGluZ1RyaWNrcyAgIEdUXG5cbi8vIOiHquWumuS5iea4suafk1xuLy8gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9hZHZhbmNlZC10b3BpY3MvY3VzdG9tLXJlbmRlci5odG1sIFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR1RBc3NlbWJsZXIyRCBleHRlbmRzIGNjLkFzc2VtYmxlciB7XG4gICAgLy8g5q+P5LiqMmTmuLLmn5PljZXlhYPph4znmoTmnIk6XG4gICAgLy8gNOS4qumhtueCueWxnuaAp+aVsOaNrlxuICAgIC8vIDbkuKrpobbngrnntKLlvJUgLT4g5LiJ6KeS5YmW5YiG5oiQMuS4quS4ieinkuW9olxuXG4gICAgLy8g5q+P5Liq6aG254K55bGe5oCn55SxNeS4qjMy5L2N5pWw5o2u57uE5oiQXG4gICAgLy8g6aG254K55bGe5oCn5aOw5piOOlxuICAgIC8vIHZhciB2Zm10UG9zVXZDb2xvciA9IG5ldyBnZnguVmVydGV4Rm9ybWF0KFtcbiAgICAvLyAgICAgeyBuYW1lOiBnZnguQVRUUl9QT1NJVElPTiwgdHlwZTogZ2Z4LkFUVFJfVFlQRV9GTE9BVDMyLCBudW06IDIgfSxcbiAgICAvLyAgICAgeyBuYW1lOiBnZnguQVRUUl9VVjAsIHR5cGU6IGdmeC5BVFRSX1RZUEVfRkxPQVQzMiwgbnVtOiAyIH0sXG4gICAgLy8gICAgIHsgbmFtZTogZ2Z4LkFUVFJfQ09MT1IsIHR5cGU6IGdmeC5BVFRSX1RZUEVfVUlOVDgsIG51bTogNCwgbm9ybWFsaXplOiB0cnVlIH0sICAgICAgIC8vIDTkuKp1aW50OFxuICAgIC8vIF0pO1xuICAgIC8vIOmhtueCueWxnuaAp+aVsOaNruaOkuWIl++8jOavj+S4gOagvOaYrzMy5L2NIChmbG9hdDMyL3VpbnQzMilcbiAgICAvLyB4fHl8dXx2fGNvbG9yfHh8eXx1fHZ8Y29sb3J8Li4uXG4gICAgLy8g5YW25LitdXblnKjkuIDnu4TmlbDmja7kuK3nmoTlgY/np7vmmK8y77yMY29sb3LnmoTlgY/np7vmmK80XG4gICAgdmVydGljZXNDb3VudCA9IDQ7XG4gICAgaW5kaWNlc0NvdW50ID0gNjtcbiAgICBmbG9hdHNQZXJWZXJ0ID0gNTtcblxuICAgIC8vIHZkYXRhIG9mZnNldCBpbmZvXG4gICAgdXZPZmZzZXQgPSAyO1xuICAgIGNvbG9yT2Zmc2V0ID0gNDtcbiAgICBcbiAgICBwcm90ZWN0ZWQgX3JlbmRlckRhdGE6IGNjLlJlbmRlckRhdGEgPSBudWxsO1xuICAgIHByb3RlY3RlZCBfbG9jYWw6IGFueSA9IG51bGw7ICAgICAgICAgIC8vIOS4remXtOe7k+aenOOAgltsLGIscix0XeOAgm5vZGXlr7nosaHlt6bkuIvjgIHlj7PkuIrpobbngrnnmoTmnKzlnLDlnZDmoIfvvIzljbPnm7jlr7nkuo7plJrngrnnmoTlgY/np7tcblxuICAgIGluaXQoY29tcDogY2MuUmVuZGVyQ29tcG9uZW50KSB7XG4gICAgICAgIHN1cGVyLmluaXQoY29tcCk7XG5cbiAgICAgICAgLy8gY2MuQXNzZW1ibGVyMkTnmoTliJ3lp4vljJbmlL7lnKhjb25zdHJ1Y3RvcumHjFxuICAgICAgICAvLyDmraTlpITmiorliJ3lp4vljJbmlL7lnKhpbml06YeM77yM5Lul5L6/5oiQ5ZGY5Y+Y6YeP6IO95aSf5pyJ5py65Lya5L+u5pS5XG4gICAgICAgIHRoaXMuX3JlbmRlckRhdGEgPSBuZXcgY2MuUmVuZGVyRGF0YSgpO1xuICAgICAgICB0aGlzLl9yZW5kZXJEYXRhLmluaXQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbml0TG9jYWwoKTtcbiAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xuICAgIH1cblxuICAgIGdldCB2ZXJ0aWNlc0Zsb2F0cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmVydGljZXNDb3VudCAqIHRoaXMuZmxvYXRzUGVyVmVydDtcbiAgICB9XG5cbiAgICBpbml0RGF0YSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLl9yZW5kZXJEYXRhO1xuICAgICAgICBkYXRhLmNyZWF0ZVF1YWREYXRhKDAsIHRoaXMudmVydGljZXNGbG9hdHMsIHRoaXMuaW5kaWNlc0NvdW50KTtcbiAgICAgICAgLy8gY3JlYXRlUXVhZERhdGHlhoXpg6jkvJrosIPnlKhpbml0UXVhZEluZGljZXPliJ3lp4vljJbntKLlvJXkv6Hmga9cbiAgICAgICAgLy8g5aaC5p6c5piv55So55SoZmxleGJ1ZmZlcuWIm+W7uuWImemcgOimgeiHquW3seWIneWni+WMllxuICAgIH1cblxuICAgIGluaXRMb2NhbCgpIHtcbiAgICAgICAgdGhpcy5fbG9jYWwgPSBbXTtcbiAgICAgICAgdGhpcy5fbG9jYWwubGVuZ3RoID0gNDtcbiAgICB9XG5cbiAgICB1cGRhdGVDb2xvcihjb21wLCBjb2xvcikge1xuICAgICAgICAvLyByZW5kZXIgZGF0YSA9IHZlcnRzID0geHx5fHV8dnxjb2xvcnx4fHl8dXx2fGNvbG9yfC4uLlxuICAgICAgICAvLyDloavlhYVyZW5kZXIgZGF0YeS4rTTkuKrpobbngrnnmoRjb2xvcumDqOWIhlxuICAgICAgICBsZXQgdWludFZlcnRzID0gdGhpcy5fcmVuZGVyRGF0YS51aW50VkRhdGFzWzBdO1xuICAgICAgICBpZiAoIXVpbnRWZXJ0cykgcmV0dXJuO1xuICAgICAgICBjb2xvciA9IGNvbG9yICE9IG51bGwgPyBjb2xvciA6IGNvbXAubm9kZS5jb2xvci5fdmFsO1xuICAgICAgICBsZXQgZmxvYXRzUGVyVmVydCA9IHRoaXMuZmxvYXRzUGVyVmVydDtcbiAgICAgICAgbGV0IGNvbG9yT2Zmc2V0ID0gdGhpcy5jb2xvck9mZnNldDtcbiAgICAgICAgZm9yIChsZXQgaSA9IGNvbG9yT2Zmc2V0LCBsID0gdWludFZlcnRzLmxlbmd0aDsgaSA8IGw7IGkgKz0gZmxvYXRzUGVyVmVydCkge1xuICAgICAgICAgICAgdWludFZlcnRzW2ldID0gY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRCdWZmZXIoKSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gY2MucmVuZGVyZXIuX2hhbmRsZS5fbWVzaEJ1ZmZlcjtcbiAgICB9XG5cbiAgICB1cGRhdGVXb3JsZFZlcnRzKGNvbXApIHtcbiAgICAgICAgaWYgKENDX05BVElWRVJFTkRFUkVSKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVdvcmxkVmVydHNOYXRpdmUoY29tcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVdvcmxkVmVydHNXZWJHTChjb21wKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVdvcmxkVmVydHNXZWJHTChjb21wKSB7XG4gICAgICAgIGxldCBsb2NhbCA9IHRoaXMuX2xvY2FsO1xuICAgICAgICBsZXQgdmVydHMgPSB0aGlzLl9yZW5kZXJEYXRhLnZEYXRhc1swXTtcblxuICAgICAgICBsZXQgbWF0cml4ID0gY29tcC5ub2RlLl93b3JsZE1hdHJpeDtcbiAgICAgICAgbGV0IG1hdHJpeG0gPSBtYXRyaXgubSxcbiAgICAgICAgICAgIGEgPSBtYXRyaXhtWzBdLCBiID0gbWF0cml4bVsxXSwgYyA9IG1hdHJpeG1bNF0sIGQgPSBtYXRyaXhtWzVdLFxuICAgICAgICAgICAgdHggPSBtYXRyaXhtWzEyXSwgdHkgPSBtYXRyaXhtWzEzXTtcblxuICAgICAgICBsZXQgdmwgPSBsb2NhbFswXSwgdnIgPSBsb2NhbFsyXSxcbiAgICAgICAgICAgIHZiID0gbG9jYWxbMV0sIHZ0ID0gbG9jYWxbM107XG4gICAgICAgIFxuICAgICAgICAvKlxuICAgICAgICBtMDAgPSAxLCBtMDEgPSAwLCBtMDIgPSAwLCBtMDMgPSAwLFxuICAgICAgICBtMDQgPSAwLCBtMDUgPSAxLCBtMDYgPSAwLCBtMDcgPSAwLFxuICAgICAgICBtMDggPSAwLCBtMDkgPSAwLCBtMTAgPSAxLCBtMTEgPSAwLFxuICAgICAgICBtMTIgPSAwLCBtMTMgPSAwLCBtMTQgPSAwLCBtMTUgPSAxXG4gICAgICAgICovXG4gICAgICAgIC8vIFthLGIsYyxkXSA9IF93b3JsZE1hdHJpeFsxLDIsNCw1XSA9PSBbMSwwLDAsMV1cbiAgICAgICAgLy8gX3dvcmxkTWF0cml4WzEyLDEzXeaYr3h555qE5bmz56e76YePXG4gICAgICAgIC8vIOWNs+S4lueVjOefqemYteeahOW3puS4iuinkjJ4MuaYr+WNleWFg+efqemYte+8jOivtOaYjuWcqDJE5Zy65pmv5YaF5rKh5pyJ5Ye6546w5peL6L2s5oiW6ICF57yp5pS+XG4gICAgICAgIGxldCBqdXN0VHJhbnNsYXRlID0gYSA9PT0gMSAmJiBiID09PSAwICYmIGMgPT09IDAgJiYgZCA9PT0gMTtcblxuICAgICAgICAvLyByZW5kZXIgZGF0YSA9IHZlcnRzID0geHx5fHV8dnxjb2xvcnx4fHl8dXx2fGNvbG9yfC4uLlxuICAgICAgICAvLyDloavlhYVyZW5kZXIgZGF0YeS4rTTkuKrpobbngrnnmoR4eemDqOWIhlxuICAgICAgICBsZXQgaW5kZXggPSAwO1xuICAgICAgICBsZXQgZmxvYXRzUGVyVmVydCA9IHRoaXMuZmxvYXRzUGVyVmVydDtcbiAgICAgICAgaWYgKGp1c3RUcmFuc2xhdGUpIHtcbiAgICAgICAgICAgIC8vIGxlZnQgYm90dG9tXG4gICAgICAgICAgICB2ZXJ0c1tpbmRleF0gPSB2bCArIHR4O1xuICAgICAgICAgICAgdmVydHNbaW5kZXgrMV0gPSB2YiArIHR5O1xuICAgICAgICAgICAgaW5kZXggKz0gZmxvYXRzUGVyVmVydDtcbiAgICAgICAgICAgIC8vIHJpZ2h0IGJvdHRvbVxuICAgICAgICAgICAgdmVydHNbaW5kZXhdID0gdnIgKyB0eDtcbiAgICAgICAgICAgIHZlcnRzW2luZGV4KzFdID0gdmIgKyB0eTtcbiAgICAgICAgICAgIGluZGV4ICs9IGZsb2F0c1BlclZlcnQ7XG4gICAgICAgICAgICAvLyBsZWZ0IHRvcFxuICAgICAgICAgICAgdmVydHNbaW5kZXhdID0gdmwgKyB0eDtcbiAgICAgICAgICAgIHZlcnRzW2luZGV4KzFdID0gdnQgKyB0eTtcbiAgICAgICAgICAgIGluZGV4ICs9IGZsb2F0c1BlclZlcnQ7XG4gICAgICAgICAgICAvLyByaWdodCB0b3BcbiAgICAgICAgICAgIHZlcnRzW2luZGV4XSA9IHZyICsgdHg7XG4gICAgICAgICAgICB2ZXJ0c1tpbmRleCsxXSA9IHZ0ICsgdHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyA05a+5eHnliIbliKvkuZjku6UgWzIsMl3ku7/lsITnn6npmLXvvIznhLblkI4r5bmz56e76YePXG4gICAgICAgICAgICBsZXQgYWwgPSBhICogdmwsIGFyID0gYSAqIHZyLFxuICAgICAgICAgICAgYmwgPSBiICogdmwsIGJyID0gYiAqIHZyLFxuICAgICAgICAgICAgY2IgPSBjICogdmIsIGN0ID0gYyAqIHZ0LFxuICAgICAgICAgICAgZGIgPSBkICogdmIsIGR0ID0gZCAqIHZ0O1xuXG4gICAgICAgICAgICAvLyBsZWZ0IGJvdHRvbVxuICAgICAgICAgICAgLy8gbmV3eCA9IHZsICogYSArIHZiICogYyArIHR4XG4gICAgICAgICAgICAvLyBuZXd5ID0gdmwgKiBiICsgdmIgKiBkICsgdHlcbiAgICAgICAgICAgIHZlcnRzW2luZGV4XSA9IGFsICsgY2IgKyB0eDtcbiAgICAgICAgICAgIHZlcnRzW2luZGV4KzFdID0gYmwgKyBkYiArIHR5O1xuICAgICAgICAgICAgaW5kZXggKz0gZmxvYXRzUGVyVmVydDtcbiAgICAgICAgICAgIC8vIHJpZ2h0IGJvdHRvbVxuICAgICAgICAgICAgdmVydHNbaW5kZXhdID0gYXIgKyBjYiArIHR4O1xuICAgICAgICAgICAgdmVydHNbaW5kZXgrMV0gPSBiciArIGRiICsgdHk7XG4gICAgICAgICAgICBpbmRleCArPSBmbG9hdHNQZXJWZXJ0O1xuICAgICAgICAgICAgLy8gbGVmdCB0b3BcbiAgICAgICAgICAgIHZlcnRzW2luZGV4XSA9IGFsICsgY3QgKyB0eDtcbiAgICAgICAgICAgIHZlcnRzW2luZGV4KzFdID0gYmwgKyBkdCArIHR5O1xuICAgICAgICAgICAgaW5kZXggKz0gZmxvYXRzUGVyVmVydDtcbiAgICAgICAgICAgIC8vIHJpZ2h0IHRvcFxuICAgICAgICAgICAgdmVydHNbaW5kZXhdID0gYXIgKyBjdCArIHR4O1xuICAgICAgICAgICAgdmVydHNbaW5kZXgrMV0gPSBiciArIGR0ICsgdHk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuYXRpdmXlnLrmma/kuIvkvb/nlKjnmoR1cGRhdGVXb3JsZFZlcnRzXG4gICAgLy8gY29weSBmcm9tIFxcanNiLWFkYXB0ZXItbWFzdGVyXFxlbmdpbmVcXGFzc2VtYmxlcnNcXGFzc2VtYmxlci0yZC5qc1xuICAgIHVwZGF0ZVdvcmxkVmVydHNOYXRpdmUoY29tcCkge1xuICAgICAgICBsZXQgbG9jYWwgPSB0aGlzLl9sb2NhbDtcbiAgICAgICAgbGV0IHZlcnRzID0gdGhpcy5fcmVuZGVyRGF0YS52RGF0YXNbMF07XG4gICAgICAgIGxldCBmbG9hdHNQZXJWZXJ0ID0gdGhpcy5mbG9hdHNQZXJWZXJ0O1xuICAgICAgXG4gICAgICAgIGxldCB2bCA9IGxvY2FsWzBdLFxuICAgICAgICAgICAgdnIgPSBsb2NhbFsyXSxcbiAgICAgICAgICAgIHZiID0gbG9jYWxbMV0sXG4gICAgICAgICAgICB2dCA9IGxvY2FsWzNdO1xuICAgICAgXG4gICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcbiAgICAgICAgLy8gbGVmdCBib3R0b21cbiAgICAgICAgdmVydHNbaW5kZXhdID0gdmw7XG4gICAgICAgIHZlcnRzW2luZGV4KzFdID0gdmI7XG4gICAgICAgIGluZGV4ICs9IGZsb2F0c1BlclZlcnQ7XG4gICAgICAgIC8vIHJpZ2h0IGJvdHRvbVxuICAgICAgICB2ZXJ0c1tpbmRleF0gPSB2cjtcbiAgICAgICAgdmVydHNbaW5kZXgrMV0gPSB2YjtcbiAgICAgICAgaW5kZXggKz0gZmxvYXRzUGVyVmVydDtcbiAgICAgICAgLy8gbGVmdCB0b3BcbiAgICAgICAgdmVydHNbaW5kZXhdID0gdmw7XG4gICAgICAgIHZlcnRzW2luZGV4KzFdID0gdnQ7XG4gICAgICAgIGluZGV4ICs9IGZsb2F0c1BlclZlcnQ7XG4gICAgICAgIC8vIHJpZ2h0IHRvcFxuICAgICAgICB2ZXJ0c1tpbmRleF0gPSB2cjtcbiAgICAgICAgdmVydHNbaW5kZXgrMV0gPSB2dDtcbiAgICB9XG5cbiAgICAvLyDlsIblh4blpIflpb3nmoTpobbngrnmlbDmja7loavlhYXov5sgVmVydGV4QnVmZmVyIOWSjCBJbmRpY2VCdWZmZXJcbiAgICBmaWxsQnVmZmVycyhjb21wLCByZW5kZXJlcikge1xuICAgICAgICBpZiAocmVuZGVyZXIud29ybGRNYXREaXJ0eSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVXb3JsZFZlcnRzKGNvbXApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJlbmRlckRhdGEgPSB0aGlzLl9yZW5kZXJEYXRhO1xuICAgICAgICBsZXQgdkRhdGEgPSByZW5kZXJEYXRhLnZEYXRhc1swXTtcbiAgICAgICAgbGV0IGlEYXRhID0gcmVuZGVyRGF0YS5pRGF0YXNbMF07XG5cbiAgICAgICAgbGV0IGJ1ZmZlciA9IHRoaXMuZ2V0QnVmZmVyKC8qcmVuZGVyZXIqLyk7XG4gICAgICAgIGxldCBvZmZzZXRJbmZvID0gYnVmZmVyLnJlcXVlc3QodGhpcy52ZXJ0aWNlc0NvdW50LCB0aGlzLmluZGljZXNDb3VudCk7XG5cbiAgICAgICAgLy8gYnVmZmVyIGRhdGEgbWF5IGJlIHJlYWxsb2MsIG5lZWQgZ2V0IHJlZmVyZW5jZSBhZnRlciByZXF1ZXN0LlxuXG4gICAgICAgIC8vIGZpbGwgdmVydGljZXNcbiAgICAgICAgbGV0IHZlcnRleE9mZnNldCA9IG9mZnNldEluZm8uYnl0ZU9mZnNldCA+PiAyLFxuICAgICAgICAgICAgdmJ1ZiA9IGJ1ZmZlci5fdkRhdGE7XG5cbiAgICAgICAgaWYgKHZEYXRhLmxlbmd0aCArIHZlcnRleE9mZnNldCA+IHZidWYubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YnVmLnNldCh2RGF0YS5zdWJhcnJheSgwLCB2YnVmLmxlbmd0aCAtIHZlcnRleE9mZnNldCksIHZlcnRleE9mZnNldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YnVmLnNldCh2RGF0YSwgdmVydGV4T2Zmc2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbGwgaW5kaWNlc1xuICAgICAgICBsZXQgaWJ1ZiA9IGJ1ZmZlci5faURhdGEsXG4gICAgICAgICAgICBpbmRpY2VPZmZzZXQgPSBvZmZzZXRJbmZvLmluZGljZU9mZnNldCxcbiAgICAgICAgICAgIHZlcnRleElkID0gb2Zmc2V0SW5mby52ZXJ0ZXhPZmZzZXQ7ICAgICAgICAgICAgIC8vIHZlcnRleElk5piv5bey57uP5ZyoYnVmZmVy6YeM55qE6aG254K55pWw77yM5Lmf5piv5b2T5YmN6aG254K55bqP5Y+355qE5Z+65pWwXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gaURhdGEubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpYnVmW2luZGljZU9mZnNldCsrXSA9IHZlcnRleElkICsgaURhdGFbaV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYWNrVG9EeW5hbWljQXRsYXMoY29tcCwgZnJhbWUpIHtcbiAgICAgICAgaWYgKENDX1RFU1QpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIGlmICghZnJhbWUuX29yaWdpbmFsICYmIGNjLmR5bmFtaWNBdGxhc01hbmFnZXIgJiYgZnJhbWUuX3RleHR1cmUucGFja2FibGUpIHtcbiAgICAgICAgICAgIGxldCBwYWNrZWRGcmFtZSA9IGNjLmR5bmFtaWNBdGxhc01hbmFnZXIuaW5zZXJ0U3ByaXRlRnJhbWUoZnJhbWUpO1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBpZiAocGFja2VkRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBmcmFtZS5fc2V0RHluYW1pY0F0bGFzRnJhbWUocGFja2VkRnJhbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBtYXRlcmlhbCA9IGNvbXAuX21hdGVyaWFsc1swXTtcbiAgICAgICAgaWYgKCFtYXRlcmlhbCkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgaWYgKG1hdGVyaWFsLmdldFByb3BlcnR5KCd0ZXh0dXJlJykgIT09IGZyYW1lLl90ZXh0dXJlKSB7XG4gICAgICAgICAgICAvLyB0ZXh0dXJlIHdhcyBwYWNrZWQgdG8gZHluYW1pYyBhdGxhcywgc2hvdWxkIHVwZGF0ZSB1dnNcbiAgICAgICAgICAgIGNvbXAuX3ZlcnRzRGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgY29tcC5fdXBkYXRlTWF0ZXJpYWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCB1cGRhdGVVVnMoY29tcDogY2MuUmVuZGVyQ29tcG9uZW50KSB7XG4gICAgICAgIC8vIDTkuKrpobbngrnnmoR1duWdkOagh++8jOWvueW6lOW3puS4i+OAgeWPs+S4i+OAgeW3puS4iuOAgeWPs+S4ilxuICAgICAgICAvLyDlpoLmnpzmmK9jYy5TcHJpdGXnu4Tku7bvvIzov5nph4zlj5ZzcHJpdGUuX3Nwcml0ZUZyYW1lLnV2O1xuICAgICAgICBsZXQgdXYgPSBbMCwgMCwgMSwgMCwgMCwgMSwgMSwgMV07XG4gICAgICAgIGxldCB1dk9mZnNldCA9IHRoaXMudXZPZmZzZXQ7XG4gICAgICAgIGxldCBmbG9hdHNQZXJWZXJ0ID0gdGhpcy5mbG9hdHNQZXJWZXJ0O1xuICAgICAgICBsZXQgdmVydHMgPSB0aGlzLl9yZW5kZXJEYXRhLnZEYXRhc1swXTtcblxuICAgICAgICAvLyByZW5kZXIgZGF0YSA9IHZlcnRzID0geHx5fHV8dnxjb2xvcnx4fHl8dXx2fGNvbG9yfC4uLlxuICAgICAgICAvLyDloavlhYVyZW5kZXIgZGF0YeS4rTTkuKrpobbngrnnmoR1dumDqOWIhlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNyY09mZnNldCA9IGkgKiAyO1xuICAgICAgICAgICAgbGV0IGRzdE9mZnNldCA9IGZsb2F0c1BlclZlcnQgKiBpICsgdXZPZmZzZXQ7XG4gICAgICAgICAgICB2ZXJ0c1tkc3RPZmZzZXRdID0gdXZbc3JjT2Zmc2V0XTtcbiAgICAgICAgICAgIHZlcnRzW2RzdE9mZnNldCArIDFdID0gdXZbc3JjT2Zmc2V0ICsgMV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlVmVydHMoY29tcDogY2MuUmVuZGVyQ29tcG9uZW50KSB7XG4gICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY29tcC5ub2RlLFxuICAgICAgICAgICAgY3c6IG51bWJlciA9IG5vZGUud2lkdGgsXG4gICAgICAgICAgICBjaDogbnVtYmVyID0gbm9kZS5oZWlnaHQsXG4gICAgICAgICAgICBhcHB4OiBudW1iZXIgPSBub2RlLmFuY2hvclggKiBjdyxcbiAgICAgICAgICAgIGFwcHk6IG51bWJlciA9IG5vZGUuYW5jaG9yWSAqIGNoLFxuICAgICAgICAgICAgbDogbnVtYmVyLFxuICAgICAgICAgICAgYjogbnVtYmVyLCBcbiAgICAgICAgICAgIHI6IG51bWJlcixcbiAgICAgICAgICAgIHQ6IG51bWJlcjtcblxuICAgICAgICBsID0gLSBhcHB4O1xuICAgICAgICBiID0gLSBhcHB5O1xuICAgICAgICByID0gY3cgLSBhcHB4O1xuICAgICAgICB0ID0gY2ggLSBhcHB5O1xuXG4gICAgICAgIGxldCBsb2NhbCA9IHRoaXMuX2xvY2FsO1xuICAgICAgICBsb2NhbFswXSA9IGw7XG4gICAgICAgIGxvY2FsWzFdID0gYjtcbiAgICAgICAgbG9jYWxbMl0gPSByO1xuICAgICAgICBsb2NhbFszXSA9IHQ7XG4gICAgICAgIHRoaXMudXBkYXRlV29ybGRWZXJ0cyhjb21wKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUmVuZGVyRGF0YShjb21wOiBjYy5SZW5kZXJDb21wb25lbnQpIHtcbiAgICAgICAgaWYgKGNvbXAuX3ZlcnRzRGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVVZzKGNvbXApO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWZXJ0cyhjb21wKTtcbiAgICAgICAgICAgIGNvbXAuX3ZlcnRzRGlydHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gbW9yZSBpbmZvOiAgaHR0cHM6Ly9tcC53ZWl4aW4ucXEuY29tL3MvWWFQSGNUTjFsa2dvNWVpWW9HM3A5QSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/dissolveTest/DissolveTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ebf5+LjkdC7bEhwfIM9y46', 'DissolveTest');
// shaderScene/dissolveTest/DissolveTest.ts

"use strict";
// 
// author: http://lamyoung.com/
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
var DissolveTest = /** @class */ (function (_super) {
    __extends(DissolveTest, _super);
    function DissolveTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sp_dissolve = [];
        return _this;
    }
    DissolveTest.prototype.sliderCallback = function (slider, customEventData) {
        var value = slider.progress * 1.0;
        this.sp_dissolve.forEach(function (sp) {
            sp.getMaterial(0).setProperty('noiseThreshold', value);
        });
    };
    __decorate([
        property([cc.Sprite])
    ], DissolveTest.prototype, "sp_dissolve", void 0);
    DissolveTest = __decorate([
        ccclass
    ], DissolveTest);
    return DissolveTest;
}(cc.Component));
exports.default = DissolveTest;
/*
https://mp.weixin.qq.com/s/Ht0kIbaeBEds_wUeUlu8JQ

*/
// 欢迎关注微信公众号[白玉无冰]
/**
█████████████████████████████████████
█████████████████████████████████████
████ ▄▄▄▄▄ █▀█ █▄██▀▄ ▄▄██ ▄▄▄▄▄ ████
████ █   █ █▀▀▀█ ▀▄▀▀▀█▄▀█ █   █ ████
████ █▄▄▄█ █▀ █▀▀▀ ▀▄▄ ▄ █ █▄▄▄█ ████
████▄▄▄▄▄▄▄█▄▀ ▀▄█ ▀▄█▄▀ █▄▄▄▄▄▄▄████
████▄▄  ▄▀▄▄ ▄▀▄▀▀▄▄▄ █ █ ▀ ▀▄█▄▀████
████▀ ▄  █▄█▀█▄█▀█  ▀▄ █ ▀ ▄▄██▀█████
████ ▄▀▄▄▀▄ █▄▄█▄ ▀▄▀ ▀ ▀ ▀▀▀▄ █▀████
████▀ ██ ▀▄ ▄██ ▄█▀▄ ██▀ ▀ █▄█▄▀█████
████   ▄██▄▀ █▀▄▀▄▀▄▄▄▄ ▀█▀ ▀▀ █▀████
████ █▄ █ ▄ █▀ █▀▄█▄▄▄▄▀▄▄█▄▄▄▄▀█████
████▄█▄█▄█▄█▀ ▄█▄   ▀▄██ ▄▄▄ ▀   ████
████ ▄▄▄▄▄ █▄██ ▄█▀  ▄   █▄█  ▄▀█████
████ █   █ █ ▄█▄ ▀  ▀▀██ ▄▄▄▄ ▄▀ ████
████ █▄▄▄█ █ ▄▄▀ ▄█▄█▄█▄ ▀▄   ▄ █████
████▄▄▄▄▄▄▄█▄██▄▄██▄▄▄█████▄▄█▄██████
█████████████████████████████████████
█████████████████████████████████████
 */ 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9kaXNzb2x2ZVRlc3QvRGlzc29sdmVUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxHQUFHO0FBQ0gsK0JBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFXQztRQVJHLGlCQUFXLEdBQWdCLEVBQUUsQ0FBQTs7SUFRakMsQ0FBQztJQU5XLHFDQUFjLEdBQXRCLFVBQXVCLE1BQWlCLEVBQUUsZUFBdUI7UUFDN0QsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO1lBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQzFELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQVBEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FEQUNPO0lBSFosWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQVdoQztJQUFELG1CQUFDO0NBWEQsQUFXQyxDQVh5QyxFQUFFLENBQUMsU0FBUyxHQVdyRDtrQkFYb0IsWUFBWTtBQWFqQzs7O0VBR0U7QUFFRixrQkFBa0I7QUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXG4vLyBhdXRob3I6IGh0dHA6Ly9sYW15b3VuZy5jb20vXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNzb2x2ZVRlc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVdKVxuICAgIHNwX2Rpc3NvbHZlOiBjYy5TcHJpdGVbXSA9IFtdXG5cbiAgICBwcml2YXRlIHNsaWRlckNhbGxiYWNrKHNsaWRlcjogY2MuU2xpZGVyLCBjdXN0b21FdmVudERhdGE6IHN0cmluZykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHNsaWRlci5wcm9ncmVzcyAqIDEuMDtcbiAgICAgICAgdGhpcy5zcF9kaXNzb2x2ZS5mb3JFYWNoKChzcCkgPT4ge1xuICAgICAgICAgICAgc3AuZ2V0TWF0ZXJpYWwoMCkuc2V0UHJvcGVydHkoJ25vaXNlVGhyZXNob2xkJywgdmFsdWUpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vKlxuaHR0cHM6Ly9tcC53ZWl4aW4ucXEuY29tL3MvSHQwa0liYWVCRWRzX3dVZVVsdThKUVxuXG4qL1xuXG4vLyDmrKLov47lhbPms6jlvq7kv6HlhazkvJflj7db55m9546J5peg5YawXVxuXG4vKipcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXG7ilojilojilojilogg4paE4paE4paE4paE4paEIOKWiOKWgOKWiCDilojiloTilojilojiloDiloQg4paE4paE4paI4paIIOKWhOKWhOKWhOKWhOKWhCDilojilojilojilohcbuKWiOKWiOKWiOKWiCDiloggICDilogg4paI4paA4paA4paA4paIIOKWgOKWhOKWgOKWgOKWgOKWiOKWhOKWgOKWiCDiloggICDilogg4paI4paI4paI4paIXG7ilojilojilojilogg4paI4paE4paE4paE4paIIOKWiOKWgCDilojiloDiloDiloAg4paA4paE4paEIOKWhCDilogg4paI4paE4paE4paE4paIIOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paE4paE4paE4paE4paE4paE4paE4paI4paE4paAIOKWgOKWhOKWiCDiloDiloTilojiloTiloAg4paI4paE4paE4paE4paE4paE4paE4paE4paI4paI4paI4paIXG7ilojilojilojilojiloTiloQgIOKWhOKWgOKWhOKWhCDiloTiloDiloTiloDiloDiloTiloTiloQg4paIIOKWiCDiloAg4paA4paE4paI4paE4paA4paI4paI4paI4paIXG7ilojilojilojilojiloAg4paEICDilojiloTilojiloDilojiloTilojiloDiloggIOKWgOKWhCDilogg4paAIOKWhOKWhOKWiOKWiOKWgOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIIOKWhOKWgOKWhOKWhOKWgOKWhCDilojiloTiloTilojiloQg4paA4paE4paAIOKWgCDiloAg4paA4paA4paA4paEIOKWiOKWgOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paAIOKWiOKWiCDiloDiloQg4paE4paI4paIIOKWhOKWiOKWgOKWhCDilojilojiloAg4paAIOKWiOKWhOKWiOKWhOKWgOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIICAg4paE4paI4paI4paE4paAIOKWiOKWgOKWhOKWgOKWhOKWgOKWhOKWhOKWhOKWhCDiloDilojiloAg4paA4paAIOKWiOKWgOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIIOKWiOKWhCDilogg4paEIOKWiOKWgCDilojiloDiloTilojiloTiloTiloTiloTiloDiloTiloTilojiloTiloTiloTiloTiloDilojilojilojilojilohcbuKWiOKWiOKWiOKWiOKWhOKWiOKWhOKWiOKWhOKWiOKWhOKWiOKWgCDiloTilojiloQgICDiloDiloTilojilogg4paE4paE4paEIOKWgCAgIOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIIOKWhOKWhOKWhOKWhOKWhCDilojiloTilojilogg4paE4paI4paAICDiloQgICDilojiloTiloggIOKWhOKWgOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIIOKWiCAgIOKWiCDilogg4paE4paI4paEIOKWgCAg4paA4paA4paI4paIIOKWhOKWhOKWhOKWhCDiloTiloAg4paI4paI4paI4paIXG7ilojilojilojilogg4paI4paE4paE4paE4paIIOKWiCDiloTiloTiloAg4paE4paI4paE4paI4paE4paI4paEIOKWgOKWhCAgIOKWhCDilojilojilojilojilohcbuKWiOKWiOKWiOKWiOKWhOKWhOKWhOKWhOKWhOKWhOKWhOKWiOKWhOKWiOKWiOKWhOKWhOKWiOKWiOKWhOKWhOKWhOKWiOKWiOKWiOKWiOKWiOKWhOKWhOKWiOKWhOKWiOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXG7ilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcbiAqLyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/sprite2dLight/Sprite2dLightTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a81dFtSHFEzqrH1552t4PQ', 'Sprite2dLightTest');
// shaderScene/sprite2dLight/Sprite2dLightTest.ts

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
var Sprite2dLightTest = /** @class */ (function (_super) {
    __extends(Sprite2dLightTest, _super);
    function Sprite2dLightTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mtl_sprite_2d_light = null;
        _this._lightPos = new cc.Vec4(0, 0, 1, 1);
        return _this;
    }
    Sprite2dLightTest.prototype.sliderCallback = function (slider, customEventData) {
        var _a = customEventData.split(','), key = _a[0], min = _a[1], max = _a[2];
        var maxValue = Number(max);
        var minValue = Number(min);
        var value = slider.progress * (maxValue - minValue) + minValue;
        this._lightPos[key] = value;
        this.mtl_sprite_2d_light.setProperty('lightPos', this._lightPos);
    };
    __decorate([
        property(cc.Material)
    ], Sprite2dLightTest.prototype, "mtl_sprite_2d_light", void 0);
    Sprite2dLightTest = __decorate([
        ccclass
    ], Sprite2dLightTest);
    return Sprite2dLightTest;
}(cc.Component));
exports.default = Sprite2dLightTest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9zcHJpdGUyZExpZ2h0L1Nwcml0ZTJkTGlnaHRUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBZUM7UUFaRyx5QkFBbUIsR0FBZ0IsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7O0lBVS9DLENBQUM7SUFSVywwQ0FBYyxHQUF0QixVQUF1QixNQUFpQixFQUFFLGVBQXVCO1FBQ3ZELElBQUEsS0FBa0IsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBM0MsR0FBRyxRQUFBLEVBQUUsR0FBRyxRQUFBLEVBQUUsR0FBRyxRQUE4QixDQUFDO1FBQ25ELElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM1QixJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDNUIsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDakUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFYRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2tFQUNrQjtJQUh2QixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQWVyQztJQUFELHdCQUFDO0NBZkQsQUFlQyxDQWY4QyxFQUFFLENBQUMsU0FBUyxHQWUxRDtrQkFmb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJpdGUyZExpZ2h0VGVzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTWF0ZXJpYWwpXG4gICAgbXRsX3Nwcml0ZV8yZF9saWdodDogY2MuTWF0ZXJpYWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfbGlnaHRQb3MgPSBuZXcgY2MuVmVjNCgwLCAwLCAxLCAxKVxuXG4gICAgcHJpdmF0ZSBzbGlkZXJDYWxsYmFjayhzbGlkZXI6IGNjLlNsaWRlciwgY3VzdG9tRXZlbnREYXRhOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgW2tleSwgbWluLCBtYXhdID0gY3VzdG9tRXZlbnREYXRhLnNwbGl0KCcsJyk7XG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gTnVtYmVyKG1heClcbiAgICAgICAgY29uc3QgbWluVmFsdWUgPSBOdW1iZXIobWluKVxuICAgICAgICBjb25zdCB2YWx1ZSA9IHNsaWRlci5wcm9ncmVzcyAqIChtYXhWYWx1ZSAtIG1pblZhbHVlKSArIG1pblZhbHVlO1xuICAgICAgICB0aGlzLl9saWdodFBvc1trZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMubXRsX3Nwcml0ZV8yZF9saWdodC5zZXRQcm9wZXJ0eSgnbGlnaHRQb3MnLCB0aGlzLl9saWdodFBvcyk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/CaptureTest/EncodeJPG.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '76d910d2IxFvqGbKHrB690i', 'EncodeJPG');
// shaderScene/CaptureTest/EncodeJPG.ts

"use strict";
/*
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.
  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions are
  met:
  * Redistributions of source code must retain the above copyright notice,
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its
    contributors may be used to endorse or promote products derived from
    this software without specific prior written permission.
  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/*
JPEG encoder ported to JavaScript and optimized by Andreas Ritter, www.bytestrom.eu, 11/2009
Basic GUI blocking jpeg encoder
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeJPG = void 0;
// var btoa = btoa || function (buf) {
//     return Buffer.from(buf).toString('base64');
// };
function JPEGEncoder(quality) {
    var self = this;
    var fround = Math.round;
    var ffloor = Math.floor;
    var YTable = new Array(64);
    var UVTable = new Array(64);
    var fdtbl_Y = new Array(64);
    var fdtbl_UV = new Array(64);
    var YDC_HT;
    var UVDC_HT;
    var YAC_HT;
    var UVAC_HT;
    var bitcode = new Array(65535);
    var category = new Array(65535);
    var outputfDCTQuant = new Array(64);
    var DU = new Array(64);
    var byteout = [];
    var bytenew = 0;
    var bytepos = 7;
    var YDU = new Array(64);
    var UDU = new Array(64);
    var VDU = new Array(64);
    var clt = new Array(256);
    var RGB_YUV_TABLE = new Array(2048);
    var currentQuality;
    var ZigZag = [
        0, 1, 5, 6, 14, 15, 27, 28,
        2, 4, 7, 13, 16, 26, 29, 42,
        3, 8, 12, 17, 25, 30, 41, 43,
        9, 11, 18, 24, 31, 40, 44, 53,
        10, 19, 23, 32, 39, 45, 52, 54,
        20, 22, 33, 38, 46, 51, 55, 60,
        21, 34, 37, 47, 50, 56, 59, 61,
        35, 36, 48, 49, 57, 58, 62, 63
    ];
    var std_dc_luminance_nrcodes = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
    var std_dc_luminance_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var std_ac_luminance_nrcodes = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 0x7d];
    var std_ac_luminance_values = [
        0x01, 0x02, 0x03, 0x00, 0x04, 0x11, 0x05, 0x12,
        0x21, 0x31, 0x41, 0x06, 0x13, 0x51, 0x61, 0x07,
        0x22, 0x71, 0x14, 0x32, 0x81, 0x91, 0xa1, 0x08,
        0x23, 0x42, 0xb1, 0xc1, 0x15, 0x52, 0xd1, 0xf0,
        0x24, 0x33, 0x62, 0x72, 0x82, 0x09, 0x0a, 0x16,
        0x17, 0x18, 0x19, 0x1a, 0x25, 0x26, 0x27, 0x28,
        0x29, 0x2a, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39,
        0x3a, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49,
        0x4a, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59,
        0x5a, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69,
        0x6a, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79,
        0x7a, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89,
        0x8a, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98,
        0x99, 0x9a, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7,
        0xa8, 0xa9, 0xaa, 0xb2, 0xb3, 0xb4, 0xb5, 0xb6,
        0xb7, 0xb8, 0xb9, 0xba, 0xc2, 0xc3, 0xc4, 0xc5,
        0xc6, 0xc7, 0xc8, 0xc9, 0xca, 0xd2, 0xd3, 0xd4,
        0xd5, 0xd6, 0xd7, 0xd8, 0xd9, 0xda, 0xe1, 0xe2,
        0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9, 0xea,
        0xf1, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xf7, 0xf8,
        0xf9, 0xfa
    ];
    var std_dc_chrominance_nrcodes = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
    var std_dc_chrominance_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    var std_ac_chrominance_nrcodes = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 0x77];
    var std_ac_chrominance_values = [
        0x00, 0x01, 0x02, 0x03, 0x11, 0x04, 0x05, 0x21,
        0x31, 0x06, 0x12, 0x41, 0x51, 0x07, 0x61, 0x71,
        0x13, 0x22, 0x32, 0x81, 0x08, 0x14, 0x42, 0x91,
        0xa1, 0xb1, 0xc1, 0x09, 0x23, 0x33, 0x52, 0xf0,
        0x15, 0x62, 0x72, 0xd1, 0x0a, 0x16, 0x24, 0x34,
        0xe1, 0x25, 0xf1, 0x17, 0x18, 0x19, 0x1a, 0x26,
        0x27, 0x28, 0x29, 0x2a, 0x35, 0x36, 0x37, 0x38,
        0x39, 0x3a, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48,
        0x49, 0x4a, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58,
        0x59, 0x5a, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68,
        0x69, 0x6a, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78,
        0x79, 0x7a, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87,
        0x88, 0x89, 0x8a, 0x92, 0x93, 0x94, 0x95, 0x96,
        0x97, 0x98, 0x99, 0x9a, 0xa2, 0xa3, 0xa4, 0xa5,
        0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xb2, 0xb3, 0xb4,
        0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xc2, 0xc3,
        0xc4, 0xc5, 0xc6, 0xc7, 0xc8, 0xc9, 0xca, 0xd2,
        0xd3, 0xd4, 0xd5, 0xd6, 0xd7, 0xd8, 0xd9, 0xda,
        0xe2, 0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9,
        0xea, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xf7, 0xf8,
        0xf9, 0xfa
    ];
    function initQuantTables(sf) {
        var YQT = [
            16, 11, 10, 16, 24, 40, 51, 61,
            12, 12, 14, 19, 26, 58, 60, 55,
            14, 13, 16, 24, 40, 57, 69, 56,
            14, 17, 22, 29, 51, 87, 80, 62,
            18, 22, 37, 56, 68, 109, 103, 77,
            24, 35, 55, 64, 81, 104, 113, 92,
            49, 64, 78, 87, 103, 121, 120, 101,
            72, 92, 95, 98, 112, 100, 103, 99
        ];
        for (var i = 0; i < 64; i++) {
            var t = ffloor((YQT[i] * sf + 50) / 100);
            if (t < 1) {
                t = 1;
            }
            else if (t > 255) {
                t = 255;
            }
            YTable[ZigZag[i]] = t;
        }
        var UVQT = [
            17, 18, 24, 47, 99, 99, 99, 99,
            18, 21, 26, 66, 99, 99, 99, 99,
            24, 26, 56, 99, 99, 99, 99, 99,
            47, 66, 99, 99, 99, 99, 99, 99,
            99, 99, 99, 99, 99, 99, 99, 99,
            99, 99, 99, 99, 99, 99, 99, 99,
            99, 99, 99, 99, 99, 99, 99, 99,
            99, 99, 99, 99, 99, 99, 99, 99
        ];
        for (var j = 0; j < 64; j++) {
            var u = ffloor((UVQT[j] * sf + 50) / 100);
            if (u < 1) {
                u = 1;
            }
            else if (u > 255) {
                u = 255;
            }
            UVTable[ZigZag[j]] = u;
        }
        var aasf = [
            1.0, 1.387039845, 1.306562965, 1.175875602,
            1.0, 0.785694958, 0.541196100, 0.275899379
        ];
        var k = 0;
        for (var row = 0; row < 8; row++) {
            for (var col = 0; col < 8; col++) {
                fdtbl_Y[k] = (1.0 / (YTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
                fdtbl_UV[k] = (1.0 / (UVTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
                k++;
            }
        }
    }
    function computeHuffmanTbl(nrcodes, std_table) {
        var codevalue = 0;
        var pos_in_table = 0;
        var HT = new Array();
        for (var k = 1; k <= 16; k++) {
            for (var j = 1; j <= nrcodes[k]; j++) {
                HT[std_table[pos_in_table]] = [];
                HT[std_table[pos_in_table]][0] = codevalue;
                HT[std_table[pos_in_table]][1] = k;
                pos_in_table++;
                codevalue++;
            }
            codevalue *= 2;
        }
        return HT;
    }
    function initHuffmanTbl() {
        YDC_HT = computeHuffmanTbl(std_dc_luminance_nrcodes, std_dc_luminance_values);
        UVDC_HT = computeHuffmanTbl(std_dc_chrominance_nrcodes, std_dc_chrominance_values);
        YAC_HT = computeHuffmanTbl(std_ac_luminance_nrcodes, std_ac_luminance_values);
        UVAC_HT = computeHuffmanTbl(std_ac_chrominance_nrcodes, std_ac_chrominance_values);
    }
    function initCategoryNumber() {
        var nrlower = 1;
        var nrupper = 2;
        for (var cat = 1; cat <= 15; cat++) {
            //Positive numbers
            for (var nr = nrlower; nr < nrupper; nr++) {
                category[32767 + nr] = cat;
                bitcode[32767 + nr] = [];
                bitcode[32767 + nr][1] = cat;
                bitcode[32767 + nr][0] = nr;
            }
            //Negative numbers
            for (var nrneg = -(nrupper - 1); nrneg <= -nrlower; nrneg++) {
                category[32767 + nrneg] = cat;
                bitcode[32767 + nrneg] = [];
                bitcode[32767 + nrneg][1] = cat;
                bitcode[32767 + nrneg][0] = nrupper - 1 + nrneg;
            }
            nrlower <<= 1;
            nrupper <<= 1;
        }
    }
    function initRGBYUVTable() {
        for (var i = 0; i < 256; i++) {
            RGB_YUV_TABLE[i] = 19595 * i;
            RGB_YUV_TABLE[(i + 256) >> 0] = 38470 * i;
            RGB_YUV_TABLE[(i + 512) >> 0] = 7471 * i + 0x8000;
            RGB_YUV_TABLE[(i + 768) >> 0] = -11059 * i;
            RGB_YUV_TABLE[(i + 1024) >> 0] = -21709 * i;
            RGB_YUV_TABLE[(i + 1280) >> 0] = 32768 * i + 0x807FFF;
            RGB_YUV_TABLE[(i + 1536) >> 0] = -27439 * i;
            RGB_YUV_TABLE[(i + 1792) >> 0] = -5329 * i;
        }
    }
    // IO functions
    function writeBits(bs) {
        var value = bs[0];
        var posval = bs[1] - 1;
        while (posval >= 0) {
            if (value & (1 << posval)) {
                bytenew |= (1 << bytepos);
            }
            posval--;
            bytepos--;
            if (bytepos < 0) {
                if (bytenew == 0xFF) {
                    writeByte(0xFF);
                    writeByte(0);
                }
                else {
                    writeByte(bytenew);
                }
                bytepos = 7;
                bytenew = 0;
            }
        }
    }
    function writeByte(value) {
        //byteout.push(clt[value]); // write char directly instead of converting later
        byteout.push(value);
    }
    function writeWord(value) {
        writeByte((value >> 8) & 0xFF);
        writeByte((value) & 0xFF);
    }
    // DCT & quantization core
    function fDCTQuant(data, fdtbl) {
        var d0, d1, d2, d3, d4, d5, d6, d7;
        /* Pass 1: process rows. */
        var dataOff = 0;
        var i;
        var I8 = 8;
        var I64 = 64;
        for (i = 0; i < I8; ++i) {
            d0 = data[dataOff];
            d1 = data[dataOff + 1];
            d2 = data[dataOff + 2];
            d3 = data[dataOff + 3];
            d4 = data[dataOff + 4];
            d5 = data[dataOff + 5];
            d6 = data[dataOff + 6];
            d7 = data[dataOff + 7];
            var tmp0 = d0 + d7;
            var tmp7 = d0 - d7;
            var tmp1 = d1 + d6;
            var tmp6 = d1 - d6;
            var tmp2 = d2 + d5;
            var tmp5 = d2 - d5;
            var tmp3 = d3 + d4;
            var tmp4 = d3 - d4;
            /* Even part */
            var tmp10 = tmp0 + tmp3; /* phase 2 */
            var tmp13 = tmp0 - tmp3;
            var tmp11 = tmp1 + tmp2;
            var tmp12 = tmp1 - tmp2;
            data[dataOff] = tmp10 + tmp11; /* phase 3 */
            data[dataOff + 4] = tmp10 - tmp11;
            var z1 = (tmp12 + tmp13) * 0.707106781; /* c4 */
            data[dataOff + 2] = tmp13 + z1; /* phase 5 */
            data[dataOff + 6] = tmp13 - z1;
            /* Odd part */
            tmp10 = tmp4 + tmp5; /* phase 2 */
            tmp11 = tmp5 + tmp6;
            tmp12 = tmp6 + tmp7;
            /* The rotator is modified from fig 4-8 to avoid extra negations. */
            var z5 = (tmp10 - tmp12) * 0.382683433; /* c6 */
            var z2 = 0.541196100 * tmp10 + z5; /* c2-c6 */
            var z4 = 1.306562965 * tmp12 + z5; /* c2+c6 */
            var z3 = tmp11 * 0.707106781; /* c4 */
            var z11 = tmp7 + z3; /* phase 5 */
            var z13 = tmp7 - z3;
            data[dataOff + 5] = z13 + z2; /* phase 6 */
            data[dataOff + 3] = z13 - z2;
            data[dataOff + 1] = z11 + z4;
            data[dataOff + 7] = z11 - z4;
            dataOff += 8; /* advance pointer to next row */
        }
        /* Pass 2: process columns. */
        dataOff = 0;
        for (i = 0; i < I8; ++i) {
            d0 = data[dataOff];
            d1 = data[dataOff + 8];
            d2 = data[dataOff + 16];
            d3 = data[dataOff + 24];
            d4 = data[dataOff + 32];
            d5 = data[dataOff + 40];
            d6 = data[dataOff + 48];
            d7 = data[dataOff + 56];
            var tmp0p2 = d0 + d7;
            var tmp7p2 = d0 - d7;
            var tmp1p2 = d1 + d6;
            var tmp6p2 = d1 - d6;
            var tmp2p2 = d2 + d5;
            var tmp5p2 = d2 - d5;
            var tmp3p2 = d3 + d4;
            var tmp4p2 = d3 - d4;
            /* Even part */
            var tmp10p2 = tmp0p2 + tmp3p2; /* phase 2 */
            var tmp13p2 = tmp0p2 - tmp3p2;
            var tmp11p2 = tmp1p2 + tmp2p2;
            var tmp12p2 = tmp1p2 - tmp2p2;
            data[dataOff] = tmp10p2 + tmp11p2; /* phase 3 */
            data[dataOff + 32] = tmp10p2 - tmp11p2;
            var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781; /* c4 */
            data[dataOff + 16] = tmp13p2 + z1p2; /* phase 5 */
            data[dataOff + 48] = tmp13p2 - z1p2;
            /* Odd part */
            tmp10p2 = tmp4p2 + tmp5p2; /* phase 2 */
            tmp11p2 = tmp5p2 + tmp6p2;
            tmp12p2 = tmp6p2 + tmp7p2;
            /* The rotator is modified from fig 4-8 to avoid extra negations. */
            var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433; /* c6 */
            var z2p2 = 0.541196100 * tmp10p2 + z5p2; /* c2-c6 */
            var z4p2 = 1.306562965 * tmp12p2 + z5p2; /* c2+c6 */
            var z3p2 = tmp11p2 * 0.707106781; /* c4 */
            var z11p2 = tmp7p2 + z3p2; /* phase 5 */
            var z13p2 = tmp7p2 - z3p2;
            data[dataOff + 40] = z13p2 + z2p2; /* phase 6 */
            data[dataOff + 24] = z13p2 - z2p2;
            data[dataOff + 8] = z11p2 + z4p2;
            data[dataOff + 56] = z11p2 - z4p2;
            dataOff++; /* advance pointer to next column */
        }
        // Quantize/descale the coefficients
        var fDCTQuant;
        for (i = 0; i < I64; ++i) {
            // Apply the quantization and scaling factor & Round to nearest integer
            fDCTQuant = data[i] * fdtbl[i];
            outputfDCTQuant[i] = (fDCTQuant > 0.0) ? ((fDCTQuant + 0.5) | 0) : ((fDCTQuant - 0.5) | 0);
            //outputfDCTQuant[i] = fround(fDCTQuant);
        }
        return outputfDCTQuant;
    }
    function writeAPP0() {
        writeWord(0xFFE0); // marker
        writeWord(16); // length
        writeByte(0x4A); // J
        writeByte(0x46); // F
        writeByte(0x49); // I
        writeByte(0x46); // F
        writeByte(0); // = "JFIF",'\0'
        writeByte(1); // versionhi
        writeByte(1); // versionlo
        writeByte(0); // xyunits
        writeWord(1); // xdensity
        writeWord(1); // ydensity
        writeByte(0); // thumbnwidth
        writeByte(0); // thumbnheight
    }
    function writeAPP1(exifBuffer) {
        if (!exifBuffer)
            return;
        writeWord(0xFFE1); // APP1 marker
        if (exifBuffer[0] === 0x45 &&
            exifBuffer[1] === 0x78 &&
            exifBuffer[2] === 0x69 &&
            exifBuffer[3] === 0x66) {
            // Buffer already starts with EXIF, just use it directly
            writeWord(exifBuffer.length + 2); // length is buffer + length itself!
        }
        else {
            // Buffer doesn't start with EXIF, write it for them
            writeWord(exifBuffer.length + 5 + 2); // length is buffer + EXIF\0 + length itself!
            writeByte(0x45); // E
            writeByte(0x78); // X
            writeByte(0x69); // I
            writeByte(0x66); // F
            writeByte(0); // = "EXIF",'\0'
        }
        for (var i = 0; i < exifBuffer.length; i++) {
            writeByte(exifBuffer[i]);
        }
    }
    function writeSOF0(width, height) {
        writeWord(0xFFC0); // marker
        writeWord(17); // length, truecolor YUV JPG
        writeByte(8); // precision
        writeWord(height);
        writeWord(width);
        writeByte(3); // nrofcomponents
        writeByte(1); // IdY
        writeByte(0x11); // HVY
        writeByte(0); // QTY
        writeByte(2); // IdU
        writeByte(0x11); // HVU
        writeByte(1); // QTU
        writeByte(3); // IdV
        writeByte(0x11); // HVV
        writeByte(1); // QTV
    }
    function writeDQT() {
        writeWord(0xFFDB); // marker
        writeWord(132); // length
        writeByte(0);
        for (var i = 0; i < 64; i++) {
            writeByte(YTable[i]);
        }
        writeByte(1);
        for (var j = 0; j < 64; j++) {
            writeByte(UVTable[j]);
        }
    }
    function writeDHT() {
        writeWord(0xFFC4); // marker
        writeWord(0x01A2); // length
        writeByte(0); // HTYDCinfo
        for (var i = 0; i < 16; i++) {
            writeByte(std_dc_luminance_nrcodes[i + 1]);
        }
        for (var j = 0; j <= 11; j++) {
            writeByte(std_dc_luminance_values[j]);
        }
        writeByte(0x10); // HTYACinfo
        for (var k = 0; k < 16; k++) {
            writeByte(std_ac_luminance_nrcodes[k + 1]);
        }
        for (var l = 0; l <= 161; l++) {
            writeByte(std_ac_luminance_values[l]);
        }
        writeByte(1); // HTUDCinfo
        for (var m = 0; m < 16; m++) {
            writeByte(std_dc_chrominance_nrcodes[m + 1]);
        }
        for (var n = 0; n <= 11; n++) {
            writeByte(std_dc_chrominance_values[n]);
        }
        writeByte(0x11); // HTUACinfo
        for (var o = 0; o < 16; o++) {
            writeByte(std_ac_chrominance_nrcodes[o + 1]);
        }
        for (var p = 0; p <= 161; p++) {
            writeByte(std_ac_chrominance_values[p]);
        }
    }
    function writeCOM(comments) {
        if (typeof comments === "undefined" || comments.constructor !== Array)
            return;
        comments.forEach(function (e) {
            if (typeof e !== "string")
                return;
            writeWord(0xFFFE); // marker
            var l = e.length;
            writeWord(l + 2); // length itself as well
            var i;
            for (i = 0; i < l; i++)
                writeByte(e.charCodeAt(i));
        });
    }
    function writeSOS() {
        writeWord(0xFFDA); // marker
        writeWord(12); // length
        writeByte(3); // nrofcomponents
        writeByte(1); // IdY
        writeByte(0); // HTY
        writeByte(2); // IdU
        writeByte(0x11); // HTU
        writeByte(3); // IdV
        writeByte(0x11); // HTV
        writeByte(0); // Ss
        writeByte(0x3f); // Se
        writeByte(0); // Bf
    }
    function processDU(CDU, fdtbl, DC, HTDC, HTAC) {
        var EOB = HTAC[0x00];
        var M16zeroes = HTAC[0xF0];
        var pos;
        var I16 = 16;
        var I63 = 63;
        var I64 = 64;
        var DU_DCT = fDCTQuant(CDU, fdtbl);
        //ZigZag reorder
        for (var j = 0; j < I64; ++j) {
            DU[ZigZag[j]] = DU_DCT[j];
        }
        var Diff = DU[0] - DC;
        DC = DU[0];
        //Encode DC
        if (Diff == 0) {
            writeBits(HTDC[0]); // Diff might be 0
        }
        else {
            pos = 32767 + Diff;
            writeBits(HTDC[category[pos]]);
            writeBits(bitcode[pos]);
        }
        //Encode ACs
        var end0pos = 63; // was const... which is crazy
        for (; (end0pos > 0) && (DU[end0pos] == 0); end0pos--) { }
        ;
        //end0pos = first element in reverse order !=0
        if (end0pos == 0) {
            writeBits(EOB);
            return DC;
        }
        var i = 1;
        var lng;
        while (i <= end0pos) {
            var startpos = i;
            for (; (DU[i] == 0) && (i <= end0pos); ++i) { }
            var nrzeroes = i - startpos;
            if (nrzeroes >= I16) {
                lng = nrzeroes >> 4;
                for (var nrmarker = 1; nrmarker <= lng; ++nrmarker)
                    writeBits(M16zeroes);
                nrzeroes = nrzeroes & 0xF;
            }
            pos = 32767 + DU[i];
            writeBits(HTAC[(nrzeroes << 4) + category[pos]]);
            writeBits(bitcode[pos]);
            i++;
        }
        if (end0pos != I63) {
            writeBits(EOB);
        }
        return DC;
    }
    function initCharLookupTable() {
        var sfcc = String.fromCharCode;
        for (var i = 0; i < 256; i++) { ///// ACHTUNG // 255
            clt[i] = sfcc(i);
        }
    }
    this.encode = function (image, quality) {
        var time_start = new Date().getTime();
        if (quality)
            setQuality(quality);
        // Initialize bit writer
        byteout = new Array();
        bytenew = 0;
        bytepos = 7;
        // Add JPEG headers
        writeWord(0xFFD8); // SOI
        writeAPP0();
        writeCOM(image.comments);
        writeAPP1(image.exifBuffer);
        writeDQT();
        writeSOF0(image.width, image.height);
        writeDHT();
        writeSOS();
        // Encode 8x8 macroblocks
        var DCY = 0;
        var DCU = 0;
        var DCV = 0;
        bytenew = 0;
        bytepos = 7;
        this.encode.displayName = "_encode_";
        var imageData = image.data;
        var width = image.width;
        var height = image.height;
        var quadWidth = width * 4;
        var tripleWidth = width * 3;
        var x, y = 0;
        var r, g, b;
        var start, p, col, row, pos;
        while (y < height) {
            x = 0;
            while (x < quadWidth) {
                start = quadWidth * y + x;
                p = start;
                col = -1;
                row = 0;
                for (pos = 0; pos < 64; pos++) {
                    row = pos >> 3; // /8
                    col = (pos & 7) * 4; // %8
                    p = start + (row * quadWidth) + col;
                    if (y + row >= height) { // padding bottom
                        p -= (quadWidth * (y + 1 + row - height));
                    }
                    if (x + col >= quadWidth) { // padding right	
                        p -= ((x + col) - quadWidth + 4);
                    }
                    r = imageData[p++];
                    g = imageData[p++];
                    b = imageData[p++];
                    /* // calculate YUV values dynamically
                    YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
                    UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
                    VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
                    */
                    // use lookup table (slightly faster)
                    YDU[pos] = ((RGB_YUV_TABLE[r] + RGB_YUV_TABLE[(g + 256) >> 0] + RGB_YUV_TABLE[(b + 512) >> 0]) >> 16) - 128;
                    UDU[pos] = ((RGB_YUV_TABLE[(r + 768) >> 0] + RGB_YUV_TABLE[(g + 1024) >> 0] + RGB_YUV_TABLE[(b + 1280) >> 0]) >> 16) - 128;
                    VDU[pos] = ((RGB_YUV_TABLE[(r + 1280) >> 0] + RGB_YUV_TABLE[(g + 1536) >> 0] + RGB_YUV_TABLE[(b + 1792) >> 0]) >> 16) - 128;
                }
                DCY = processDU(YDU, fdtbl_Y, DCY, YDC_HT, YAC_HT);
                DCU = processDU(UDU, fdtbl_UV, DCU, UVDC_HT, UVAC_HT);
                DCV = processDU(VDU, fdtbl_UV, DCV, UVDC_HT, UVAC_HT);
                x += 32;
            }
            y += 8;
        }
        ////////////////////////////////////////////////////////////////
        // Do the bit alignment of the EOI marker
        if (bytepos >= 0) {
            var fillbits = [];
            fillbits[1] = bytepos + 1;
            fillbits[0] = (1 << (bytepos + 1)) - 1;
            writeBits(fillbits);
        }
        writeWord(0xFFD9); //EOI
        return new Uint8Array(byteout);
        var jpegDataUri = 'data:image/jpeg;base64,' + btoa(byteout.join(''));
        byteout = [];
        // benchmarking
        var duration = new Date().getTime() - time_start;
        //console.log('Encoding time: '+ duration + 'ms');
        //
        return jpegDataUri;
    };
    function setQuality(quality) {
        if (quality <= 0) {
            quality = 1;
        }
        if (quality > 100) {
            quality = 100;
        }
        if (currentQuality == quality)
            return; // don't recalc if unchanged
        var sf = 0;
        if (quality < 50) {
            sf = Math.floor(5000 / quality);
        }
        else {
            sf = Math.floor(200 - quality * 2);
        }
        initQuantTables(sf);
        currentQuality = quality;
        //console.log('Quality set to: '+quality +'%');
    }
    function init() {
        var time_start = new Date().getTime();
        if (!quality)
            quality = 50;
        // Create tables
        initCharLookupTable();
        initHuffmanTbl();
        initCategoryNumber();
        initRGBYUVTable();
        setQuality(quality);
        var duration = new Date().getTime() - time_start;
        //console.log('Initialization '+ duration + 'ms');
    }
    init();
}
;
function encodeJPG(imgData, qu) {
    if (typeof qu === 'undefined')
        qu = 50;
    var encoder = new JPEGEncoder(qu);
    var data = encoder.encode(imgData, qu);
    return {
        data: data,
        width: imgData.width,
        height: imgData.height,
    };
}
exports.encodeJPG = encodeJPG;
// helper function to get the imageData of an existing image on the current page.
function getImageDataFromImage(idOrElement) {
    var theImg = (typeof (idOrElement) == 'string') ? document.getElementById(idOrElement) : idOrElement;
    var cvs = document.createElement('canvas');
    cvs.width = theImg.width;
    cvs.height = theImg.height;
    var ctx = cvs.getContext("2d");
    ctx.drawImage(theImg, 0, 0);
    return (ctx.getImageData(0, 0, cvs.width, cvs.height));
}
//https://github.com/jpeg-js/jpeg-js/blob/master/lib/encoder.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9DYXB0dXJlVGVzdC9FbmNvZGVKUEcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEyQkU7QUFDRjs7O0VBR0U7OztBQUVGLHNDQUFzQztBQUN0QyxrREFBa0Q7QUFDbEQsS0FBSztBQUVMLFNBQVMsV0FBVyxDQUFDLE9BQU87SUFDeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDeEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN4QixJQUFJLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQixJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixJQUFJLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM1QixJQUFJLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QixJQUFJLE1BQU0sQ0FBQztJQUNYLElBQUksT0FBTyxDQUFDO0lBQ1osSUFBSSxNQUFNLENBQUM7SUFDWCxJQUFJLE9BQU8sQ0FBQztJQUVaLElBQUksT0FBTyxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLElBQUksUUFBUSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLElBQUksZUFBZSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLElBQUksRUFBRSxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNqQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDaEIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBRWhCLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLElBQUksR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLElBQUksYUFBYSxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLElBQUksY0FBYyxDQUFDO0lBRW5CLElBQUksTUFBTSxHQUFHO1FBQ1QsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDMUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDM0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDNUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDN0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDOUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDOUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7UUFDOUIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7S0FDakMsQ0FBQztJQUVGLElBQUksd0JBQXdCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkYsSUFBSSx1QkFBdUIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDckUsSUFBSSx3QkFBd0IsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RixJQUFJLHVCQUF1QixHQUFHO1FBQzFCLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUVGLElBQUksMEJBQTBCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckYsSUFBSSx5QkFBeUIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkUsSUFBSSwwQkFBMEIsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RixJQUFJLHlCQUF5QixHQUFHO1FBQzVCLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1FBQzlDLElBQUksRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUVGLFNBQVMsZUFBZSxDQUFDLEVBQUU7UUFDdkIsSUFBSSxHQUFHLEdBQUc7WUFDTixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUM5QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUM5QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUM5QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUM5QixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNoQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNoQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztZQUNsQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtTQUNwQyxDQUFDO1FBRUYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcs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QUFLO1FBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtLQUN6QixDQUFDO0FBQ04sQ0FBQztBQVRELDhCQVNDO0FBRUQsaUZBQWlGO0FBQ2pGLFNBQVMscUJBQXFCLENBQUMsV0FBVztJQUN0QyxJQUFJLE1BQU0sR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQ3JHLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3pCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUMzQixJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUlDLCtEQUErRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgQ29weXJpZ2h0IChjKSAyMDA4LCBBZG9iZSBTeXN0ZW1zIEluY29ycG9yYXRlZFxyXG4gIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAgUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IFxyXG4gIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcclxuICBtZXQ6XHJcbiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIFxyXG4gICAgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cclxuICBcclxuICAqIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0XHJcbiAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIFxyXG4gICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cclxuICBcclxuICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgQWRvYmUgU3lzdGVtcyBJbmNvcnBvcmF0ZWQgbm9yIHRoZSBuYW1lcyBvZiBpdHMgXHJcbiAgICBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSBcclxuICAgIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXHJcbiAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTXHJcbiAgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTyxcclxuICBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSXHJcbiAgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVCBPV05FUiBPUiBcclxuICBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCxcclxuICBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sXHJcbiAgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SXHJcbiAgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRlxyXG4gIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXHJcbiAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTXHJcbiAgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcbiovXHJcbi8qXHJcbkpQRUcgZW5jb2RlciBwb3J0ZWQgdG8gSmF2YVNjcmlwdCBhbmQgb3B0aW1pemVkIGJ5IEFuZHJlYXMgUml0dGVyLCB3d3cuYnl0ZXN0cm9tLmV1LCAxMS8yMDA5XHJcbkJhc2ljIEdVSSBibG9ja2luZyBqcGVnIGVuY29kZXJcclxuKi9cclxuXHJcbi8vIHZhciBidG9hID0gYnRvYSB8fCBmdW5jdGlvbiAoYnVmKSB7XHJcbi8vICAgICByZXR1cm4gQnVmZmVyLmZyb20oYnVmKS50b1N0cmluZygnYmFzZTY0Jyk7XHJcbi8vIH07XHJcblxyXG5mdW5jdGlvbiBKUEVHRW5jb2RlcihxdWFsaXR5KSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICB2YXIgZnJvdW5kID0gTWF0aC5yb3VuZDtcclxuICAgIHZhciBmZmxvb3IgPSBNYXRoLmZsb29yO1xyXG4gICAgdmFyIFlUYWJsZSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICB2YXIgVVZUYWJsZSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICB2YXIgZmR0YmxfWSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICB2YXIgZmR0YmxfVVYgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgdmFyIFlEQ19IVDtcclxuICAgIHZhciBVVkRDX0hUO1xyXG4gICAgdmFyIFlBQ19IVDtcclxuICAgIHZhciBVVkFDX0hUO1xyXG5cclxuICAgIHZhciBiaXRjb2RlID0gbmV3IEFycmF5KDY1NTM1KTtcclxuICAgIHZhciBjYXRlZ29yeSA9IG5ldyBBcnJheSg2NTUzNSk7XHJcbiAgICB2YXIgb3V0cHV0ZkRDVFF1YW50ID0gbmV3IEFycmF5KDY0KTtcclxuICAgIHZhciBEVSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICB2YXIgYnl0ZW91dCA9IFtdO1xyXG4gICAgdmFyIGJ5dGVuZXcgPSAwO1xyXG4gICAgdmFyIGJ5dGVwb3MgPSA3O1xyXG5cclxuICAgIHZhciBZRFUgPSBuZXcgQXJyYXkoNjQpO1xyXG4gICAgdmFyIFVEVSA9IG5ldyBBcnJheSg2NCk7XHJcbiAgICB2YXIgVkRVID0gbmV3IEFycmF5KDY0KTtcclxuICAgIHZhciBjbHQgPSBuZXcgQXJyYXkoMjU2KTtcclxuICAgIHZhciBSR0JfWVVWX1RBQkxFID0gbmV3IEFycmF5KDIwNDgpO1xyXG4gICAgdmFyIGN1cnJlbnRRdWFsaXR5O1xyXG5cclxuICAgIHZhciBaaWdaYWcgPSBbXHJcbiAgICAgICAgMCwgMSwgNSwgNiwgMTQsIDE1LCAyNywgMjgsXHJcbiAgICAgICAgMiwgNCwgNywgMTMsIDE2LCAyNiwgMjksIDQyLFxyXG4gICAgICAgIDMsIDgsIDEyLCAxNywgMjUsIDMwLCA0MSwgNDMsXHJcbiAgICAgICAgOSwgMTEsIDE4LCAyNCwgMzEsIDQwLCA0NCwgNTMsXHJcbiAgICAgICAgMTAsIDE5LCAyMywgMzIsIDM5LCA0NSwgNTIsIDU0LFxyXG4gICAgICAgIDIwLCAyMiwgMzMsIDM4LCA0NiwgNTEsIDU1LCA2MCxcclxuICAgICAgICAyMSwgMzQsIDM3LCA0NywgNTAsIDU2LCA1OSwgNjEsXHJcbiAgICAgICAgMzUsIDM2LCA0OCwgNDksIDU3LCA1OCwgNjIsIDYzXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBzdGRfZGNfbHVtaW5hbmNlX25yY29kZXMgPSBbMCwgMCwgMSwgNSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XHJcbiAgICB2YXIgc3RkX2RjX2x1bWluYW5jZV92YWx1ZXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExXTtcclxuICAgIHZhciBzdGRfYWNfbHVtaW5hbmNlX25yY29kZXMgPSBbMCwgMCwgMiwgMSwgMywgMywgMiwgNCwgMywgNSwgNSwgNCwgNCwgMCwgMCwgMSwgMHg3ZF07XHJcbiAgICB2YXIgc3RkX2FjX2x1bWluYW5jZV92YWx1ZXMgPSBbXHJcbiAgICAgICAgMHgwMSwgMHgwMiwgMHgwMywgMHgwMCwgMHgwNCwgMHgxMSwgMHgwNSwgMHgxMixcclxuICAgICAgICAweDIxLCAweDMxLCAweDQxLCAweDA2LCAweDEzLCAweDUxLCAweDYxLCAweDA3LFxyXG4gICAgICAgIDB4MjIsIDB4NzEsIDB4MTQsIDB4MzIsIDB4ODEsIDB4OTEsIDB4YTEsIDB4MDgsXHJcbiAgICAgICAgMHgyMywgMHg0MiwgMHhiMSwgMHhjMSwgMHgxNSwgMHg1MiwgMHhkMSwgMHhmMCxcclxuICAgICAgICAweDI0LCAweDMzLCAweDYyLCAweDcyLCAweDgyLCAweDA5LCAweDBhLCAweDE2LFxyXG4gICAgICAgIDB4MTcsIDB4MTgsIDB4MTksIDB4MWEsIDB4MjUsIDB4MjYsIDB4MjcsIDB4MjgsXHJcbiAgICAgICAgMHgyOSwgMHgyYSwgMHgzNCwgMHgzNSwgMHgzNiwgMHgzNywgMHgzOCwgMHgzOSxcclxuICAgICAgICAweDNhLCAweDQzLCAweDQ0LCAweDQ1LCAweDQ2LCAweDQ3LCAweDQ4LCAweDQ5LFxyXG4gICAgICAgIDB4NGEsIDB4NTMsIDB4NTQsIDB4NTUsIDB4NTYsIDB4NTcsIDB4NTgsIDB4NTksXHJcbiAgICAgICAgMHg1YSwgMHg2MywgMHg2NCwgMHg2NSwgMHg2NiwgMHg2NywgMHg2OCwgMHg2OSxcclxuICAgICAgICAweDZhLCAweDczLCAweDc0LCAweDc1LCAweDc2LCAweDc3LCAweDc4LCAweDc5LFxyXG4gICAgICAgIDB4N2EsIDB4ODMsIDB4ODQsIDB4ODUsIDB4ODYsIDB4ODcsIDB4ODgsIDB4ODksXHJcbiAgICAgICAgMHg4YSwgMHg5MiwgMHg5MywgMHg5NCwgMHg5NSwgMHg5NiwgMHg5NywgMHg5OCxcclxuICAgICAgICAweDk5LCAweDlhLCAweGEyLCAweGEzLCAweGE0LCAweGE1LCAweGE2LCAweGE3LFxyXG4gICAgICAgIDB4YTgsIDB4YTksIDB4YWEsIDB4YjIsIDB4YjMsIDB4YjQsIDB4YjUsIDB4YjYsXHJcbiAgICAgICAgMHhiNywgMHhiOCwgMHhiOSwgMHhiYSwgMHhjMiwgMHhjMywgMHhjNCwgMHhjNSxcclxuICAgICAgICAweGM2LCAweGM3LCAweGM4LCAweGM5LCAweGNhLCAweGQyLCAweGQzLCAweGQ0LFxyXG4gICAgICAgIDB4ZDUsIDB4ZDYsIDB4ZDcsIDB4ZDgsIDB4ZDksIDB4ZGEsIDB4ZTEsIDB4ZTIsXHJcbiAgICAgICAgMHhlMywgMHhlNCwgMHhlNSwgMHhlNiwgMHhlNywgMHhlOCwgMHhlOSwgMHhlYSxcclxuICAgICAgICAweGYxLCAweGYyLCAweGYzLCAweGY0LCAweGY1LCAweGY2LCAweGY3LCAweGY4LFxyXG4gICAgICAgIDB4ZjksIDB4ZmFcclxuICAgIF07XHJcblxyXG4gICAgdmFyIHN0ZF9kY19jaHJvbWluYW5jZV9ucmNvZGVzID0gWzAsIDAsIDMsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDBdO1xyXG4gICAgdmFyIHN0ZF9kY19jaHJvbWluYW5jZV92YWx1ZXMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExXTtcclxuICAgIHZhciBzdGRfYWNfY2hyb21pbmFuY2VfbnJjb2RlcyA9IFswLCAwLCAyLCAxLCAyLCA0LCA0LCAzLCA0LCA3LCA1LCA0LCA0LCAwLCAxLCAyLCAweDc3XTtcclxuICAgIHZhciBzdGRfYWNfY2hyb21pbmFuY2VfdmFsdWVzID0gW1xyXG4gICAgICAgIDB4MDAsIDB4MDEsIDB4MDIsIDB4MDMsIDB4MTEsIDB4MDQsIDB4MDUsIDB4MjEsXHJcbiAgICAgICAgMHgzMSwgMHgwNiwgMHgxMiwgMHg0MSwgMHg1MSwgMHgwNywgMHg2MSwgMHg3MSxcclxuICAgICAgICAweDEzLCAweDIyLCAweDMyLCAweDgxLCAweDA4LCAweDE0LCAweDQyLCAweDkxLFxyXG4gICAgICAgIDB4YTEsIDB4YjEsIDB4YzEsIDB4MDksIDB4MjMsIDB4MzMsIDB4NTIsIDB4ZjAsXHJcbiAgICAgICAgMHgxNSwgMHg2MiwgMHg3MiwgMHhkMSwgMHgwYSwgMHgxNiwgMHgyNCwgMHgzNCxcclxuICAgICAgICAweGUxLCAweDI1LCAweGYxLCAweDE3LCAweDE4LCAweDE5LCAweDFhLCAweDI2LFxyXG4gICAgICAgIDB4MjcsIDB4MjgsIDB4MjksIDB4MmEsIDB4MzUsIDB4MzYsIDB4MzcsIDB4MzgsXHJcbiAgICAgICAgMHgzOSwgMHgzYSwgMHg0MywgMHg0NCwgMHg0NSwgMHg0NiwgMHg0NywgMHg0OCxcclxuICAgICAgICAweDQ5LCAweDRhLCAweDUzLCAweDU0LCAweDU1LCAweDU2LCAweDU3LCAweDU4LFxyXG4gICAgICAgIDB4NTksIDB4NWEsIDB4NjMsIDB4NjQsIDB4NjUsIDB4NjYsIDB4NjcsIDB4NjgsXHJcbiAgICAgICAgMHg2OSwgMHg2YSwgMHg3MywgMHg3NCwgMHg3NSwgMHg3NiwgMHg3NywgMHg3OCxcclxuICAgICAgICAweDc5LCAweDdhLCAweDgyLCAweDgzLCAweDg0LCAweDg1LCAweDg2LCAweDg3LFxyXG4gICAgICAgIDB4ODgsIDB4ODksIDB4OGEsIDB4OTIsIDB4OTMsIDB4OTQsIDB4OTUsIDB4OTYsXHJcbiAgICAgICAgMHg5NywgMHg5OCwgMHg5OSwgMHg5YSwgMHhhMiwgMHhhMywgMHhhNCwgMHhhNSxcclxuICAgICAgICAweGE2LCAweGE3LCAweGE4LCAweGE5LCAweGFhLCAweGIyLCAweGIzLCAweGI0LFxyXG4gICAgICAgIDB4YjUsIDB4YjYsIDB4YjcsIDB4YjgsIDB4YjksIDB4YmEsIDB4YzIsIDB4YzMsXHJcbiAgICAgICAgMHhjNCwgMHhjNSwgMHhjNiwgMHhjNywgMHhjOCwgMHhjOSwgMHhjYSwgMHhkMixcclxuICAgICAgICAweGQzLCAweGQ0LCAweGQ1LCAweGQ2LCAweGQ3LCAweGQ4LCAweGQ5LCAweGRhLFxyXG4gICAgICAgIDB4ZTIsIDB4ZTMsIDB4ZTQsIDB4ZTUsIDB4ZTYsIDB4ZTcsIDB4ZTgsIDB4ZTksXHJcbiAgICAgICAgMHhlYSwgMHhmMiwgMHhmMywgMHhmNCwgMHhmNSwgMHhmNiwgMHhmNywgMHhmOCxcclxuICAgICAgICAweGY5LCAweGZhXHJcbiAgICBdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRRdWFudFRhYmxlcyhzZikge1xyXG4gICAgICAgIHZhciBZUVQgPSBbXHJcbiAgICAgICAgICAgIDE2LCAxMSwgMTAsIDE2LCAyNCwgNDAsIDUxLCA2MSxcclxuICAgICAgICAgICAgMTIsIDEyLCAxNCwgMTksIDI2LCA1OCwgNjAsIDU1LFxyXG4gICAgICAgICAgICAxNCwgMTMsIDE2LCAyNCwgNDAsIDU3LCA2OSwgNTYsXHJcbiAgICAgICAgICAgIDE0LCAxNywgMjIsIDI5LCA1MSwgODcsIDgwLCA2MixcclxuICAgICAgICAgICAgMTgsIDIyLCAzNywgNTYsIDY4LCAxMDksIDEwMywgNzcsXHJcbiAgICAgICAgICAgIDI0LCAzNSwgNTUsIDY0LCA4MSwgMTA0LCAxMTMsIDkyLFxyXG4gICAgICAgICAgICA0OSwgNjQsIDc4LCA4NywgMTAzLCAxMjEsIDEyMCwgMTAxLFxyXG4gICAgICAgICAgICA3MiwgOTIsIDk1LCA5OCwgMTEyLCAxMDAsIDEwMywgOTlcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDY0OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBmZmxvb3IoKFlRVFtpXSAqIHNmICsgNTApIC8gMTAwKTtcclxuICAgICAgICAgICAgaWYgKHQgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gMTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0ID4gMjU1KSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gMjU1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFlUYWJsZVtaaWdaYWdbaV1dID0gdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIFVWUVQgPSBbXHJcbiAgICAgICAgICAgIDE3LCAxOCwgMjQsIDQ3LCA5OSwgOTksIDk5LCA5OSxcclxuICAgICAgICAgICAgMTgsIDIxLCAyNiwgNjYsIDk5LCA5OSwgOTksIDk5LFxyXG4gICAgICAgICAgICAyNCwgMjYsIDU2LCA5OSwgOTksIDk5LCA5OSwgOTksXHJcbiAgICAgICAgICAgIDQ3LCA2NiwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSxcclxuICAgICAgICAgICAgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5LFxyXG4gICAgICAgICAgICA5OSwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksXHJcbiAgICAgICAgICAgIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5LCA5OSxcclxuICAgICAgICAgICAgOTksIDk5LCA5OSwgOTksIDk5LCA5OSwgOTksIDk5XHJcbiAgICAgICAgXTtcclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IDY0OyBqKyspIHtcclxuICAgICAgICAgICAgdmFyIHUgPSBmZmxvb3IoKFVWUVRbal0gKiBzZiArIDUwKSAvIDEwMCk7XHJcbiAgICAgICAgICAgIGlmICh1IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgdSA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodSA+IDI1NSkge1xyXG4gICAgICAgICAgICAgICAgdSA9IDI1NTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBVVlRhYmxlW1ppZ1phZ1tqXV0gPSB1O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYWFzZiA9IFtcclxuICAgICAgICAgICAgMS4wLCAxLjM4NzAzOTg0NSwgMS4zMDY1NjI5NjUsIDEuMTc1ODc1NjAyLFxyXG4gICAgICAgICAgICAxLjAsIDAuNzg1Njk0OTU4LCAwLjU0MTE5NjEwMCwgMC4yNzU4OTkzNzlcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBrID0gMDtcclxuICAgICAgICBmb3IgKHZhciByb3cgPSAwOyByb3cgPCA4OyByb3crKykge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjb2wgPSAwOyBjb2wgPCA4OyBjb2wrKykge1xyXG4gICAgICAgICAgICAgICAgZmR0YmxfWVtrXSA9ICgxLjAgLyAoWVRhYmxlW1ppZ1phZ1trXV0gKiBhYXNmW3Jvd10gKiBhYXNmW2NvbF0gKiA4LjApKTtcclxuICAgICAgICAgICAgICAgIGZkdGJsX1VWW2tdID0gKDEuMCAvIChVVlRhYmxlW1ppZ1phZ1trXV0gKiBhYXNmW3Jvd10gKiBhYXNmW2NvbF0gKiA4LjApKTtcclxuICAgICAgICAgICAgICAgIGsrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjb21wdXRlSHVmZm1hblRibChucmNvZGVzLCBzdGRfdGFibGUpIHtcclxuICAgICAgICB2YXIgY29kZXZhbHVlID0gMDtcclxuICAgICAgICB2YXIgcG9zX2luX3RhYmxlID0gMDtcclxuICAgICAgICB2YXIgSFQgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBmb3IgKHZhciBrID0gMTsgayA8PSAxNjsgaysrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDw9IG5yY29kZXNba107IGorKykge1xyXG4gICAgICAgICAgICAgICAgSFRbc3RkX3RhYmxlW3Bvc19pbl90YWJsZV1dID0gW107XHJcbiAgICAgICAgICAgICAgICBIVFtzdGRfdGFibGVbcG9zX2luX3RhYmxlXV1bMF0gPSBjb2RldmFsdWU7XHJcbiAgICAgICAgICAgICAgICBIVFtzdGRfdGFibGVbcG9zX2luX3RhYmxlXV1bMV0gPSBrO1xyXG4gICAgICAgICAgICAgICAgcG9zX2luX3RhYmxlKys7XHJcbiAgICAgICAgICAgICAgICBjb2RldmFsdWUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2RldmFsdWUgKj0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEhUO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRIdWZmbWFuVGJsKCkge1xyXG4gICAgICAgIFlEQ19IVCA9IGNvbXB1dGVIdWZmbWFuVGJsKHN0ZF9kY19sdW1pbmFuY2VfbnJjb2Rlcywgc3RkX2RjX2x1bWluYW5jZV92YWx1ZXMpO1xyXG4gICAgICAgIFVWRENfSFQgPSBjb21wdXRlSHVmZm1hblRibChzdGRfZGNfY2hyb21pbmFuY2VfbnJjb2Rlcywgc3RkX2RjX2Nocm9taW5hbmNlX3ZhbHVlcyk7XHJcbiAgICAgICAgWUFDX0hUID0gY29tcHV0ZUh1ZmZtYW5UYmwoc3RkX2FjX2x1bWluYW5jZV9ucmNvZGVzLCBzdGRfYWNfbHVtaW5hbmNlX3ZhbHVlcyk7XHJcbiAgICAgICAgVVZBQ19IVCA9IGNvbXB1dGVIdWZmbWFuVGJsKHN0ZF9hY19jaHJvbWluYW5jZV9ucmNvZGVzLCBzdGRfYWNfY2hyb21pbmFuY2VfdmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0Q2F0ZWdvcnlOdW1iZXIoKSB7XHJcbiAgICAgICAgdmFyIG5ybG93ZXIgPSAxO1xyXG4gICAgICAgIHZhciBucnVwcGVyID0gMjtcclxuICAgICAgICBmb3IgKHZhciBjYXQgPSAxOyBjYXQgPD0gMTU7IGNhdCsrKSB7XHJcbiAgICAgICAgICAgIC8vUG9zaXRpdmUgbnVtYmVyc1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuciA9IG5ybG93ZXI7IG5yIDwgbnJ1cHBlcjsgbnIrKykge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlbMzI3NjcgKyBucl0gPSBjYXQ7XHJcbiAgICAgICAgICAgICAgICBiaXRjb2RlWzMyNzY3ICsgbnJdID0gW107XHJcbiAgICAgICAgICAgICAgICBiaXRjb2RlWzMyNzY3ICsgbnJdWzFdID0gY2F0O1xyXG4gICAgICAgICAgICAgICAgYml0Y29kZVszMjc2NyArIG5yXVswXSA9IG5yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vTmVnYXRpdmUgbnVtYmVyc1xyXG4gICAgICAgICAgICBmb3IgKHZhciBucm5lZyA9IC0obnJ1cHBlciAtIDEpOyBucm5lZyA8PSAtbnJsb3dlcjsgbnJuZWcrKykge1xyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlbMzI3NjcgKyBucm5lZ10gPSBjYXQ7XHJcbiAgICAgICAgICAgICAgICBiaXRjb2RlWzMyNzY3ICsgbnJuZWddID0gW107XHJcbiAgICAgICAgICAgICAgICBiaXRjb2RlWzMyNzY3ICsgbnJuZWddWzFdID0gY2F0O1xyXG4gICAgICAgICAgICAgICAgYml0Y29kZVszMjc2NyArIG5ybmVnXVswXSA9IG5ydXBwZXIgLSAxICsgbnJuZWc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbnJsb3dlciA8PD0gMTtcclxuICAgICAgICAgICAgbnJ1cHBlciA8PD0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdFJHQllVVlRhYmxlKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcclxuICAgICAgICAgICAgUkdCX1lVVl9UQUJMRVtpXSA9IDE5NTk1ICogaTtcclxuICAgICAgICAgICAgUkdCX1lVVl9UQUJMRVsoaSArIDI1NikgPj4gMF0gPSAzODQ3MCAqIGk7XHJcbiAgICAgICAgICAgIFJHQl9ZVVZfVEFCTEVbKGkgKyA1MTIpID4+IDBdID0gNzQ3MSAqIGkgKyAweDgwMDA7XHJcbiAgICAgICAgICAgIFJHQl9ZVVZfVEFCTEVbKGkgKyA3NjgpID4+IDBdID0gLTExMDU5ICogaTtcclxuICAgICAgICAgICAgUkdCX1lVVl9UQUJMRVsoaSArIDEwMjQpID4+IDBdID0gLTIxNzA5ICogaTtcclxuICAgICAgICAgICAgUkdCX1lVVl9UQUJMRVsoaSArIDEyODApID4+IDBdID0gMzI3NjggKiBpICsgMHg4MDdGRkY7XHJcbiAgICAgICAgICAgIFJHQl9ZVVZfVEFCTEVbKGkgKyAxNTM2KSA+PiAwXSA9IC0yNzQzOSAqIGk7XHJcbiAgICAgICAgICAgIFJHQl9ZVVZfVEFCTEVbKGkgKyAxNzkyKSA+PiAwXSA9IC0gNTMyOSAqIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIElPIGZ1bmN0aW9uc1xyXG4gICAgZnVuY3Rpb24gd3JpdGVCaXRzKGJzKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gYnNbMF07XHJcbiAgICAgICAgdmFyIHBvc3ZhbCA9IGJzWzFdIC0gMTtcclxuICAgICAgICB3aGlsZSAocG9zdmFsID49IDApIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICYgKDEgPDwgcG9zdmFsKSkge1xyXG4gICAgICAgICAgICAgICAgYnl0ZW5ldyB8PSAoMSA8PCBieXRlcG9zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3N2YWwtLTtcclxuICAgICAgICAgICAgYnl0ZXBvcy0tO1xyXG4gICAgICAgICAgICBpZiAoYnl0ZXBvcyA8IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChieXRlbmV3ID09IDB4RkYpIHtcclxuICAgICAgICAgICAgICAgICAgICB3cml0ZUJ5dGUoMHhGRik7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVCeXRlKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3JpdGVCeXRlKGJ5dGVuZXcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnl0ZXBvcyA9IDc7XHJcbiAgICAgICAgICAgICAgICBieXRlbmV3ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZUJ5dGUodmFsdWUpIHtcclxuICAgICAgICAvL2J5dGVvdXQucHVzaChjbHRbdmFsdWVdKTsgLy8gd3JpdGUgY2hhciBkaXJlY3RseSBpbnN0ZWFkIG9mIGNvbnZlcnRpbmcgbGF0ZXJcclxuICAgICAgICBieXRlb3V0LnB1c2godmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdyaXRlV29yZCh2YWx1ZSkge1xyXG4gICAgICAgIHdyaXRlQnl0ZSgodmFsdWUgPj4gOCkgJiAweEZGKTtcclxuICAgICAgICB3cml0ZUJ5dGUoKHZhbHVlKSAmIDB4RkYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERDVCAmIHF1YW50aXphdGlvbiBjb3JlXHJcbiAgICBmdW5jdGlvbiBmRENUUXVhbnQoZGF0YSwgZmR0YmwpIHtcclxuICAgICAgICB2YXIgZDAsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3O1xyXG4gICAgICAgIC8qIFBhc3MgMTogcHJvY2VzcyByb3dzLiAqL1xyXG4gICAgICAgIHZhciBkYXRhT2ZmID0gMDtcclxuICAgICAgICB2YXIgaTtcclxuICAgICAgICB2YXIgSTggPSA4O1xyXG4gICAgICAgIHZhciBJNjQgPSA2NDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgSTg7ICsraSkge1xyXG4gICAgICAgICAgICBkMCA9IGRhdGFbZGF0YU9mZl07XHJcbiAgICAgICAgICAgIGQxID0gZGF0YVtkYXRhT2ZmICsgMV07XHJcbiAgICAgICAgICAgIGQyID0gZGF0YVtkYXRhT2ZmICsgMl07XHJcbiAgICAgICAgICAgIGQzID0gZGF0YVtkYXRhT2ZmICsgM107XHJcbiAgICAgICAgICAgIGQ0ID0gZGF0YVtkYXRhT2ZmICsgNF07XHJcbiAgICAgICAgICAgIGQ1ID0gZGF0YVtkYXRhT2ZmICsgNV07XHJcbiAgICAgICAgICAgIGQ2ID0gZGF0YVtkYXRhT2ZmICsgNl07XHJcbiAgICAgICAgICAgIGQ3ID0gZGF0YVtkYXRhT2ZmICsgN107XHJcblxyXG4gICAgICAgICAgICB2YXIgdG1wMCA9IGQwICsgZDc7XHJcbiAgICAgICAgICAgIHZhciB0bXA3ID0gZDAgLSBkNztcclxuICAgICAgICAgICAgdmFyIHRtcDEgPSBkMSArIGQ2O1xyXG4gICAgICAgICAgICB2YXIgdG1wNiA9IGQxIC0gZDY7XHJcbiAgICAgICAgICAgIHZhciB0bXAyID0gZDIgKyBkNTtcclxuICAgICAgICAgICAgdmFyIHRtcDUgPSBkMiAtIGQ1O1xyXG4gICAgICAgICAgICB2YXIgdG1wMyA9IGQzICsgZDQ7XHJcbiAgICAgICAgICAgIHZhciB0bXA0ID0gZDMgLSBkNDtcclxuXHJcbiAgICAgICAgICAgIC8qIEV2ZW4gcGFydCAqL1xyXG4gICAgICAgICAgICB2YXIgdG1wMTAgPSB0bXAwICsgdG1wMztcdC8qIHBoYXNlIDIgKi9cclxuICAgICAgICAgICAgdmFyIHRtcDEzID0gdG1wMCAtIHRtcDM7XHJcbiAgICAgICAgICAgIHZhciB0bXAxMSA9IHRtcDEgKyB0bXAyO1xyXG4gICAgICAgICAgICB2YXIgdG1wMTIgPSB0bXAxIC0gdG1wMjtcclxuXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZl0gPSB0bXAxMCArIHRtcDExOyAvKiBwaGFzZSAzICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDRdID0gdG1wMTAgLSB0bXAxMTtcclxuXHJcbiAgICAgICAgICAgIHZhciB6MSA9ICh0bXAxMiArIHRtcDEzKSAqIDAuNzA3MTA2NzgxOyAvKiBjNCAqL1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyAyXSA9IHRtcDEzICsgejE7IC8qIHBoYXNlIDUgKi9cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgNl0gPSB0bXAxMyAtIHoxO1xyXG5cclxuICAgICAgICAgICAgLyogT2RkIHBhcnQgKi9cclxuICAgICAgICAgICAgdG1wMTAgPSB0bXA0ICsgdG1wNTsgLyogcGhhc2UgMiAqL1xyXG4gICAgICAgICAgICB0bXAxMSA9IHRtcDUgKyB0bXA2O1xyXG4gICAgICAgICAgICB0bXAxMiA9IHRtcDYgKyB0bXA3O1xyXG5cclxuICAgICAgICAgICAgLyogVGhlIHJvdGF0b3IgaXMgbW9kaWZpZWQgZnJvbSBmaWcgNC04IHRvIGF2b2lkIGV4dHJhIG5lZ2F0aW9ucy4gKi9cclxuICAgICAgICAgICAgdmFyIHo1ID0gKHRtcDEwIC0gdG1wMTIpICogMC4zODI2ODM0MzM7IC8qIGM2ICovXHJcbiAgICAgICAgICAgIHZhciB6MiA9IDAuNTQxMTk2MTAwICogdG1wMTAgKyB6NTsgLyogYzItYzYgKi9cclxuICAgICAgICAgICAgdmFyIHo0ID0gMS4zMDY1NjI5NjUgKiB0bXAxMiArIHo1OyAvKiBjMitjNiAqL1xyXG4gICAgICAgICAgICB2YXIgejMgPSB0bXAxMSAqIDAuNzA3MTA2NzgxOyAvKiBjNCAqL1xyXG5cclxuICAgICAgICAgICAgdmFyIHoxMSA9IHRtcDcgKyB6MztcdC8qIHBoYXNlIDUgKi9cclxuICAgICAgICAgICAgdmFyIHoxMyA9IHRtcDcgLSB6MztcclxuXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDVdID0gejEzICsgejI7XHQvKiBwaGFzZSA2ICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDNdID0gejEzIC0gejI7XHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDFdID0gejExICsgejQ7XHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDddID0gejExIC0gejQ7XHJcblxyXG4gICAgICAgICAgICBkYXRhT2ZmICs9IDg7IC8qIGFkdmFuY2UgcG9pbnRlciB0byBuZXh0IHJvdyAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogUGFzcyAyOiBwcm9jZXNzIGNvbHVtbnMuICovXHJcbiAgICAgICAgZGF0YU9mZiA9IDA7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IEk4OyArK2kpIHtcclxuICAgICAgICAgICAgZDAgPSBkYXRhW2RhdGFPZmZdO1xyXG4gICAgICAgICAgICBkMSA9IGRhdGFbZGF0YU9mZiArIDhdO1xyXG4gICAgICAgICAgICBkMiA9IGRhdGFbZGF0YU9mZiArIDE2XTtcclxuICAgICAgICAgICAgZDMgPSBkYXRhW2RhdGFPZmYgKyAyNF07XHJcbiAgICAgICAgICAgIGQ0ID0gZGF0YVtkYXRhT2ZmICsgMzJdO1xyXG4gICAgICAgICAgICBkNSA9IGRhdGFbZGF0YU9mZiArIDQwXTtcclxuICAgICAgICAgICAgZDYgPSBkYXRhW2RhdGFPZmYgKyA0OF07XHJcbiAgICAgICAgICAgIGQ3ID0gZGF0YVtkYXRhT2ZmICsgNTZdO1xyXG5cclxuICAgICAgICAgICAgdmFyIHRtcDBwMiA9IGQwICsgZDc7XHJcbiAgICAgICAgICAgIHZhciB0bXA3cDIgPSBkMCAtIGQ3O1xyXG4gICAgICAgICAgICB2YXIgdG1wMXAyID0gZDEgKyBkNjtcclxuICAgICAgICAgICAgdmFyIHRtcDZwMiA9IGQxIC0gZDY7XHJcbiAgICAgICAgICAgIHZhciB0bXAycDIgPSBkMiArIGQ1O1xyXG4gICAgICAgICAgICB2YXIgdG1wNXAyID0gZDIgLSBkNTtcclxuICAgICAgICAgICAgdmFyIHRtcDNwMiA9IGQzICsgZDQ7XHJcbiAgICAgICAgICAgIHZhciB0bXA0cDIgPSBkMyAtIGQ0O1xyXG5cclxuICAgICAgICAgICAgLyogRXZlbiBwYXJ0ICovXHJcbiAgICAgICAgICAgIHZhciB0bXAxMHAyID0gdG1wMHAyICsgdG1wM3AyO1x0LyogcGhhc2UgMiAqL1xyXG4gICAgICAgICAgICB2YXIgdG1wMTNwMiA9IHRtcDBwMiAtIHRtcDNwMjtcclxuICAgICAgICAgICAgdmFyIHRtcDExcDIgPSB0bXAxcDIgKyB0bXAycDI7XHJcbiAgICAgICAgICAgIHZhciB0bXAxMnAyID0gdG1wMXAyIC0gdG1wMnAyO1xyXG5cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmXSA9IHRtcDEwcDIgKyB0bXAxMXAyOyAvKiBwaGFzZSAzICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDMyXSA9IHRtcDEwcDIgLSB0bXAxMXAyO1xyXG5cclxuICAgICAgICAgICAgdmFyIHoxcDIgPSAodG1wMTJwMiArIHRtcDEzcDIpICogMC43MDcxMDY3ODE7IC8qIGM0ICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDE2XSA9IHRtcDEzcDIgKyB6MXAyOyAvKiBwaGFzZSA1ICovXHJcbiAgICAgICAgICAgIGRhdGFbZGF0YU9mZiArIDQ4XSA9IHRtcDEzcDIgLSB6MXAyO1xyXG5cclxuICAgICAgICAgICAgLyogT2RkIHBhcnQgKi9cclxuICAgICAgICAgICAgdG1wMTBwMiA9IHRtcDRwMiArIHRtcDVwMjsgLyogcGhhc2UgMiAqL1xyXG4gICAgICAgICAgICB0bXAxMXAyID0gdG1wNXAyICsgdG1wNnAyO1xyXG4gICAgICAgICAgICB0bXAxMnAyID0gdG1wNnAyICsgdG1wN3AyO1xyXG5cclxuICAgICAgICAgICAgLyogVGhlIHJvdGF0b3IgaXMgbW9kaWZpZWQgZnJvbSBmaWcgNC04IHRvIGF2b2lkIGV4dHJhIG5lZ2F0aW9ucy4gKi9cclxuICAgICAgICAgICAgdmFyIHo1cDIgPSAodG1wMTBwMiAtIHRtcDEycDIpICogMC4zODI2ODM0MzM7IC8qIGM2ICovXHJcbiAgICAgICAgICAgIHZhciB6MnAyID0gMC41NDExOTYxMDAgKiB0bXAxMHAyICsgejVwMjsgLyogYzItYzYgKi9cclxuICAgICAgICAgICAgdmFyIHo0cDIgPSAxLjMwNjU2Mjk2NSAqIHRtcDEycDIgKyB6NXAyOyAvKiBjMitjNiAqL1xyXG4gICAgICAgICAgICB2YXIgejNwMiA9IHRtcDExcDIgKiAwLjcwNzEwNjc4MTsgLyogYzQgKi9cclxuXHJcbiAgICAgICAgICAgIHZhciB6MTFwMiA9IHRtcDdwMiArIHozcDI7XHQvKiBwaGFzZSA1ICovXHJcbiAgICAgICAgICAgIHZhciB6MTNwMiA9IHRtcDdwMiAtIHozcDI7XHJcblxyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA0MF0gPSB6MTNwMiArIHoycDI7IC8qIHBoYXNlIDYgKi9cclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgMjRdID0gejEzcDIgLSB6MnAyO1xyXG4gICAgICAgICAgICBkYXRhW2RhdGFPZmYgKyA4XSA9IHoxMXAyICsgejRwMjtcclxuICAgICAgICAgICAgZGF0YVtkYXRhT2ZmICsgNTZdID0gejExcDIgLSB6NHAyO1xyXG5cclxuICAgICAgICAgICAgZGF0YU9mZisrOyAvKiBhZHZhbmNlIHBvaW50ZXIgdG8gbmV4dCBjb2x1bW4gKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFF1YW50aXplL2Rlc2NhbGUgdGhlIGNvZWZmaWNpZW50c1xyXG4gICAgICAgIHZhciBmRENUUXVhbnQ7XHJcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IEk2NDsgKytpKSB7XHJcbiAgICAgICAgICAgIC8vIEFwcGx5IHRoZSBxdWFudGl6YXRpb24gYW5kIHNjYWxpbmcgZmFjdG9yICYgUm91bmQgdG8gbmVhcmVzdCBpbnRlZ2VyXHJcbiAgICAgICAgICAgIGZEQ1RRdWFudCA9IGRhdGFbaV0gKiBmZHRibFtpXTtcclxuICAgICAgICAgICAgb3V0cHV0ZkRDVFF1YW50W2ldID0gKGZEQ1RRdWFudCA+IDAuMCkgPyAoKGZEQ1RRdWFudCArIDAuNSkgfCAwKSA6ICgoZkRDVFF1YW50IC0gMC41KSB8IDApO1xyXG4gICAgICAgICAgICAvL291dHB1dGZEQ1RRdWFudFtpXSA9IGZyb3VuZChmRENUUXVhbnQpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dGZEQ1RRdWFudDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZUFQUDAoKSB7XHJcbiAgICAgICAgd3JpdGVXb3JkKDB4RkZFMCk7IC8vIG1hcmtlclxyXG4gICAgICAgIHdyaXRlV29yZCgxNik7IC8vIGxlbmd0aFxyXG4gICAgICAgIHdyaXRlQnl0ZSgweDRBKTsgLy8gSlxyXG4gICAgICAgIHdyaXRlQnl0ZSgweDQ2KTsgLy8gRlxyXG4gICAgICAgIHdyaXRlQnl0ZSgweDQ5KTsgLy8gSVxyXG4gICAgICAgIHdyaXRlQnl0ZSgweDQ2KTsgLy8gRlxyXG4gICAgICAgIHdyaXRlQnl0ZSgwKTsgLy8gPSBcIkpGSUZcIiwnXFwwJ1xyXG4gICAgICAgIHdyaXRlQnl0ZSgxKTsgLy8gdmVyc2lvbmhpXHJcbiAgICAgICAgd3JpdGVCeXRlKDEpOyAvLyB2ZXJzaW9ubG9cclxuICAgICAgICB3cml0ZUJ5dGUoMCk7IC8vIHh5dW5pdHNcclxuICAgICAgICB3cml0ZVdvcmQoMSk7IC8vIHhkZW5zaXR5XHJcbiAgICAgICAgd3JpdGVXb3JkKDEpOyAvLyB5ZGVuc2l0eVxyXG4gICAgICAgIHdyaXRlQnl0ZSgwKTsgLy8gdGh1bWJud2lkdGhcclxuICAgICAgICB3cml0ZUJ5dGUoMCk7IC8vIHRodW1ibmhlaWdodFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdyaXRlQVBQMShleGlmQnVmZmVyKSB7XHJcbiAgICAgICAgaWYgKCFleGlmQnVmZmVyKSByZXR1cm47XHJcblxyXG4gICAgICAgIHdyaXRlV29yZCgweEZGRTEpOyAvLyBBUFAxIG1hcmtlclxyXG5cclxuICAgICAgICBpZiAoZXhpZkJ1ZmZlclswXSA9PT0gMHg0NSAmJlxyXG4gICAgICAgICAgICBleGlmQnVmZmVyWzFdID09PSAweDc4ICYmXHJcbiAgICAgICAgICAgIGV4aWZCdWZmZXJbMl0gPT09IDB4NjkgJiZcclxuICAgICAgICAgICAgZXhpZkJ1ZmZlclszXSA9PT0gMHg2Nikge1xyXG4gICAgICAgICAgICAvLyBCdWZmZXIgYWxyZWFkeSBzdGFydHMgd2l0aCBFWElGLCBqdXN0IHVzZSBpdCBkaXJlY3RseVxyXG4gICAgICAgICAgICB3cml0ZVdvcmQoZXhpZkJ1ZmZlci5sZW5ndGggKyAyKTsgLy8gbGVuZ3RoIGlzIGJ1ZmZlciArIGxlbmd0aCBpdHNlbGYhXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQnVmZmVyIGRvZXNuJ3Qgc3RhcnQgd2l0aCBFWElGLCB3cml0ZSBpdCBmb3IgdGhlbVxyXG4gICAgICAgICAgICB3cml0ZVdvcmQoZXhpZkJ1ZmZlci5sZW5ndGggKyA1ICsgMik7IC8vIGxlbmd0aCBpcyBidWZmZXIgKyBFWElGXFwwICsgbGVuZ3RoIGl0c2VsZiFcclxuICAgICAgICAgICAgd3JpdGVCeXRlKDB4NDUpOyAvLyBFXHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZSgweDc4KTsgLy8gWFxyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoMHg2OSk7IC8vIElcclxuICAgICAgICAgICAgd3JpdGVCeXRlKDB4NjYpOyAvLyBGXHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZSgwKTsgLy8gPSBcIkVYSUZcIiwnXFwwJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGlmQnVmZmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZShleGlmQnVmZmVyW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd3JpdGVTT0YwKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB3cml0ZVdvcmQoMHhGRkMwKTsgLy8gbWFya2VyXHJcbiAgICAgICAgd3JpdGVXb3JkKDE3KTsgICAvLyBsZW5ndGgsIHRydWVjb2xvciBZVVYgSlBHXHJcbiAgICAgICAgd3JpdGVCeXRlKDgpOyAgICAvLyBwcmVjaXNpb25cclxuICAgICAgICB3cml0ZVdvcmQoaGVpZ2h0KTtcclxuICAgICAgICB3cml0ZVdvcmQod2lkdGgpO1xyXG4gICAgICAgIHdyaXRlQnl0ZSgzKTsgICAgLy8gbnJvZmNvbXBvbmVudHNcclxuICAgICAgICB3cml0ZUJ5dGUoMSk7ICAgIC8vIElkWVxyXG4gICAgICAgIHdyaXRlQnl0ZSgweDExKTsgLy8gSFZZXHJcbiAgICAgICAgd3JpdGVCeXRlKDApOyAgICAvLyBRVFlcclxuICAgICAgICB3cml0ZUJ5dGUoMik7ICAgIC8vIElkVVxyXG4gICAgICAgIHdyaXRlQnl0ZSgweDExKTsgLy8gSFZVXHJcbiAgICAgICAgd3JpdGVCeXRlKDEpOyAgICAvLyBRVFVcclxuICAgICAgICB3cml0ZUJ5dGUoMyk7ICAgIC8vIElkVlxyXG4gICAgICAgIHdyaXRlQnl0ZSgweDExKTsgLy8gSFZWXHJcbiAgICAgICAgd3JpdGVCeXRlKDEpOyAgICAvLyBRVFZcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZURRVCgpIHtcclxuICAgICAgICB3cml0ZVdvcmQoMHhGRkRCKTsgLy8gbWFya2VyXHJcbiAgICAgICAgd3JpdGVXb3JkKDEzMik7XHQgICAvLyBsZW5ndGhcclxuICAgICAgICB3cml0ZUJ5dGUoMCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA2NDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZShZVGFibGVbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3cml0ZUJ5dGUoMSk7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCA2NDsgaisrKSB7XHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZShVVlRhYmxlW2pdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd3JpdGVESFQoKSB7XHJcbiAgICAgICAgd3JpdGVXb3JkKDB4RkZDNCk7IC8vIG1hcmtlclxyXG4gICAgICAgIHdyaXRlV29yZCgweDAxQTIpOyAvLyBsZW5ndGhcclxuXHJcbiAgICAgICAgd3JpdGVCeXRlKDApOyAvLyBIVFlEQ2luZm9cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgICAgICAgd3JpdGVCeXRlKHN0ZF9kY19sdW1pbmFuY2VfbnJjb2Rlc1tpICsgMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8PSAxMTsgaisrKSB7XHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZShzdGRfZGNfbHVtaW5hbmNlX3ZhbHVlc1tqXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3cml0ZUJ5dGUoMHgxMCk7IC8vIEhUWUFDaW5mb1xyXG4gICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgMTY7IGsrKykge1xyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoc3RkX2FjX2x1bWluYW5jZV9ucmNvZGVzW2sgKyAxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGwgPSAwOyBsIDw9IDE2MTsgbCsrKSB7XHJcbiAgICAgICAgICAgIHdyaXRlQnl0ZShzdGRfYWNfbHVtaW5hbmNlX3ZhbHVlc1tsXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3cml0ZUJ5dGUoMSk7IC8vIEhUVURDaW5mb1xyXG4gICAgICAgIGZvciAodmFyIG0gPSAwOyBtIDwgMTY7IG0rKykge1xyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoc3RkX2RjX2Nocm9taW5hbmNlX25yY29kZXNbbSArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPD0gMTE7IG4rKykge1xyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoc3RkX2RjX2Nocm9taW5hbmNlX3ZhbHVlc1tuXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3cml0ZUJ5dGUoMHgxMSk7IC8vIEhUVUFDaW5mb1xyXG4gICAgICAgIGZvciAodmFyIG8gPSAwOyBvIDwgMTY7IG8rKykge1xyXG4gICAgICAgICAgICB3cml0ZUJ5dGUoc3RkX2FjX2Nocm9taW5hbmNlX25yY29kZXNbbyArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPD0gMTYxOyBwKyspIHtcclxuICAgICAgICAgICAgd3JpdGVCeXRlKHN0ZF9hY19jaHJvbWluYW5jZV92YWx1ZXNbcF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB3cml0ZUNPTShjb21tZW50cykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY29tbWVudHMgPT09IFwidW5kZWZpbmVkXCIgfHwgY29tbWVudHMuY29uc3RydWN0b3IgIT09IEFycmF5KSByZXR1cm47XHJcbiAgICAgICAgY29tbWVudHMuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlICE9PSBcInN0cmluZ1wiKSByZXR1cm47XHJcbiAgICAgICAgICAgIHdyaXRlV29yZCgweEZGRkUpOyAvLyBtYXJrZXJcclxuICAgICAgICAgICAgdmFyIGwgPSBlLmxlbmd0aDtcclxuICAgICAgICAgICAgd3JpdGVXb3JkKGwgKyAyKTsgLy8gbGVuZ3RoIGl0c2VsZiBhcyB3ZWxsXHJcbiAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgd3JpdGVCeXRlKGUuY2hhckNvZGVBdChpKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gd3JpdGVTT1MoKSB7XHJcbiAgICAgICAgd3JpdGVXb3JkKDB4RkZEQSk7IC8vIG1hcmtlclxyXG4gICAgICAgIHdyaXRlV29yZCgxMik7IC8vIGxlbmd0aFxyXG4gICAgICAgIHdyaXRlQnl0ZSgzKTsgLy8gbnJvZmNvbXBvbmVudHNcclxuICAgICAgICB3cml0ZUJ5dGUoMSk7IC8vIElkWVxyXG4gICAgICAgIHdyaXRlQnl0ZSgwKTsgLy8gSFRZXHJcbiAgICAgICAgd3JpdGVCeXRlKDIpOyAvLyBJZFVcclxuICAgICAgICB3cml0ZUJ5dGUoMHgxMSk7IC8vIEhUVVxyXG4gICAgICAgIHdyaXRlQnl0ZSgzKTsgLy8gSWRWXHJcbiAgICAgICAgd3JpdGVCeXRlKDB4MTEpOyAvLyBIVFZcclxuICAgICAgICB3cml0ZUJ5dGUoMCk7IC8vIFNzXHJcbiAgICAgICAgd3JpdGVCeXRlKDB4M2YpOyAvLyBTZVxyXG4gICAgICAgIHdyaXRlQnl0ZSgwKTsgLy8gQmZcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzRFUoQ0RVLCBmZHRibCwgREMsIEhUREMsIEhUQUMpIHtcclxuICAgICAgICB2YXIgRU9CID0gSFRBQ1sweDAwXTtcclxuICAgICAgICB2YXIgTTE2emVyb2VzID0gSFRBQ1sweEYwXTtcclxuICAgICAgICB2YXIgcG9zO1xyXG4gICAgICAgIHZhciBJMTYgPSAxNjtcclxuICAgICAgICB2YXIgSTYzID0gNjM7XHJcbiAgICAgICAgdmFyIEk2NCA9IDY0O1xyXG4gICAgICAgIHZhciBEVV9EQ1QgPSBmRENUUXVhbnQoQ0RVLCBmZHRibCk7XHJcbiAgICAgICAgLy9aaWdaYWcgcmVvcmRlclxyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgSTY0OyArK2opIHtcclxuICAgICAgICAgICAgRFVbWmlnWmFnW2pdXSA9IERVX0RDVFtqXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIERpZmYgPSBEVVswXSAtIERDOyBEQyA9IERVWzBdO1xyXG4gICAgICAgIC8vRW5jb2RlIERDXHJcbiAgICAgICAgaWYgKERpZmYgPT0gMCkge1xyXG4gICAgICAgICAgICB3cml0ZUJpdHMoSFREQ1swXSk7IC8vIERpZmYgbWlnaHQgYmUgMFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBvcyA9IDMyNzY3ICsgRGlmZjtcclxuICAgICAgICAgICAgd3JpdGVCaXRzKEhURENbY2F0ZWdvcnlbcG9zXV0pO1xyXG4gICAgICAgICAgICB3cml0ZUJpdHMoYml0Y29kZVtwb3NdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9FbmNvZGUgQUNzXHJcbiAgICAgICAgdmFyIGVuZDBwb3MgPSA2MzsgLy8gd2FzIGNvbnN0Li4uIHdoaWNoIGlzIGNyYXp5XHJcbiAgICAgICAgZm9yICg7IChlbmQwcG9zID4gMCkgJiYgKERVW2VuZDBwb3NdID09IDApOyBlbmQwcG9zLS0pIHsgfTtcclxuICAgICAgICAvL2VuZDBwb3MgPSBmaXJzdCBlbGVtZW50IGluIHJldmVyc2Ugb3JkZXIgIT0wXHJcbiAgICAgICAgaWYgKGVuZDBwb3MgPT0gMCkge1xyXG4gICAgICAgICAgICB3cml0ZUJpdHMoRU9CKTtcclxuICAgICAgICAgICAgcmV0dXJuIERDO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaSA9IDE7XHJcbiAgICAgICAgdmFyIGxuZztcclxuICAgICAgICB3aGlsZSAoaSA8PSBlbmQwcG9zKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGFydHBvcyA9IGk7XHJcbiAgICAgICAgICAgIGZvciAoOyAoRFVbaV0gPT0gMCkgJiYgKGkgPD0gZW5kMHBvcyk7ICsraSkgeyB9XHJcbiAgICAgICAgICAgIHZhciBucnplcm9lcyA9IGkgLSBzdGFydHBvcztcclxuICAgICAgICAgICAgaWYgKG5yemVyb2VzID49IEkxNikge1xyXG4gICAgICAgICAgICAgICAgbG5nID0gbnJ6ZXJvZXMgPj4gNDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG5ybWFya2VyID0gMTsgbnJtYXJrZXIgPD0gbG5nOyArK25ybWFya2VyKVxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRlQml0cyhNMTZ6ZXJvZXMpO1xyXG4gICAgICAgICAgICAgICAgbnJ6ZXJvZXMgPSBucnplcm9lcyAmIDB4RjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3MgPSAzMjc2NyArIERVW2ldO1xyXG4gICAgICAgICAgICB3cml0ZUJpdHMoSFRBQ1sobnJ6ZXJvZXMgPDwgNCkgKyBjYXRlZ29yeVtwb3NdXSk7XHJcbiAgICAgICAgICAgIHdyaXRlQml0cyhiaXRjb2RlW3Bvc10pO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbmQwcG9zICE9IEk2Mykge1xyXG4gICAgICAgICAgICB3cml0ZUJpdHMoRU9CKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIERDO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXRDaGFyTG9va3VwVGFibGUoKSB7XHJcbiAgICAgICAgdmFyIHNmY2MgPSBTdHJpbmcuZnJvbUNoYXJDb2RlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHsgLy8vLy8gQUNIVFVORyAvLyAyNTVcclxuICAgICAgICAgICAgY2x0W2ldID0gc2ZjYyhpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbmNvZGUgPSBmdW5jdGlvbiAoaW1hZ2UsIHF1YWxpdHkpIC8vIGltYWdlIGRhdGEgb2JqZWN0XHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHRpbWVfc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHJcbiAgICAgICAgaWYgKHF1YWxpdHkpIHNldFF1YWxpdHkocXVhbGl0eSk7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgYml0IHdyaXRlclxyXG4gICAgICAgIGJ5dGVvdXQgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICBieXRlbmV3ID0gMDtcclxuICAgICAgICBieXRlcG9zID0gNztcclxuXHJcbiAgICAgICAgLy8gQWRkIEpQRUcgaGVhZGVyc1xyXG4gICAgICAgIHdyaXRlV29yZCgweEZGRDgpOyAvLyBTT0lcclxuICAgICAgICB3cml0ZUFQUDAoKTtcclxuICAgICAgICB3cml0ZUNPTShpbWFnZS5jb21tZW50cyk7XHJcbiAgICAgICAgd3JpdGVBUFAxKGltYWdlLmV4aWZCdWZmZXIpO1xyXG4gICAgICAgIHdyaXRlRFFUKCk7XHJcbiAgICAgICAgd3JpdGVTT0YwKGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG4gICAgICAgIHdyaXRlREhUKCk7XHJcbiAgICAgICAgd3JpdGVTT1MoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIEVuY29kZSA4eDggbWFjcm9ibG9ja3NcclxuICAgICAgICB2YXIgRENZID0gMDtcclxuICAgICAgICB2YXIgRENVID0gMDtcclxuICAgICAgICB2YXIgRENWID0gMDtcclxuXHJcbiAgICAgICAgYnl0ZW5ldyA9IDA7XHJcbiAgICAgICAgYnl0ZXBvcyA9IDc7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmVuY29kZS5kaXNwbGF5TmFtZSA9IFwiX2VuY29kZV9cIjtcclxuXHJcbiAgICAgICAgdmFyIGltYWdlRGF0YSA9IGltYWdlLmRhdGE7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gaW1hZ2Uud2lkdGg7XHJcbiAgICAgICAgdmFyIGhlaWdodCA9IGltYWdlLmhlaWdodDtcclxuXHJcbiAgICAgICAgdmFyIHF1YWRXaWR0aCA9IHdpZHRoICogNDtcclxuICAgICAgICB2YXIgdHJpcGxlV2lkdGggPSB3aWR0aCAqIDM7XHJcblxyXG4gICAgICAgIHZhciB4LCB5ID0gMDtcclxuICAgICAgICB2YXIgciwgZywgYjtcclxuICAgICAgICB2YXIgc3RhcnQsIHAsIGNvbCwgcm93LCBwb3M7XHJcbiAgICAgICAgd2hpbGUgKHkgPCBoZWlnaHQpIHtcclxuICAgICAgICAgICAgeCA9IDA7XHJcbiAgICAgICAgICAgIHdoaWxlICh4IDwgcXVhZFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IHF1YWRXaWR0aCAqIHkgKyB4O1xyXG4gICAgICAgICAgICAgICAgcCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgY29sID0gLTE7XHJcbiAgICAgICAgICAgICAgICByb3cgPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAocG9zID0gMDsgcG9zIDwgNjQ7IHBvcysrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gcG9zID4+IDM7Ly8gLzhcclxuICAgICAgICAgICAgICAgICAgICBjb2wgPSAocG9zICYgNykgKiA0OyAvLyAlOFxyXG4gICAgICAgICAgICAgICAgICAgIHAgPSBzdGFydCArIChyb3cgKiBxdWFkV2lkdGgpICsgY29sO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoeSArIHJvdyA+PSBoZWlnaHQpIHsgLy8gcGFkZGluZyBib3R0b21cclxuICAgICAgICAgICAgICAgICAgICAgICAgcCAtPSAocXVhZFdpZHRoICogKHkgKyAxICsgcm93IC0gaGVpZ2h0KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCArIGNvbCA+PSBxdWFkV2lkdGgpIHsgLy8gcGFkZGluZyByaWdodFx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgLT0gKCh4ICsgY29sKSAtIHF1YWRXaWR0aCArIDQpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByID0gaW1hZ2VEYXRhW3ArK107XHJcbiAgICAgICAgICAgICAgICAgICAgZyA9IGltYWdlRGF0YVtwKytdO1xyXG4gICAgICAgICAgICAgICAgICAgIGIgPSBpbWFnZURhdGFbcCsrXTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIC8vIGNhbGN1bGF0ZSBZVVYgdmFsdWVzIGR5bmFtaWNhbGx5XHJcbiAgICAgICAgICAgICAgICAgICAgWURVW3Bvc109KCgoIDAuMjk5MDApKnIrKCAwLjU4NzAwKSpnKyggMC4xMTQwMCkqYikpLTEyODsgLy8tMHg4MFxyXG4gICAgICAgICAgICAgICAgICAgIFVEVVtwb3NdPSgoKC0wLjE2ODc0KSpyKygtMC4zMzEyNikqZysoIDAuNTAwMDApKmIpKTtcclxuICAgICAgICAgICAgICAgICAgICBWRFVbcG9zXT0oKCggMC41MDAwMCkqcisoLTAuNDE4NjkpKmcrKC0wLjA4MTMxKSpiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNlIGxvb2t1cCB0YWJsZSAoc2xpZ2h0bHkgZmFzdGVyKVxyXG4gICAgICAgICAgICAgICAgICAgIFlEVVtwb3NdID0gKChSR0JfWVVWX1RBQkxFW3JdICsgUkdCX1lVVl9UQUJMRVsoZyArIDI1NikgPj4gMF0gKyBSR0JfWVVWX1RBQkxFWyhiICsgNTEyKSA+PiAwXSkgPj4gMTYpIC0gMTI4O1xyXG4gICAgICAgICAgICAgICAgICAgIFVEVVtwb3NdID0gKChSR0JfWVVWX1RBQkxFWyhyICsgNzY4KSA+PiAwXSArIFJHQl9ZVVZfVEFCTEVbKGcgKyAxMDI0KSA+PiAwXSArIFJHQl9ZVVZfVEFCTEVbKGIgKyAxMjgwKSA+PiAwXSkgPj4gMTYpIC0gMTI4O1xyXG4gICAgICAgICAgICAgICAgICAgIFZEVVtwb3NdID0gKChSR0JfWVVWX1RBQkxFWyhyICsgMTI4MCkgPj4gMF0gKyBSR0JfWVVWX1RBQkxFWyhnICsgMTUzNikgPj4gMF0gKyBSR0JfWVVWX1RBQkxFWyhiICsgMTc5MikgPj4gMF0pID4+IDE2KSAtIDEyODtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgRENZID0gcHJvY2Vzc0RVKFlEVSwgZmR0YmxfWSwgRENZLCBZRENfSFQsIFlBQ19IVCk7XHJcbiAgICAgICAgICAgICAgICBEQ1UgPSBwcm9jZXNzRFUoVURVLCBmZHRibF9VViwgRENVLCBVVkRDX0hULCBVVkFDX0hUKTtcclxuICAgICAgICAgICAgICAgIERDViA9IHByb2Nlc3NEVShWRFUsIGZkdGJsX1VWLCBEQ1YsIFVWRENfSFQsIFVWQUNfSFQpO1xyXG4gICAgICAgICAgICAgICAgeCArPSAzMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB5ICs9IDg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgICAgICAvLyBEbyB0aGUgYml0IGFsaWdubWVudCBvZiB0aGUgRU9JIG1hcmtlclxyXG4gICAgICAgIGlmIChieXRlcG9zID49IDApIHtcclxuICAgICAgICAgICAgdmFyIGZpbGxiaXRzID0gW107XHJcbiAgICAgICAgICAgIGZpbGxiaXRzWzFdID0gYnl0ZXBvcyArIDE7XHJcbiAgICAgICAgICAgIGZpbGxiaXRzWzBdID0gKDEgPDwgKGJ5dGVwb3MgKyAxKSkgLSAxO1xyXG4gICAgICAgICAgICB3cml0ZUJpdHMoZmlsbGJpdHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd3JpdGVXb3JkKDB4RkZEOSk7IC8vRU9JXHJcblxyXG4gICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGJ5dGVvdXQpO1xyXG4gICAgICBcclxuICAgICAgICB2YXIganBlZ0RhdGFVcmkgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwnICsgYnRvYShieXRlb3V0LmpvaW4oJycpKTtcclxuXHJcbiAgICAgICAgYnl0ZW91dCA9IFtdO1xyXG5cclxuICAgICAgICAvLyBiZW5jaG1hcmtpbmdcclxuICAgICAgICB2YXIgZHVyYXRpb24gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRpbWVfc3RhcnQ7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnRW5jb2RpbmcgdGltZTogJysgZHVyYXRpb24gKyAnbXMnKTtcclxuICAgICAgICAvL1xyXG5cclxuICAgICAgICByZXR1cm4ganBlZ0RhdGFVcmlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRRdWFsaXR5KHF1YWxpdHkpIHtcclxuICAgICAgICBpZiAocXVhbGl0eSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHF1YWxpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocXVhbGl0eSA+IDEwMCkge1xyXG4gICAgICAgICAgICBxdWFsaXR5ID0gMTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRRdWFsaXR5ID09IHF1YWxpdHkpIHJldHVybiAvLyBkb24ndCByZWNhbGMgaWYgdW5jaGFuZ2VkXHJcblxyXG4gICAgICAgIHZhciBzZiA9IDA7XHJcbiAgICAgICAgaWYgKHF1YWxpdHkgPCA1MCkge1xyXG4gICAgICAgICAgICBzZiA9IE1hdGguZmxvb3IoNTAwMCAvIHF1YWxpdHkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNmID0gTWF0aC5mbG9vcigyMDAgLSBxdWFsaXR5ICogMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbml0UXVhbnRUYWJsZXMoc2YpO1xyXG4gICAgICAgIGN1cnJlbnRRdWFsaXR5ID0gcXVhbGl0eTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdRdWFsaXR5IHNldCB0bzogJytxdWFsaXR5ICsnJScpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgdmFyIHRpbWVfc3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBpZiAoIXF1YWxpdHkpIHF1YWxpdHkgPSA1MDtcclxuICAgICAgICAvLyBDcmVhdGUgdGFibGVzXHJcbiAgICAgICAgaW5pdENoYXJMb29rdXBUYWJsZSgpXHJcbiAgICAgICAgaW5pdEh1ZmZtYW5UYmwoKTtcclxuICAgICAgICBpbml0Q2F0ZWdvcnlOdW1iZXIoKTtcclxuICAgICAgICBpbml0UkdCWVVWVGFibGUoKTtcclxuXHJcbiAgICAgICAgc2V0UXVhbGl0eShxdWFsaXR5KTtcclxuICAgICAgICB2YXIgZHVyYXRpb24gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHRpbWVfc3RhcnQ7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnSW5pdGlhbGl6YXRpb24gJysgZHVyYXRpb24gKyAnbXMnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCk7XHJcblxyXG59O1xyXG5cclxuIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUpQRyhpbWdEYXRhLCBxdSkge1xyXG4gICAgaWYgKHR5cGVvZiBxdSA9PT0gJ3VuZGVmaW5lZCcpIHF1ID0gNTA7XHJcbiAgICB2YXIgZW5jb2RlciA9IG5ldyBKUEVHRW5jb2RlcihxdSk7XHJcbiAgICB2YXIgZGF0YSA9IGVuY29kZXIuZW5jb2RlKGltZ0RhdGEsIHF1KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICB3aWR0aDogaW1nRGF0YS53aWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGltZ0RhdGEuaGVpZ2h0LFxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gaGVscGVyIGZ1bmN0aW9uIHRvIGdldCB0aGUgaW1hZ2VEYXRhIG9mIGFuIGV4aXN0aW5nIGltYWdlIG9uIHRoZSBjdXJyZW50IHBhZ2UuXHJcbmZ1bmN0aW9uIGdldEltYWdlRGF0YUZyb21JbWFnZShpZE9yRWxlbWVudCkge1xyXG4gICAgdmFyIHRoZUltZyA9ICh0eXBlb2YgKGlkT3JFbGVtZW50KSA9PSAnc3RyaW5nJykgPyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZE9yRWxlbWVudCkgOiBpZE9yRWxlbWVudDtcclxuICAgIHZhciBjdnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGN2cy53aWR0aCA9IHRoZUltZy53aWR0aDtcclxuICAgIGN2cy5oZWlnaHQgPSB0aGVJbWcuaGVpZ2h0O1xyXG4gICAgdmFyIGN0eCA9IGN2cy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjdHguZHJhd0ltYWdlKHRoZUltZywgMCwgMCk7XHJcblxyXG4gICAgcmV0dXJuIChjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGN2cy53aWR0aCwgY3ZzLmhlaWdodCkpO1xyXG59XHJcblxyXG5cclxuXHJcbiAgLy9odHRwczovL2dpdGh1Yi5jb20vanBlZy1qcy9qcGVnLWpzL2Jsb2IvbWFzdGVyL2xpYi9lbmNvZGVyLmpzIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/waterEffectScene/touch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9963bP2sC9OnLmQuEEmLX1A', 'touch');
// shaderScene/waterEffectScene/touch.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS93YXRlckVmZmVjdFNjZW5lL3RvdWNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUVwQixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUEvQztRQUNJLHdCQUF3QjtRQUQ1QixxRUFvQkM7UUFoQkcsVUFBSSxHQUFRLElBQUksQ0FBQzs7UUFlakIsaUJBQWlCO0lBQ3JCLENBQUM7SUFmRyxlQUFlO0lBRWYscUJBQUssR0FBTDtRQUFBLGlCQUtDO1FBSkcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFDWCxDQUFDO0lBRUQsMkJBQVcsR0FBWCxVQUFZLENBQUM7UUFDVCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDO0lBQ3hDLENBQUM7SUFiRDtRQURDLFFBQVEsQ0FBQyxjQUFJLENBQUM7dUNBQ0U7SUFKQSxLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBb0J6QjtJQUFELFlBQUM7Q0FwQkQsQUFvQkMsQ0FwQmtDLEVBQUUsQ0FBQyxTQUFTLEdBb0I5QztrQkFwQm9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2F2ZSBmcm9tIFwiLi93YXZlXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG91Y2ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgQHByb3BlcnR5KHdhdmUpXG4gICAgd2F2ZTp3YXZlID0gbnVsbDtcbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNoZW5kJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG91Y2hlZEZ1bmMoZSk7XG4gICAgICAgIH0sdGhpcylcbiAgICB9XG5cbiAgICB0b3VjaGVkRnVuYyhlKXtcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihlLmdldExvY2F0aW9uKCkueCAvIDcyMCAqIHRoaXMud2F2ZS5uV2F0ZXIpO1xuICAgICAgICB0aGlzLndhdmUuZW5lcmd5QXJyYXlbaW5kZXhdICs9IDgwMDtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/common/GTSimpleSpriteAssembler2D.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71835KhIcdHOKRUuZwxuxiN', 'GTSimpleSpriteAssembler2D');
// shaderScene/common/GTSimpleSpriteAssembler2D.ts

"use strict";
// https://github.com/caogtaa/CCBatchingTricks
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
Object.defineProperty(exports, "__esModule", { value: true });
var GTAssembler2D_1 = require("./GTAssembler2D");
var GTSimpleSpriteAssembler2D = /** @class */ (function (_super) {
    __extends(GTSimpleSpriteAssembler2D, _super);
    function GTSimpleSpriteAssembler2D() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 这部分使用SimpleSpriteAssembler的内容
    GTSimpleSpriteAssembler2D.prototype.updateRenderData = function (sprite) {
        this.packToDynamicAtlas(sprite, sprite._spriteFrame);
        _super.prototype.updateRenderData.call(this, sprite);
    };
    GTSimpleSpriteAssembler2D.prototype.updateUVs = function (sprite) {
        var uv = sprite._spriteFrame.uv;
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        for (var i = 0; i < 4; i++) {
            var srcOffset = i * 2;
            var dstOffset = floatsPerVert * i + uvOffset;
            verts[dstOffset] = uv[srcOffset];
            verts[dstOffset + 1] = uv[srcOffset + 1];
        }
    };
    GTSimpleSpriteAssembler2D.prototype.updateVerts = function (sprite) {
        var node = sprite.node, cw = node.width, ch = node.height, appx = node.anchorX * cw, appy = node.anchorY * ch, l, b, r, t;
        if (sprite.trim) {
            l = -appx;
            b = -appy;
            r = cw - appx;
            t = ch - appy;
        }
        else {
            var frame = sprite.spriteFrame, ow = frame._originalSize.width, oh = frame._originalSize.height, rw = frame._rect.width, rh = frame._rect.height, offset = frame._offset, scaleX = cw / ow, scaleY = ch / oh;
            var trimLeft = offset.x + (ow - rw) / 2;
            var trimRight = offset.x - (ow - rw) / 2;
            var trimBottom = offset.y + (oh - rh) / 2;
            var trimTop = offset.y - (oh - rh) / 2;
            l = trimLeft * scaleX - appx;
            b = trimBottom * scaleY - appy;
            r = cw + trimRight * scaleX - appx;
            t = ch + trimTop * scaleY - appy;
        }
        var local = this._local;
        local[0] = l;
        local[1] = b;
        local[2] = r;
        local[3] = t;
        this.updateWorldVerts(sprite);
    };
    return GTSimpleSpriteAssembler2D;
}(GTAssembler2D_1.default));
exports.default = GTSimpleSpriteAssembler2D;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9jb21tb24vR1RTaW1wbGVTcHJpdGVBc3NlbWJsZXIyRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQThDOzs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsaURBQTRDO0FBRTVDO0lBQXVELDZDQUFhO0lBQXBFOztJQXNEQSxDQUFDO0lBckRHLGdDQUFnQztJQUNoQyxvREFBZ0IsR0FBaEIsVUFBaUIsTUFBaUI7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsaUJBQU0sZ0JBQWdCLFlBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDZDQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ1osSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7UUFDaEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM3QixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLFNBQVMsR0FBRyxhQUFhLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztZQUM3QyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFFRCwrQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQ2xCLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUNsRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZixJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDYixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDVixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNkLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO2FBQ0k7WUFDRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxFQUMxQixFQUFFLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUMvRCxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUMvQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFDdEIsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDdkMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzdCLENBQUMsR0FBRyxVQUFVLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQixDQUFDLEdBQUcsRUFBRSxHQUFHLFNBQVMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25DLENBQUMsR0FBRyxFQUFFLEdBQUcsT0FBTyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEM7UUFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNMLGdDQUFDO0FBQUQsQ0F0REEsQUFzREMsQ0F0RHNELHVCQUFhLEdBc0RuRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jYW9ndGFhL0NDQmF0Y2hpbmdUcmlja3NcblxuaW1wb3J0IEdUQXNzZW1ibGVyMkQgZnJvbSBcIi4vR1RBc3NlbWJsZXIyRFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHVFNpbXBsZVNwcml0ZUFzc2VtYmxlcjJEIGV4dGVuZHMgR1RBc3NlbWJsZXIyRCB7XG4gICAgLy8g6L+Z6YOo5YiG5L2/55SoU2ltcGxlU3ByaXRlQXNzZW1ibGVy55qE5YaF5a65XG4gICAgdXBkYXRlUmVuZGVyRGF0YShzcHJpdGU6IGNjLlNwcml0ZSkge1xuICAgICAgICB0aGlzLnBhY2tUb0R5bmFtaWNBdGxhcyhzcHJpdGUsIHNwcml0ZS5fc3ByaXRlRnJhbWUpO1xuICAgICAgICBzdXBlci51cGRhdGVSZW5kZXJEYXRhKHNwcml0ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVVZzKHNwcml0ZSkge1xuICAgICAgICBsZXQgdXYgPSBzcHJpdGUuX3Nwcml0ZUZyYW1lLnV2O1xuICAgICAgICBsZXQgdXZPZmZzZXQgPSB0aGlzLnV2T2Zmc2V0O1xuICAgICAgICBsZXQgZmxvYXRzUGVyVmVydCA9IHRoaXMuZmxvYXRzUGVyVmVydDtcbiAgICAgICAgbGV0IHZlcnRzID0gdGhpcy5fcmVuZGVyRGF0YS52RGF0YXNbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3JjT2Zmc2V0ID0gaSAqIDI7XG4gICAgICAgICAgICBsZXQgZHN0T2Zmc2V0ID0gZmxvYXRzUGVyVmVydCAqIGkgKyB1dk9mZnNldDtcbiAgICAgICAgICAgIHZlcnRzW2RzdE9mZnNldF0gPSB1dltzcmNPZmZzZXRdO1xuICAgICAgICAgICAgdmVydHNbZHN0T2Zmc2V0ICsgMV0gPSB1dltzcmNPZmZzZXQgKyAxXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVZlcnRzKHNwcml0ZSkge1xuICAgICAgICBsZXQgbm9kZSA9IHNwcml0ZS5ub2RlLFxuICAgICAgICAgICAgY3cgPSBub2RlLndpZHRoLCBjaCA9IG5vZGUuaGVpZ2h0LFxuICAgICAgICAgICAgYXBweCA9IG5vZGUuYW5jaG9yWCAqIGN3LCBhcHB5ID0gbm9kZS5hbmNob3JZICogY2gsXG4gICAgICAgICAgICBsLCBiLCByLCB0O1xuICAgICAgICBpZiAoc3ByaXRlLnRyaW0pIHtcbiAgICAgICAgICAgIGwgPSAtYXBweDtcbiAgICAgICAgICAgIGIgPSAtYXBweTtcbiAgICAgICAgICAgIHIgPSBjdyAtIGFwcHg7XG4gICAgICAgICAgICB0ID0gY2ggLSBhcHB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZyYW1lID0gc3ByaXRlLnNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgICAgIG93ID0gZnJhbWUuX29yaWdpbmFsU2l6ZS53aWR0aCwgb2ggPSBmcmFtZS5fb3JpZ2luYWxTaXplLmhlaWdodCxcbiAgICAgICAgICAgICAgICBydyA9IGZyYW1lLl9yZWN0LndpZHRoLCByaCA9IGZyYW1lLl9yZWN0LmhlaWdodCxcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBmcmFtZS5fb2Zmc2V0LFxuICAgICAgICAgICAgICAgIHNjYWxlWCA9IGN3IC8gb3csIHNjYWxlWSA9IGNoIC8gb2g7XG4gICAgICAgICAgICBsZXQgdHJpbUxlZnQgPSBvZmZzZXQueCArIChvdyAtIHJ3KSAvIDI7XG4gICAgICAgICAgICBsZXQgdHJpbVJpZ2h0ID0gb2Zmc2V0LnggLSAob3cgLSBydykgLyAyO1xuICAgICAgICAgICAgbGV0IHRyaW1Cb3R0b20gPSBvZmZzZXQueSArIChvaCAtIHJoKSAvIDI7XG4gICAgICAgICAgICBsZXQgdHJpbVRvcCA9IG9mZnNldC55IC0gKG9oIC0gcmgpIC8gMjtcbiAgICAgICAgICAgIGwgPSB0cmltTGVmdCAqIHNjYWxlWCAtIGFwcHg7XG4gICAgICAgICAgICBiID0gdHJpbUJvdHRvbSAqIHNjYWxlWSAtIGFwcHk7XG4gICAgICAgICAgICByID0gY3cgKyB0cmltUmlnaHQgKiBzY2FsZVggLSBhcHB4O1xuICAgICAgICAgICAgdCA9IGNoICsgdHJpbVRvcCAqIHNjYWxlWSAtIGFwcHk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbG9jYWwgPSB0aGlzLl9sb2NhbDtcbiAgICAgICAgbG9jYWxbMF0gPSBsO1xuICAgICAgICBsb2NhbFsxXSA9IGI7XG4gICAgICAgIGxvY2FsWzJdID0gcjtcbiAgICAgICAgbG9jYWxbM10gPSB0O1xuICAgICAgICB0aGlzLnVwZGF0ZVdvcmxkVmVydHMoc3ByaXRlKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/dissolveTest/GrayEffectScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b2eeYO0iZEr7/PlbdSZuUf', 'GrayEffectScene');
// shaderScene/dissolveTest/GrayEffectScene.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9kaXNzb2x2ZVRlc3QvR3JheUVmZmVjdFNjZW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLFlBQVk7QUFFWjtJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQTREQztRQTNEVyxzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFDbkMsMkJBQXFCLEdBQWEsSUFBSSxDQUFDO1FBRXZDLHlCQUFtQixHQUFZLElBQUksQ0FBQzs7SUF3RGhELENBQUM7SUF0REcsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLCtDQUErQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtREFBbUQsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFakgsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELG1DQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCwrQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLDBDQUFnQixHQUF4QjtRQUNJLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsS0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUcsQ0FBQztRQUNuRixPQUFPO1FBQ1AsSUFBSSxDQUFDLDhCQUE4QixDQUFDO1lBQ2hDLFNBQVMsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUTtTQUM1QyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssd0RBQThCLEdBQXRDLFVBQXVDLEtBS3RDO1FBQ0csSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxTQUFTO1lBQ2hELGVBQWU7WUFDZCxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxlQUFlO2dCQUM5RCxTQUFTO2dCQUNWLElBQUksUUFBUSxHQUFnQixlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUUzRCx1QkFBdUI7Z0JBQ3ZCLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFbkQsY0FBYztnQkFDZCxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTNEZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQTREbkM7SUFBRCxzQkFBQztDQTVERCxBQTREQyxDQTVENEMsRUFBRSxDQUFDLFNBQVMsR0E0RHhEO2tCQTVEb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8qKiDogIHnhafniYfnibnmlYggKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmF5RWZmZWN0U2NlbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgX2dyYXlMZXZlbFNsaWRlcjogY2MuU2xpZGVyID0gbnVsbDtcbiAgICBwcml2YXRlIF9ncmF5TGV2ZWxTbGlkZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBfZXhhbXBsZXNQYXJlbnROb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5fZ3JheUxldmVsU2xpZGVyID0gY2MuZmluZChcIkNhbnZhcy9Db250ZW50L1NsaWRlcnMvR3JheUxldmVsU2xpZGVyL1NsaWRlclwiKS5nZXRDb21wb25lbnQoY2MuU2xpZGVyKTtcbiAgICAgICAgdGhpcy5fZ3JheUxldmVsU2xpZGVyTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL0NvbnRlbnQvU2xpZGVycy9HcmF5TGV2ZWxTbGlkZXIvVmFsdWVMYWJlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuXG4gICAgICAgIHRoaXMuX2V4YW1wbGVzUGFyZW50Tm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvQ29udGVudC9FeGFtcGxlc1wiKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fZ3JheUxldmVsU2xpZGVyLm5vZGUub24oXCJzbGlkZVwiLCB0aGlzLl9vblNsaWRlckNoYW5nZWQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fZ3JheUxldmVsU2xpZGVyLm5vZGUub2ZmKFwic2xpZGVcIiwgdGhpcy5fb25TbGlkZXJDaGFuZ2VkLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5fb25TbGlkZXJDaGFuZ2VkKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfb25TbGlkZXJDaGFuZ2VkKCkge1xuICAgICAgICB0aGlzLl9ncmF5TGV2ZWxTbGlkZXJMYWJlbC5zdHJpbmcgPSBgJHt0aGlzLl9ncmF5TGV2ZWxTbGlkZXIucHJvZ3Jlc3MudG9GaXhlZCgyKX1gO1xuICAgICAgICAvLyDmm7TmlrDmnZDotKhcbiAgICAgICAgdGhpcy5fdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwoe1xuICAgICAgICAgICAgZ3JheUxldmVsOiB0aGlzLl9ncmF5TGV2ZWxTbGlkZXIucHJvZ3Jlc3NcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pu05paw5riy5p+T57uE5Lu255qE5p2Q6LSoXG4gICAgICpcbiAgICAgKiAxLiDojrflj5bmnZDotKhcbiAgICAgKiAyLiDnu5nmnZDotKjnmoQgdW5pdGZvcm0g5Y+Y6YeP6LWL5YC8XG4gICAgICogMy4g6YeN5paw5bCG5p2Q6LSo6LWL5YC85Zue5Y67XG4gICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlUmVuZGVyQ29tcG9uZW50TWF0ZXJpYWwocGFyYW06IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOeBsOWMlueoi+W6piBbMC4wLCAxLjBdIO+8jDEuMCDooajnpLrlrozlhajngbDljJZcbiAgICAgICAgICovXG4gICAgICAgIGdyYXlMZXZlbDogbnVtYmVyO1xuICAgIH0pIHtcbiAgICAgICAgdGhpcy5fZXhhbXBsZXNQYXJlbnROb2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgLy8g6I635Y+W6IqC54K555qE5riy5p+T57uE5Lu255qE5Z+657G7XG4gICAgICAgICAgICBjaGlsZE5vZGUuZ2V0Q29tcG9uZW50cyhjYy5SZW5kZXJDb21wb25lbnQpLmZvckVhY2gocmVuZGVyQ29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgLy8gMS7ojrflj5bmnZDotKhcbiAgICAgICAgICAgICAgICBsZXQgbWF0ZXJpYWw6IGNjLk1hdGVyaWFsID0gcmVuZGVyQ29tcG9uZW50LmdldE1hdGVyaWFsKDApO1xuXG4gICAgICAgICAgICAgICAgLy8gMi7nu5nmnZDotKjnmoQgdW5pdGZvcm0g5Y+Y6YeP6LWL5YC8XG4gICAgICAgICAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoXCJncmF5TGV2ZWxcIiwgcGFyYW0uZ3JheUxldmVsKTtcblxuICAgICAgICAgICAgICAgIC8vIDMu6YeN5paw5bCG5p2Q6LSo6LWL5YC85Zue5Y67XG4gICAgICAgICAgICAgICAgcmVuZGVyQ29tcG9uZW50LnNldE1hdGVyaWFsKDAsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/waterEffectScene/wave.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b5ebDRHUNGq7qfLsLe2Wrm', 'wave');
// shaderScene/waterEffectScene/wave.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS93YXRlckVmZmVjdFNjZW5lL3dhdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFpR0M7UUE5RlMsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixZQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsT0FBTztRQUNyQixlQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztRQUMxQixpQkFBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVM7UUFDM0IsWUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07O0lBeUY1QixDQUFDO0lBdkZDLHFCQUFNLEdBQU47UUFDRSxRQUFRO1FBQ1IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsb0JBQUssR0FBTDtRQUNFLFNBQVM7UUFDVCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFD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QUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNuRDtRQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBN0ZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ2U7SUFIZCxJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBaUd4QjtJQUFELFdBQUM7Q0FqR0QsQUFpR0MsQ0FqR2lDLEVBQUUsQ0FBQyxTQUFTLEdBaUc3QztrQkFqR29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2F2ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgQHByb3BlcnR5KGNjLk1hc2spXG4gIHByaXZhdGUgbWFza05vZGU6IGNjLk1hc2sgPSBudWxsO1xuXG4gIHByaXZhdGUgaFdhdGVyID0gMjAwOyAvLyDmsLTpnaLpq5jluqZcbiAgcHJpdmF0ZSBub2RlQXJyYXkgPSBbXTsgLy8g6KOF6L295rC06Z2i55qE54K5XG4gIHB1YmxpYyBlbmVyZ3lBcnJheSA9IFtdOyAvLyDmr4/kuKrngrnnmoTog73ph49cbiAgcHVibGljIG5XYXRlciA9IDIwOyAvLyDnu4bliIbmlbBcblxuICBvbkxvYWQoKSB7XG4gICAgLy8g6LWL5LqI5Yid5aeL5YC8XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5XYXRlcjsgaSsrKSB7XG4gICAgICB0aGlzLmVuZXJneUFycmF5W2ldID0gMDtcbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICAvLyDliJvlu7rmsLTpnaLkuIrngrlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubldhdGVyOyBpKyspIHtcbiAgICAgIGxldCBub2RlID0geyB4OiAwLCB5OiAwIH07XG4gICAgICBub2RlLnkgPSB0aGlzLmhXYXRlcjtcbiAgICAgIG5vZGUueCA9IC0zNjAgKyAoKGkgKyAxKSAqIDcyMCkgLyB0aGlzLm5XYXRlcjtcbiAgICAgIHRoaXMubm9kZUFycmF5W2ldID0gbm9kZTtcbiAgICB9XG5cbiAgICBjYy5sb2codGhpcy5ub2RlQXJyYXkpO1xuXG4gICAgLy8g5pyA5Y+z5L6n54K557yT5YqoXG4gICAgbGV0IG9iaiA9IHRoaXMubm9kZUFycmF5W3RoaXMubldhdGVyIC0gMV07XG4gICAgbGV0IHRpbWUgPSAwLjU7XG4gICAgY2MudHdlZW4ob2JqKVxuICAgICAgLnJlcGVhdEZvcmV2ZXIoXG4gICAgICAgIGNjXG4gICAgICAgICAgLnR3ZWVuKClcbiAgICAgICAgICAudG8odGltZSwgeyB5OiA0MCArIHRoaXMuaFdhdGVyIH0sIHsgZWFzaW5nOiBcInNpbmVPdXRcIiB9KVxuICAgICAgICAgIC50byh0aW1lLCB7IHk6IDAgKyB0aGlzLmhXYXRlciB9LCB7IGVhc2luZzogXCJzaW5lSW5cIiB9KVxuICAgICAgICAgIC50byh0aW1lLCB7IHk6IC00MCArIHRoaXMuaFdhdGVyIH0sIHsgZWFzaW5nOiBcInNpbmVPdXRcIiB9KVxuICAgICAgICAgIC50byh0aW1lLCB7IHk6IDAgKyB0aGlzLmhXYXRlciB9LCB7IGVhc2luZzogXCJzaW5lSW5cIiB9KVxuICAgICAgKVxuICAgICAgLnN0YXJ0KCk7XG4gIH1cblxuICAvLyDliKnnlKjpga7nvanljp/nkIbvvIzmiorkuIvmlrnmmL7npLpcbiAgcHJpdmF0ZSBzaG93V2F0ZXIoKSB7XG4gICAgLy8gY2MubG9nKHRoaXMubWFza05vZGUpXG4gICBcbiAgICBsZXQgZHJhdyA9ICg8YW55PnRoaXMubWFza05vZGUpLl9ncmFwaGljcztcbiAgICAvLyBsZXQgZHJhdyA9IHRoaXMubWFza05vZGUuX2dyYXBoaWNzO1xuICAgIC8vIGNjLmxvZyhkcmF3KVxuICAgIGRyYXcuY2xlYXIoKTtcbiAgICBkcmF3LmxpbmVXaWR0aCA9IDE7XG4gICAgZHJhdy5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDI1NSwgMCwgMCk7XG4gICAgZHJhdy5maWxsQ29sb3IgPSBjYy5jb2xvcigwLCAyNTUsIDApO1xuICAgIGRyYXcubW92ZVRvKC0zNjAsIHRoaXMuaFdhdGVyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubldhdGVyOyBpICs9IDIpIHtcbiAgICAgIC8vIOi0neWhnuWwlFxuICAgICAgZHJhdy5xdWFkcmF0aWNDdXJ2ZVRvKFxuICAgICAgICB0aGlzLm5vZGVBcnJheVtpXS54LFxuICAgICAgICB0aGlzLm5vZGVBcnJheVtpXS55LFxuICAgICAgICB0aGlzLm5vZGVBcnJheVtpICsgMV0ueCxcbiAgICAgICAgdGhpcy5ub2RlQXJyYXlbaSArIDFdLnlcbiAgICAgICk7XG4gICAgfVxuICAgIC8vIOWwgemXreWMuuWfn1xuICAgIGRyYXcubGluZVRvKDM2MCwgLTY0MCk7XG4gICAgZHJhdy5saW5lVG8oLTM2MCwgLTY0MCk7XG4gICAgZHJhdy5saW5lVG8oLTM2MCwgdGhpcy5oV2F0ZXIpO1xuICAgIGRyYXcuZmlsbCgpO1xuICAgIGRyYXcuc3Ryb2tlKCk7XG4gIH1cblxuICB1cGRhdGUgKGR0KSB7XG4gICAgLy8gcmV0dXJuO1xuICAgICAgIC8vIOW3puWPs+eCueS6kuebuOW9seWTjSAyIOasoSwg5Yaz5a6a5rOi55qE5Lyg5pKt5b+r5oWiXG4gICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAyOyBrKyspIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5XYXRlcjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyAwLjAyIOeahOS8oOaSreaNn+WksVxuICAgICAgICAgICAgICAgIC8vIOWQkeW3puS8oFxuICAgICAgICAgICAgICAgIHRoaXMuZW5lcmd5QXJyYXlbaS0xXSArPSAwLjk4ICogKHRoaXMubm9kZUFycmF5W2ldLnkgLSB0aGlzLm5vZGVBcnJheVtpLTFdLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGkgPCB0aGlzLm5XYXRlciAtIDEpIHtcbiAgICAgICAgICAgICAgICAvLyDlkJHlj7PkvKBcbiAgICAgICAgICAgICAgICB0aGlzLmVuZXJneUFycmF5W2krMV0gKz0gMC45OCAqICh0aGlzLm5vZGVBcnJheVtpXS55IC0gdGhpcy5ub2RlQXJyYXlbaSsxXS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gIFxuICAgIC8vIOacgOWPs+S+p+eahOi3s+i/h1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uV2F0ZXIgLSAxOyBpKyspIHtcbiAgICAgICAgLy8gMC4wMiDpgJ/luqbmjZ/lpLFcbiAgICAgICAgdGhpcy5lbmVyZ3lBcnJheVtpXSAqPSAwLjk4O1xuICAgICAgICAvLyDmlLnlj5jkvY3nva5cbiAgICAgICAgdGhpcy5ub2RlQXJyYXlbaV0ueSArPSB0aGlzLmVuZXJneUFycmF5W2ldICogZHQ7XG4gICAgfVxuICAgIHRoaXMuc2hvd1dhdGVyKCk7XG4gIH1cbn1cbiJdfQ==
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

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/BrightSaturaContrastTest/BrightSaturaContrastUniform/BrightSaturaContrastUniform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'BrightSaturaContrastUniform');
// shaderScene/BrightSaturaContrastTest/BrightSaturaContrastUniform/BrightSaturaContrastUniform.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent;
var BrightSaturaContrastUniform = /** @class */ (function (_super) {
    __extends(BrightSaturaContrastUniform, _super);
    function BrightSaturaContrastUniform() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._sprite = null;
        _this._brightness = 1.0;
        _this._saturation = 1.0;
        _this._constrast = 1.0;
        return _this;
    }
    Object.defineProperty(BrightSaturaContrastUniform.prototype, "brightness", {
        get: function () {
            return this._brightness;
        },
        set: function (b) {
            this._brightness = b;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BrightSaturaContrastUniform.prototype, "saturation", {
        get: function () {
            return this._saturation;
        },
        set: function (b) {
            this._saturation = b;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BrightSaturaContrastUniform.prototype, "constrast", {
        get: function () {
            return this._constrast;
        },
        set: function (b) {
            this._constrast = b;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    BrightSaturaContrastUniform.prototype.onEnable = function () {
        if (!this._sprite) {
            this._sprite = this.getComponent(cc.Sprite);
        }
        this.updateProperties();
    };
    BrightSaturaContrastUniform.prototype.updateProperties = function () {
        if (!this._sprite)
            return;
        this._sprite.getMaterial(0).setProperty('brightness', this._brightness);
        this._sprite.getMaterial(0).setProperty('saturation', this._saturation);
        this._sprite.getMaterial(0).setProperty('constrast', this._constrast);
    };
    __decorate([
        property
    ], BrightSaturaContrastUniform.prototype, "_brightness", void 0);
    __decorate([
        property({ type: cc.Float, range: [0, 3], slide: true })
    ], BrightSaturaContrastUniform.prototype, "brightness", null);
    __decorate([
        property
    ], BrightSaturaContrastUniform.prototype, "_saturation", void 0);
    __decorate([
        property({ type: cc.Float, range: [0, 3], slide: true })
    ], BrightSaturaContrastUniform.prototype, "saturation", null);
    __decorate([
        property
    ], BrightSaturaContrastUniform.prototype, "_constrast", void 0);
    __decorate([
        property({ type: cc.Float, range: [0, 3], slide: true })
    ], BrightSaturaContrastUniform.prototype, "constrast", null);
    BrightSaturaContrastUniform = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.Sprite)
    ], BrightSaturaContrastUniform);
    return BrightSaturaContrastUniform;
}(cc.Component));
exports.default = BrightSaturaContrastUniform;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9CcmlnaHRTYXR1cmFDb250cmFzdFRlc3QvQnJpZ2h0U2F0dXJhQ29udHJhc3RVbmlmb3JtL0JyaWdodFNhdHVyYUNvbnRyYXN0VW5pZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQTZELEVBQUUsQ0FBQyxVQUFVLEVBQXhFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLGdCQUFnQixzQkFBa0IsQ0FBQztBQUtqRjtJQUF5RCwrQ0FBWTtJQUFyRTtRQUFBLHFFQW1EQztRQWpERyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBVzFCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBVzFCLGdCQUFVLEdBQVcsR0FBRyxDQUFDOztJQXdCN0IsQ0FBQztJQTVDRyxzQkFBSSxtREFBVTthQUlkO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFORCxVQUFlLENBQUM7WUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQVFELHNCQUFJLG1EQUFVO2FBSWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQU5ELFVBQWUsQ0FBQztZQUNaLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBUUQsc0JBQUksa0RBQVM7YUFJYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBTkQsVUFBYyxDQUFDO1lBQ1gsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFNRCw4Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHNEQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQTdDRDtRQURDLFFBQVE7b0VBQ2lCO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztpRUFJeEQ7SUFNRDtRQURDLFFBQVE7b0VBQ2lCO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztpRUFJeEQ7SUFNRDtRQURDLFFBQVE7bUVBQ2dCO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztnRUFJeEQ7SUFoQ2dCLDJCQUEyQjtRQUgvQyxPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7T0FDUCwyQkFBMkIsQ0FtRC9DO0lBQUQsa0NBQUM7Q0FuREQsQUFtREMsQ0FuRHdELEVBQUUsQ0FBQyxTQUFTLEdBbURwRTtrQkFuRG9CLDJCQUEyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlLCByZXF1aXJlQ29tcG9uZW50IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5AcmVxdWlyZUNvbXBvbmVudChjYy5TcHJpdGUpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmlnaHRTYXR1cmFDb250cmFzdFVuaWZvcm0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgX3Nwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIF9icmlnaHRuZXNzOiBudW1iZXIgPSAxLjA7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRmxvYXQsIHJhbmdlOiBbMCwgM10sIHNsaWRlOiB0cnVlIH0pXG4gICAgc2V0IGJyaWdodG5lc3MoYikge1xuICAgICAgICB0aGlzLl9icmlnaHRuZXNzID0gYjtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzKCk7XG4gICAgfVxuICAgIGdldCBicmlnaHRuZXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnJpZ2h0bmVzcztcbiAgICB9XG5cbiAgICBAcHJvcGVydHlcbiAgICBfc2F0dXJhdGlvbjogbnVtYmVyID0gMS4wO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCByYW5nZTogWzAsIDNdLCBzbGlkZTogdHJ1ZSB9KVxuICAgIHNldCBzYXR1cmF0aW9uKGIpIHtcbiAgICAgICAgdGhpcy5fc2F0dXJhdGlvbiA9IGI7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllcygpO1xuICAgIH1cbiAgICBnZXQgc2F0dXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NhdHVyYXRpb247XG4gICAgfVxuXG4gICAgQHByb3BlcnR5XG4gICAgX2NvbnN0cmFzdDogbnVtYmVyID0gMS4wO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCByYW5nZTogWzAsIDNdLCBzbGlkZTogdHJ1ZSB9KVxuICAgIHNldCBjb25zdHJhc3QoYikge1xuICAgICAgICB0aGlzLl9jb25zdHJhc3QgPSBiO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgICB9XG4gICAgZ2V0IGNvbnN0cmFzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnN0cmFzdDtcbiAgICB9XG5cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3Nwcml0ZSkge1xuICAgICAgICAgICAgdGhpcy5fc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9wZXJ0aWVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3Nwcml0ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9zcHJpdGUuZ2V0TWF0ZXJpYWwoMCkuc2V0UHJvcGVydHkoJ2JyaWdodG5lc3MnLCB0aGlzLl9icmlnaHRuZXNzKTtcbiAgICAgICAgdGhpcy5fc3ByaXRlLmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KCdzYXR1cmF0aW9uJywgdGhpcy5fc2F0dXJhdGlvbik7XG4gICAgICAgIHRoaXMuX3Nwcml0ZS5nZXRNYXRlcmlhbCgwKS5zZXRQcm9wZXJ0eSgnY29uc3RyYXN0JywgdGhpcy5fY29uc3RyYXN0KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/BrightSaturaContrastTest/BrightSaturaContrastTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4f05e15K9Bj72pJrMlUulO', 'BrightSaturaContrastTest');
// shaderScene/BrightSaturaContrastTest/BrightSaturaContrastTest.ts

"use strict";
// author: http://lamyoung.com/
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
var BrightSaturaContrastAssemblerSprite_1 = require("./BrightSaturaContrastAssembler/BrightSaturaContrastAssemblerSprite");
var BrightSaturaContrastUniform_1 = require("./BrightSaturaContrastUniform/BrightSaturaContrastUniform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrightSaturaContrastTest = /** @class */ (function (_super) {
    __extends(BrightSaturaContrastTest, _super);
    function BrightSaturaContrastTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bscAS = null;
        _this.bscU = null;
        return _this;
    }
    BrightSaturaContrastTest.prototype.sliderCallback = function (slider, customEventData) {
        var value = slider.progress * 3;
        switch (customEventData) {
            case 'b': {
                this.bscU.brightness = this.bscAS.brightness = value;
                break;
            }
            case 's': {
                this.bscU.saturation = this.bscAS.saturation = value;
                break;
            }
            case 'c': {
                this.bscU.constrast = this.bscAS.constrast = value;
                break;
            }
        }
    };
    __decorate([
        property(BrightSaturaContrastAssemblerSprite_1.default)
    ], BrightSaturaContrastTest.prototype, "bscAS", void 0);
    __decorate([
        property(BrightSaturaContrastUniform_1.default)
    ], BrightSaturaContrastTest.prototype, "bscU", void 0);
    BrightSaturaContrastTest = __decorate([
        ccclass
    ], BrightSaturaContrastTest);
    return BrightSaturaContrastTest;
}(cc.Component));
exports.default = BrightSaturaContrastTest;
/*
https://mp.weixin.qq.com/s/Ht0kIbaeBEds_wUeUlu8JQ

*/
// 欢迎关注微信公众号[白玉无冰]
/**
█████████████████████████████████████
█████████████████████████████████████
████ ▄▄▄▄▄ █▀█ █▄██▀▄ ▄▄██ ▄▄▄▄▄ ████
████ █   █ █▀▀▀█ ▀▄▀▀▀█▄▀█ █   █ ████
████ █▄▄▄█ █▀ █▀▀▀ ▀▄▄ ▄ █ █▄▄▄█ ████
████▄▄▄▄▄▄▄█▄▀ ▀▄█ ▀▄█▄▀ █▄▄▄▄▄▄▄████
████▄▄  ▄▀▄▄ ▄▀▄▀▀▄▄▄ █ █ ▀ ▀▄█▄▀████
████▀ ▄  █▄█▀█▄█▀█  ▀▄ █ ▀ ▄▄██▀█████
████ ▄▀▄▄▀▄ █▄▄█▄ ▀▄▀ ▀ ▀ ▀▀▀▄ █▀████
████▀ ██ ▀▄ ▄██ ▄█▀▄ ██▀ ▀ █▄█▄▀█████
████   ▄██▄▀ █▀▄▀▄▀▄▄▄▄ ▀█▀ ▀▀ █▀████
████ █▄ █ ▄ █▀ █▀▄█▄▄▄▄▀▄▄█▄▄▄▄▀█████
████▄█▄█▄█▄█▀ ▄█▄   ▀▄██ ▄▄▄ ▀   ████
████ ▄▄▄▄▄ █▄██ ▄█▀  ▄   █▄█  ▄▀█████
████ █   █ █ ▄█▄ ▀  ▀▀██ ▄▄▄▄ ▄▀ ████
████ █▄▄▄█ █ ▄▄▀ ▄█▄█▄█▄ ▀▄   ▄ █████
████▄▄▄▄▄▄▄█▄██▄▄██▄▄▄█████▄▄█▄██████
█████████████████████████████████████
█████████████████████████████████████
 */ 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9CcmlnaHRTYXR1cmFDb250cmFzdFRlc3QvQnJpZ2h0U2F0dXJhQ29udHJhc3RUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQiwySEFBc0g7QUFDdEgseUdBQW9HO0FBRTlGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNELDRDQUFZO0lBQWxFO1FBQUEscUVBeUJDO1FBdEJHLFdBQUssR0FBd0MsSUFBSSxDQUFDO1FBR2xELFVBQUksR0FBZ0MsSUFBSSxDQUFDOztJQW1CN0MsQ0FBQztJQWpCRyxpREFBYyxHQUFkLFVBQWUsTUFBaUIsRUFBRSxlQUF1QjtRQUNyRCxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQyxRQUFRLGVBQWUsRUFBRTtZQUNyQixLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDckQsTUFBTTthQUNUO1lBQ0QsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3JELE1BQU07YUFDVDtZQUNELEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUNuRCxNQUFNO2FBQ1Q7U0FDSjtJQUNMLENBQUM7SUFyQkQ7UUFEQyxRQUFRLENBQUMsNkNBQW1DLENBQUM7MkRBQ0k7SUFHbEQ7UUFEQyxRQUFRLENBQUMscUNBQTJCLENBQUM7MERBQ0c7SUFOeEIsd0JBQXdCO1FBRDVDLE9BQU87T0FDYSx3QkFBd0IsQ0F5QjVDO0lBQUQsK0JBQUM7Q0F6QkQsQUF5QkMsQ0F6QnFELEVBQUUsQ0FBQyxTQUFTLEdBeUJqRTtrQkF6Qm9CLHdCQUF3QjtBQTRCN0M7OztFQUdFO0FBRUYsa0JBQWtCO0FBRWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGF1dGhvcjogaHR0cDovL2xhbXlvdW5nLmNvbS9cblxuaW1wb3J0IEJyaWdodFNhdHVyYUNvbnRyYXN0QXNzZW1ibGVyU3ByaXRlIGZyb20gXCIuL0JyaWdodFNhdHVyYUNvbnRyYXN0QXNzZW1ibGVyL0JyaWdodFNhdHVyYUNvbnRyYXN0QXNzZW1ibGVyU3ByaXRlXCI7XG5pbXBvcnQgQnJpZ2h0U2F0dXJhQ29udHJhc3RVbmlmb3JtIGZyb20gXCIuL0JyaWdodFNhdHVyYUNvbnRyYXN0VW5pZm9ybS9CcmlnaHRTYXR1cmFDb250cmFzdFVuaWZvcm1cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyaWdodFNhdHVyYUNvbnRyYXN0VGVzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoQnJpZ2h0U2F0dXJhQ29udHJhc3RBc3NlbWJsZXJTcHJpdGUpXG4gICAgYnNjQVM6IEJyaWdodFNhdHVyYUNvbnRyYXN0QXNzZW1ibGVyU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShCcmlnaHRTYXR1cmFDb250cmFzdFVuaWZvcm0pXG4gICAgYnNjVTogQnJpZ2h0U2F0dXJhQ29udHJhc3RVbmlmb3JtID0gbnVsbDtcblxuICAgIHNsaWRlckNhbGxiYWNrKHNsaWRlcjogY2MuU2xpZGVyLCBjdXN0b21FdmVudERhdGE6IHN0cmluZykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHNsaWRlci5wcm9ncmVzcyAqIDM7XG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgICAgICBjYXNlICdiJzoge1xuICAgICAgICAgICAgICAgIHRoaXMuYnNjVS5icmlnaHRuZXNzID0gdGhpcy5ic2NBUy5icmlnaHRuZXNzID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdzJzoge1xuICAgICAgICAgICAgICAgIHRoaXMuYnNjVS5zYXR1cmF0aW9uID0gdGhpcy5ic2NBUy5zYXR1cmF0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdjJzoge1xuICAgICAgICAgICAgICAgIHRoaXMuYnNjVS5jb25zdHJhc3QgPSB0aGlzLmJzY0FTLmNvbnN0cmFzdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG5odHRwczovL21wLndlaXhpbi5xcS5jb20vcy9IdDBrSWJhZUJFZHNfd1VlVWx1OEpRXG5cbiovXG5cbi8vIOasoui/juWFs+azqOW+ruS/oeWFrOS8l+WPt1vnmb3njonml6DlhrBdXG5cbi8qKlxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXG7ilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcbuKWiOKWiOKWiOKWiCDiloTiloTiloTiloTiloQg4paI4paA4paIIOKWiOKWhOKWiOKWiOKWgOKWhCDiloTiloTilojilogg4paE4paE4paE4paE4paEIOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIIOKWiCAgIOKWiCDilojiloDiloDiloDilogg4paA4paE4paA4paA4paA4paI4paE4paA4paIIOKWiCAgIOKWiCDilojilojilojilohcbuKWiOKWiOKWiOKWiCDilojiloTiloTiloTilogg4paI4paAIOKWiOKWgOKWgOKWgCDiloDiloTiloQg4paEIOKWiCDilojiloTiloTiloTilogg4paI4paI4paI4paIXG7ilojilojilojilojiloTiloTiloTiloTiloTiloTiloTilojiloTiloAg4paA4paE4paIIOKWgOKWhOKWiOKWhOKWgCDilojiloTiloTiloTiloTiloTiloTiloTilojilojilojilohcbuKWiOKWiOKWiOKWiOKWhOKWhCAg4paE4paA4paE4paEIOKWhOKWgOKWhOKWgOKWgOKWhOKWhOKWhCDilogg4paIIOKWgCDiloDiloTilojiloTiloDilojilojilojilohcbuKWiOKWiOKWiOKWiOKWgCDiloQgIOKWiOKWhOKWiOKWgOKWiOKWhOKWiOKWgOKWiCAg4paA4paEIOKWiCDiloAg4paE4paE4paI4paI4paA4paI4paI4paI4paI4paIXG7ilojilojilojilogg4paE4paA4paE4paE4paA4paEIOKWiOKWhOKWhOKWiOKWhCDiloDiloTiloAg4paAIOKWgCDiloDiloDiloDiloQg4paI4paA4paI4paI4paI4paIXG7ilojilojilojilojiloAg4paI4paIIOKWgOKWhCDiloTilojilogg4paE4paI4paA4paEIOKWiOKWiOKWgCDiloAg4paI4paE4paI4paE4paA4paI4paI4paI4paI4paIXG7ilojilojilojiloggICDiloTilojilojiloTiloAg4paI4paA4paE4paA4paE4paA4paE4paE4paE4paEIOKWgOKWiOKWgCDiloDiloAg4paI4paA4paI4paI4paI4paIXG7ilojilojilojilogg4paI4paEIOKWiCDiloQg4paI4paAIOKWiOKWgOKWhOKWiOKWhOKWhOKWhOKWhOKWgOKWhOKWhOKWiOKWhOKWhOKWhOKWhOKWgOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paE4paI4paE4paI4paE4paI4paE4paI4paAIOKWhOKWiOKWhCAgIOKWgOKWhOKWiOKWiCDiloTiloTiloQg4paAICAg4paI4paI4paI4paIXG7ilojilojilojilogg4paE4paE4paE4paE4paEIOKWiOKWhOKWiOKWiCDiloTilojiloAgIOKWhCAgIOKWiOKWhOKWiCAg4paE4paA4paI4paI4paI4paI4paIXG7ilojilojilojilogg4paIICAg4paIIOKWiCDiloTilojiloQg4paAICDiloDiloDilojilogg4paE4paE4paE4paEIOKWhOKWgCDilojilojilojilohcbuKWiOKWiOKWiOKWiCDilojiloTiloTiloTilogg4paIIOKWhOKWhOKWgCDiloTilojiloTilojiloTilojiloQg4paA4paEICAg4paEIOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paE4paE4paE4paE4paE4paE4paE4paI4paE4paI4paI4paE4paE4paI4paI4paE4paE4paE4paI4paI4paI4paI4paI4paE4paE4paI4paE4paI4paI4paI4paI4paI4paIXG7ilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxuICovIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/BrightSaturaContrastTest/BrightSaturaContrastAssembler/BrightSaturaContrastAssemblerSprite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39f91tJ+rdD7a8sTJznw93F', 'BrightSaturaContrastAssemblerSprite');
// shaderScene/BrightSaturaContrastTest/BrightSaturaContrastAssembler/BrightSaturaContrastAssemblerSprite.ts

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
var BrightSaturaContrastAssembler_1 = require("./BrightSaturaContrastAssembler");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
var BrightSaturaContrastAssemblerSprite = /** @class */ (function (_super) {
    __extends(BrightSaturaContrastAssemblerSprite, _super);
    function BrightSaturaContrastAssemblerSprite() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._brightness = 1.0;
        _this._saturation = 1.0;
        _this._constrast = 1.0;
        return _this;
    }
    Object.defineProperty(BrightSaturaContrastAssemblerSprite.prototype, "brightness", {
        get: function () {
            return this._brightness;
        },
        set: function (v) {
            this._brightness = v;
            this.flushProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BrightSaturaContrastAssemblerSprite.prototype, "saturation", {
        get: function () {
            return this._saturation;
        },
        set: function (v) {
            this._saturation = v;
            this.flushProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BrightSaturaContrastAssemblerSprite.prototype, "constrast", {
        get: function () {
            return this._constrast;
        },
        set: function (v) {
            this._constrast = v;
            this.flushProperties();
        },
        enumerable: false,
        configurable: true
    });
    BrightSaturaContrastAssemblerSprite.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        this.flushProperties();
    };
    BrightSaturaContrastAssemblerSprite.prototype.flushProperties = function () {
        //@ts-ignore
        var assembler = this._assembler;
        if (!assembler)
            return;
        assembler.brightness = this.brightness;
        assembler.constrast = this.constrast;
        assembler.saturation = this.saturation;
        this.setVertsDirty();
    };
    // // 使用cc.Sprite默认逻辑
    BrightSaturaContrastAssemblerSprite.prototype._resetAssembler = function () {
        var assembler = this._assembler = new BrightSaturaContrastAssembler_1.default();
        this.flushProperties();
        assembler.init(this);
        this._updateColor();
    };
    __decorate([
        property
    ], BrightSaturaContrastAssemblerSprite.prototype, "_brightness", void 0);
    __decorate([
        property({ type: cc.Float, range: [0, 3], slide: true })
    ], BrightSaturaContrastAssemblerSprite.prototype, "brightness", null);
    __decorate([
        property
    ], BrightSaturaContrastAssemblerSprite.prototype, "_saturation", void 0);
    __decorate([
        property({ type: cc.Float, range: [0, 3], slide: true })
    ], BrightSaturaContrastAssemblerSprite.prototype, "saturation", null);
    __decorate([
        property
    ], BrightSaturaContrastAssemblerSprite.prototype, "_constrast", void 0);
    __decorate([
        property({ type: cc.Float, range: [0, 3], slide: true })
    ], BrightSaturaContrastAssemblerSprite.prototype, "constrast", null);
    BrightSaturaContrastAssemblerSprite = __decorate([
        ccclass,
        executeInEditMode
    ], BrightSaturaContrastAssemblerSprite);
    return BrightSaturaContrastAssemblerSprite;
}(cc.Sprite));
exports.default = BrightSaturaContrastAssemblerSprite;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9CcmlnaHRTYXR1cmFDb250cmFzdFRlc3QvQnJpZ2h0U2F0dXJhQ29udHJhc3RBc3NlbWJsZXIvQnJpZ2h0U2F0dXJhQ29udHJhc3RBc3NlbWJsZXJTcHJpdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsaUZBQTRFO0FBRXRFLElBQUEsS0FBMkMsRUFBRSxDQUFDLFVBQVUsRUFBdEQsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsaUJBQWlCLHVCQUFrQixDQUFDO0FBSS9EO0lBQWlFLHVEQUFTO0lBQTFFO1FBQUEscUVBMERDO1FBeERHLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBVzFCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBVzFCLGdCQUFVLEdBQVcsR0FBRyxDQUFDOztJQWtDN0IsQ0FBQztJQXRERyxzQkFBSSwyREFBVTthQUlkO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFORCxVQUFlLENBQUM7WUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFRRCxzQkFBSSwyREFBVTthQUlkO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFORCxVQUFlLENBQUM7WUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFRRCxzQkFBSSwwREFBUzthQUliO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFORCxVQUFjLENBQUM7WUFDWCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFLRCxzREFBUSxHQUFSO1FBQ0ksaUJBQU0sUUFBUSxXQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSw2REFBZSxHQUF0QjtRQUNJLFlBQVk7UUFDWixJQUFJLFNBQVMsR0FBa0MsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUztZQUNWLE9BQU87UUFFWCxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDdkMsU0FBUyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3JDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHFCQUFxQjtJQUNyQiw2REFBZSxHQUFmO1FBQ0ksSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHVDQUE2QixFQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUF2REQ7UUFEQyxRQUFROzRFQUNpQjtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7eUVBSXhEO0lBTUQ7UUFEQyxRQUFROzRFQUNpQjtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7eUVBSXhEO0lBTUQ7UUFEQyxRQUFROzJFQUNnQjtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7d0VBSXhEO0lBN0JnQixtQ0FBbUM7UUFGdkQsT0FBTztRQUNQLGlCQUFpQjtPQUNHLG1DQUFtQyxDQTBEdkQ7SUFBRCwwQ0FBQztDQTFERCxBQTBEQyxDQTFEZ0UsRUFBRSxDQUFDLE1BQU0sR0EwRHpFO2tCQTFEb0IsbUNBQW1DIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgQnJpZ2h0U2F0dXJhQ29udHJhc3RBc3NlbWJsZXIgZnJvbSBcIi4vQnJpZ2h0U2F0dXJhQ29udHJhc3RBc3NlbWJsZXJcIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgZXhlY3V0ZUluRWRpdE1vZGUgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5AZXhlY3V0ZUluRWRpdE1vZGVcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyaWdodFNhdHVyYUNvbnRyYXN0QXNzZW1ibGVyU3ByaXRlIGV4dGVuZHMgY2MuU3ByaXRlIHtcbiAgICBAcHJvcGVydHlcbiAgICBfYnJpZ2h0bmVzczogbnVtYmVyID0gMS4wO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCByYW5nZTogWzAsIDNdLCBzbGlkZTogdHJ1ZSB9KVxuICAgIHNldCBicmlnaHRuZXNzKHYpIHtcbiAgICAgICAgdGhpcy5fYnJpZ2h0bmVzcyA9IHY7XG4gICAgICAgIHRoaXMuZmx1c2hQcm9wZXJ0aWVzKCk7XG4gICAgfVxuICAgIGdldCBicmlnaHRuZXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnJpZ2h0bmVzcztcbiAgICB9XG5cbiAgICBAcHJvcGVydHlcbiAgICBfc2F0dXJhdGlvbjogbnVtYmVyID0gMS4wO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCByYW5nZTogWzAsIDNdLCBzbGlkZTogdHJ1ZSB9KVxuICAgIHNldCBzYXR1cmF0aW9uKHYpIHtcbiAgICAgICAgdGhpcy5fc2F0dXJhdGlvbiA9IHY7XG4gICAgICAgIHRoaXMuZmx1c2hQcm9wZXJ0aWVzKCk7XG4gICAgfVxuICAgIGdldCBzYXR1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2F0dXJhdGlvbjtcbiAgICB9XG5cbiAgICBAcHJvcGVydHlcbiAgICBfY29uc3RyYXN0OiBudW1iZXIgPSAxLjA7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRmxvYXQsIHJhbmdlOiBbMCwgM10sIHNsaWRlOiB0cnVlIH0pXG4gICAgc2V0IGNvbnN0cmFzdCh2KSB7XG4gICAgICAgIHRoaXMuX2NvbnN0cmFzdCA9IHY7XG4gICAgICAgIHRoaXMuZmx1c2hQcm9wZXJ0aWVzKCk7XG4gICAgfVxuICAgIGdldCBjb25zdHJhc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25zdHJhc3Q7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgc3VwZXIub25FbmFibGUoKTtcbiAgICAgICAgdGhpcy5mbHVzaFByb3BlcnRpZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmx1c2hQcm9wZXJ0aWVzKCkge1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgbGV0IGFzc2VtYmxlcjogQnJpZ2h0U2F0dXJhQ29udHJhc3RBc3NlbWJsZXIgPSB0aGlzLl9hc3NlbWJsZXI7XG4gICAgICAgIGlmICghYXNzZW1ibGVyKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGFzc2VtYmxlci5icmlnaHRuZXNzID0gdGhpcy5icmlnaHRuZXNzO1xuICAgICAgICBhc3NlbWJsZXIuY29uc3RyYXN0ID0gdGhpcy5jb25zdHJhc3Q7XG4gICAgICAgIGFzc2VtYmxlci5zYXR1cmF0aW9uID0gdGhpcy5zYXR1cmF0aW9uO1xuICAgICAgICB0aGlzLnNldFZlcnRzRGlydHkoKTtcbiAgICB9XG5cbiAgICAvLyAvLyDkvb/nlKhjYy5TcHJpdGXpu5jorqTpgLvovpFcbiAgICBfcmVzZXRBc3NlbWJsZXIoKSB7XG4gICAgICAgIGxldCBhc3NlbWJsZXIgPSB0aGlzLl9hc3NlbWJsZXIgPSBuZXcgQnJpZ2h0U2F0dXJhQ29udHJhc3RBc3NlbWJsZXIoKTtcbiAgICAgICAgdGhpcy5mbHVzaFByb3BlcnRpZXMoKTtcbiAgICAgICAgYXNzZW1ibGVyLmluaXQodGhpcyk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbG9yKCk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------
