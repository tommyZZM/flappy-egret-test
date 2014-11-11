var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var SpriteEx = (function (_super) {
    __extends(SpriteEx, _super);
    function SpriteEx(texture, parent, x, y, gravity) {
        if (parent === void 0) { parent = null; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (gravity === void 0) { gravity = 'normal'; }
        _super.call(this);
        this.p_x = 0;
        this.p_y = 0;
        this.velocity = 0;
        //TODO:your code
        this.texture = RES.getRes(texture);
        if (!this.texture) {
            console.error(texture + ' Texture not found!');
        }
        this.display();
        this.positionFix(gravity);
        this.x = x;
        this.y = y;
        if (parent) {
            parent.addChild(this);
        }
    }
    SpriteEx.prototype.display = function () {
        this.body = new egret.Bitmap();
        this.body.texture = this.texture;
        this.addChild(this.body);
        this.width = this.body.width;
        this.height = this.body.height;
        this.anchorX = this.anchorY = 0.5;
    };
    SpriteEx.prototype.toggleDisplay = function () {
        this.visible = !this.visible;
    };
    SpriteEx.prototype.scale = function (i) {
        this.scaleX = this.scaleY = i;
    };
    SpriteEx.prototype.positionFix = function (gravity) {
        switch (gravity) {
            default:
                {
                    console.warn('not support!' + gravity);
                }
            case 'custom':
            case 'normal':
                {
                    this.anchorX = this.anchorY = 0;
                    break;
                }
            case 'center':
                {
                    this.anchorX = this.anchorY = 0.5;
                    break;
                }
        }
    };
    return SpriteEx;
})(egret.Sprite);
