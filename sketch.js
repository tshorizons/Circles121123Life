
let r=180;
let theta=0;
angleMode(DEGREES);
let fr=frameRate();



function setup() {
  background(220);
  createCanvas(400, 400);
/*
  let millisecond = millis();
  text('Milliseconds \nrunning: \n' + millisecond, 0, 150);
  describe('number of milliseconds since sketch has started displayed');
*/
  
  //noLoop();
  frameRate(25);

  //text('FranRat' fr,100,100);
  
  
  


}

function draw() {
  
  

  //background(220);

  
  translate(width/2,height/2);

  for (let i=0;i<100;i=i+1){

    
        

  let x = r*cos(theta);
  let y = r*sin(theta);

  if (i%9==0){
    fill(x,y,theta,125);
  
 //noStroke();
  circle (x,y,10);
  }
  fill(255,125,125,150);
  noStroke();
  circle(x-10,y-10,10);

  //r=r+20;
  theta=theta+1;
    
  }
    }
