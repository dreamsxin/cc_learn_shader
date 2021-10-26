
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shaderScene/BrightSaturaContrastTest/BrightSaturaContrastTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4f05e15K9Bj72pJrMlUulO', 'BrightSaturaContrastTest');
// shaderScene/BrightSaturaContrastTest/BrightSaturaContrastTest.ts

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
var BrightSaturaContrastAssemblerSprite_1 = require("./BrightSaturaContrastAssembler/BrightSaturaContrastAssemblerSprite");
var BrightSaturaContrastUniform_1 = require("./BrightSaturaContrastUniform/BrightSaturaContrastUniform");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrightSaturaContrastTest = /** @class */ (function (_super) {
    __extends(BrightSaturaContrastTest, _super);
    function BrightSaturaContrastTest() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bscAS = null;
        _this.bscU = null;
        return _this;
    }
    BrightSaturaContrastTest.prototype.sliderCallback = function (slider, customEventData) {
        var value = slider.progress * 3;
        switch (customEventData) {
            case 'b': {
                this.bscU.brightness = this.bscAS.brightness = value;
                break;
            }
            case 's': {
                this.bscU.saturation = this.bscAS.saturation = value;
                break;
            }
            case 'c': {
                this.bscU.constrast = this.bscAS.constrast = value;
                break;
            }
        }
    };
    __decorate([
        property(BrightSaturaContrastAssemblerSprite_1.default)
    ], BrightSaturaContrastTest.prototype, "bscAS", void 0);
    __decorate([
        property(BrightSaturaContrastUniform_1.default)
    ], BrightSaturaContrastTest.prototype, "bscU", void 0);
    BrightSaturaContrastTest = __decorate([
        ccclass
    ], BrightSaturaContrastTest);
    return BrightSaturaContrastTest;
}(cc.Component));
exports.default = BrightSaturaContrastTest;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaGFkZXJTY2VuZS9CcmlnaHRTYXR1cmFDb250cmFzdFRlc3QvQnJpZ2h0U2F0dXJhQ29udHJhc3RUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBK0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQiwySEFBc0g7QUFDdEgseUdBQW9HO0FBRTlGLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXNELDRDQUFZO0lBQWxFO1FBQUEscUVBeUJDO1FBdEJHLFdBQUssR0FBd0MsSUFBSSxDQUFDO1FBR2xELFVBQUksR0FBZ0MsSUFBSSxDQUFDOztJQW1CN0MsQ0FBQztJQWpCRyxpREFBYyxHQUFkLFVBQWUsTUFBaUIsRUFBRSxlQUF1QjtRQUNyRCxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQyxRQUFRLGVBQWUsRUFBRTtZQUNyQixLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDckQsTUFBTTthQUNUO1lBQ0QsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3JELE1BQU07YUFDVDtZQUNELEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUNuRCxNQUFNO2FBQ1Q7U0FDSjtJQUNMLENBQUM7SUFyQkQ7UUFEQyxRQUFRLENBQUMsNkNBQW1DLENBQUM7MkRBQ0k7SUFHbEQ7UUFEQyxRQUFRLENBQUMscUNBQTJCLENBQUM7MERBQ0c7SUFOeEIsd0JBQXdCO1FBRDVDLE9BQU87T0FDYSx3QkFBd0IsQ0F5QjVDO0lBQUQsK0JBQUM7Q0F6QkQsQUF5QkMsQ0F6QnFELEVBQUUsQ0FBQyxTQUFTLEdBeUJqRTtrQkF6Qm9CLHdCQUF3QjtBQTRCN0M7OztFQUdFO0FBRUYsa0JBQWtCO0FBRWxCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGF1dGhvcjogaHR0cDovL2xhbXlvdW5nLmNvbS9cblxuaW1wb3J0IEJyaWdodFNhdHVyYUNvbnRyYXN0QXNzZW1ibGVyU3ByaXRlIGZyb20gXCIuL0JyaWdodFNhdHVyYUNvbnRyYXN0QXNzZW1ibGVyL0JyaWdodFNhdHVyYUNvbnRyYXN0QXNzZW1ibGVyU3ByaXRlXCI7XG5pbXBvcnQgQnJpZ2h0U2F0dXJhQ29udHJhc3RVbmlmb3JtIGZyb20gXCIuL0JyaWdodFNhdHVyYUNvbnRyYXN0VW5pZm9ybS9CcmlnaHRTYXR1cmFDb250cmFzdFVuaWZvcm1cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyaWdodFNhdHVyYUNvbnRyYXN0VGVzdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoQnJpZ2h0U2F0dXJhQ29udHJhc3RBc3NlbWJsZXJTcHJpdGUpXG4gICAgYnNjQVM6IEJyaWdodFNhdHVyYUNvbnRyYXN0QXNzZW1ibGVyU3ByaXRlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShCcmlnaHRTYXR1cmFDb250cmFzdFVuaWZvcm0pXG4gICAgYnNjVTogQnJpZ2h0U2F0dXJhQ29udHJhc3RVbmlmb3JtID0gbnVsbDtcblxuICAgIHNsaWRlckNhbGxiYWNrKHNsaWRlcjogY2MuU2xpZGVyLCBjdXN0b21FdmVudERhdGE6IHN0cmluZykge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHNsaWRlci5wcm9ncmVzcyAqIDM7XG4gICAgICAgIHN3aXRjaCAoY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgICAgICBjYXNlICdiJzoge1xuICAgICAgICAgICAgICAgIHRoaXMuYnNjVS5icmlnaHRuZXNzID0gdGhpcy5ic2NBUy5icmlnaHRuZXNzID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdzJzoge1xuICAgICAgICAgICAgICAgIHRoaXMuYnNjVS5zYXR1cmF0aW9uID0gdGhpcy5ic2NBUy5zYXR1cmF0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdjJzoge1xuICAgICAgICAgICAgICAgIHRoaXMuYnNjVS5jb25zdHJhc3QgPSB0aGlzLmJzY0FTLmNvbnN0cmFzdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qXG5odHRwczovL21wLndlaXhpbi5xcS5jb20vcy9IdDBrSWJhZUJFZHNfd1VlVWx1OEpRXG5cbiovXG5cbi8vIOasoui/juWFs+azqOW+ruS/oeWFrOS8l+WPt1vnmb3njonml6DlhrBdXG5cbi8qKlxu4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paI4paIXG7ilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcbuKWiOKWiOKWiOKWiCDiloTiloTiloTiloTiloQg4paI4paA4paIIOKWiOKWhOKWiOKWiOKWgOKWhCDiloTiloTilojilogg4paE4paE4paE4paE4paEIOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paIIOKWiCAgIOKWiCDilojiloDiloDiloDilogg4paA4paE4paA4paA4paA4paI4paE4paA4paIIOKWiCAgIOKWiCDilojilojilojilohcbuKWiOKWiOKWiOKWiCDilojiloTiloTiloTilogg4paI4paAIOKWiOKWgOKWgOKWgCDiloDiloTiloQg4paEIOKWiCDilojiloTiloTiloTilogg4paI4paI4paI4paIXG7ilojilojilojilojiloTiloTiloTiloTiloTiloTiloTilojiloTiloAg4paA4paE4paIIOKWgOKWhOKWiOKWhOKWgCDilojiloTiloTiloTiloTiloTiloTiloTilojilojilojilohcbuKWiOKWiOKWiOKWiOKWhOKWhCAg4paE4paA4paE4paEIOKWhOKWgOKWhOKWgOKWgOKWhOKWhOKWhCDilogg4paIIOKWgCDiloDiloTilojiloTiloDilojilojilojilohcbuKWiOKWiOKWiOKWiOKWgCDiloQgIOKWiOKWhOKWiOKWgOKWiOKWhOKWiOKWgOKWiCAg4paA4paEIOKWiCDiloAg4paE4paE4paI4paI4paA4paI4paI4paI4paI4paIXG7ilojilojilojilogg4paE4paA4paE4paE4paA4paEIOKWiOKWhOKWhOKWiOKWhCDiloDiloTiloAg4paAIOKWgCDiloDiloDiloDiloQg4paI4paA4paI4paI4paI4paIXG7ilojilojilojilojiloAg4paI4paIIOKWgOKWhCDiloTilojilogg4paE4paI4paA4paEIOKWiOKWiOKWgCDiloAg4paI4paE4paI4paE4paA4paI4paI4paI4paI4paIXG7ilojilojilojiloggICDiloTilojilojiloTiloAg4paI4paA4paE4paA4paE4paA4paE4paE4paE4paEIOKWgOKWiOKWgCDiloDiloAg4paI4paA4paI4paI4paI4paIXG7ilojilojilojilogg4paI4paEIOKWiCDiloQg4paI4paAIOKWiOKWgOKWhOKWiOKWhOKWhOKWhOKWhOKWgOKWhOKWhOKWiOKWhOKWhOKWhOKWhOKWgOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paE4paI4paE4paI4paE4paI4paE4paI4paAIOKWhOKWiOKWhCAgIOKWgOKWhOKWiOKWiCDiloTiloTiloQg4paAICAg4paI4paI4paI4paIXG7ilojilojilojilogg4paE4paE4paE4paE4paEIOKWiOKWhOKWiOKWiCDiloTilojiloAgIOKWhCAgIOKWiOKWhOKWiCAg4paE4paA4paI4paI4paI4paI4paIXG7ilojilojilojilogg4paIICAg4paIIOKWiCDiloTilojiloQg4paAICDiloDiloDilojilogg4paE4paE4paE4paEIOKWhOKWgCDilojilojilojilohcbuKWiOKWiOKWiOKWiCDilojiloTiloTiloTilogg4paIIOKWhOKWhOKWgCDiloTilojiloTilojiloTilojiloQg4paA4paEICAg4paEIOKWiOKWiOKWiOKWiOKWiFxu4paI4paI4paI4paI4paE4paE4paE4paE4paE4paE4paE4paI4paE4paI4paI4paE4paE4paI4paI4paE4paE4paE4paI4paI4paI4paI4paI4paE4paE4paI4paE4paI4paI4paI4paI4paI4paIXG7ilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilojilohcbuKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKWiFxuICovIl19