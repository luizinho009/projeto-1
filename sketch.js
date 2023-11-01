function setup() {
    createCanvas(400, 400);
    background("blue")
  }
  
  function draw() {
    
    stroke("lightgreen");
    fill("yellow");
    
  if(mouseIsPressed) {
    rect(mouseX,mouseY,20,20);
  }
  }
  