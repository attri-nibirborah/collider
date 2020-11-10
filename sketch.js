var bullet ,wall;
var weight, speed,thickness;



function setup() {
  createCanvas(1600,400);
  
  speed= random (55,90);
  weight = random (400,1500);

  thickness= random (22,83)

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;

  wall=createSprite(1500,200,thickness,height/2);



}
function draw() {
  background("grey");  
 if(wall.x-bullet.x<(bullet.width+wall.width)/2) {
   bullet.velocityX=0;
  
   var demage=0.5*weight*speed*speed/(thickness * thickness * thickness);
  
   if(demage>10){
   bullet.shapecolor=("red")
  }
   if(demage<10){
     bullet.shapecolor= color("green");
   }
 
  
  }
 
 
  drawSprites()


  }
