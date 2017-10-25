var accerate1
var accerate2
var height1
var height2
var height3
var bg
var value = 0
var img
var teeth = false
var imageNumber = 1
var doOnce = true ;






function setup(){
  //createCanvas(width, height)
  
  bg = loadImage("assets/nangua.jpg")
  createCanvas(1366,768)
  //createCanvas(windowWidth, windowHeight)
  // the above will create a full screen canvas
  accerate1 = 0.2
  accerate2 = 0.05
  frameRate(20)
  
  
  img = loadImage("assets/fist.png")
  
 
 
  
  
}

function draw() {
  //draws a background of a certain color
  //background(252,245,185)
background(bg)
  //makes outlines a color
  noStroke()
  //line(x1,y1,x2,y2)
  //point 1 then point 2
  //line(0,0,640,height)
  //fill(color) sets color inside shapes
  fill(0)
 textSize(100);
text("Beat Me!!", 30, 100);

textSize(16);
text("Press Key To Change Weapon", 1125, 450);

textSize(16);
text("Click Mouse To Beat It", 1125, 500);

  fill(255,255,255)
  
  //   ellipse(550,410,110,110)
  
  // ellipse(805,410,110,110)
  
  fill(0,0,0)
  ellipse(550,410,60,60)
  
  ellipse(805,410,60,60)
  
  fill(255,255,255)
  //rect(x,y,width,height)
  //x and y are of top-left corner
  //height refers to the height of the canvas (same with width)
  height1 = height/3 + accerate1
  height2 = height/3 + accerate2
  height3 = height/2.2 + accerate1
  
  rect(645, 238+height1, 40, 45)
  rect(602, 238+height/3, 40, 45)
  rect(688, 238+height2, 40, 45)
  rect(731, 238+height/3, 40, 45)
  
  
  rect(645, 240+height/2.2, 40, 45)
 rect(688, 240+height/2.2, 40, 45)
 
 
 
 if(imageNumber == 1 && doOnce == true){
    img = loadImage("assets/fist.png") ;
    console.log("this is running") ;
    doOnce = false ;
  }
 
 if(imageNumber == 2 && doOnce == true){
    img = loadImage("assets/langyabang.png") ;
    console.log("this is running") ;
    doOnce = false ;
  }
  
   if(imageNumber == 3 && doOnce == true){
    img = loadImage("assets/dianju.png") ;
    doOnce = false ;
  }
  
   if(imageNumber == 4 && doOnce == true){
    img = loadImage("assets/caidao.png") ;
    doOnce = false ;
  }
  console.log(imageNumber) ;
  
 image(img,mouseX-90,mouseY-90)

 if (teeth == true){
  accerate1 += accerate1
  accerate2 += accerate2
  
  bg = loadImage("assets/nangua2.jpg")
  
  // if(height1>730){
  // accerate1 = 0.2
  // accerate2 = 0.05
  
  // height1 = height/2 + accerate1
  //   height2 = height/3 + accerate2
  // height3 = height/2.2 + accerate1
  // }
 }
 
}
 
  //a fill lower down applies to the shapes after it
  //fill(50,200,50)
  //ellipse(x-coordinate,y-coordinate, width, height)
  //x and y refer to center
  //ellipse(width/4,120,80,40)
  //fill(12,34,235)
  //triangle(x1,y1,x2,y2,x3,y3)
  //triangle(width/2, height/3, width/2, height * 0.67, width - 50, height/2)
  
// function mouseClicked(){
  

//   accerate1 += accerate1
//   accerate2 += accerate2
  
//   if(height1>730){
//   accerate1 = 0.2
//   accerate2 = 0.05
  
//   height1 = height/2 + accerate1
//     height2 = height/3 + accerate2
//   height3 = height/2.2 + accerate1
//   }
// }
function keyPressed(){
  if(imageNumber <= 4){
  imageNumber = imageNumber + 1 ;
  doOnce = true ;
  }else if(imageNumber > 4){
    imageNumber = 1;
    doOnce = true;
  }
}

function mouseClicked(){
  teeth = true
}


