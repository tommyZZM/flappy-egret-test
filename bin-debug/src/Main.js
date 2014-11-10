var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * 入口
 */
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        Constant.trace('Luaching flappy egret ' + Constant.version + ' code by tommy!');
        this.start();
    }
    Main.prototype.start = function () {
        return new GameController(this);
    };
    return Main;
})(egret.DisplayObjectContainer);
