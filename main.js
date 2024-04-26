function preload() {

}
    function setup() {
        createCanvas(100, 100);
      
        background(200);
      
        circle(50, 50, 25);

        rotateY(frameCount * 0.01);
}

function setup() {
    createCanvas(100, 100, WEBGL);
  
    background(200);
  
    ellipse(0, 0, 80, 40);

    rotateY(frameCount * 0.01);
}  

function setup() {
    createCanvas(100, 100);
  
    background(200);
  
    rect(30, 20, 55, 40);

    rotateY(frameCount * 0.01);
}

function draw() {
image(video, 0, 0, 640, 480);
tint(tint_color);
}

function take_snapshot() {
    save('student_name.png');
}
function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}