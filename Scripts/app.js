var core;



(function (core) {
    
    var canvas;
    var stage;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
       // createjs.Ticker.on("tick", gameLoop);
        main();
    }

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var bitmap = new createjs.Bitmap("./Assets/images/blank.png");
    //context.drawImage(bitmap, 69, 50);
    createjs.Bitmap = bitmap;
    /*var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
      var imageObj = new Image();

      imageObj.onload = function() {
        context.drawImage(imageObj, 69, 50);
        context.drawImage(imageObj, 350, 50);
      };
      imageObj.src = './Assets/images/blank.png';
*/

    function gameLoop() {
        stage.update();
    }
    function main() {
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map