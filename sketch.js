//Creating variables:-
var backround;
var boyIMG;
var entryIMG;
var insideViewIMG;
var boy2;
var atmIMG;
var cardIMG;
var noteIMG;

function preload(){
    backround = loadImage("Images/22318622-bank-cartoon-background-vector.jpg");
      boyIMG = loadImage("Images/boy.png");
    entryIMG = loadImage("Images/Entrance.png")
    insideViewIMG = loadImage("Images/images.jpg")
    boy2 = loadImage("Images/boy.png")
    atmIMG = loadImage("Images/30-512.png")
    cardIMG = loadImage("Images/credit_card_PNG37.png")
    noteIMG = loadImage("Images/100rupee-note.jpg")
}


function setup() {
    createCanvas(1100, 700);
    
    //Creating boy sprite:-
    boy = createSprite(840,580,60,60);
     boy.addImage(boyIMG)
     boy.scale = 0.2
     boy.velocityX = -3

      //Creating Entry:-
  entry = createSprite(200,580,20,90);
    entry.addImage(entryIMG)
    entry.scale = 0.5

    //Creating insideView:-
    insideView = createSprite(480,400,20,20);
    insideView.addImage(insideViewIMG)
    insideView.scale = 5
    insideView.visible = false;

    //Creating boy sprite:-
    boy2 = createSprite(0,580,60,60);
     boy2.addImage(boyIMG)
     boy2.scale = 0.2
     boy2.velocityX = 3
     boy2.visible = false;

    //Creating boy sprite:-
    atm = createSprite(790,490,60,60);
      atm.addImage(atmIMG)
      atm.visible = false;

   //Creating card sprite
   card = createSprite(200,boy2.y,20,20);
     card.addImage(cardIMG);
     card.scale = 0.2
     card.visible = false;

   //Creating note sprite:-
   note = createSprite(atm.x,600,20,20);
    note.addImage(noteIMG)
    note.scale = 0.4
    note.velocityX = -1
    note.visible = false;
    
}

function draw() {
  rectMode(CENTER);
  background(backround);


   //Important 'if' conditions for the game:-
  
  //if cond-1
if(boy.isTouching(entry)){
   insideView.visible = true;
   boy2.visible = true;
   atm.visible = true;
   if(keyDown("space")){
    card.visible = true;
    card.velocityX = 3;
}
if(card.isTouching(atm)){
 card.visible = false;
}
}

//if cond-2
if(boy2.isTouching(atm)){
 boy2.collide(atm);   
}

//if cond-3
if(card.isTouching(atm)){
  note.visible = true;
}

//if cond-4
if(note.isTouching(boy2)){
  note.velocityX = 0;

}



drawSprites();
}