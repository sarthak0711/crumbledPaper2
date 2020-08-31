
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,box,box1,box2,dustbin;

function preload()
{
	paper=loadImage("paper.png")
	dustbin=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options={
		isStatic:true,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}

	var ground_options={
		isStatic:true
	}

	var box_options={
		isStatic:true
	}

	//Create the Bodies Here.
	//paper = Bodies.circle(300,580,30,options)
	//World.add(world,paper)

	
	
	ground = Bodies.rectangle(350,600,400,20,ground_options);
	World.add(world,ground)

	//box1=createSprite(570,580,160,20)
	//box1.shapeColor="red"
	//box1= Bodies.rectangle(570,580,160,20,{isStatic:true});
	//World.add(world,box1)
	

	//box=createSprite(650,540,20,100)
	//box.shapeColor="red"
	//box=Bodies.rectangle(650,540,20,100,{isStatic:true});
	//World.add(world,box)
	


	//box2=createSprite(490,540,20,100)
	//box2.shapeColor="red"
    //box2=Bodies.rectangle(490,540,20,100,{isStatic:true});
	//World.add(world,box2)
	
	paper=new Paper();
	dustbin=new Dustbin();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

/*rectMode(CENTER);
rect(ground.position.x,ground.position.y,1000,20);
push()
fill("red")
rect(box.position.x,box.position.y,20,100)
rect(box1.position.x,box1.position.y,160,20);
rect(box2.position.x,box2.position.y,20,100);
pop();*/


paper.display();

dustbin.display();

  
  drawSprites();
 
}

function keyPressed(){

   if(keyCode === UP_ARROW){
       Matter.Body.applyForce(paper.body,paper.body.position,{x:11,y:-11});
   }

}


