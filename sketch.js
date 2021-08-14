var garden,rabbit,gardenImg,rabbitImg , apple, appleImg,  applesGroup, leaf1 , leaf2 , leaf3 , leaf , leafsGroup  ; 
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leaf1 =  loadImage("leaf.png")
  leaf2 = loadImage("orangeleaf.png")
  leaf3 = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

applesGroup = createGroup();
leafsGroup = createGroup();
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  rabbit.x= World.mouseX
   
  var select_sprites = Math.round(random(1,2))

  if (frameCount % 80 === 0) {
    if (select_sprites == 1)
    {
      spawnApples()
    }
    else 
    {
      spawnleafs()
    }
  }
 
  drawSprites();
}

function spawnApples() {
  //write code here to spawn the apples
  //  if (frameCount % 60 === 0) {
    apple = createSprite(random(50,350),40,10,10)// createSprite(600,100,40,10);
   // apple.y = Math.round(random(10,60));
    apple.addImage(appleImg);
    apple.scale = 0.1;
    apple.velocityY = 2;
    
     //assign lifetime to the variable
    apple.lifetime = 150;
    
    //adjust the depth
     apple.depth = rabbit.depth;
     rabbit.depth = rabbit.depth + 1;
    
    //adding apple to the group
   applesGroup.add(apple);
   // }
}

function spawnleafs(){
  //if (frameCount % 60 === 0){
    var leaf = createSprite(random(50,350),40,10,10)
    leaf.velocityY = 1;
    
     //generate random leafs
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: leaf.addImage(leaf1);
               break;
       case 2: leaf.addImage(leaf2);
               break;
       case 3: leaf.addImage(leaf3);
               break;
      
       default: break;
     }
    
     //assign scale and lifetime to the leaf           
     leaf.scale = 0.1;
     leaf.lifetime = 250;
    
    //add each leaf to the group
     leafsGroup.add(leaf);
  }
 //}
 