
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dusbin1, dusbin2, dusbin3;
var paper1,ground1;
function preload()
{
	dusbin1=loadImage("dusbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	dusbin2=new Dusbin(500,535,20,150);
	

	paper1=new Paper(300,350);
	ground1 = new Ground(400,height,1200,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(222);
  

  //dusbin2.display();
  
  image(dusbin1, 500,500,200,200);
  paper1.display();
  ground1.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position, {x:105,y:405})
	}
}






