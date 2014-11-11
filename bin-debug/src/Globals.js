var Constant = (function () {
    function Constant() {
    }
    Constant.log = function (sth) {
        Constant.trace(sth);
    };
    Constant.trace = function (sth) {
        if (Constant.debug) {
            console.log(sth);
        }
    };
    Constant.version = 0.01;
    Constant.debug = true;
    return Constant;
})();
var GameVar = (function () {
    function GameVar() {
    }
    GameVar.world_speed = 2;
    GameVar.tap_conut = 0;
    return GameVar;
})();
var GlobalVar = (function () {
    function GlobalVar() {
    }
    GlobalVar.stage_width = function () {
        return egret.MainContext.instance.stage.stageWidth;
    };
    GlobalVar.stage_height = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    return GlobalVar;
})();
var GameStatus = (function () {
    function GameStatus() {
    }
    GameStatus.HELLO = -1;
    GameStatus.READY = 1;
    GameStatus.PLAYING = 2;
    GameStatus.OVER = 0;
    return GameStatus;
})();
