const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var database
var engine, world;
var pigs=[];
var sling;
var bird;

function preload(){
    backgroundImg = loadImage("sprites/download.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    database = firebase.database()
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20)
/*
    box1 = new Box(600,320,70,70);
    box2 = new Box(680,320,70,70);
    box3 = new Box(770,320,70,70);
    box4 = new Box(860,320,70,70);
    box5 = new Box(925,320,70,70);
    box6 = new Box(520,320,70,70);
    box7 = new Box(925,390,70,70);
    box8 = new Box(520,390,70,70);
    log1 = new Box(750,400,300,10);
*/
    bird = new Bird(100,100);
    //sling = new Sling(bird.body,{x:200, y:100});
}

function draw(){
    background(backgroundImg);

    Engine.update(engine);
/*
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    log1.display();*/

    ground.display();
    bird.display();
    //sling.display();
    
    if (frameCount%60===0){
        pigs.push(new Pigs(random(width/2-10,width/2+10),10,10))
    }
    //drawSprites();
}