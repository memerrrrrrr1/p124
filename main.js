function setup(){
    cp = createCapture(VIDEO)
    cp.position(45,170)
    can = createCanvas(500,500)
    can.position(850,170)

    myposes = ml5.poseNet(cp,modeloaded)

    myposes.on("pose",gotposes)
}

function modeloaded(){
    console.log("model is ready!")
}

function gotposes(results){
    console.log(results);
}