video ="";
status ="";

function preload(){

    video = createVideo("video.mp4");
    video.hide();
}

function setup(){
    canvas = createCanvas(480,500);
    canvas.center();
}


function draw(){
    image(video,0,0,480,500);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = " Status: Detecting objects ";  
}

function modelLoaded(){
    console.log(" The model is initialized!");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
