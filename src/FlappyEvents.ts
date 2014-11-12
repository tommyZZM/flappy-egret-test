class FlappyEvents extends egret.Event {

    public static PRE_READY:string = "preReady";
    public static ASSET_READY:string = "assetReady";

    public static GAME_RUN:string = "gameRun";

    public status:number = GameStatus.HELLO;
    public flappy:SpriteEx = null;
    public ground:Ground = null;
    public score:egret.BitmapText = null;
    public medal:Medal = null;

    public score_min:egret.BitmapText = null;

    public constructor(type:string, bubbles:boolean = false, cancelable:boolean = false) {
        //TODO:your code here
        super(type, bubbles, cancelable);
    }
}