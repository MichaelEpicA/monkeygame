
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, survivalTime;
var floor;
var jungleImage;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImage = loadImage("jungle.jpg");
}



function setup() {
  monkey = createSprite(30,300,10,10);
  monkey.addAnimation("running",monkey_running); 
  monkey.scale = 0.1;

  floor = createSprite(0,350,800,10);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  survivalTime = Math.ceil(frameCount/frameRate());
  background(jungleImage);
  floor.velocityX = -3;
  if(floor.x < 0) {
    floor.x = 0;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(floor);
  
  Food();
  Obstacle();
  if(FoodGroup.isTouching(monkey)) {
    score += 1;
    FoodGroup.destroyEach();
  }
  
  drawSprites();
  fill("cyan");
  textSize(20);
  text("Survival Time: " + survivalTime,150,20);
  
}

function Food() {
  if(World.frameCount % 80 == 0) {
     banana = createSprite(200,Math.round(random(120,200)));
     banana.addAnimation("banana",bananaImage);
     banana.scale = 0.1;
     banana.velocityX = -4;
     banana.lifetime = 100;
     FoodGroup.add(banana);
  }
}

function Obstacle() {
  if(World.frameCount % 300 == 0) {
    obstacle = createSprite(300,330);
     obstacle.addAnimation("obstacle",obstacleImage);
     obstacle.scale = 0.1;
     obstacle.velocityX = -4;
     obstacleGroup.add(banana);
  }
}





