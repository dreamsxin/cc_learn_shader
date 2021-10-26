
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/dissolveTest/DissolveTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ebf5+LjkdC7bEhwfIM9y46', 'DissolveTest');
// shaderScene/dissolveTest/DissolveTest.ts

"use strict";
// 
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DissolveTest = /** @class */ (function (_super) {
    __extends(DissolveTest, _super);
    function DissolveTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sp_dissolve = [];
        return _this;
    }
    DissolveTest.prototype.sliderCallback = function (slider, customEventData) {
        var value = slider.progress * 1.0;
        this.sp_dissolve.forEach(function (sp) {
            sp.getMaterial(0).setProperty('noiseThreshold', value);
        });
    };
    __decorate([
        property([cc.Sprite])
    ], DissolveTest.prototype, "sp_dissolve", void 0);
    DissolveTest = __decorate([
        ccclass
    ], DissolveTest);
    return DissolveTest;
}(cc.Component));
exports.default = DissolveTest;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9kaXNzb2x2ZVRlc3QvRGlzc29sdmVUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxHQUFHO0FBQ0gsK0JBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFXQztRQVJHLGlCQUFXLEdBQWdCLEVBQUUsQ0FBQTs7SUFRakMsQ0FBQztJQU5XLHFDQUFjLEdBQXRCLFVBQXVCLE1BQWlCLEVBQUUsZUFBdUI7UUFDN0QsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7UUFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFFO1lBQ3hCLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQzFELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQVBEO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3FEQUNPO0lBSFosWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQVdoQztJQUFELG1CQUFDO0NBWEQsQUFXQyxDQVh5QyxFQUFFLENBQUMsU0FBUyxHQVdyRDtrQkFYb0IsWUFBWTtBQWFqQzs7O0VBR0U7QUFFRixrQkFBa0I7QUFFbEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gXG4vLyBhdXRob3I6IGh0dHA6Ly9sYW15b3VuZy5jb20vXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNzb2x2ZVRlc3QgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVdKVxuICAgIHNwX2Rpc3NvbHZlOiBjYy5TcHJpdGVbXSA9IFtdXG5cbiAgICBwcml2YXRlIHNsaWRlckNhbGxiYWNrKHNsaWRlcjogY2MuU2xpZGVyLCBjdXN0b21FdmVudERhdGE6IHN0cmluZykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHNsaWRlci5wcm9ncmVzcyAqIDEuMDtcbiAgICAgICAgdGhpcy5zcF9kaXNzb2x2ZS5mb3JFYWNoKChzcCkgPT4ge1xuICAgICAgICAgICAgc3AuZ2V0TWF0ZXJpYWwoMCkuc2V0UHJvcGVydHkoJ25vaXNlVGhyZXNob2xkJywgdmFsdWUpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG4vKlxuaHR0cHM6Ly9tcC53ZWl4aW4ucXEuY29tL3MvSHQwa0liYWVCRWRzX3dVZVVsdThKUVxuXG4qL1xuXG4vLyDmrKLov47lhbPms6jlvq7kv6HlhazkvJflj7db55m9546J5peg5YawXVxuXG4vKipcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXG7ilojilojilojilogg4paE4paE4paE4paE4paEIOKWiOKWgOKWiCDilojiloTilojilojiloDiloQg4paE4paE4paI4paIIOKWhOKWhOKWhOKWhOKWhCDilojilojilojilohcbuKWiOKWiOKWiOKWiCDiloggICDilogg4paI4paA4paA4paA4paIIOKWgOKWhOKWgOKWgOKWgOKWiOKWhOKWgOKWiCDiloggICDilogg4paI4paI4paI4paIXG7ilojilojilojilogg4paI4paE4paE4paE4paIIOKWiOKWgCDilojiloDiloDiloAg4paA4paE4paEIOKWhCDilogg4paI4paE4paE4paE4paIIOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paE4paE4paE4paE4paE4paE4paE4paI4paE4paAIOKWgOKWhOKWiCDiloDiloTilojiloTiloAg4paI4paE4paE4paE4paE4paE4paE4paE4paI4paI4paI4paIXG7ilojilojilojilojiloTiloQgIOKWhOKWgOKWhOKWhCDiloTiloDiloTiloDiloDiloTiloTiloQg4paIIOKWiCDiloAg4paA4paE4paI4paE4paA4paI4paI4paI4paIXG7ilojilojilojilojiloAg4paEICDilojiloTilojiloDilojiloTilojiloDiloggIOKWgOKWhCDilogg4paAIOKWhOKWhOKWiOKWiOKWgOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIIOKWhOKWgOKWhOKWhOKWgOKWhCDilojiloTiloTilojiloQg4paA4paE4paAIOKWgCDiloAg4paA4paA4paA4paEIOKWiOKWgOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paAIOKWiOKWiCDiloDiloQg4paE4paI4paIIOKWhOKWiOKWgOKWhCDilojilojiloAg4paAIOKWiOKWhOKWiOKWhOKWgOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIICAg4paE4paI4paI4paE4paAIOKWiOKWgOKWhOKWgOKWhOKWgOKWhOKWhOKWhOKWhCDiloDilojiloAg4paA4paAIOKWiOKWgOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIIOKWiOKWhCDilogg4paEIOKWiOKWgCDilojiloDiloTilojiloTiloTiloTiloTiloDiloTiloTilojiloTiloTiloTiloTiloDilojilojilojilojilohcbuKWiOKWiOKWiOKWiOKWhOKWiOKWhOKWiOKWhOKWiOKWhOKWiOKWgCDiloTilojiloQgICDiloDiloTilojilogg4paE4paE4paEIOKWgCAgIOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIIOKWhOKWhOKWhOKWhOKWhCDilojiloTilojilogg4paE4paI4paAICDiloQgICDilojiloTiloggIOKWhOKWgOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIIOKWiCAgIOKWiCDilogg4paE4paI4paEIOKWgCAg4paA4paA4paI4paIIOKWhOKWhOKWhOKWhCDiloTiloAg4paI4paI4paI4paIXG7ilojilojilojilogg4paI4paE4paE4paE4paIIOKWiCDiloTiloTiloAg4paE4paI4paE4paI4paE4paI4paEIOKWgOKWhCAgIOKWhCDilojilojilojilojilohcbuKWiOKWiOKWiOKWiOKWhOKWhOKWhOKWhOKWhOKWhOKWhOKWiOKWhOKWiOKWiOKWhOKWhOKWiOKWiOKWhOKWhOKWhOKWiOKWiOKWiOKWiOKWiOKWhOKWhOKWiOKWhOKWiOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXG7ilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcbiAqLyJdfQ==