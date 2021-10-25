
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
// demo03/LiquidBox2dTest.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9kZW1vMDMvTGlxdWlkQm94MmRUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtCQUErQjtBQUN6QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxvREFBb0Q7QUFDcEQsSUFBSSxjQUFjLENBQUM7QUFDbkIsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFDOUMsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBRXJCLElBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUd0QjtJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQTJKQztRQXZKRyxrQkFBWSxHQUFvQixJQUFJLENBQUM7UUFHckMsaUJBQVcsR0FBbUIsSUFBSSxDQUFDOztJQW9KdkMsQ0FBQztJQWxKRyxnQ0FBTSxHQUFOO1FBQ0ksSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbkMsSUFBSSxXQUFXLEVBQUU7WUFDYixJQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDMUMsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRTtnQkFDakMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzVEO1NBQ0o7SUFDTCxDQUFD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RCxtQ0FBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwQixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDL0MsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QyxjQUFjLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUF0SkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQzt5REFDVztJQUdyQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3dEQUNVO0lBUGxCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0EySm5DO0lBQUQsc0JBQUM7Q0EzSkQsQUEySkMsQ0EzSjRDLEVBQUUsQ0FBQyxTQUFTLEdBMkp4RDtrQkEzSm9CLGVBQWU7QUFnS3BDOzs7RUFHRTtBQUVGLGtCQUFrQjtBQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGF1dGhvcjogaHR0cDovL2xhbXlvdW5nLmNvbS9cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbi8vIGh0dHBzOi8vbXAud2VpeGluLnFxLmNvbS9zL1QteGtna0xvbllxQV80eXFQSVlMU2dcbmxldCBwYXJ0aWNsZVN5c3RlbTtcbmNvbnN0IFBUTV9SQVRJTyA9IGNjLlBoeXNpY3NNYW5hZ2VyLlBUTV9SQVRJTztcbmNvbnN0IFBTRF9SQURJVVMgPSAyO1xuXG5jb25zdCBnZnggPSBjY1snZ2Z4J107XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXF1aWRCb3gyZFRlc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG5cbiAgICBAcHJvcGVydHkoY2MuTWVzaFJlbmRlcmVyKVxuICAgIG1lc2hSZW5kZXJlcjogY2MuTWVzaFJlbmRlcmVyID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGVGcmFtZSlcbiAgICBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjb25zdCBwaHlNZ3IgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpO1xuICAgICAgICBwaHlNZ3IuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHBoeU1nci5kZWJ1Z0RyYXdGbGFncyA9IDc7XG5cbiAgICAgICAgbGV0IHNwcml0ZUZyYW1lID0gdGhpcy5zcHJpdGVGcmFtZTtcbiAgICAgICAgaWYgKHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICBsZXQgbmV3VGV4dHVyZSA9IHNwcml0ZUZyYW1lLmdldFRleHR1cmUoKTtcbiAgICAgICAgICAgIGlmIChuZXdUZXh0dXJlICYmIG5ld1RleHR1cmUubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblNwcml0ZUZyYW1lTG9hZGVkKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lLm9uY2UoJ2xvYWQnLCB0aGlzLm9uU3ByaXRlRnJhbWVMb2FkZWQsIHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvblNwcml0ZUZyYW1lTG9hZGVkKCkge1xuICAgICAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5zcHJpdGVGcmFtZS5nZXRUZXh0dXJlKCk7XG4gICAgICAgIHRoaXMubWVzaFJlbmRlcmVyLm5vZGUud2lkdGggPSB0ZXh0dXJlLndpZHRoO1xuICAgICAgICB0aGlzLm1lc2hSZW5kZXJlci5ub2RlLmhlaWdodCA9IHRleHR1cmUuaGVpZ2h0O1xuXG5cbiAgICAgICAgY29uc3QgcGh5TWdyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcbiAgICAgICAgY29uc3Qgd29ybGQgPSBwaHlNZ3JbJ193b3JsZCddO1xuICAgICAgICBjb25zdCBwc2QgPSBuZXcgYjIuUGFydGljbGVTeXN0ZW1EZWYoKTtcbiAgICAgICAgcHNkLnJhZGl1cyA9IFBTRF9SQURJVVMgLyBQVE1fUkFUSU87IC8v5q+P5Liq57KS5a2Q55qE5Y2K5b6EXG4gICAgICAgIC8vIHBzZC5kYW1waW5nU3RyZW5ndGggPSAwLjI7Ly/pmLvlsLxcbiAgICAgICAgcHNkLmVsYXN0aWNTdHJlbmd0aCA9IDAuNTtcbiAgICAgICAgcGFydGljbGVTeXN0ZW0gPSB3b3JsZC5DcmVhdGVQYXJ0aWNsZVN5c3RlbShwc2QpO1xuICAgICAgICAvLyBwYXJ0aWNsZVN5c3RlbS5TZXRHcmF2aXR5U2NhbGUoMC40KTsvL+mHjeWKm+avlOS+i1xuICAgICAgICAvLyBwYXJ0aWNsZVN5c3RlbS5TZXREZW5zaXR5KDEpOy8v57KS5a2Q55qE5a+G5bqmXG5cblxuICAgICAgICAvLyBjYy5sb2coJ3RoaXJkIGdyb3VwJyk7XG4gICAgICAgIC8vIHRoaXJkIGdyb3VwXG4gICAgICAgIGNvbnN0IGJveCA9IG5ldyBiMi5Qb2x5Z29uU2hhcGUoKTtcbiAgICAgICAgY29uc3QgcGdkID0gbmV3IGIyLlBhcnRpY2xlR3JvdXBEZWYoKTtcbiAgICAgICAgYm94LlNldEFzQm94KHRoaXMubWVzaFJlbmRlcmVyLm5vZGUud2lkdGggLyAyIC8gUFRNX1JBVElPLCB0aGlzLm1lc2hSZW5kZXJlci5ub2RlLmhlaWdodCAvIDIgLyBQVE1fUkFUSU8pO1xuICAgICAgICBwZ2QuZmxhZ3MgPSBiMi5QYXJ0aWNsZUZsYWcuYjJfZWxhc3RpY1BhcnRpY2xlO1xuICAgICAgICBwZ2QuZ3JvdXBGbGFncyA9IGIyLlBhcnRpY2xlR3JvdXBGbGFnLmIyX3NvbGlkUGFydGljbGVHcm91cDtcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5tZXNoUmVuZGVyZXIubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MuVmVjMi5aRVJPKS5kaXZTZWxmKFBUTV9SQVRJTyk7XG4gICAgICAgIHBnZC5wb3NpdGlvbi5TZXQocG9zLngsIHBvcy55KTtcbiAgICAgICAgLy8gcGdkLmFuZ2xlID0gLTAuNTtcbiAgICAgICAgcGdkLmFuZ3VsYXJWZWxvY2l0eSA9IE1hdGgucmFuZG9tKCkgLSAwLjU7XG4gICAgICAgIHBnZC5zaGFwZSA9IGJveDtcbiAgICAgICAgLy8gcGdkLmNvbG9yLlNldCgwLCAwLCAyNTUsIDI1NSk7XG4gICAgICAgIGNvbnN0IHBhcnRpY2xlR3JvdXAgPSBwYXJ0aWNsZVN5c3RlbS5DcmVhdGVQYXJ0aWNsZUdyb3VwKHBnZCk7XG5cblxuICAgICAgICAvLyBjYy5sb2coJ3RoaXJkIHBnZCcsIHBnZCk7XG4gICAgICAgIC8vIGNjLmxvZygndGhpcmQgcGFydGljbGVHcm91cCcsIHBhcnRpY2xlR3JvdXApO1xuXG4gICAgICAgIGxldCBwYXJ0aWNsZUNvdW50ID0gcGFydGljbGVTeXN0ZW0uR2V0UGFydGljbGVDb3VudCgpO1xuICAgICAgICAvLyBjYy5sb2coJ3BhcnRpY2xlQ291bnQnLCBwYXJ0aWNsZUNvdW50KTtcbiAgICAgICAgbGV0IHBvc0J1ZmYgPSBwYXJ0aWNsZVN5c3RlbS5HZXRQb3NpdGlvbkJ1ZmZlcigpO1xuICAgICAgICAvLyBjYy5sb2coJ3Bvc0J1ZmYnLCBwb3NCdWZmKTtcbiAgICAgICAgLy8gY2MubG9nKCdwYXJ0aWNsZVN5c3RlbScsIHBhcnRpY2xlU3lzdGVtKTtcblxuICAgICAgICBjb25zdCBtZXNoID0gbmV3IGNjLk1lc2goKTtcbiAgICAgICAgbWVzaC5pbml0KG5ldyBnZnguVmVydGV4Rm9ybWF0KFtcbiAgICAgICAgICAgIHsgbmFtZTogZ2Z4LkFUVFJfUE9TSVRJT04sIHR5cGU6IGdmeC5BVFRSX1RZUEVfRkxPQVQzMiwgbnVtOiAyIH0sXG4gICAgICAgICAgICB7IG5hbWU6IGdmeC5BVFRSX1VWMCwgdHlwZTogZ2Z4LkFUVFJfVFlQRV9GTE9BVDMyLCBudW06IDIgfSxcbiAgICAgICAgXSksIHBhcnRpY2xlQ291bnQsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gdGhpcy5tZXNoUmVuZGVyZXIuZ2V0TWF0ZXJpYWwoMCk7XG4gICAgICAgIGNvbnN0IHV2ID0gdGhpcy5zcHJpdGVGcmFtZS51djtcbiAgICAgICAgLyoqXG4gICAgICAgICAqICAgIHRcbiAgICAgICAgICogbCAgICAgclxuICAgICAgICAgKiAgICBiXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB1dl9sID0gdXZbMF07XG4gICAgICAgIGNvbnN0IHV2X3IgPSB1dls2XTtcbiAgICAgICAgY29uc3QgdXZfYiA9IHV2WzNdO1xuICAgICAgICBjb25zdCB1dl90ID0gdXZbNV07XG5cbiAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3RleHR1cmUnLCB0ZXh0dXJlKTtcbiAgICAgICAgbWF0ZXJpYWwuc2V0UHJvcGVydHkoJ3VfcG9pbnRTaXplJywgUFNEX1JBRElVUyAqIDIpO1xuXG4gICAgICAgIGNvbnN0IHZlcnRleGVzID0gW107XG4gICAgICAgIGNvbnN0IGlkcyA9IFtdO1xuICAgICAgICBjb25zdCB1dnMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRpY2xlQ291bnQ7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgeCA9IHBvc0J1ZmZbaV0ueCAqIFBUTV9SQVRJTztcbiAgICAgICAgICAgIGNvbnN0IHkgPSBwb3NCdWZmW2ldLnkgKiBQVE1fUkFUSU87XG4gICAgICAgICAgICBjb25zdCBwdCA9IHRoaXMubWVzaFJlbmRlcmVyLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoeCwgeSkpO1xuICAgICAgICAgICAgdmVydGV4ZXMucHVzaChwdCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHUgPSB0aGlzLl9sZXJwKHV2X2wsIHV2X3IsIChwdC54ICsgdGV4dHVyZS53aWR0aCAvIDIpIC8gdGV4dHVyZS53aWR0aCk7XG4gICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5fbGVycCh1dl9iLCB1dl90LCAocHQueSArIHRleHR1cmUuaGVpZ2h0IC8gMikgLyB0ZXh0dXJlLmhlaWdodCk7XG4gICAgICAgICAgICB1dnMucHVzaChjYy52Mih1LCB2KSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGluZGV4T2Zmc2V0ID0gaTtcbiAgICAgICAgICAgIGlkcy5wdXNoKGluZGV4T2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBtZXNoLnNldFZlcnRpY2VzKGdmeC5BVFRSX1BPU0lUSU9OLCB2ZXJ0ZXhlcyk7XG4gICAgICAgIG1lc2guc2V0VmVydGljZXMoZ2Z4LkFUVFJfVVYwLCB1dnMpO1xuICAgICAgICBtZXNoLnNldFByaW1pdGl2ZVR5cGUoZ2Z4LlBUX1BPSU5UUywgMCk7XG4gICAgICAgIG1lc2guc2V0SW5kaWNlcyhpZHMpO1xuXG4gICAgICAgIHRoaXMubWVzaFJlbmRlcmVyLm1lc2ggPSBtZXNoO1xuXG5cbiAgICAgICAgY2MubG9nKCd0aGlzLm1lc2hSZW5kZXJlcicsIHRoaXMubWVzaFJlbmRlcmVyKTtcbiAgICAgICAgY2MubG9nKCd2ZXJ0ZXhlcycsIHZlcnRleGVzKTtcbiAgICAgICAgY2MubG9nKCd1dnMnLCB1dnMpO1xuICAgICAgICBjYy5sb2coJ2lkcycsIGlkcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIF9sZXJwKGE6IG51bWJlciwgYjogbnVtYmVyLCB3OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGEgKyB3ICogKGIgLSBhKTtcbiAgICB9XG5cbiAgICBsYXRlVXBkYXRlKCkge1xuICAgICAgICBpZiAoIXBhcnRpY2xlU3lzdGVtKSByZXR1cm47XG4gICAgICAgIGxldCBwYXJ0aWNsZUNvdW50ID0gcGFydGljbGVTeXN0ZW0uR2V0UGFydGljbGVDb3VudCgpO1xuICAgICAgICBsZXQgcG9zQnVmZiA9IHBhcnRpY2xlU3lzdGVtLkdldFBvc2l0aW9uQnVmZmVyKCk7XG5cbiAgICAgICAgY29uc3QgdmVydGV4ZXMgPSBbXTtcblxuICAgICAgICAvLyB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydGljbGVDb3VudDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gcG9zQnVmZltpXS54ICogUFRNX1JBVElPO1xuICAgICAgICAgICAgY29uc3QgeSA9IHBvc0J1ZmZbaV0ueSAqIFBUTV9SQVRJTztcbiAgICAgICAgICAgIGNvbnN0IHB0ID0gdGhpcy5tZXNoUmVuZGVyZXIubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52Mih4LCB5KSk7XG4gICAgICAgICAgICB2ZXJ0ZXhlcy5wdXNoKHB0KTtcbiAgICAgICAgICAgIC8vIHZlcnRleGVzLnB1c2goY2MudjIoeCwgeSkpO1xuICAgICAgICAgICAgLy8gY29uc3QgcDIgPSB0aGlzLmdyYXBoaWNzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKHgsIHkpKVxuICAgICAgICAgICAgLy8gdGhpcy5ncmFwaGljcy5jaXJjbGUocDIueCwgcDIueSwgUFNEX1JBRElVUyk7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1lc2hSZW5kZXJlci5tZXNoLnNldFZlcnRpY2VzKGdmeC5BVFRSX1BPU0lUSU9OLCB2ZXJ0ZXhlcyk7XG4gICAgICAgIHRoaXMubWVzaFJlbmRlcmVyLm1hcmtGb3JSZW5kZXIodHJ1ZSk7XG4gICAgICAgIC8vIHRoaXMuZ3JhcGhpY3MuZmlsbCgpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgY2MubG9nKCdvbkRlc3Ryb3knKTtcbiAgICAgICAgY29uc3QgcGh5TWdyID0gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKTtcbiAgICAgICAgY29uc3Qgd29ybGQgPSBwaHlNZ3JbJ193b3JsZCddO1xuICAgICAgICB3b3JsZC5EZXN0cm95UGFydGljbGVTeXN0ZW0ocGFydGljbGVTeXN0ZW0pO1xuICAgICAgICBwYXJ0aWNsZVN5c3RlbSA9IG51bGw7XG4gICAgfVxufVxuXG5cblxuXG4vKlxuaHR0cHM6Ly9tcC53ZWl4aW4ucXEuY29tL3MvSHQwa0liYWVCRWRzX3dVZVVsdThKUVxuXG4qL1xuXG4vLyDmrKLov47lhbPms6jlvq7kv6HlhazkvJflj7db55m9546J5peg5YawXVxuXG4vKipcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXG7ilojilojilojilogg4paE4paE4paE4paE4paEIOKWiOKWgOKWiCDilojiloTilojilojiloDiloQg4paE4paE4paI4paIIOKWhOKWhOKWhOKWhOKWhCDilojilojilojilohcbuKWiOKWiOKWiOKWiCDiloggICDilogg4paI4paA4paA4paA4paIIOKWgOKWhOKWgOKWgOKWgOKWiOKWhOKWgOKWiCDiloggICDilogg4paI4paI4paI4paIXG7ilojilojilojilogg4paI4paE4paE4paE4paIIOKWiOKWgCDilojiloDiloDiloAg4paA4paE4paEIOKWhCDilogg4paI4paE4paE4paE4paIIOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paE4paE4paE4paE4paE4paE4paE4paI4paE4paAIOKWgOKWhOKWiCDiloDiloTilojiloTiloAg4paI4paE4paE4paE4paE4paE4paE4paE4paI4paI4paI4paIXG7ilojilojilojilojiloTiloQgIOKWhOKWgOKWhOKWhCDiloTiloDiloTiloDiloDiloTiloTiloQg4paIIOKWiCDiloAg4paA4paE4paI4paE4paA4paI4paI4paI4paIXG7ilojilojilojilojiloAg4paEICDilojiloTilojiloDilojiloTilojiloDiloggIOKWgOKWhCDilogg4paAIOKWhOKWhOKWiOKWiOKWgOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIIOKWhOKWgOKWhOKWhOKWgOKWhCDilojiloTiloTilojiloQg4paA4paE4paAIOKWgCDiloAg4paA4paA4paA4paEIOKWiOKWgOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paAIOKWiOKWiCDiloDiloQg4paE4paI4paIIOKWhOKWiOKWgOKWhCDilojilojiloAg4paAIOKWiOKWhOKWiOKWhOKWgOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIICAg4paE4paI4paI4paE4paAIOKWiOKWgOKWhOKWgOKWhOKWgOKWhOKWhOKWhOKWhCDiloDilojiloAg4paA4paAIOKWiOKWgOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIIOKWiOKWhCDilogg4paEIOKWiOKWgCDilojiloDiloTilojiloTiloTiloTiloTiloDiloTiloTilojiloTiloTiloTiloTiloDilojilojilojilojilohcbuKWiOKWiOKWiOKWiOKWhOKWiOKWhOKWiOKWhOKWiOKWhOKWiOKWgCDiloTilojiloQgICDiloDiloTilojilogg4paE4paE4paEIOKWgCAgIOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIIOKWhOKWhOKWhOKWhOKWhCDilojiloTilojilogg4paE4paI4paAICDiloQgICDilojiloTiloggIOKWhOKWgOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIIOKWiCAgIOKWiCDilogg4paE4paI4paEIOKWgCAg4paA4paA4paI4paIIOKWhOKWhOKWhOKWhCDiloTiloAg4paI4paI4paI4paIXG7ilojilojilojilogg4paI4paE4paE4paE4paIIOKWiCDiloTiloTiloAg4paE4paI4paE4paI4paE4paI4paEIOKWgOKWhCAgIOKWhCDilojilojilojilojilohcbuKWiOKWiOKWiOKWiOKWhOKWhOKWhOKWhOKWhOKWhOKWhOKWiOKWhOKWiOKWiOKWhOKWhOKWiOKWiOKWhOKWhOKWhOKWiOKWiOKWiOKWiOKWiOKWhOKWhOKWiOKWhOKWiOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXG7ilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcbiAqLyJdfQ==