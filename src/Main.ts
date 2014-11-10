/**
 * 入口
 */
class Main extends egret.DisplayObjectContainer{

    public constructor() {
        super();
        Constant.trace('Luaching flappy egret '+Constant.version+' code by tommy!');

        this.start();
    }

    private start(){
        return new GameController(this);
    }

}


