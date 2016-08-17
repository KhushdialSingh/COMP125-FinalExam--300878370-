var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }

    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");

    img = new Image();
    img.src = '.\Assets\images\blank.png';
    ctx.drawImage(img,10,10);


    function gameLoop() {
        stage.update();
    }
    function main() {
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map