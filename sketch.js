var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 50);
  fixedRect.shapeColor="blue";
 
  movingRect= createSprite(400, 200, 50, 50);
  movingRect.shapeColor="yellow";

}

function draw() {
  background("skyblue");  
   movingRect.x= World.mouseX;
   movingRect.y=World.mouseY;
console.log(movingRect.x-fixedRect.x)

if(isTouching())
{
movingRect.shapeColor="red"
fixedRect.shapeColor="red"
}
//console.log(movingRect.x+fixedRect.x/2)

//if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 )
//   {movingRect.shapeColor="red";
//   fixedRect.shapeColor="red";

 else{movingRect.shapeColor="green";
 fixedRect.shapeColor="green";

}
  drawSprites();
}

function isTouching(){
  if( movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 )
  {
    return true;

  }
else{
return false;

}

}
