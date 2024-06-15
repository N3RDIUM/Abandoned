const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var camera = p5.Camera()
var engine, world;
var asteroids = []
var cam = {x:0,y:0}
var player;

function preload(){

}

function setup(){
    canvas = createCanvas(windowWidth-0,windowHeight-0)
    engine = Engine.create();
    world = engine.world;
    world.gravity.y = 0
    Engine.run(engine)
    var rand = random(300,400)
    for(var i=0;i<rand;i++){
        asteroids.push(new Asteroid())
    }
    player = new Player()
    document.oncontextmenu = function() { return false; }
}

function draw(){
    background('black')
    player.display()
    player.updatePos()
    for(var i=0;i<asteroids.length;i++){
        asteroids[i].display()
    }
    drawSprites()
}  

function windowResized(){
    resizeCanvas(windowWidth-0,windowHeight-0)
}