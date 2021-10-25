import wave from "./wave";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Touch extends cc.Component {
    // LIFE-CYCLE CALLBACKS:

    @property(wave)
    wave:wave = null;
    // onLoad () {}

    start () {
        let self = this;
        this.node.on('touchend', (e) => {
            this.touchedFunc(e);
        },this)
    }

    touchedFunc(e){
        let index = Math.floor(e.getLocation().x / 720 * this.wave.nWater);
        this.wave.energyArray[index] += 800;
    }

    // update (dt) {}
}
