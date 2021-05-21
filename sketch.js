var ball,ball_img;
var dustbin,dustbin_img;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ball_img=loadImage("paper.png")
	dustbin_img=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 300);
    
	ball=createSprite(200,250,10,10)
	ball.addImage("ballImage",ball_img)

	engine = Engine.create();
	world = engine.world;

	box1=new Dustbin(800,275,200,20)
	box2=new Dustbin(700,280,20,200)
	box3=new Dustbin( 900,280,20,200)
	ground=new Ground(600,290,1200,20)
	paperball=new Paper(200,275,25)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paperball.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if(keyWentDown(UP_ARROW)){
Matter.Body.applyForce(paperball.body,paperball.body.position,{x:25,y:25})
	}
}



