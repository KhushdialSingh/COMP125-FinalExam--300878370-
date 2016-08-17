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
        createjs.Ticker.on("tick", gameLoop);
        main();
    }

    

    function gameLoop() {
        stage.update();
    }
    function main() {


/*var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var bitmap = new createjs.Bitmap("./Assets/images/blank.png");
    //context.drawImage(bitmap, 69, 50);
    createjs.Bitmap = bitmap;*/

    

    var img1 = new Image();
    img1.src = "./Assets/images/blank.png";
    var bitmap1 = new createjs.Bitmap(img1);
    bitmap1.x = 70;
    stage.addChild(bitmap1);
    stage.update();

    var img2 = new Image();
    img2.src = "./Assets/images/blank.png";
    var bitmap2 = new createjs.Bitmap(img2);
    bitmap2.x = 350;
    stage.addChild(bitmap2);
    stage.update();

    var button = new Image();
    button.src = "./Assets/images/rollButton.png";
    var bitmap3 = new createjs.Bitmap(button);
    bitmap3.x = 450;
    bitmap3.y = 500;
    stage.addChild(bitmap3);
    stage.update();


    
/*      var imageObj = new Image();

      imageObj.onload = function() {
        context.drawImage(imageObj, 69, 50);
        context.drawImage(imageObj, 350, 50);
      };
      imageObj.src = './Assets/images/blank.png';
*/
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map