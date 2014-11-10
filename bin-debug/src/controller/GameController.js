var GameController = (function () {
    function GameController(stage) {
        //TODO:your code here
        var assets = new AssetsLoadModel();
        assets.addEventListener(FlappyEvents.PRE_READY, this.preLoaded, this);
        assets.addEventListener(FlappyEvents.ASSET_READY, this.allLoaded, this);
        this.game = new GameLiveCircleModel(stage);
    }
    GameController.prototype.preLoaded = function () {
        this.game.ready();
    };
    GameController.prototype.allLoaded = function () {
        this.game.run(GameStatus.READY);
    };
    return GameController;
})();
