const Engine = Matter.Engine;
const Constraint = Matter.Constraint ;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    roof = new Ground(600,100,500,30);


    bob1 = new Bob(810,160,50);
    bob2 = new Bob(740,160,50);
    bob3 = new Bob(670,160,50);
    bob4 = new Bob(600,160,50);
    bob5 = new Bob(530,160,50);
    
    

    chain1 = new Chain(bob1.body,{
        x:400,y:100
    })

    
    chain2 = new Chain(bob2.body,{
        x:450,y:100
    })
    
    chain3 = new Chain(bob3.body,{
        x:500,y:100
    })
    
    chain4 = new Chain(bob4.body,{
        x:550,y:100
    })
    
    chain5 = new Chain(bob5.body,{
        x:600,y:100
    })

}
function draw(){
    background(backgroundImg);
    Engine.update(engine);
    roof.display()
    ground.display();
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    
    chain5.display();
    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    
}