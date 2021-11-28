function setup()
{
    canvas=createCanvas(300, 300);
    canvas.center();
}

video="";

function preload()
{
    video= createVideo("video.mp4");
    video.hide();
}

function draw()
{
    image(video, 0, 0, 300, 300)
}
function start()
{
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Object";
}

function modelLoaded()
{
    console.log("Model is Loaded");
    status= true;
    video.loop();
    video.speed(1);
    video.volume(0);
}