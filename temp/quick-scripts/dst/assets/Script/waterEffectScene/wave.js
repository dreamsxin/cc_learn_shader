
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/waterEffectScene/wave.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvd2F0ZXJFZmZlY3RTY2VuZS93YXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBaUdDO1FBOUZTLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsWUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU87UUFDckIsZUFBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVM7UUFDMUIsaUJBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO1FBQzNCLFlBQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNOztJQXlGNUIsQ0FBQztJQXZGQyxxQkFBTSxHQUFOO1FBQ0UsUUFBUTtRQUNSLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELG9CQUFLLEdBQUw7UUFDRSxTQUFTO1FBQ1QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztZQUMxQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFH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QUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDbkQ7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQTdGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNlO0lBSGQsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWlHeEI7SUFBRCxXQUFDO0NBakdELEFBaUdDLENBakdpQyxFQUFFLENBQUMsU0FBUyxHQWlHN0M7a0JBakdvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhdmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gIEBwcm9wZXJ0eShjYy5NYXNrKVxuICBwcml2YXRlIG1hc2tOb2RlOiBjYy5NYXNrID0gbnVsbDtcblxuICBwcml2YXRlIGhXYXRlciA9IDIwMDsgLy8g5rC06Z2i6auY5bqmXG4gIHByaXZhdGUgbm9kZUFycmF5ID0gW107IC8vIOijhei9veawtOmdoueahOeCuVxuICBwdWJsaWMgZW5lcmd5QXJyYXkgPSBbXTsgLy8g5q+P5Liq54K555qE6IO96YePXG4gIHB1YmxpYyBuV2F0ZXIgPSAyMDsgLy8g57uG5YiG5pWwXG5cbiAgb25Mb2FkKCkge1xuICAgIC8vIOi1i+S6iOWIneWni+WAvFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uV2F0ZXI7IGkrKykge1xuICAgICAgdGhpcy5lbmVyZ3lBcnJheVtpXSA9IDA7XG4gICAgfVxuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgLy8g5Yib5bu65rC06Z2i5LiK54K5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5XYXRlcjsgaSsrKSB7XG4gICAgICBsZXQgbm9kZSA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgbm9kZS55ID0gdGhpcy5oV2F0ZXI7XG4gICAgICBub2RlLnggPSAtMzYwICsgKChpICsgMSkgKiA3MjApIC8gdGhpcy5uV2F0ZXI7XG4gICAgICB0aGlzLm5vZGVBcnJheVtpXSA9IG5vZGU7XG4gICAgfVxuXG4gICAgY2MubG9nKHRoaXMubm9kZUFycmF5KTtcblxuICAgIC8vIOacgOWPs+S+p+eCuee8k+WKqFxuICAgIGxldCBvYmogPSB0aGlzLm5vZGVBcnJheVt0aGlzLm5XYXRlciAtIDFdO1xuICAgIGxldCB0aW1lID0gMC41O1xuICAgIGNjLnR3ZWVuKG9iailcbiAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICBjY1xuICAgICAgICAgIC50d2VlbigpXG4gICAgICAgICAgLnRvKHRpbWUsIHsgeTogNDAgKyB0aGlzLmhXYXRlciB9LCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSlcbiAgICAgICAgICAudG8odGltZSwgeyB5OiAwICsgdGhpcy5oV2F0ZXIgfSwgeyBlYXNpbmc6IFwic2luZUluXCIgfSlcbiAgICAgICAgICAudG8odGltZSwgeyB5OiAtNDAgKyB0aGlzLmhXYXRlciB9LCB7IGVhc2luZzogXCJzaW5lT3V0XCIgfSlcbiAgICAgICAgICAudG8odGltZSwgeyB5OiAwICsgdGhpcy5oV2F0ZXIgfSwgeyBlYXNpbmc6IFwic2luZUluXCIgfSlcbiAgICAgIClcbiAgICAgIC5zdGFydCgpO1xuICB9XG5cbiAgLy8g5Yip55So6YGu572p5Y6f55CG77yM5oqK5LiL5pa55pi+56S6XG4gIHByaXZhdGUgc2hvd1dhdGVyKCkge1xuICAgIC8vIGNjLmxvZyh0aGlzLm1hc2tOb2RlKVxuICAgXG4gICAgbGV0IGRyYXcgPSAoPGFueT50aGlzLm1hc2tOb2RlKS5fZ3JhcGhpY3M7XG4gICAgLy8gbGV0IGRyYXcgPSB0aGlzLm1hc2tOb2RlLl9ncmFwaGljcztcbiAgICAvLyBjYy5sb2coZHJhdylcbiAgICBkcmF3LmNsZWFyKCk7XG4gICAgZHJhdy5saW5lV2lkdGggPSAxO1xuICAgIGRyYXcuc3Ryb2tlQ29sb3IgPSBjYy5jb2xvcigyNTUsIDAsIDApO1xuICAgIGRyYXcuZmlsbENvbG9yID0gY2MuY29sb3IoMCwgMjU1LCAwKTtcbiAgICBkcmF3Lm1vdmVUbygtMzYwLCB0aGlzLmhXYXRlcik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5XYXRlcjsgaSArPSAyKSB7XG4gICAgICAvLyDotJ3loZ7lsJRcbiAgICAgIGRyYXcucXVhZHJhdGljQ3VydmVUbyhcbiAgICAgICAgdGhpcy5ub2RlQXJyYXlbaV0ueCxcbiAgICAgICAgdGhpcy5ub2RlQXJyYXlbaV0ueSxcbiAgICAgICAgdGhpcy5ub2RlQXJyYXlbaSArIDFdLngsXG4gICAgICAgIHRoaXMubm9kZUFycmF5W2kgKyAxXS55XG4gICAgICApO1xuICAgIH1cbiAgICAvLyDlsIHpl63ljLrln59cbiAgICBkcmF3LmxpbmVUbygzNjAsIC02NDApO1xuICAgIGRyYXcubGluZVRvKC0zNjAsIC02NDApO1xuICAgIGRyYXcubGluZVRvKC0zNjAsIHRoaXMuaFdhdGVyKTtcbiAgICBkcmF3LmZpbGwoKTtcbiAgICBkcmF3LnN0cm9rZSgpO1xuICB9XG5cbiAgdXBkYXRlIChkdCkge1xuICAgIC8vIHJldHVybjtcbiAgICAgICAvLyDlt6blj7PngrnkupLnm7jlvbHlk40gMiDmrKEsIOWGs+WumuazoueahOS8oOaSreW/q+aFolxuICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMjsgaysrKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5uV2F0ZXI7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gMC4wMiDnmoTkvKDmkq3mjZ/lpLFcbiAgICAgICAgICAgICAgICAvLyDlkJHlt6bkvKBcbiAgICAgICAgICAgICAgICB0aGlzLmVuZXJneUFycmF5W2ktMV0gKz0gMC45OCAqICh0aGlzLm5vZGVBcnJheVtpXS55IC0gdGhpcy5ub2RlQXJyYXlbaS0xXS55KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpIDwgdGhpcy5uV2F0ZXIgLSAxKSB7XG4gICAgICAgICAgICAgICAgLy8g5ZCR5Y+z5LygXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVyZ3lBcnJheVtpKzFdICs9IDAuOTggKiAodGhpcy5ub2RlQXJyYXlbaV0ueSAtIHRoaXMubm9kZUFycmF5W2krMV0ueSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICBcbiAgICAvLyDmnIDlj7PkvqfnmoTot7Pov4dcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubldhdGVyIC0gMTsgaSsrKSB7XG4gICAgICAgIC8vIDAuMDIg6YCf5bqm5o2f5aSxXG4gICAgICAgIHRoaXMuZW5lcmd5QXJyYXlbaV0gKj0gMC45ODtcbiAgICAgICAgLy8g5pS55Y+Y5L2N572uXG4gICAgICAgIHRoaXMubm9kZUFycmF5W2ldLnkgKz0gdGhpcy5lbmVyZ3lBcnJheVtpXSAqIGR0O1xuICAgIH1cbiAgICB0aGlzLnNob3dXYXRlcigpO1xuICB9XG59XG4iXX0=