let div, n;
let up;
let time;
let ancho_linea;
let osc;
let playing;

function setup() {
    createCanvas(864, 864);
    ancho_linea = 12;
    n = 12;
    div = (width - ancho_linea) / n;
    count = 0;
    time = 600;
    up = true;
    playing = false;
    // osc = new p5.TriOsc(440);
}

function draw() {
    let a_y0 = 3;
    let a_y1 = width / 2;
    let b_y0 = width - 3;
    let b_y1 = width / 2;
    background('#041B2D');
    stroke('#EA4492');
    strokeWeight(ancho_linea);
    for (let i = 0; i <= n; i++) {
        let x0 = (i * div) + (ancho_linea / 2);
        for (let j = 0; j <= n; j++) {
            let x1 = 0;
            let pos = 0;
            if (count < 90) {
                pos = 0
            }
            else if (count > 510) {
                pos = div;
            }
            else {
                pos = map(count, 90, 510, 0, div);
            }
            if (playing) {
                let freq = constrain(map(pos, 0, div, 100, 500), 100, 500);
                osc.freq(freq, 0.1);
                osc.amp(1, 0.1);
            }
            if (i == j) {
                x1 = x0;
            }
            else if (i < j) {
                x1 = x0 + ((j - i) * pos);
            }
            else if (i > j) {
                x1 = x0 - ((i - j) * pos);
            }
            // console.log(i, j, x1);
            line(x0, a_y0, x1, a_y1);
            line(x0, b_y0, x1, b_y1);
        }
    }
    if (up) {
        count = count + 1;
    } else {
        count = count - 1;
    }
    if (count >= time) {
        up = false;
    }
    if (count <= 0) {
        up = true;
    }
}

// function mouseClicked() {
//     playing = !playing;
//     if (playing) {
//         osc.start();
//     }
//     else {
//         osc.stop();
//     }
//     console.log(playing);
// }
