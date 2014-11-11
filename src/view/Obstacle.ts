class Obstacle extends egret.DisplayObjectContainer{

    private Width:number;

    private _top:number;
    private _bot:number;

    private texture:egret.Texture;

    public constructor(texture:string,x:number,top:number,vertic:number) {
        super();
        //TODO:your code here
        this.texture = RES.getRes(texture);
        if(!this.texture){
            console.error(texture+' Texture not found!');
        }

        this._top = top;
        this._bot = top+vertic;
        this.display(x);
    }

    private display(x:number){
        var top_obj:egret.Bitmap = new egret.Bitmap();
        var bot_obj:egret.Bitmap = new egret.Bitmap();
        bot_obj.texture = top_obj.texture = this.texture;

        top_obj.anchorX = bot_obj.anchorX = 0.5;// 0.5;

        top_obj.anchorY = bot_obj.anchorY = 0;

        top_obj.rotation = 180;

        top_obj.x = bot_obj.x = x;
        top_obj.y = this._top;
        bot_obj.y = this._bot;

        this.Width = top_obj.texture.textureWidth;
        //Constant.trace(this.Width);

        this.addChild(top_obj);this.addChild(bot_obj);
    }

    public get top(){
        return this._top;
    }

    public get bot(){
        return this._bot;
    }
}