
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,forest,forestImage;
var FoodGroup, obstaclesGroup;
var score;



function preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  forestImage = loadImage("forest.jpg");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

 
}



function setup() {
 createCanvas(600,600);
 forest = createSprite(300,300,600,600);
 forest.addImage(forestImage);
 monkey = createSprite(200,400,40,40);
 monkey.addAnimation("running",monkey_running);
 monkey.scale = 0.2;
 
 ground = createSprite(300,550,1200,10);
 ground.velocityX = -2;
 ground.x = ground.width/2;

 FoodGroup = createGroup();
 obstaclesGroup = createGroup();
  

  
}


function draw() {
  background("white");
  
  if(ground.x<0){
  ground.x = ground.width/2;
    
  }
  if(keyDown("space")){
  monkey.velocityY = -10;
  
  }
  monkey.velocityY = monkey.velocityY + 2;
  monkey.collide(ground);
  
  spawnFood();
  spawnObstacle();
  drawSprites();
  
}
function spawnFood(){
 if(frameCount % 80 === 0){
 var banana = createSprite(600,300,40,40);
 camera.y = Math.round(random(80,250));
 banana.addImage(bananaImage);   
 banana.scale = 0.1;
 banana.velocityX = -8;
 banana.lifetime = 45;
}
  
}
function spawnObstacle(){
 if(frameCount % 60 === 0){
 var obstacle = createSprite(600,200,40,40);
 camera.y = Math.round(random(300,450));
 obstacle.addImage(obstacleImage);
 obstacle.scale = 0.1;
 obstacle.velocityX = -3;
 obstacle.lifetime = 200;
}


/*if(KeyIsDown(LEFT_ARROW)){
  monkey.x = x - 1;
}
  
if(KeyIsDown(RIGHT_ARROW)){
  monkey.x = x + 1;

}*/
}



