class UserInterface extends egret.DisplayObjectContainer{

    private background:egret.Bitmap

    public constructor() {
        super();
        //TODO:your code here
    }

    public readyBg(){
        this.background = new egret.Bitmap()
        this.background.texture = RES.getRes('background');

        var proportion = this.background.width/this.background.height;

        this.background.height = GlobalVar.stage_height();
        Constant.trace(GlobalVar.stage_height() + ' ' +this.background.height);
        //this.background.width = this.background.height / proportion;

        this.addChild(this.background);
    }

    public readyPlay(){
        Constant.trace('ready Play!!!!!!')

        var button_start = new Button('button_start',this,
            GlobalVar.stage_width()>>1,GlobalVar.stage_height()>>1,'center');

        this.ground();
    }

    private ground(){
        var ground:egret.Bitmap = new egret.Bitmap();
        ground.texture = RES.getRes('obj_ground');
        ground.x = 0;
        ground.y = GlobalVar.stage_height()-ground.height*2;
        Constant.trace(ground.y+' '+ground.height + 'ee!');
        this.addChild(ground);
    }

}