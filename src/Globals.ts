class Constant{

    public static version = '0.0.9 alpha'

    public static debug = true;

    public static log(sth){Constant.trace(sth);}
    public static trace(sth){
        if(Constant.debug){
            console.log(sth);
        }
    }

}

class GameVar{
    public static flappy_pos:number = 100;

    public static world_speed:number = 2;

    public static obs_vertic_space:number = 360;

    public static tap_conut:number = 0;

    public static obs_conut:number = 0 - 2;

    public static flappy_level():number{
        var l = 1;

        if(GameVar.obs_conut>=5){
            l = 2;
        }
        if(GameVar.obs_conut>=10){
            l = 3;
        }

        return l;
    }

    public static obs_density:number = 300;
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

class GlobalFun{
    public static randRange(minNum:number, maxNum:number):number {
        return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }
}

class GameStatus{
    public static HELLO = -1;
    public static READY = 1;
    public static PLAYING = 2;
    public static OVER = 0;
}