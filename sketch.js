const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var ground,engine,box1,world;
function setup() {
  createCanvas(800,400);

  engine = Engine.create ();
  world = engine.world;


  var ground_options={
    isStatic :true
  }
  ground = Bodies.rectangle(200,290,400,10);

World.add(world,ground);

}

function draw() {
  background(0);
  
  Engine.update(engine);

  rectMode(CENTER);
  RECT(ground.position.x,groun.position.y,400,10);

  drawSprites();
}
