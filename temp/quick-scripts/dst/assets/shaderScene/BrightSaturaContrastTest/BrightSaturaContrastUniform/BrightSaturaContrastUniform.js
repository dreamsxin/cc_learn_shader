
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/BrightSaturaContrastTest/BrightSaturaContrastUniform/BrightSaturaContrastUniform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1b90/rohdEk4SdmmEZANaD', 'BrightSaturaContrastUniform');
// shaderScene/BrightSaturaContrastTest/BrightSaturaContrastUniform/BrightSaturaContrastUniform.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent;
var BrightSaturaContrastUniform = /** @class */ (function (_super) {
    __extends(BrightSaturaContrastUniform, _super);
    function BrightSaturaContrastUniform() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._sprite = null;
        _this._brightness = 1.0;
        _this._saturation = 1.0;
        _this._constrast = 1.0;
        return _this;
    }
    Object.defineProperty(BrightSaturaContrastUniform.prototype, "brightness", {
        get: function () {
            return this._brightness;
        },
        set: function (b) {
            this._brightness = b;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BrightSaturaContrastUniform.prototype, "saturation", {
        get: function () {
            return this._saturation;
        },
        set: function (b) {
            this._saturation = b;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BrightSaturaContrastUniform.prototype, "constrast", {
        get: function () {
            return this._constrast;
        },
        set: function (b) {
            this._constrast = b;
            this.updateProperties();
        },
        enumerable: false,
        configurable: true
    });
    BrightSaturaContrastUniform.prototype.onEnable = function () {
        if (!this._sprite) {
            this._sprite = this.getComponent(cc.Sprite);
        }
        this.updateProperties();
    };
    BrightSaturaContrastUniform.prototype.updateProperties = function () {
        if (!this._sprite)
            return;
        this._sprite.getMaterial(0).setProperty('brightness', this._brightness);
        this._sprite.getMaterial(0).setProperty('saturation', this._saturation);
        this._sprite.getMaterial(0).setProperty('constrast', this._constrast);
    };
    __decorate([
        property
    ], BrightSaturaContrastUniform.prototype, "_brightness", void 0);
    __decorate([
        property({ type: cc.Float, range: [0, 3], slide: true })
    ], BrightSaturaContrastUniform.prototype, "brightness", null);
    __decorate([
        property
    ], BrightSaturaContrastUniform.prototype, "_saturation", void 0);
    __decorate([
        property({ type: cc.Float, range: [0, 3], slide: true })
    ], BrightSaturaContrastUniform.prototype, "saturation", null);
    __decorate([
        property
    ], BrightSaturaContrastUniform.prototype, "_constrast", void 0);
    __decorate([
        property({ type: cc.Float, range: [0, 3], slide: true })
    ], BrightSaturaContrastUniform.prototype, "constrast", null);
    BrightSaturaContrastUniform = __decorate([
        ccclass,
        executeInEditMode,
        requireComponent(cc.Sprite)
    ], BrightSaturaContrastUniform);
    return BrightSaturaContrastUniform;
}(cc.Component));
exports.default = BrightSaturaContrastUniform;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9CcmlnaHRTYXR1cmFDb250cmFzdFRlc3QvQnJpZ2h0U2F0dXJhQ29udHJhc3RVbmlmb3JtL0JyaWdodFNhdHVyYUNvbnRyYXN0VW5pZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQTZELEVBQUUsQ0FBQyxVQUFVLEVBQXhFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLGlCQUFpQix1QkFBQSxFQUFFLGdCQUFnQixzQkFBa0IsQ0FBQztBQUtqRjtJQUF5RCwrQ0FBWTtJQUFyRTtRQUFBLHFFQW1EQztRQWpERyxhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRzFCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBVzFCLGlCQUFXLEdBQVcsR0FBRyxDQUFDO1FBVzFCLGdCQUFVLEdBQVcsR0FBRyxDQUFDOztJQXdCN0IsQ0FBQztJQTVDRyxzQkFBSSxtREFBVTthQUlkO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFORCxVQUFlLENBQUM7WUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQVFELHNCQUFJLG1EQUFVO2FBSWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQU5ELFVBQWUsQ0FBQztZQUNaLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBUUQsc0JBQUksa0RBQVM7YUFJYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBTkQsVUFBYyxDQUFDO1lBQ1gsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFNRCw4Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHNEQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQTdDRDtRQURDLFFBQVE7b0VBQ2lCO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztpRUFJeEQ7SUFNRDtRQURDLFFBQVE7b0VBQ2lCO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztpRUFJeEQ7SUFNRDtRQURDLFFBQVE7bUVBQ2dCO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztnRUFJeEQ7SUFoQ2dCLDJCQUEyQjtRQUgvQyxPQUFPO1FBQ1AsaUJBQWlCO1FBQ2pCLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7T0FDUCwyQkFBMkIsQ0FtRC9DO0lBQUQsa0NBQUM7Q0FuREQsQUFtREMsQ0FuRHdELEVBQUUsQ0FBQyxTQUFTLEdBbURwRTtrQkFuRG9CLDJCQUEyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIGV4ZWN1dGVJbkVkaXRNb2RlLCByZXF1aXJlQ29tcG9uZW50IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuQGV4ZWN1dGVJbkVkaXRNb2RlXG5AcmVxdWlyZUNvbXBvbmVudChjYy5TcHJpdGUpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmlnaHRTYXR1cmFDb250cmFzdFVuaWZvcm0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgX3Nwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIF9icmlnaHRuZXNzOiBudW1iZXIgPSAxLjA7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRmxvYXQsIHJhbmdlOiBbMCwgM10sIHNsaWRlOiB0cnVlIH0pXG4gICAgc2V0IGJyaWdodG5lc3MoYikge1xuICAgICAgICB0aGlzLl9icmlnaHRuZXNzID0gYjtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzKCk7XG4gICAgfVxuICAgIGdldCBicmlnaHRuZXNzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYnJpZ2h0bmVzcztcbiAgICB9XG5cbiAgICBAcHJvcGVydHlcbiAgICBfc2F0dXJhdGlvbjogbnVtYmVyID0gMS4wO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCByYW5nZTogWzAsIDNdLCBzbGlkZTogdHJ1ZSB9KVxuICAgIHNldCBzYXR1cmF0aW9uKGIpIHtcbiAgICAgICAgdGhpcy5fc2F0dXJhdGlvbiA9IGI7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllcygpO1xuICAgIH1cbiAgICBnZXQgc2F0dXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NhdHVyYXRpb247XG4gICAgfVxuXG4gICAgQHByb3BlcnR5XG4gICAgX2NvbnN0cmFzdDogbnVtYmVyID0gMS4wO1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkZsb2F0LCByYW5nZTogWzAsIDNdLCBzbGlkZTogdHJ1ZSB9KVxuICAgIHNldCBjb25zdHJhc3QoYikge1xuICAgICAgICB0aGlzLl9jb25zdHJhc3QgPSBiO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgICB9XG4gICAgZ2V0IGNvbnN0cmFzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnN0cmFzdDtcbiAgICB9XG5cblxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3Nwcml0ZSkge1xuICAgICAgICAgICAgdGhpcy5fc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcm9wZXJ0aWVzKCkge1xuICAgICAgICBpZiAoIXRoaXMuX3Nwcml0ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLl9zcHJpdGUuZ2V0TWF0ZXJpYWwoMCkuc2V0UHJvcGVydHkoJ2JyaWdodG5lc3MnLCB0aGlzLl9icmlnaHRuZXNzKTtcbiAgICAgICAgdGhpcy5fc3ByaXRlLmdldE1hdGVyaWFsKDApLnNldFByb3BlcnR5KCdzYXR1cmF0aW9uJywgdGhpcy5fc2F0dXJhdGlvbik7XG4gICAgICAgIHRoaXMuX3Nwcml0ZS5nZXRNYXRlcmlhbCgwKS5zZXRQcm9wZXJ0eSgnY29uc3RyYXN0JywgdGhpcy5fY29uc3RyYXN0KTtcbiAgICB9XG59XG4iXX0=