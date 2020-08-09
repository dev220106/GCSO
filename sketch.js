var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

 car = createSprite(50,200,50,50);

  wall = createSprite(1300,200,60,200);
wall.shapeColor="white";

  speed=random(55,90);
  weight=random(1500,400);

  car.velocityX=speed;

}

function draw() {
  background(80,80,80); 
  //if (wall.x-car.x<(car.width+wall.width)/2){
    if (car.collide(wall)){
car.velocityX=0;
var deformation=0.5*weight*height/22509
if (deformation>180){
  car.shapeColor="red";
}

if (deformation<180 && deformation>100){
car.shapeColor="yellow";
}

if (deformation<100){
  car.shapeColor="green";
}
  }
 drawSprites();
 }
