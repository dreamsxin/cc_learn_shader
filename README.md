# cocos creator 2.4.6
  - shaderScene目录文件说明
  1. MeshPolygonSpriteTest-多边形裁剪
  2. BrightSaturaContrastTest-饱和度、亮度、对比度
  3. LiquidBox2dTest-图片液体化
  4. sprite2dLight-2d基本光照
  5. dissolveTest-消融效果
  6. CaptureTest-可截图生成base64

# 一、CUP & GPU
CPU和GPU，都属于处理单元，但是结构不同，
CPU：有点像大型的传输管道，等待的任务只能依次通过，所以CPU处理任务的速度取决于处理单个任务的时间。 内部非常复杂，能够处理大量的数据和逻辑判断，但是处理图像却不太行，因为处理图像的逻辑并不复杂，但是一副图片是有成千上万个像素点构成的。每个像素点都是一个单任务，如果这都交给CPU处理的话，有点大材小用了，这就得交给GPU处理了。
GPU：由大量的小型处理单元构成，数量非常多并且能够并行的处理。
# 二、什么是WedGL？
 WebGL是一种3D的绘图标准，它的本质是JavaSCript操作OPenGl接口(OpenGL,本身是一种规范，定义了统一的接口)。
 WebGL是对OpenGl的一种封装