class AssetsLoadModel extends egret.EventDispatcher{

    public constructor() {
        super();
        //TODO:your code here

        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.loadComplete,this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.loadProgress,this);

        RES.loadConfig('resource/resource.json','resource/');
        RES.loadGroup('mainload');//RES.loadGroup('preload');
    }

    private loadComplete(e:RES.ResourceEvent){
        if (e.groupName == "preload") {
            Constant.trace('Pre Load Complete!');
            this.dispatchEvent(new FlappyEvents(FlappyEvents.PRE_READY));
            RES.loadGroup('mainload');
        } else if(e.groupName == "mainload"){
            Constant.trace('Assets Load Complete!');
            this.dispatchEvent(new FlappyEvents(FlappyEvents.ASSET_READY));
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.loadComplete,this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS,this.loadProgress,this);
        }
    }

    private loadProgress(e:RES.ResourceEvent){
        if(e.groupName!='RES__CONFIG'){
            var pct = e.itemsLoaded / e.itemsTotal * 100;
            Constant.trace('Loading '+e.resItem.url+' in '+e.groupName+' '+pct+'%');
        }
    }


}