var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AssetsLoadModel = (function (_super) {
    __extends(AssetsLoadModel, _super);
    function AssetsLoadModel() {
        _super.call(this);
        //TODO:your code here
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.loadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.loadProgress, this);
        RES.loadConfig('resource/resource.json', 'resource/');
        RES.loadGroup('preload');
    }
    AssetsLoadModel.prototype.loadComplete = function (e) {
        if (e.groupName == "preload") {
            Constant.trace('Pre Load Complete!');
            this.dispatchEvent(new FlappyEvents(FlappyEvents.PRE_READY));
            RES.loadGroup('mainload');
        }
        else if (e.groupName == "mainload") {
            Constant.trace('Assets Load Complete!');
            this.dispatchEvent(new FlappyEvents(FlappyEvents.ASSET_READY));
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.loadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.loadProgress, this);
        }
    };
    AssetsLoadModel.prototype.loadProgress = function (e) {
        if (e.groupName != 'RES__CONFIG') {
            var pct = e.itemsLoaded / e.itemsTotal * 100;
            Constant.trace('Loading ' + e.resItem.url + ' in ' + e.groupName + ' ' + pct + '%');
        }
    };
    return AssetsLoadModel;
})(egret.EventDispatcher);
