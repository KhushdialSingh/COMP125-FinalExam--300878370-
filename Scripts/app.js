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

    //image of first dice
    var img1 = new Image();
    img1.src = "./Assets/images/blank.png";
    var bitmap1 = new createjs.Bitmap(img1);
    bitmap1.x = 70;
    stage.addChild(bitmap1);
    stage.update();
    
    //label for first dice
    var label1 = new createjs.Text("Hello World", "20px Arial", "#000");
    label1.x = 70;
    label1.y = 215;
    stage.addChild(label1);
    stage.update();

    //image of second dice
    var img2 = new Image();
    img2.src = "./Assets/images/blank.png";
    var bitmap2 = new createjs.Bitmap(img2);
    bitmap2.x = 350;
    stage.addChild(bitmap2);
    stage.update();

    //label for second dice
    var label2 = new createjs.Text("Hello World", "20px Arial", "#000");
    label2.x = 350;
    label2.y = 215;
    stage.addChild(label2);
    stage.update();

    //image of button
    var button = new Image();
    button.src = "./Assets/images/rollButton.png";
    var bitmap3 = new createjs.Bitmap(button);
    bitmap3.x = 250;
    bitmap3.y = 250;
    stage.addChild(bitmap3);
    stage.update();

    //function that gets executed onclick
    document.getElementById('canvas').addEventListener("click", function(){
    var v1 = Math.floor((Math.random() * 6) + 1);
    var v2 = Math.floor((Math.random() * 6) + 1);

    //update first picture
    var newpic1 = new Image();
    newpic1.src = "./Assets/images/" + v1 + ".png";
    var new1 = new createjs.Bitmap(newpic1);
    new1.x = 350;
    stage.addChild(new1);
    stage.update();

    //update label1
    var label2 = new createjs.Text(v1, "20px Arial", "#000");
    label2.x = 350;
    label2.y = 215;
    stage.addChild(label2);
    stage.update();

    //update first picture
    var newpic2 = new Image();
    newpic2.src = "./Assets/images/" + v2 + ".png";
    var new2 = new createjs.Bitmap(newpic2);
    new2.x = 350;
    stage.addChild(new2);
    stage.update();

    //update label 2
    label2 = new createjs.Text(v2, "20px Arial", "#000");
    label2.x = 350;
    label2.y = 215;
    stage.addChild(label2);
    stage.update();

    });
    
    
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