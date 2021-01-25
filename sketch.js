const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3,block4, block5,block6,block7, block8, block9,block10, block11,block12,block13, block14, block15,block16;
var polygon, slingShot, polygon_img;
var ground1, ground2;
var backgroundImg,bg;
function preload(){
    polygon_img=loadImage("polygon.png");
    getbgImage();
}

function setup(){
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);



slingShot = new SlingShot (this.polygon, {x:100,y:200});

ground1=new Ground(390,310,270,12);

block1 = new Box(300,275,30,40);
block2 = new Box(330,275,30,40);
block3 = new Box(360,275,30,40);
block4 = new Box(390,275,30,40);
block5 = new Box(420,275,30,40);
block6 = new Box(450,275,30,40);
block7 = new Box(480,275,30,40);

block8 = new Box(330,235,30,40);
block9 = new Box(360,235,30,40);
block10 = new Box(390,235,30,40);
block11 = new Box(420,235,30,40);
block12 = new Box(450,235,30,40);

block13 = new Box(360,195,30,40);
block14 = new Box(390,195,30,40);
block15 = new Box(420,195,30,40);

block16 = new Box(390,155,30,40);

ground2 = new Ground(800,225,210,12);

block17 = new Box(740,205,30,40);
block18 = new Box(770,205,30,40)
block19 = new Box(800,205,30,40)
block20 = new Box(830,205,30,40)
block21 = new Box(860,205,30,40);

block22 = new Box(770,165,30,40)
block23 = new Box(800,165,30,40)
block24 = new Box(830,165,30,40)

block25 = new Box(800,125,30,40);

ground3 = new Ground(0,400,5000,30);
}
function draw(){
    if (backgroundImg){
        background(backgroundImg);
        }
     Engine.update(engine);
 
     
     ground1.display();
     ground3.display();
     block1.display(); 
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     block6.display();
     block7.display();
     block8.display(); 
     block9.display(); 
     block10.display(); 
     block11.display(); 
     block12.display(); 
     block13.display(); 
     block14.display(); 
     block15.display(); 
     block16.display();
     ground2.display(); 
     block17.display();
     block18.display();
     block19.display();
     block20.display();
     block21.display();
     block22.display();
     block23.display();
     block24.display();
     block25.display();
     
     fill("white");
    textSize(24);
    text("Drag the polygon to destroy the blocks",300,30)
    textSize(16);
    text("Press Space to get a second Chance to Play!!", 730,370);
    
     fill("gold");
     imageMode(CENTER);
     image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
 
     slingShot.display();
 }
 function mouseDragged(){
     Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
 }
 function mouseReleased(){
     slingShot.fly();
 }
 
 function keyPressed(){
	if(keyCode===32){
	  Matter.Body.setPosition(this.polygon,{x:100,y:200});
	  slingShot.attacher(this.polygon);
	}
  }
  async function getbgImage(){
     
    var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON =await response.json();
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
  
    if (hour>=06 && hour<=19){
        bg = "images/bg.png";
     
    }
    else{
   
      bg = "images/bg2.jpg";
    }
    backgroundImg = loadImage(bg);
  } 





