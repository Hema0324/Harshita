var engine, world;
var back,monsterImg,monster,monsterBody;


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

function preload(){
back=loadImage("GamingBackground.png")
 monsterImg=loadImage("Monster-01.png")
}

function setup(){
    var canvas = createCanvas(3000,800);
   
    monster=createSprite(1050, 200, 50,50);
    monster.addImage(monsterImg)
    monster.scale=0.2


     engine = Engine.create();
    world = engine.world;


    monsterBody = Bodies.circle(1050 , 200 , 4 , {restitution:0.4, isStatic:true});
    World.add(world, monsterBody);

hero=new Hero(300,400,130,130)
rope=new Rope(hero.body,{x:300,y:50})

strokeWeight(4)
ground=new Ground(600,600,3000,20)
box1=new Building(700,100,70,70)
box2=new Building(700,100,70,70)
box3=new Building(700,100,70,70)
box4=new Building(700,100,70,70)
box5=new Building(700,100,70,70)
box6=new Building(700,100,70,70)
box7=new Building(600,100,70,70)
box8=new Building(600,100,70,70)
box9=new Building(600,100,70,70)
box10=new Building(600,100,70,70)
box11=new Building(600,100,70,70)
box12=new Building(600,100,70,70)
box13=new Building(500,100,70,70)
box14=new Building(500,100,70,70)
box15=new Building(500,100,70,70)
box16=new Building(500,100,70,70)
box17=new Building(500,100,70,70)
box18=new Building(500,100,70,70)
box19=new Building(500,100,70,70)
box20=new Building(500,100,70,70)
Engine.run(engine);
  
}

function draw(){
    background(back)
    Engine.update(engine)
     monster.x= monsterBody.position.x 
  monster.y= monsterBody.position.y 
    ground.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    hero.display()
   rope.display()
   drawSprites()
}
function mouseDragged(){
  //  if (gameState!=="launched"){
        Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
    }
//}


function mouseReleased(){
    rope.fly();
  
}



