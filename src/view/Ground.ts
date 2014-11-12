class Ground extends egret.DisplayObjectContainer{

    private u_width:number = 0;
    private Width:number = 0;
    private texture:egret.Texture;

    public level:number = 0;

    public constructor(texture:string,size:number,level:number=0,parent:egret.DisplayObjectContainer=null) {
        super();
        //TODO:your code here

        this.level = level;
        this.texture = RES.getRes(texture);

        this.create(size);

        Constant.trace('create ground obj successfully! width:'+this.Width+' level '+this.level);
        /*if(parent){
            parent.addChild(this);
        }*/
    }

    private create(size:number){
        while(this.Width<size){
            this.addsoli(this.Width);
        }
        this.addsoli(this.Width);
    }

    private addsoli(x:number){
        var solid:egret.Bitmap = new egret.Bitmap();
        solid.texture = this.texture;
        solid.x = x;
        this.level = solid.y = GlobalVar.stage_height()-(solid.height);

        this.Width+=solid.width;

        this.addChild(solid);

        this.u_width = solid.width;
    }

    public animate(){
        this.x -= GameVar.world_speed();

        if(this.x<=-this.u_width){
            this.x = 0;
        }



    }
}