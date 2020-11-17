
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
     

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob = new Bob(200,600,70,70);
	bob2 = new Bob(270,600,70,70);
	bob3= new Bob(340,600,70,70);
	bob4= new Bob(410,600,70,70);
	bob5 = new Bob(480,600,70,70);
	
	roof= new Roof(350,350,500,40)

	rope =new Rope(bob.body,roof.body)
	rope2 =new Rope(bob2.body,roof.body)
	rope3 =new Rope(bob3.body,roof.body)
	rope4 =new Rope(bob4.body,roof.body)
	rope5 =new Rope(bob5.body,roof.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(bob.body, {x: mouseX , y: mouseY});
}



