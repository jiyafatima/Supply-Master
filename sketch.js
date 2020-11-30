var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,packageBody_options,ground,ground_options;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ourEngine,ourWorld,helicopter,packageBody;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
   var  ground_options {
        isStatic:true
   }

	engine = Engine.create();
	world = engine.world;
    
	var packageBody_options
        restitution:3
	
    

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add (world, packageBody,options packageBody);
	
    console.log(packageBody.position.x);
	console.log(packageBody.position.y);
    

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 
	Engine.run(engine);
  
}


function draw() { 
  rectMode(CENTER);
  background(200,200,50,50);
  Engine.update(engine);
  rectMode(CENTER);
  
  rect(packageBody.position.x,packageBody.y,50,50);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
 
  function keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  
  ellipseMode(RADIUS);
  ellipse(packageSprite.position.x.packageSprite.position.y.20,20);
  

  }
}



