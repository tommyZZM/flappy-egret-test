/**
 * 主要的类：
 *
 * Main.ts                                  程序入口 文档类
 * GameController.ts                        初始化
 * AssetsLoadModel.ts                       资源加载
 * ☆ model/GameLiveCircleModel.ts          游戏循环和主要逻辑以及操作视图等等（...）
 * ☆ view/GameDisplay.ts                   游戏视图里显示对象的创建和改变等（...）
 *
 * Globals.ts                               全局变量和方法
 * FlappyEvents.ts                          自定义事件FlappyEvent，用于视图和模型传递消息和数据
 *
 */
class GameController {

    private game:GameLiveCircleModel;//游戏生命周期;

    public constructor(stage:egret.DisplayObjectContainer) {
        //TODO:your code here

        var assets:AssetsLoadModel = new AssetsLoadModel();//初始化资源加载器
        assets.addEventListener(FlappyEvents.PRE_READY,this.preLoaded,this);//自定义事件：预加载完成
        assets.addEventListener(FlappyEvents.ASSET_READY,this.allLoaded,this);//自定义事件：主加载完成

        this.game = new GameLiveCircleModel(stage);
    }

    private preLoaded(){
        this.game.pre();
    }

    private allLoaded(){
        //this.game.pre();//
        this.game.hell();
    }



}