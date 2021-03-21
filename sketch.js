
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ballDiameter;
var roof1;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1=new Roof(350,100,650,50);

	ball1=new Ball (350,560);
	rope1=new Rope(ball1.body,roof1.body,0,0)

	ball2=new Ball (480,560);
	rope2=new Rope(ball2.body,roof1.body,130,0)

	ball3=new Ball (610,560);
	rope3=new Rope(ball3.body,roof1.body,260,0)

	ball4=new Ball (220,560);
	rope4=new Rope(ball4.body,roof1.body,-130,0)

	ball5=new Ball (90,560);
	rope5=new Rope(ball5.body,roof1.body,-260,0)




	Engine.run(engine);
  
}


function draw() {
  
  background(225);
  textSize(20);
  text(mouseX+","+mouseY,mouseX,mouseY)
  
  roof1.display();
  
  rope1.display();
  ball1.display();
  
  rope2.display();
  ball2.display();

  rope3.display();
  ball3.display();

  rope4.display();
  ball4.display();

  rope5.display();
  ball5.display();
  
}
function keyPressed(){
	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(ball5.body,ball5.body.position,{x:-400,y:-100})
	}
	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(ball3.body,ball3.body.position,{x:400,y:-100})
	}
}



