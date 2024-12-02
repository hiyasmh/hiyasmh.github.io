let x1 = 100;
y1 = 100;
angle1 = 0.0;
distBehind1 = 75;

let x2 = 100;
y2 = 100;
angle2 = 0.0;
distBehind2 = 100;

let x3 = 100;
y3 = 100;
angle3 = 0.0;
distBehind3 = 120;


function setup() {
    createCanvas(windowWidth, windowHeight);  
    background(100, 0.4);
// Follower 1
    dx1 = mouseX - x1;
    dy1 = mouseY - y1;


  }
  
  function draw() {
    background(0);

    
  //  noStroke();
    stroke(200, 20, 20);
    fill(200,220,20,90);
    ellipse(mouseX,mouseY,40,50);
  }
  
//   function mousePressed(){
//       background(220, 200, 200);
//   }