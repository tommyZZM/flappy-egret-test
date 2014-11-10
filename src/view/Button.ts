class Button extends egret.Sprite{

    private texture:egret.Texture

    public constructor(texture:string,parent:egret.DisplayObjectContainer,x:number=0,y:number=0,gravity:string='normal') {
        super();
        //TODO:your code
        this.texture = RES.getRes(texture);
        this.display();
        parent.addChild(this);
        this.positionFix(x,y,gravity)
    }

    private display(){
        var body:egret.Bitmap = new egret.Bitmap();
        body.texture = this.texture;
        this.addChild(body);
        this.width = body.width;
        this.height = body.height;
    }

    private positionFix(x:number,y:number,gravity:string){
        switch(gravity){
            default:{
                console.warn('not support!'+gravity);
                this.x = x;
                this.y = y;
                break;
            }
            case 'normal':{
                this.x = x;
                this.y = y;
                break;
            }
            case 'center':{
                this.x = x-(this.width>>1);
                this.y = y-(this.width>>1);
                break;
            }
            case 'custom':{
                this.x = x;
                this.y = y;
                break;
            }
        }
    }
}
