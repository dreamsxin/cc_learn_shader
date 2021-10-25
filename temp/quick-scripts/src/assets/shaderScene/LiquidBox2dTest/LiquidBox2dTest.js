"use strict";
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