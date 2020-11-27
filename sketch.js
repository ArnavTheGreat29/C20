var fixedObject;
var movingObject;
function setup() {
  createCanvas(800,400);
 fixedObject = createSprite(400,200,30,30)
 fixedObject.shapeColor = "blue"
 movingObject = createSprite(200,200,30,30)
 movingObject.shapeColor = "blue"
}

function draw() {
  background(0);  
movingObject.y = mouseY
movingObject.x = mouseX

if(fixedObject.x- movingObject.x  <= fixedObject.width/2 + movingObject.width/2 && 
  movingObject.x- fixedObject.x  <= fixedObject.width/2 + movingObject.width/2 &&
  fixedObject.y- movingObject.y  <= fixedObject.height/2 + movingObject.height/2 && 
  movingObject.y- fixedObject.y  <= fixedObject.height/2 + movingObject.height/2 ){
  fixedObject.shapeColor = "yellow"
  movingObject.shapeColor = "yellow"
}else{
  movingObject.shapeColor = "blue"
  fixedObject.shapeColor = "blue"
}

  drawSprites();
}