var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(texture, parent, x, y, gravity) {
        if (parent === void 0) { parent = null; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (gravity === void 0) { gravity = 'normal'; }
        _super.call(this, texture, parent, x, y, gravity);
        //TODO:your code
        this.touchEnabled = true;
    }
    return Button;
})(SpriteEx);
