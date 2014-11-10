class GameLiveCircleModel {

    private stage:egret.DisplayObjectContainer;
    private UI:UserInterface;

    public constructor(stage) {
        //TODO:your code here
        this.stage = stage;
        this.UI = new UserInterface();
    }

    public ready(){
        this.UI.readyBg();
        this.stage.addChild(this.UI);
        //this.status = GameStatus.READY;
    }

    public run(status){
        switch (status){
            case GameStatus.READY:{

                this.UI.readyPlay();

                break;
            }
            case GameStatus.PLAYING:{

                break;
            }
            case GameStatus.OVER:{

                break;
            }
            default:break;
        }
    }
}