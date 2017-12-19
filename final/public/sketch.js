function setup() {
  createCanvas(600,600);
  background(30);

}

function mouseDragged(){
 noStroke();
 fill(random(255),random(255),random(255));
 ellipse(mouseX,mouseY,20,20);
}

function keyPressed(){
	 if (key == ' ')
    {
    	background(30);
    }
     
}

function draw() {

}