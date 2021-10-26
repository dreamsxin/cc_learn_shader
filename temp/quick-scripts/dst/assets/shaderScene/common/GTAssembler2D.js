
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