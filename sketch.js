var jaxonimg, streetimg, street, jaxon, leftside, rightside;

function preload(){
 
  jaxonimg=loadAnimation("runner-1.png", "runner-2.png");
  
  streetimg=loadImage("path.png");
  
}

function setup(){
  createCanvas(400,400);
  
  street=createSprite(200,200);
  street.addAnimation("street", streetimg);
  street.velocityY=5;
  street.y=street.height/30;
  
  jaxon=createSprite(200, 200);
  jaxon.addAnimation("running", jaxonimg);
  
  leftside=createSprite(0,300,100,600);
  rightside=createSprite(390,300,80,600);
  
  leftside.visible=false;
  rightside.visible=false;
  
}

function draw() {
  background(0);
  
  street.velocityY=5;
  
  jaxon.x=World.mouseX;
  
  if(street.y>400) {
  street.y=height/2 ;
  
}
  jaxon.collide(leftside);
  jaxon.collide(rightside);
  
  edges=createEdgeSprites();
  jaxon.collide(edges[3]);
drawSprites();
}
