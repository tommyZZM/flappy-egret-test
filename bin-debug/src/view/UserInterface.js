var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var UserInterface = (function (_super) {
    __extends(UserInterface, _super);
    function UserInterface() {
        _super.call(this);
        //TODO:your code here
    }
    UserInterface.prototype.readyBg = function () {
        this.background = new egret.Bitmap();
        this.background.texture = RES.getRes('background');
        var proportion = this.background.width / this.background.height;
        this.background.height = GlobalVar.stage_height();
        Constant.trace(GlobalVar.stage_height() + ' ' + this.background.height);
        //this.background.width = this.background.height / proportion;
        this.addChild(this.background);
    };
    UserInterface.prototype.readyPlay = function () {
        Constant.trace('ready Play!!!!!!');
        var button_start = new Button('button_start', this, GlobalVar.stage_width() >> 1, GlobalVar.stage_height() >> 1, 'center');
        this.ground();
    };
    UserInterface.prototype.ground = function () {
        var ground = new egret.Bitmap();
        ground.texture = RES.getRes('obj_ground');
        ground.x = 0;
        ground.y = GlobalVar.stage_height() - ground.height * 2;
        Constant.trace(ground.y + ' ' + ground.height + 'ee!');
        this.addChild(ground);
    };
    return UserInterface;
})(egret.DisplayObjectContainer);
