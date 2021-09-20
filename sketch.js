// using physics engine
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

//var engine,world;  

// creating sprite variables
var snow = [];
var boy,boyImg;
var snowman,snowmanImg;
var crystal,crystalImg1,crystalImg2,randS;
var bg;
var invisibleGround;


function preload(){

  bg = loadImage("bg.jpg");
  snowmanImg = loadImage("snowman.gif");
  boyImg = loadImage("boy.png");
  crystalImg1 = loadImage("snow5.webp");
  crystalImg2 = loadImage("snow4.webp");
}


function setup() {

  // creating canvas
  createCanvas(900,500);
  engine =Engine.create();
  world = engine.world;

  //creating snowman
  snowman = createSprite(700,425,50,50);
  snowman.addImage(snowmanImg);
  snowman.scale = 0.4;

  // creating boy
  boy = createSprite(290,400,50,50);
  boy.addImage(boyImg);
  boy.scale = 0.1;

  // creating invisible ground
  invisibleGround = createSprite(450,530,900,1);
  invisibleGround.visible = true;

  // creating snowfall
 // snowball = new Snow(Math.round(random(0,900)),Math.round(random(0,500)),100,100,50);

}


function draw() {
  // creating background
  background(bg); 
  //to update engine
  Engine.update(engine);

  // creating snow crystals
  if(frameCount%55===0){
     createCrystals();
  }

  //creating snow
  if(frameCount%20===0){
    snow.push(new Snow(random(30,1370),0,random(2,10),random(2,10)));
  }

  for(var i=0;i<snow.length;i++){
    snow[i].display();
  }

  // move to right when right arrow is pressed
  if (keyDown("RIGHT_ARROW")) {
    boy.x=boy.x+3;
  }

  // move to left when left arrow is pressed
  if (keyDown("LEFT_ARROW")) {
    boy.x=boy.x-3;
  }

  //jump when the up arrow key is pressed
  if(keyDown("UP_ARROW")) {
    boy.velocityY = -13;
  }
  //adding gravity
  boy.velocityY = boy.velocityY + 0.8;

  // stop boy from falling down
  boy.collide(invisibleGround);


  
  // to display sprites
  drawSprites();

}
 
function createCrystals(){
  crystal = createSprite(Math.round(random(30,1370)),0,10,10);
  crystal.velocityY=4;
  var randS=Math.round(random(0,1));
  if(randS===0){
    crystal.addImage(crystalImg1);
    crystal.scale=0.05;
  }else{
    crystal.addImage(crystalImg2);
    crystal.scale=0.1;
  }
  crystal.lifetime=280;
}




