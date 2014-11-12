/**
 * 主要的类：
 *
 * Main.ts                                  程序入口 文档类
 * GameController.ts                        初始化->资源加载->游戏状态筛选
 * AssetsLoadModel.ts                       资源加载
 * ☆ model/GameLiveCircleModel.ts          游戏循环和主要逻辑以及操作视图等等（...）
 * ☆ view/GameDisplay.ts                   游戏视图里显示对象的创建和改变等（...）
 *
 * Globals.ts                               全局变量和方法
 * FlappyEvents.ts                          自定义事件FlappyEvent，用于视图、控制器和模型传递消息和数据
 *
 */
class GameController {

    //public  status:number;
    private game:GameLiveCircleModel;//游戏生命周期;

    public constructor(stage:egret.DisplayObjectContainer) {
        //TODO:your code here

        var assets:AssetsLoadModel = new AssetsLoadModel('mainload');//初始化资源加载器
        //assets.addEventListener(FlappyEvents.PRE_READY,this.preLoaded,this);//自定义事件：预加载完成
        assets.addEventListener(FlappyEvents.ASSET_READY,this.allLoaded,this);//自定义事件：主加载完成

        this.game = new GameLiveCircleModel(stage,this);
    }

    private preLoaded(){
        this.game.pre();
        this.game.UI.addEventListener(FlappyEvents.GAME_RUN,this.run,this);//自定义事件GAME_RUN来控制游戏当前状态
    }

    private allLoaded(){
        this.game.pre();
        this.game.UI.addEventListener(FlappyEvents.GAME_RUN,this.run,this);//自定义事件GAME_RUN来控制游戏当前状态
        this.game.hell();
    }

    //当前游戏状态筛选(此处应该写在控制器...)
    public run(e:FlappyEvents) {
        //this.status = e.status;
        switch (e.status) {
            case GameStatus.HELLO:
            {//初始界面
                Constant.trace('Hello Face!');
                break;
            }
            case GameStatus.READY:
            {//准备开始
                this.game.gameready(e);
                break;
            }
            case GameStatus.PLAYING:
            {//正在游戏
                this.game.playing(e);
                break;
            }
            case GameStatus.OVER:
            {//GAME OVER
                this.game.gameover(e);
                break;
            }
            default:
                Constant.trace('WTF!');
                break;
        }

    }





}