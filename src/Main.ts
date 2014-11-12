/**
 * 入口
 */
class Main extends egret.DisplayObjectContainer{

    public constructor() {
        super();
        egret.MainContext.instance.stage.scaleMode = egret.StageScaleMode.SHOW_ALL;
        Constant.trace('ScaleMode:'+egret.MainContext.instance.stage.scaleMode);
        Constant.trace('Luaching flappy egret '+Constant.version+' code by tommy!');

        Constant.trace('Global.height ' +GlobalVar.stage_height()+ 'Global.width ' +GlobalVar.stage_width());
        //Constant.trace(egret.MainContext.instance.stage);
        //var testObj:testObject = new testObject(0,0,10);
        //this.addChild(testObj);

        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.start,this);

    }

    private start(){
        if(Constant.debug){
            egret.Profiler.getInstance().run();
        }
        this.removeEventListener(egret.Event.ADDED_TO_STAGE,this.start,this);
        return new GameController(this);
    }

}


