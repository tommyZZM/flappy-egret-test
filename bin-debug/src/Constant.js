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
var GlobalVar = (function () {
    function GlobalVar() {
    }
    GlobalVar.stage_width = function () {
        return egret.MainContext.stage.stageWidth;
    };
    GlobalVar.stage_height = function () {
        return egret.MainContext.stage.stageHeight;
    };
    return GlobalVar;
})();
var GameStatus = (function () {
    function GameStatus() {
    }
    GameStatus.READY = -1;
    GameStatus.PLAYING = 1;
    GameStatus.OVER = 0;
    return GameStatus;
})();
