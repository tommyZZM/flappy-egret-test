class SpriteEx extends egret.Sprite{

    public body:egret.Bitmap;
    private texture:egret.Texture

    public  p_x:number = 0;
    public  p_y:number = 0;

    public  velocity:number = 0;


    public constructor(texture:string,parent:egret.DisplayObjectContainer = null,x:number=0,y:number=0,gravity:string='normal') {
        super();
        //TODO:your code
        this.texture = RES.getRes(texture);
        if(!this.texture){
            console.error(texture+' Texture not found!');
        }
        this.display();
        this.positionFix(gravity);
        this.x = x;
        this.y = y;
        if(parent){
            parent.addChild(this);
        }

    }

    private display(){
        this.body = new egret.Bitmap();
        this.body.texture = this.texture;
        this.addChild(this.body);
        this.width = this.body.width;
        this.height = this.body.height;
        this.anchorX = this.anchorY = 0.5;
    }

    public toggleDisplay(){
        this.visible = !this.visible;
    }

    public scale(i:number){
        this.scaleX = this.scaleY = i;
    }

    private positionFix(gravity:string){
        switch(gravity){
            default:{
                console.warn('not support!'+gravity);
            }
            case 'custom':
            case 'normal':{
                this.anchorX = this.anchorY = 0;
                break;
            }
            case 'center':{
                this.anchorX = this.anchorY = 0.5;
                break;
            }
        }
    }

}