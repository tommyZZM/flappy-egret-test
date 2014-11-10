class FlappyEvents extends egret.Event {

    public static PRE_READY:string = "preReady";
    public static ASSET_READY:string = "assetReady";

    public constructor(type:string, bubbles:boolean = false, cancelable:boolean = false) {
        //TODO:your code here
        super(type, bubbles, cancelable);
    }
}