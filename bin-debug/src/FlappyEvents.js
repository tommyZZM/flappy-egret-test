var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var FlappyEvents = (function (_super) {
    __extends(FlappyEvents, _super);
    function FlappyEvents(type, bubbles, cancelable) {
        if (bubbles === void 0) { bubbles = false; }
        if (cancelable === void 0) { cancelable = false; }
        //TODO:your code here
        _super.call(this, type, bubbles, cancelable);
        this.status = GameStatus.HELLO;
        this.flappy = null;
        this.ground = null;
    }
    FlappyEvents.PRE_READY = "preReady";
    FlappyEvents.ASSET_READY = "assetReady";
    FlappyEvents.GAME_RUN = "gameRun";
    return FlappyEvents;
})(egret.Event);
