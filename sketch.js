
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var Ground,paper,dustbin;
function setup() 
{
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Ground = new ground(width/2,670,width,20);
	paper= new Paper(200,450,70);
	dustbin=new Dustbin(1200,650);

var render = Render.create({
	element: document.body,
	engine: engine,
	options: { 
		width: 1600,
		height: 700,
		wireframes: false
	}
});
	Engine.run(engine);
	Render.run(render);
  
}
  

function draw() 
{
  rectMode(CENTER);
  background(230);

  
  
  drawSprites();
 paper.display();
 Ground.display();
 dustbin.display();
}

function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});

	}



}

