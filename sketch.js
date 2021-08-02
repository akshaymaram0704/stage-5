const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var cupImg, ballImg, tableImg;
var cup, cup2, cup3, cup4, ball, restingBody
let engine;
let world;













function preload(){
  tableImg = loadImage("table.png")
  
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  cup = new Cup(280,120,80,80)
  cup2 = new Cup(350,120,80,80)
  cup3 = new Cup(210,120,80,80)
  cup4 = new Cup(140,120,80,80)
  ball = new Ball(211,414,60,60)
  slingshot = new SlingShot(ball.body, {x:200,y:400})
  rectMode(CENTER);
  restingBody = Bodies.rectangle(119,139,1000,10)
  World.add(world,restingBody);
  restingBody.isStatic = true

  
  
  

  
}

function draw() 
{
  background("white");
  background(tableImg);
  Engine.update(engine);
  text(mouseX+","+ mouseY,mouseX, mouseY)
  cup.display()
  cup2.display()
  cup3.display()
  cup4.display()
  ball.display()
  
  slingshot.display()

  if(ball.x==cup.x){
    World.remove(world, cup.body);
    

  }
  


  
  
  

  
  
  

  
  drawSprites();


}


function mouseDragged(){
    
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}


function mouseReleased(){
slingshot.fly();

}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(ball.body);
     
  }
}




