var fixedRect, movingRect;

function setup()
{
  createCanvas(800,800);
  fixedRect=createSprite(200,200,50,50); 
  fixedRect.shapeColor="red";
  fixedRect.debug=true;

  movingRect=createSprite(300,200,50,50); 
  movingRect.shapeColor="red";
  movingRect.debug=true;
 
 gameobject1=createSprite(100,100,50,50);
 gameobject1.shapeColor="red";
 gameobject2=createSprite(200,100,50,50);
 gameobject2.shapeColor="red";
 gameobject3=createSprite(300,100,50,50);
 gameobject3.shapeColor="red";
 gameobject4=createSprite(400,100,50,50);
 gameobject4.shapeColor="red";
}


function draw()
{
background(" gold ");

movingRect.x=mouseX;
movingRect.y=mouseY;

if(isTouching(movingRect,gameobject1))
{
  gameobject1.shapeColor="blue";
  movingRect.shapeColor="blue";
}

else
{
  gameobject1.shapeColor="red";
  movingRect.shapeColor="red";
}

drawSprites();
}


function isTouching(object1,object2)
{
  if(object1.x - object1.x  < object2.width/2 + object1.width/2 && 
    object2.x   - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y  < object2.height/2 +object1.height/2 && 
    object2.y   - object1.y < object2.height/2 + object1.height/2)
 {
   return true;
 }
 else
 {
   return false;
 }
}