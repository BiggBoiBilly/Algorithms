var move, nomove;
var edges;

function setup() {
  createCanvas(800,400);
   nomove = createSprite(400, 200, 50, 50);
   move = createSprite(500, 300, 50, 50);

   nomove.shapeColor ="green";
   move.shapeColor = "green";

   move.velocityY = 25;
   nomove.velocityY = -30;
   move.velocityX = 27;
   nomove.velocityX = -35;
  

}

function draw() {
  background(0 ,255 , 255); 

  
 edges = createEdgeSprites();




  if(move.x - nomove.x < move.width/2 + nomove.width/2
    && nomove.x - move.x < nomove.width/2 + move.width/2){


    nomove.shapeColor = "red";
    move.shapeColor = "blue";

    move.velocityX = move.velocityX * -1 ;
    nomove.velocityX = nomove.velocityX * -1 ;    
    





    }
    else{
      nomove.shapeColor = "green";
      move.shapeColor = "green";
    }   

if( move.y - nomove.y < move.height/2 + nomove.height/2
  && nomove.y - move.y < nomove.height/2 + move.height/2 ){

    nomove.shapeColor = "red";
    move.shapeColor = "blue";


    move.velocityY = move.velocityY * -1 ;
    nomove.velocityY = nomove.velocityY * -1 ;    


  }
  else{
    nomove.shapeColor = "green";
    move.shapeColor = "green";
  }


  move.bounceOff(edges);
  nomove.bounceOff(edges);

  drawSprites();
}
