class GameDisplay extends egret.DisplayObjectContainer{

    private run:FlappyEvents = new FlappyEvents(FlappyEvents.GAME_RUN);

    private background:egret.Bitmap;

    private button_start:Button;

    private over_title:SpriteEx;
    private over_dia:SpriteEx;
    private button_restart:Button;

    private over_dialog:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

    public constructor() {
        super();
        this.touchEnabled = true;
        //TODO:your code here
    }

    public preloadBg(){
        this.background = new egret.Bitmap()
        this.background.texture = RES.getRes('background');

        var proportion = this.background.width/this.background.height;

        this.background.height = GlobalVar.stage_height();
        Constant.trace('Global.height ' +GlobalVar.stage_height()+ ' background.height ' +this.background.height);
        //this.background.width = this.background.height / proportion;

        this.addChild(this.background);
    }

    public helloPlay(){
        this.button_start = new Button('button_start',this,
            GlobalVar.stage_width()>>1,GlobalVar.stage_height()>>1,'center');
        this.button_start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.readyPlay,this);

        var spriteSheet:egret.BitmapTextSpriteSheet = RES.getRes("flappyfont");
        this.run.score = new egret.BitmapText();
        this.run.score.spriteSheet = spriteSheet;
        this.run.score.anchorX = this.run.score.anchorY = 0.5;
        this.run.score.x = GlobalVar.stage_width()>>1;
        this.run.score.y = 100;
        this.run.score.text = '0';

        this.addChild(this.run.score);

        this.run.ground = new Ground('obj_ground',GlobalVar.stage_width());
        this.addChild(this.run.ground);
        this.dispatchEvent(this.run);
    }

    private readyPlay(){
        //Constant.trace('--------  Ready!  -----------');
        this.button_start.visible = false;
        this.button_start.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.readyPlay,this);

        //init
        this.initGame();
    }

    private initGame(){
        if(!this.run.flappy){
            this.run.flappy = new SpriteEx('obj_flappy',this,GameVar.flappy_pos,(this.run.ground.level>>1),'center');
        }else{
            this.run.flappy.rotation = 0;
            this.run.flappy.x = 100;
            this.run.flappy.y = (this.run.ground.level>>1);
        }
        this.run.status = GameStatus.READY;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startPlay,this);
        this.dispatchEvent(this.run);
    }

    public startPlay(){
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.startPlay,this);
        this.run.status = GameStatus.PLAYING;
        this.dispatchEvent(this.run);
    }

    public overPlay(){
        this.run.status = GameStatus.OVER;
        this.displayOverDialog();
        this.dispatchEvent(this.run);
    }

    private displayOverDialog(){
        if(!this.over_dia){
            this.initOverDialog();
        }else{
            this.over_dia.visible = true;this.setChildIndex(this.over_dia,this.numChildren+1);
            this.over_title.visible = true;this.setChildIndex(this.over_title,this.numChildren+1);
            this.button_restart.visible = true;this.setChildIndex(this.button_restart,this.numChildren+1);
        }

    }

    private initOverDialog(){

        this.over_dia = new SpriteEx('over_dia',null,(GlobalVar.stage_width()>>1),(this.run.ground.level>>1),'center');
        this.over_dia.scale(1.6);
        this.over_title = new SpriteEx('over_title',null,(GlobalVar.stage_width()>>1),this.over_dia.y-150,'center');
        this.over_title.scale(1.6);

        this.button_restart = new Button('button_over');
        this.button_restart.body.anchorX = 0.25;
        this.button_restart.body.texture._bitmapWidth = this.button_restart.body.texture._bitmapWidth>>1;
        this.button_restart.x = GlobalVar.stage_width()>>1;
        this.button_restart.y = this.over_dia.y+120;
        this.button_restart.scale(0.6);

        this.run.medal = new Medal();
        this.over_dia.addChild(this.run.medal);

        this.addChild(this.button_restart);
        this.addChild(this.over_dia);
        this.addChild(this.over_title);

        this.button_restart.addEventListener(egret.TouchEvent.TOUCH_TAP,this.resatrtPlay,this)

    }

    private resatrtPlay(){
        this.over_dia.visible = false;
        this.over_title.visible = false;
        this.button_restart.visible = false;

        this.initGame();
    }


}