const { ccclass, property } = cc._decorator;

@ccclass
export default class Wave extends cc.Component {

  @property(cc.Mask)
  private maskNode: cc.Mask = null;

  private hWater = 200; // 水面高度
  private nodeArray = []; // 装载水面的点
  public energyArray = []; // 每个点的能量
  public nWater = 20; // 细分数

  onLoad() {
    // 赋予初始值
    for (let i = 0; i < this.nWater; i++) {
      this.energyArray[i] = 0;
    }
  }

  start() {
    // 创建水面上点
    for (let i = 0; i < this.nWater; i++) {
      let node = { x: 0, y: 0 };
      node.y = this.hWater;
      node.x = -360 + ((i + 1) * 720) / this.nWater;
      this.nodeArray[i] = node;
    }

    cc.log(this.nodeArray);

    // 最右侧点缓动
    let obj = this.nodeArray[this.nWater - 1];
    let time = 0.5;
    cc.tween(obj)
      .repeatForever(
        cc
          .tween()
          .to(time, { y: 40 + this.hWater }, { easing: "sineOut" })
          .to(time, { y: 0 + this.hWater }, { easing: "sineIn" })
          .to(time, { y: -40 + this.hWater }, { easing: "sineOut" })
          .to(time, { y: 0 + this.hWater }, { easing: "sineIn" })
      )
      .start();
  }

  // 利用遮罩原理，把下方显示
  private showWater() {
    // cc.log(this.maskNode)
   
    let draw = (<any>this.maskNode)._graphics;
    // let draw = this.maskNode._graphics;
    // cc.log(draw)
    draw.clear();
    draw.lineWidth = 1;
    draw.strokeColor = cc.color(255, 0, 0);
    draw.fillColor = cc.color(0, 255, 0);
    draw.moveTo(-360, this.hWater);
    for (let i = 0; i < this.nWater; i += 2) {
      // 贝塞尔
      draw.quadraticCurveTo(
        this.nodeArray[i].x,
        this.nodeArray[i].y,
        this.nodeArray[i + 1].x,
        this.nodeArray[i + 1].y
      );
    }
    // 封闭区域
    draw.lineTo(360, -640);
    draw.lineTo(-360, -640);
    draw.lineTo(-360, this.hWater);
    draw.fill();
    draw.stroke();
  }

  update (dt) {
    // return;
       // 左右点互相影响 2 次, 决定波的传播快慢
       for (let k = 0; k < 2; k++) {
        for (let i = 0; i < this.nWater; i++) {
            if (i > 0) {
                // 0.02 的传播损失
                // 向左传
                this.energyArray[i-1] += 0.98 * (this.nodeArray[i].y - this.nodeArray[i-1].y);
            }
            if (i < this.nWater - 1) {
                // 向右传
                this.energyArray[i+1] += 0.98 * (this.nodeArray[i].y - this.nodeArray[i+1].y);
            }
        }
    }  
    // 最右侧的跳过
    for (let i = 0; i < this.nWater - 1; i++) {
        // 0.02 速度损失
        this.energyArray[i] *= 0.98;
        // 改变位置
        this.nodeArray[i].y += this.energyArray[i] * dt;
    }
    this.showWater();
  }
}
