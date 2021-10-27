
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Scenes/GoToScene');
require('./assets/Script/ccutils/multiresolution/ContentAdapter');
require('./assets/shaderScene/BrightSaturaContrastTest/BrightSaturaContrastAssembler/BrightSaturaContrastAssembler');
require('./assets/shaderScene/BrightSaturaContrastTest/BrightSaturaContrastAssembler/BrightSaturaContrastAssemblerSprite');
require('./assets/shaderScene/BrightSaturaContrastTest/BrightSaturaContrastTest');
require('./assets/shaderScene/BrightSaturaContrastTest/BrightSaturaContrastUniform/BrightSaturaContrastUniform');
require('./assets/shaderScene/CaptureTest/CaptureTest');
require('./assets/shaderScene/CaptureTest/EncodeJPG');
require('./assets/shaderScene/ColorAssembler2D/ColorAssembler2D');
require('./assets/shaderScene/LiquidBox2dTest/LiquidBox2dTest');
require('./assets/shaderScene/MeshPolygonSpriteTest/MeshPolygonSprite');
require('./assets/shaderScene/MosaicEffectScene/MosaicEffectScene');
require('./assets/shaderScene/common/GTAssembler2D');
require('./assets/shaderScene/common/GTSimpleSpriteAssembler2D');
require('./assets/shaderScene/dissolveTest/DissolveTest');
require('./assets/shaderScene/dissolveTest/GrayEffectScene');
require('./assets/shaderScene/graphicsSprite/src/GraphicsSpriteMesh_rope');
require('./assets/shaderScene/graphicsSprite/src/Main_rope');
require('./assets/shaderScene/sprite2dLight/Sprite2dLightTest');
require('./assets/shaderScene/waterEffectScene/touch');
require('./assets/shaderScene/waterEffectScene/wave');

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