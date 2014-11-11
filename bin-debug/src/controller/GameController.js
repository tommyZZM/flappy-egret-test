var GameController = (function () {
    function GameController(stage) {
        //TODO:your code here
        var assets = new AssetsLoadModel();
        assets.addEventListener(FlappyEvents.PRE_READY, this.preLoaded, this);
        assets.addEventListener(FlappyEvents.ASSET_READY, this.allLoaded, this);
        this.game = new GameLiveCircleModel(stage);
    }
    GameController.prototype.preLoaded = function () {
        this.game.pre();
    };
    GameController.prototype.allLoaded = function () {
        this.game.hell();
    };
    return GameController;
})();
