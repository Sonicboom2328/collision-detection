
var frect,mrect;

function setup() {
  createCanvas(1200,800);
 frect= createSprite(600, 400, 50, 80);
 mrect=createSprite(400,200,80,30);
 frect.shapeColor="blue";
 mrect.shapeColor="blue";

}

function draw() {
  background(0,0,0);  
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  if(frect.x-mrect.x<frect.width/2+mrect.width/2 
    && mrect.x-frect.x<mrect.width/2+frect.width/2
   && frect.y-mrect.y<frect.height/2+mrect.height/2 
   && mrect.y-frect.y<mrect.height/2+frect.height/2 ){
    frect.shapeColor="green";
    mrect.shapeColor="green"; 
   }
   else{
    frect.shapeColor="blue";
    mrect.shapeColor="blue";
   }

  drawSprites();
}