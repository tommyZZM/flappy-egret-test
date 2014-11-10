class GameController {

    private game:GameLiveCircleModel

    public constructor(stage:egret.DisplayObjectContainer) {
        //TODO:your code here

        var assets:AssetsLoadModel = new AssetsLoadModel();
        assets.addEventListener(FlappyEvents.PRE_READY,this.preLoaded,this);
        assets.addEventListener(FlappyEvents.ASSET_READY,this.allLoaded,this);

        this.game = new GameLiveCircleModel(stage);
    }

    private preLoaded(){
        this.game.ready();
    }

    private allLoaded(){
        this.game.run(GameStatus.READY);
    }



}