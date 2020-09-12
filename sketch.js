var car,bullet;
var speed, weight, thickness; 
function setup() {
  createCanvas(1600, 400);
	speed=random(223,321)
	thickness=random(22,83)
	weight=random(30,52)
	bullet =createSprite(50, 200, 50,50);   
	bullet.velocityX = speed;
	bullet.shapeColor=color(255);
  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}
function draw() {
  background(0);
  if(hasCollied(bullet,wall)){
	bullet.velocityX=0;
	var damage =0.5 * weight * speed* speed/(thickness*thickness*thickness);
  if(damage>10)
  {
	  wall.shapeColor=color(255,0,0);
  }
  if(damage<10)
  {
	  wall.shapeColor=color(0,255,0);
  }
}
else{
	wall.shapeColor=color(890,80,80);
	bullet.velocityX=speed;
}
  drawSprites();
}
function hasCollied(object1, object2){
	if(object2.x-object1.x < object2.width/2+object1.width/2)
	{
		return true;
	
	}
	else{
		return false;
	}  
	/*bulletRightEdge=object1.x+object1.width;
	wallLeftEdge=object2.x;
	if(bulletRightEdge>=wallLeftEdge){
return true;
	}
	else{
		return false;
	}*/

}