var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Ground = (function (_super) {
    __extends(Ground, _super);
    function Ground(texture, size, level, parent) {
        if (level === void 0) { level = 0; }
        if (parent === void 0) { parent = null; }
        _super.call(this);
        this.u_width = 0;
        this.Width = 0;
        this.level = 0;
        //TODO:your code here
        this.level = level;
        this.texture = RES.getRes(texture);
        this.create(size);
        Constant.trace('create ground obj successfully! width:' + this.Width + ' level ' + this.level);
        /*if(parent){
            parent.addChild(this);
        }*/
    }
    Ground.prototype.create = function (size) {
        while (this.Width < size) {
            this.addsoli(this.Width);
        }
        this.addsoli(this.Width);
    };
    Ground.prototype.addsoli = function (x) {
        var solid = new egret.Bitmap();
        solid.texture = this.texture;
        solid.x = x;
        this.level = solid.y = GlobalVar.stage_height() - (solid.height);
        this.Width += solid.width;
        this.addChild(solid);
        this.u_width = solid.width;
    };
    Ground.prototype.animate = function () {
        this.x -= GameVar.world_speed;
        if (this.x <= -this.u_width) {
            this.x = 0;
        }
    };
    return Ground;
})(egret.DisplayObjectContainer);
