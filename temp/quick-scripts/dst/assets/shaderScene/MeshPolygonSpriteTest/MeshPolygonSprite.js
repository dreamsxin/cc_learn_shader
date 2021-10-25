
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