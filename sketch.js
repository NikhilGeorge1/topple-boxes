const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2
var ground1
var ball
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ball=new Ball(67,67,67,67)
    box1 = new Box(51,48,50,50);
    box2 = new Box(59,22,50,50)
    ground1=new ground(200,380,40044,10)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ball.display();
    ground1.display();
}