const Engine= Matter.Engine;
const World= Matter.World
const Bodies= Matter.Bodies;
var plinko=[]
var particle=[]
var divisions=[]
function preload(){

  
}
function setup() {
  createCanvas(480,800);
 
engine=Engine.create()
world=engine.world

Engine.run(engine)
ground1=new Ground(240,790,485,30)
ground2=new Ground(0,400,30,800)
ground3=new Ground(480,400,40,800)





}








function draw() {
  background("black");  

ground1.display()
  ground2.display()
    ground3.display()
  
    for(i=16;i<450;i=i+45){
      divisions.push(new Divisions(i,650))
      }

for(i=20;i<width;i=i+50){
  plinko.push(new Plinko(i,50))
}

for(i=20;i<width;i=i+50){
  plinko.push(new Plinko(i,150))
}

for(i=20;i<width;i=i+50){
  plinko.push(new Plinko(i,250))
}

for(i=20;i<width;i=i+50){
  plinko.push(new Plinko(i,350))
}
  drawSprites();
  
if(frameCount%30===0){
particle.push(new Particle() )
}
//display particle

for(i=0;i<particle.length;i++){
  particle[i].display()
}

for(i=0;i<divisions.length;i++){
divisions[i].display()
}

for(i=0;i<Plinko.length;i++){
  plinko[i].display();
  }
}
