var GameLiveCircleModel = (function () {
    function GameLiveCircleModel(stage) {
        //TODO:your code here
        this.stage = stage;
        this.UI = new UserInterface();
    }
    GameLiveCircleModel.prototype.pre = function () {
        this.UI.preloadBg();
        this.stage.addChild(this.UI);
        this.UI.addEventListener(FlappyEvents.GAME_RUN, this.run, this);
    };
    GameLiveCircleModel.prototype.hell = function () {
        this.UI.helloPlay();
    };
    GameLiveCircleModel.prototype.run = function (e) {
        this.status = e.status;
        switch (e.status) {
            case GameStatus.HELLO:
                {
                    Constant.trace('Hello Face!');
                    break;
                }
            case GameStatus.READY:
                {
                    Constant.trace('Ready!tab to start!');
                    break;
                }
            case GameStatus.PLAYING:
                {
                    Constant.trace('Flappy!');
                    this.flappy = e.flappy;
                    this.ground = e.ground;
                    this.stage.addEventListener(egret.Event.ENTER_FRAME, this.circle, this);
                    this.UI.addEventListener(egret.TouchEvent.TOUCH_TAP, this.ontab, this);
                    break;
                }
            case GameStatus.OVER:
                {
                    Constant.trace('Game Over!' + ' tab-counts:' + GameVar.tap_conut);
                    this.stage.removeEventListener(egret.Event.ENTER_FRAME, this.circle, this);
                    this.UI.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.ontab, this);
                    break;
                }
            default:
                break;
        }
    };
    GameLiveCircleModel.prototype.circle = function () {
        //while(this.)
        //Constant.trace('testing')
        if ((this.flappy.y + (this.flappy.height >> 1)) <= this.ground.level) {
            this.gravity(this.flappy);
        }
        else {
            this.UI.overPlay();
            GameVar.tap_conut = 0;
        }
        this.ground.animate();
    };
    GameLiveCircleModel.prototype.ontab = function () {
        this.flappy.rotation = 0;
        this.flappy.velocity = -10;
        this.flappy.y -= 80;
        GameVar.tap_conut++;
    };
    GameLiveCircleModel.prototype.gravity = function (obj) {
        var g;
        g = 0.6;
        obj.velocity += g;
        obj.rotation++;
        obj.y += obj.velocity;
        //Constant.trace(obj.velocity);
    };
    return GameLiveCircleModel;
})();
