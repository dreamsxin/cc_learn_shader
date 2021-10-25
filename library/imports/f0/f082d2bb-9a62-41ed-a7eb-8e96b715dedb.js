"use strict";
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