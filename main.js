difference = 0;
rightWristX = 0;
leftWristX = 0;
function preload(){

}
function setup(){
video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(450,450);
canvas.position(560,80);

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('Pose Net Is Initalized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = "+leftWristX+"rightWristX = "+ rightWristX +"difference = "+difference);
}
}
function draw(){
    background("#4290a8");

    document.getElementById("font_size").innerHTML = "Font Size Will Be = "+difference+"px";
    textSize(difference);
    fill('#fc7474');
    text('Yohan',50,200);
    
}

