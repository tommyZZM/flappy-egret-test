var GameLiveCircleModel = (function () {
    function GameLiveCircleModel(stage) {
        //TODO:your code here
        this.stage = stage;
        this.UI = new UserInterface();
    }
    GameLiveCircleModel.prototype.ready = function () {
        this.UI.readyBg();
        this.stage.addChild(this.UI);
        //this.status = GameStatus.READY;
    };
    GameLiveCircleModel.prototype.run = function (status) {
        switch (status) {
            case GameStatus.READY:
                {
                    this.UI.readyPlay();
                    break;
                }
            case GameStatus.PLAYING:
                {
                    break;
                }
            case GameStatus.OVER:
                {
                    break;
                }
            default:
                break;
        }
    };
    return GameLiveCircleModel;
})();
