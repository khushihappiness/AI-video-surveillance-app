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

    if(status != "")
    {
        objectDetector.detect(video, gotResult)
        for(i=0; i<objects.length; i++)
        {
            document.getElementById("status").innerHTML="Status : Object detected";
            document.getElementById("number_of_objects").innerHTML="Number of objects" + objects.length;

    fill("#FF0000")
    percent= floor(objects[i].confidence*100);
    text(objects[i].label + " " + percent + "%",objects[i].x, objects[i].y)
    noFill();
stroke("#FF0000")
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
}

objects=[];

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
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