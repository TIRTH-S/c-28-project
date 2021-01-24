
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	//treeimg=loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);

	//tree.addImage(treeimg);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Ground(100,200,120,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);

  
  
  drawSprites();
 
}



