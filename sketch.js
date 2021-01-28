var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  hulk=createSprite(100,100,100,100);
  hulk.shapeColor="pink";
}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(bounce(movingRect,hulk)){
    movingRect.shapeColor = "red";
    hulk.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    hulk.shapeColor = "pink";

  }
   
  if (bounce(movingRect,fixedRect)){
    movingRect.width=10;
    fixedRect.shapeColor="blue";
  }
  else{
    movingRect.width=80;
    fixedRect.shapeColor="green";
  }

  drawSprites();
}