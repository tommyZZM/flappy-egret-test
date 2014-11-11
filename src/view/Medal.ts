class Medal extends egret.Bitmap{

    public constructor(x:number = 50,y:number = 66) {
        super();
        //TODO:your code here

        this.texture = RES.getRes('over_medal');
        this.anchorY = 0.5;

        this.toggle(1);

        this.scaleX = this.scaleY = 0.5;
        this.x = x;
        this.y = y;
    }

    public toggle(type:number){
        switch (type){
            default :
            case 1:{
                this.anchorX = 1/6;
                this.mask = new egret.Rectangle(0,0,this.texture.textureWidth/3,this.texture.textureHeight);
                break;
            }
            case 2:{
                this.anchorX = 1/2;
                this.mask = new egret.Rectangle(this.texture.textureWidth/3,0,this.texture.textureWidth/3,this.texture.textureHeight);
                break;
            }
            case 3:{
                this.anchorX = 5/6;
                this.mask = new egret.Rectangle(this.texture.textureWidth/3*2,0,this.texture.textureWidth/3,this.texture.textureHeight);
                break;
            }

        }
    }
}