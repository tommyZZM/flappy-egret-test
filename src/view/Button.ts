class Button extends SpriteEx{

    public constructor(texture:string,parent:egret.DisplayObjectContainer = null,x:number=0,y:number=0,gravity:string='normal') {
        super(texture,parent,x,y,gravity);
        //TODO:your code
        this.touchEnabled = true;
    }
}
