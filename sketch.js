const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var log6;
var slingShot1;

var gameState = "Onsling";

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    getBgImg ();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 165);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(282,70);
    slingShot1 = new Slingshot(bird.body,{x: 282, y: 70});

}

function draw(){
    if (backgroundImg) 
    background(backgroundImg);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    slingShot1.display();

    bird.display();
    platform.display();
}

function mouseDragged ()
{
    if (gameState === "Onsling")
    {
        Matter.Body.setPosition (bird.body, {x: mouseX, y: mouseY})
    }
} 

function mouseReleased ()
{
    slingShot1.fly ()
    gameState = "launched";
} 

function keyPressed ()
{
    if (keyCode === 32 && gameState === "launched" && bird.body.speed < 1)
    {
        bird.trajectory = [];
        Matter.Body.setPosition (bird.body, {x: 282, y: 70});
        Matter.Body.setAngle (bird.body, PI/12);
        slingShot1.attach (bird.body);
    }
} 

async function getBgImg () 
{
    var response = await fetch ("http://worldclockapi.com/api/json/est/now");
    console.log (response);

    var responseJson = await response.json ();
    console.log (responseJson); 

    var currentDT = responseJson.currentDateTime;
    console.log (currentDT);

    var hour = currentDT.slice (11,13);
    console.log (hour);

    if (hour >= 6 && hour <= 18)
    {
        backgroundImg = loadImage ("sprites/bg.png");
    } else 
    {
        backgroundImg = loadImage ("sprites/bg2.jpeg");
    }   
}