class Constant{

    public static version = 0.01

    public static debug = true;

    public static log(sth){Constant.trace(sth);}
    public static trace(sth){
        if(Constant.debug){
            console.log(sth);
        }
    }

}

class GameVar{
    public static world_speed:number = 2;

    public static tap_conut:number = 0;
}

class GlobalVar{



    public static stage_width():number
    {
        return egret.MainContext.instance.stage.stageWidth;
    }

    public static stage_height():number
    {
        return egret.MainContext.instance.stage.stageHeight;
    }
}

class GameStatus{
    public static HELLO = -1;
    public static READY = 1;
    public static PLAYING = 2;
    public static OVER = 0;
}