var background,backgroundImage;
var cat,cat1Image,cat2Image,cat3Image;
var mouse,mouse1Image,mouse2Image,mouse3Image;

function preload() {
    //load the images here
    backgroundImage=loadImage("garden.png");
    cat1Image=loadImage("cat1.png");
    mouse1Image=loadImage("mouse1.png");
   
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,400);
    cat.addAnimation("cat1",cat1Image);
    cat.scale=0.09;
    
    mouse=createSprite(400,400);
    mouse.addAnimation("mouse1",mouse1Image);
    mouse.scale=0.09;
    
}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.addAnimation("cat3.png",cat3.png);
        cat.changeAnimation("cat3.png");
        mouse.addAnimation("mouse3.png",mouse3.png);
        mouse.changeAnimation("mouse3.png");
        cat.velocityX=0;
    }



    
    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("cat2.png",cat2.png);
cat.changeAnimation("cat2.png");
mouse.addAnimation("mouse2.png",mouse2.png)
mouse.changeAnimation("mouse2.png");




}




}
