var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(texture, parent, x, y, gravity) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (gravity === void 0) { gravity = 'normal'; }
        _super.call(this);
        //TODO:your code
        this.texture = RES.getRes(texture);
        this.display();
        parent.addChild(this);
        this.positionFix(x, y, gravity);
    }
    Button.prototype.display = function () {
        var body = new egret.Bitmap();
        body.texture = this.texture;
        this.addChild(body);
        this.width = body.width;
        this.height = body.height;
    };
    Button.prototype.positionFix = function (x, y, gravity) {
        switch (gravity) {
            default:
                {
                    console.warn('not support!' + gravity);
                    this.x = x;
                    this.y = y;
                    break;
                }
            case 'normal':
                {
                    this.x = x;
                    this.y = y;
                    break;
                }
            case 'center':
                {
                    this.x = x - (this.width >> 1);
                    this.y = y - (this.width >> 1);
                    break;
                }
            case 'custom':
                {
                    this.x = x;
                    this.y = y;
                    break;
                }
        }
    };
    return Button;
})(egret.Sprite);
