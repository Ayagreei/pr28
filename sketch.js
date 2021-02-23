
const Engine1 = Matter.Engine;
const World1 = Matter.World;
const Bodies1 = Matter.Bodies;
const Body1 = Matter.Body;
const Constraint = Matter.Constraint; 

var gameState = 1;
//var PLAY = 1;
//var END = 0;
var x=200,y=645,v=0;

var img;
var bin,line;

function preload(){
img=loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	engine = Engine1.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Ground = new Ground(800,650,1600,10);
	Engine1.run(engine);



	wall1 = new Bath(875,555,8,200);
	wall2 = new Bath(725,555,8,200);
	wall3 = new Bath(800,640,158,8);

	wall4 = new Bath(1175,555,8,200);
	wall5 = new Bath(1025,555,8,200);
	wall6 = new Bath(1100,640,158,8);

	wall7 = new Bath(1475,555,8,200);
	wall8 = new Bath(1325,555,8,200);
	wall9 = new Bath(1400,640,158,8);
	ball = new Ball(200,100);
	bin = createSprite(800,530,308,70);
	bin.addImage(img);
	bin.scale = 0.7;
	bin = createSprite(1100,530,308,70);
	bin.addImage(img);
	bin.scale = 0.7;

	bin = createSprite(1400,530,308,70);
	bin.addImage(img)
	bin.scale = 0.7

	rope = new Rope(ball.body, {x:200,y:50});

}

function draw() {
	background("white");
  rectMode(CENTER);
   Engine1.update(engine);
	wall1.display();
	wall2.display();
	wall3.display();
	wall4.display();
	wall5.display();
	wall6.display();
	wall7.display();
	wall8.display();
	wall9.display();
	Ground.display();
	ball.display();

	rope.display();

	//mouseDragged();
 //mouseReleased();
  drawSprites();

}

function  mouseDragged() {
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	rope.hi()
}
