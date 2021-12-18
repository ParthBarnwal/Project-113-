function preload() {
}

function setup(){
  canvas=createCanvas(640,480);
  canvas.position(110,300);
  video=createCapture(VIDEO);
  video.hide();

  tint_color="";
}

function draw(){
    image(video,160,120,320,240);
    tint(tint_color);
    fill("red");
    circle(40,40,60);
    circle(600,440,60);
    circle(600,40,60);
    circle(40,440,60);
    fill("green");
    rect(65,25,510,30);
    rect(65,425,510,30);
    rect(25,65,30,350);
    rect(585,65,30,350);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}