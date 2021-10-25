
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
// common/GTSimpleSpriteAssembler2D.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb21tb24vR1RTaW1wbGVTcHJpdGVBc3NlbWJsZXIyRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQThDOzs7Ozs7Ozs7Ozs7Ozs7QUFFOUMsaURBQTRDO0FBRTVDO0lBQXVELDZDQUFhO0lBQXBFOztJQXNEQSxDQUFDO0lBckRHLGdDQUFnQztJQUNoQyxvREFBZ0IsR0FBaEIsVUFBaUIsTUFBaUI7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsaUJBQU0sZ0JBQWdCLFlBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDZDQUFTLEdBQVQsVUFBVSxNQUFNO1FBQ1osSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7UUFDaEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM3QixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLFNBQVMsR0FBRyxhQUFhLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztZQUM3QyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM1QztJQUNMLENBQUM7SUFFRCwrQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQ2xCLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxFQUNsRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZixJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDYixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDVixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDVixDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNkLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO2FBQ0k7WUFDRCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxFQUMxQixFQUFFLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUMvRCxFQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUMvQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFDdEIsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDdkMsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxHQUFHLFFBQVEsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzdCLENBQUMsR0FBRyxVQUFVLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztZQUMvQixDQUFDLEdBQUcsRUFBRSxHQUFHLFNBQVMsR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25DLENBQUMsR0FBRyxFQUFFLEdBQUcsT0FBTyxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEM7UUFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNiLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUNMLGdDQUFDO0FBQUQsQ0F0REEsQUFzREMsQ0F0RHNELHVCQUFhLEdBc0RuRSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jYW9ndGFhL0NDQmF0Y2hpbmdUcmlja3NcblxuaW1wb3J0IEdUQXNzZW1ibGVyMkQgZnJvbSBcIi4vR1RBc3NlbWJsZXIyRFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHVFNpbXBsZVNwcml0ZUFzc2VtYmxlcjJEIGV4dGVuZHMgR1RBc3NlbWJsZXIyRCB7XG4gICAgLy8g6L+Z6YOo5YiG5L2/55SoU2ltcGxlU3ByaXRlQXNzZW1ibGVy55qE5YaF5a65XG4gICAgdXBkYXRlUmVuZGVyRGF0YShzcHJpdGU6IGNjLlNwcml0ZSkge1xuICAgICAgICB0aGlzLnBhY2tUb0R5bmFtaWNBdGxhcyhzcHJpdGUsIHNwcml0ZS5fc3ByaXRlRnJhbWUpO1xuICAgICAgICBzdXBlci51cGRhdGVSZW5kZXJEYXRhKHNwcml0ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVVZzKHNwcml0ZSkge1xuICAgICAgICBsZXQgdXYgPSBzcHJpdGUuX3Nwcml0ZUZyYW1lLnV2O1xuICAgICAgICBsZXQgdXZPZmZzZXQgPSB0aGlzLnV2T2Zmc2V0O1xuICAgICAgICBsZXQgZmxvYXRzUGVyVmVydCA9IHRoaXMuZmxvYXRzUGVyVmVydDtcbiAgICAgICAgbGV0IHZlcnRzID0gdGhpcy5fcmVuZGVyRGF0YS52RGF0YXNbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3JjT2Zmc2V0ID0gaSAqIDI7XG4gICAgICAgICAgICBsZXQgZHN0T2Zmc2V0ID0gZmxvYXRzUGVyVmVydCAqIGkgKyB1dk9mZnNldDtcbiAgICAgICAgICAgIHZlcnRzW2RzdE9mZnNldF0gPSB1dltzcmNPZmZzZXRdO1xuICAgICAgICAgICAgdmVydHNbZHN0T2Zmc2V0ICsgMV0gPSB1dltzcmNPZmZzZXQgKyAxXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVZlcnRzKHNwcml0ZSkge1xuICAgICAgICBsZXQgbm9kZSA9IHNwcml0ZS5ub2RlLFxuICAgICAgICAgICAgY3cgPSBub2RlLndpZHRoLCBjaCA9IG5vZGUuaGVpZ2h0LFxuICAgICAgICAgICAgYXBweCA9IG5vZGUuYW5jaG9yWCAqIGN3LCBhcHB5ID0gbm9kZS5hbmNob3JZICogY2gsXG4gICAgICAgICAgICBsLCBiLCByLCB0O1xuICAgICAgICBpZiAoc3ByaXRlLnRyaW0pIHtcbiAgICAgICAgICAgIGwgPSAtYXBweDtcbiAgICAgICAgICAgIGIgPSAtYXBweTtcbiAgICAgICAgICAgIHIgPSBjdyAtIGFwcHg7XG4gICAgICAgICAgICB0ID0gY2ggLSBhcHB5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZyYW1lID0gc3ByaXRlLnNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgICAgIG93ID0gZnJhbWUuX29yaWdpbmFsU2l6ZS53aWR0aCwgb2ggPSBmcmFtZS5fb3JpZ2luYWxTaXplLmhlaWdodCxcbiAgICAgICAgICAgICAgICBydyA9IGZyYW1lLl9yZWN0LndpZHRoLCByaCA9IGZyYW1lLl9yZWN0LmhlaWdodCxcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBmcmFtZS5fb2Zmc2V0LFxuICAgICAgICAgICAgICAgIHNjYWxlWCA9IGN3IC8gb3csIHNjYWxlWSA9IGNoIC8gb2g7XG4gICAgICAgICAgICBsZXQgdHJpbUxlZnQgPSBvZmZzZXQueCArIChvdyAtIHJ3KSAvIDI7XG4gICAgICAgICAgICBsZXQgdHJpbVJpZ2h0ID0gb2Zmc2V0LnggLSAob3cgLSBydykgLyAyO1xuICAgICAgICAgICAgbGV0IHRyaW1Cb3R0b20gPSBvZmZzZXQueSArIChvaCAtIHJoKSAvIDI7XG4gICAgICAgICAgICBsZXQgdHJpbVRvcCA9IG9mZnNldC55IC0gKG9oIC0gcmgpIC8gMjtcbiAgICAgICAgICAgIGwgPSB0cmltTGVmdCAqIHNjYWxlWCAtIGFwcHg7XG4gICAgICAgICAgICBiID0gdHJpbUJvdHRvbSAqIHNjYWxlWSAtIGFwcHk7XG4gICAgICAgICAgICByID0gY3cgKyB0cmltUmlnaHQgKiBzY2FsZVggLSBhcHB4O1xuICAgICAgICAgICAgdCA9IGNoICsgdHJpbVRvcCAqIHNjYWxlWSAtIGFwcHk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbG9jYWwgPSB0aGlzLl9sb2NhbDtcbiAgICAgICAgbG9jYWxbMF0gPSBsO1xuICAgICAgICBsb2NhbFsxXSA9IGI7XG4gICAgICAgIGxvY2FsWzJdID0gcjtcbiAgICAgICAgbG9jYWxbM10gPSB0O1xuICAgICAgICB0aGlzLnVwZGF0ZVdvcmxkVmVydHMoc3ByaXRlKTtcbiAgICB9XG59XG4iXX0=