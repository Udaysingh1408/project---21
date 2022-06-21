var ball;
var engine,world
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	groundObj=new ground (width/2,670,width, 20);
	leftSide = new ground (1100, 600, 20, 120)
	RightSide = new ground (1500, 600, 20, 120)
	//Create the Bodies Here.
	var ball_options={ 
		isStatic: false,
		 restitution:0.3, 
		friction: 0,
		 density:1.2,
	
}

ball = Bodies.circle(50,200,20,ball_options)
World.add(world,ball)

	Engine.run(engine);
	
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	 Matter.Body.applyForce(ball,ball.position,{x:95,y:-95})
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  RightSide.display();
  ellipse(ball.position.x,ball.position.y,40,40)
  drawSprites();
 
}



