
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