  function setup(){
    createCanvas(1000,1000);
    background(130,233,34);
}

let start = 0;
let end = 1000;
let fir = 100;

function draw(){
    fill(255,255,255);
    for(let i = 0; i < 10; i++){
        line(fir,start,fir,end);
        line(start,fir,end,fir)
        fir = fir + 100;
    }
}