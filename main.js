
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(5,170);

    canvas = createCanvas(550, 170);
    canvas.position(700, 275);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("poseNet is Intialized.");

}

function gotPoses(results)
{
    if(results[0].length > 0)
    {
        console.log(results);
    }
}