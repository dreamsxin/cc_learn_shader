
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