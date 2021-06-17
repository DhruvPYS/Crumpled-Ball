
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, left, down, right, ground0, engine, world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(70,580, 10)

down = new Dustbin(600, 650, 150, 30)
left = new Dustbin(540,600,30,130)
right = new Dustbin(665,600,30,130)
ground0 = new Ground(400, 680)


	Engine.run(engine);
  
}


function draw() {
	
	Engine.update(engine)
	background("white")


  rectMode(CENTER);
  background(0);
  paper.display();
down.display()
left.display();
right.display();
ground0.display();
  
  drawSprites();
 
}

function keyPressed()
{
if(keyCode === UP_ARROW)
{
Matter.Body.applyForce(paper.body, paper.body.position, {x:14, y:-14})
}
}



