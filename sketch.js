var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

  box=createSprite (400,300,20,20)
  box.shapeColor="red";

  block1 = createSprite (90,580,200,15);
  block1.shapeColor="brown";

  block2=createSprite (300,580,200,15);
  block2.shapeColor="yellow";

  block3=createSprite(510,580,200,15);
  block3.shapeColor="green";

 block4=createSprite(720,580,200,15);
 block4.shapeColor="pink";

    //create 4 different surfaces

 box.velocityX=-4;
 box.velocityY=5;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    if(block1.isTouching (box) ){
        box.shapeColor="brown"
        box.bounceOff(block1); 

       }


       if(block2.isTouching(box)){
        box.shapeColor="yellow"
       // box.bounceOff(block2);
       box.velocityX=-0;
       box.velocityY=0;
      
       }
      
       if(block3.isTouching(box)){
        box.shapeColor="green"
        box.bounceOff(block3);   
       }

       if(block4.isTouching(box)){
        box.shapeColor="pink"
        box.bounceOff(block4);    
       }



 Edge= createEdgeSprites();
  box.bounceOff(Edge);
    //add condition to check if box touching surface and make it box
    drawSprites();
}