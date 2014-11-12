class GameLiveCircleModel {

    private status:number;

    private flappy:SpriteEx;
    private ground:Ground;
    private score:egret.BitmapText;

    private obstacles = [];
    private obstacles_pass = [];
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

                try{
                    this.stage.removeEventListener(egret.Event.ENTER_FRAME,this.die,this);
                }catch(e){}

                Constant.trace('Ready!tab to start!');
                if(this.score){
                    e.score_min.text = this.score.text = '0';
                }

                for(var i:number = 0;i<this.obstacles.length;i++){
                    this.UI.removeChild(this.obstacles[i]);
                }
                this.obstacles = [];
                this.obstacles_pass = [];

                this.flappy = e.flappy;
                this.ground = e.ground;

                e.score.x = GlobalVar.stage_width()>>1;
                e.score.y = 100;
                this.score = e.score;

                this.ready(1);
                this.stage.addEventListener(egret.Event.ENTER_FRAME,this.scene,this);

                break;
            }
            case GameStatus.PLAYING:{
                egret.Tween.removeTweens(this.flappy);
                Constant.trace('Flappy!');

                this.curr_top = 0;
                this.curr_bot = e.ground.level;

                this.stage.addEventListener(egret.Event.ENTER_FRAME,this.circle,this);
                this.UI.addEventListener(egret.TouchEvent.TOUCH_TAP,this._ontab,this);

                break;
            }
            case GameStatus.OVER:{
                e.score_min.text = e.score.text;
                e.medal.toggle(GameVar.flappy_level());
                Constant.trace('Game Over!' + ' level:' +GameVar.flappy_level()+' mark:'+GameVar.obs_conut+' tab-counts:'+GameVar.tap_conut);

                this.stage.removeEventListener(egret.Event.ENTER_FRAME,this.circle,this);
                this.stage.removeEventListener(egret.Event.ENTER_FRAME,this.scene,this);
                this.UI.removeEventListener(egret.TouchEvent.TOUCH_TAP,this._ontab,this);

                this.curr_top = 0;
                this.curr_bot = e.ground.level;
                this.stage.addEventListener(egret.Event.ENTER_FRAME,this.die,this);

                GameVar.obs_conut = 0;
                GameVar.tap_conut = 0;

                break;
            }
            default:break;
        }
    }

    private ready(direction:number){
        var flappy:egret.Tween = egret.Tween.get(this.flappy);
        flappy.to({x:100,y:(this.ground.level>>1)-direction*20},500,egret.Ease.sineIn).call(this.ready,this,[direction*-1]);
    }

    private scene(){
        this.ground.animate();
    }

    //main logic
    private circle(){
        this.curr_top = 0;
        this.curr_bot = this.ground.level;

        //add obstacles
        if(this.disatace_listen == 0){
            //GameVar.obs_conut++;

            var pos = GlobalFun.randRange(GlobalVar.stage_height()/5,GlobalVar.stage_height()>>1);

            var obs:Obstacle = new Obstacle('obj_obstacle',GlobalVar.stage_width()+200,pos,GameVar.obs_vertic_space)
            this.obstacles.push(obs);
            this.UI.addChild(obs);

            this.flappy.parent.setChildIndex(this.flappy,this.flappy.parent.numChildren+1);
            this.ground.parent.setChildIndex(this.ground,this.ground.parent.numChildren+1);
            this.score.parent.setChildIndex(this.score,this.score.parent.numChildren+1);
        }

        for(var i:number = 0;i<this.obstacles.length;i++){
            this.obstacles[i].x -=GameVar.world_speed;
            var obs_x:number = this.obstacles[i].x+GlobalVar.stage_width()+200+(this.obstacles[i].Width>>1);
            obs_x = Math.ceil(obs_x);

            if(obs_x>GameVar.flappy_pos && obs_x<(GameVar.flappy_pos+this.obstacles[i].Width+(this.flappy.height>>1))){
                this.curr_top = this.obstacles[i].top;
                this.curr_bot = this.obstacles[i].bot;
                //Constant.trace(obs_x);
            }

            if(obs_x<GameVar.flappy_pos-(this.flappy.height>>1)){
                this.obstacles_pass.push(this.obstacles.shift());

                GameVar.obs_conut++;
                if(GameVar.obs_conut>=0){
                    this.score.text = GameVar.obs_conut+'';
                }
                //Constant.trace('pass one obs!');
            }
        }
        //delete obs
        for(var i:number = 0;i<this.obstacles_pass.length;i++){
            this.obstacles_pass[i].x -=GameVar.world_speed;
            var obs_x:number = this.obstacles_pass[i].x+GlobalVar.stage_width()+200+(this.obstacles_pass[i].Width>>1);

            if(obs_x<-200){
                var obs:Obstacle = this.obstacles_pass.shift();
                this.UI.removeChild(obs);
                //Constant.trace('delete one obs!');
            }
        }

        //Constant.trace(this.obstacles[1].x+">"+GameVar.flappy_pos +'&&'+this.obstacles[1].x+"<"+(GameVar.flappy_pos+this.obstacles[0].Width));

        this.disatace_listen+=GameVar.world_speed;
        if(this.disatace_listen >= GameVar.obs_density){
            this.disatace_listen =0;
        }

        //Drop to ground
        if((this.flappy.y + (this.flappy.height>>1))<=this.curr_bot && (this.flappy.y-(this.flappy.height>>1) )>=this.curr_top){
            this._gravity(this.flappy);
        }else{
            this.UI.overPlay();
        }
    }

    private die(){
        if((this.flappy.y + (this.flappy.height>>1))<=this.curr_bot && (this.flappy.y-(this.flappy.height>>1) )>=this.curr_top){
            this._gravity(this.flappy);
        }else{
            this.stage.removeEventListener(egret.Event.ENTER_FRAME,this.die,this);
        }
    }


    private _ontab(){
        this.flappy.rotation = 0;
        this.flappy.velocity = -10;
        //this.flappy.y -= 80;
        GameVar.tap_conut++;
    }

    private _gravity(obj:SpriteEx){
        var g:number;g = GameVar.world_g;
        obj.velocity += g;

        obj.rotation ++;
        obj.y += obj.velocity;
        //Constant.trace(obj.velocity);
    }
}