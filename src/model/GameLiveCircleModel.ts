class GameLiveCircleModel {

    private status:number;

    private flappy:SpriteEx;
    private ground:Ground;
    private score:egret.BitmapText;

    private obstacles = [];
    private curr_top:number;
    private curr_bot:number;

    private disatace_listen:number = 0;

    private stage:egret.DisplayObjectContainer;
    private UI:GameDisplay;

    public constructor(stage) {
        //TODO:your code here
        this.stage = stage;
        this.UI = new GameDisplay();
    }

    public pre(){
        this.UI.preloadBg();
        this.stage.addChild(this.UI);
        this.UI.addEventListener(FlappyEvents.GAME_RUN,this.run,this);
    }

    public hell(){
        this.UI.helloPlay();
    }

    //Game status
    public run(e:FlappyEvents){
        this.status = e.status;
        switch (e.status){
            case GameStatus.HELLO:{
                Constant.trace('Hello Face!');
                break;
            }
            case GameStatus.READY:{

                Constant.trace('Ready!tab to start!');
                if(this.score){
                    this.score.text = '0';
                }

                for(var i:number = 0;i<this.obstacles.length;i++){
                    this.UI.removeChild(this.obstacles[i]);
                }
                this.obstacles = [];

                break;
            }
            case GameStatus.PLAYING:{
                Constant.trace('Flappy!');

                this.flappy = e.flappy;
                this.ground = e.ground;
                this.score = e.score;

                this.curr_top = 0;
                this.curr_bot = e.ground.level;

                this.stage.addEventListener(egret.Event.ENTER_FRAME,this.circle,this);
                this.UI.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontab,this);

                break;
            }
            case GameStatus.OVER:{
                e.medal.toggle(GameVar.flappy_level());
                Constant.trace('Game Over!' + ' level:' +GameVar.flappy_level()+' mark:'+GameVar.obs_conut+' tab-counts:'+GameVar.tap_conut);

                this.stage.removeEventListener(egret.Event.ENTER_FRAME,this.circle,this);
                this.UI.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.ontab,this);

                GameVar.obs_conut = -2;
                GameVar.tap_conut = 0;

                break;
            }
            default:break;
        }
    }

    //main logic
    private circle(){
        this.curr_top = 0;
        this.curr_bot = this.ground.level;

        //add obstacles
        if(this.disatace_listen == 0){
            GameVar.obs_conut++;
            if(GameVar.obs_conut>=0){
                this.score.text = GameVar.obs_conut+'';
            }

            var pos = GlobalFun.randRange(100,GlobalVar.stage_height()>>1);

            var obs:Obstacle = new Obstacle('obj_obstacle',GlobalVar.stage_width()+200,pos,GameVar.obs_vertic_space)
            this.obstacles.push(obs);
            this.UI.addChild(obs);

            var d_obs:Obstacle;
            if(this.obstacles.length>=5){
                d_obs = this.obstacles.shift();
                this.UI.removeChild(d_obs);
                //Constant.trace('this.obstacles full! length:'+this.obstacles.length);
            }

            this.ground.parent.setChildIndex(this.ground,this.ground.parent.numChildren+1);
            this.score.parent.setChildIndex(this.score,this.score.parent.numChildren+1);
        }

        for(var i:number = 0;i<this.obstacles.length;i++){
            this.obstacles[i].x -=GameVar.world_speed;
            var obs_x:number = this.obstacles[i].x+GlobalVar.stage_width()+200+(this.obstacles[i].Width>>1);
            obs_x = Math.ceil(obs_x);

            if(obs_x==GameVar.flappy_pos){
                Constant.trace('me');
            }
            if(obs_x>GameVar.flappy_pos && obs_x<(GameVar.flappy_pos+this.obstacles[i].Width+(this.flappy.height>>1))){
                this.curr_top = this.obstacles[i].top;
                this.curr_bot = this.obstacles[i].bot;
                //Constant.trace(obs_x);
            }
        }
        //Constant.trace(this.obstacles[1].x+">"+GameVar.flappy_pos +'&&'+this.obstacles[1].x+"<"+(GameVar.flappy_pos+this.obstacles[0].Width));

        this.disatace_listen+=GameVar.world_speed;
        if(this.disatace_listen >= GameVar.obs_density){
            this.disatace_listen =0;
        }

        //Drop to ground
        if((this.flappy.y + (this.flappy.height>>1))<=this.curr_bot && (this.flappy.y-(this.flappy.height>>1) )>=this.curr_top){
            this.gravity(this.flappy);
        }else{
            this.UI.overPlay();
        }

        this.ground.animate();

    }

    private ontab(){
        this.flappy.rotation = 0;
        this.flappy.velocity = -10;
        //this.flappy.y -= 80;
        GameVar.tap_conut++;
    }

    private gravity(obj:SpriteEx){
        var g:number;g = 0.6;
        obj.velocity += g;

        obj.rotation ++;
        obj.y += obj.velocity;
        //Constant.trace(obj.velocity);
    }
}