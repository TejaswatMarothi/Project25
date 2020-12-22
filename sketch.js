const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var paper;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 paper = new Paper(100,630,50);
	 box1 = new Dustbin(600,670,100,10)
	 box2 = new Dustbin(550,650,10,150)
	 box3 = new Dustbin(650,650,10,150)
	
	
	 ground = new Ground(400,690);
    

	Engine.run(engine);
  
}


function draw() {
  background("white");

  Engine.update(engine);

   paper.display();
   box1.display();
   box2.display();
   box3.display();
   ground.display();

 
   
}
function keyPressed() {
if (keyCode === UP_ARROW)
 { 
	 Body.applyForce(paper.body,paper.body.position,{x:55,y:-55})
 }
}
