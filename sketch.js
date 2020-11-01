
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustBinWall1,dustBin,dustBinWall2,dustbins,dustbins1;
var ground,paper;

function preload()
{
  dustbins1=loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

dustBin=new Dustbin(600,590,100,100);

ground=new Ground(300,600,400,400);

paper=new Paper(100,200,50);


dustBinWall1=new Dustbino(670,480,5,60)

dustBinWall2=new Dustbino2(530,510,5,100)

dustbins=createSprite(600,500,30,30);
dustbins.addImage("dustbins",dustbins1)
dustbins.scale=0.6


var ball_options={
restitution:0.3,
isStatic: false,
friction:0.5,
density:1.2

}






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  dustBin.display();
  
  ground.display();

  paper.display();


dustBinWall2.display();

dustBinWall1.display();



  

  
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85})

}


}



