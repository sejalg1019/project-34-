const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,height,800,20);
  box1 = new Box(650,380,50,50);
  box2 = new Box(700,380,50,50);
  box3 = new Box(600,380,50,50);

  box4 = new Box(650,330,50,50);
  box5 = new Box(700,330,50,50);
  box6 = new Box(600,330,50,50);

  box7 = new Box(650,280,50,50);
  box8 = new Box(700,280,50,50);
  box9 = new Box(600,280,50,50);

  box10 = new Box(650,230,50,50);
  box11 = new Box(700,230,50,50);
  box12 = new Box(600,230,50,50);

  box13 = new Box(650,180,50,50);
  box14 = new Box(700,180,50,50);
  box15 = new Box(600,180,50,50);

  ball = new Ball(500,height-15,75,75);
  rope = new Rope(ball.body,{x:475, y:75});
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  ball.display();
  rope.display();

}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX, y: mouseY});
}

