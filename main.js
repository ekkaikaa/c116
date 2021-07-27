
noseX = 0
noseY = 0

function preload() {
    clown_nose = loadImage("https://i.postimg.cc/7hsGY0YN/cloen-noes.jpg")
}

function setup() {
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

function draw() {
    image(video,0,0,300,300);
    /*fill(255,0,0);
    stroke(0,0,0);
    circle(noseX, noseY, 20);*/
    image(clown_nose, noseX, noseY, 30,30)
}

function take_snapshot(){
    save("myfilterimage.png");
}

function modelloaded() {
    console.log("poseNet has been initialized")
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x =" + noseX)
        console.log("nose y =" + noseY)
    }
}