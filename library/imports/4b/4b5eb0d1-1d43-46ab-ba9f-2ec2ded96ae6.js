"use strict";
cc._RF.push(module, '4b5ebDRHUNGq7qfLsLe2Wrm', 'wave');
// Script/waterEffectScene/wave.ts

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