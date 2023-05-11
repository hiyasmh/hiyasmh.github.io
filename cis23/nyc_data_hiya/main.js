console.log('Hey Nika');


var svg = document.querySelector('.svg1');
        svg.addEventListener('click',()=>{
            svg.innerHTML=`
           <?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792 612"><defs><style>.cls-1{fill:#292929;stroke:#fff;stroke-miterlimit:10;stroke-width:3px;}</style></defs><g id="Layer_2"><path class="cls-1" d="m154.6,247.14h512.44v257.36s4.56,25.81-31.89,22.02c-.76,0-453.22.38-453.22.38,0,0-30.37,1.9-27.33-25.43-.76-3.04,0-254.32,0-254.32Z"/></g><g id="Layer_5"><path class="cls-1" d="m228.95,193.52l438.27-.43s6.01,6.28,4.75,6.28.17,43.15.17,43.15c0,0,4.44,7.15-14,4.62H229.01l-.06-53.63Z"/><path class="cls-1" d="m138.41,139.89L652.3,58.1s5.84-.83,6.67,4.17c-.42-.42,8.25,40.88,8.25,40.88,0,0,1.76,2.92-5.75,4.17l-510.56,85.77-12.51-53.2Z"/><polygon class="cls-1" points="666.72 105.33 654.29 117.7 219.48 187.93 212.03 182.82 221.9 180.46 666.72 105.33"/></g><g id="Layer_6"><polygon class="cls-1" points="224.83 126.75 274.41 119.06 340.9 158.84 291.89 167.49 224.83 126.75"/><polygon class="cls-1" points="335.41 109.33 385.31 101.89 451.4 140.65 400.7 148.08 335.41 109.33"/><polygon class="cls-1" points="446.09 91.28 495.73 83.84 561.02 122.86 511.65 130.56 446.09 91.28"/><path class="cls-1" d="m556.39,73.52l50.17-7.38,59.52,36.31s3.31,4.23-3.31,4.75c.15-.23-40.38,5.34-40.38,5.34l-66-39.02Z"/><polygon class="cls-1" points="284.38 247.14 339.82 193.52 289.8 193.52 235.06 247.14 284.38 247.14"/><polygon class="cls-1" points="401.4 193.52 451.4 193.52 396 247.14 344.54 247.14 401.4 193.52"/><polygon class="cls-1" points="512.77 193.52 563.49 193.52 507.81 247.14 456.14 247.14 512.77 193.52"/><path class="cls-1" d="m624.13,193.52h44.83s3.3-.1,3.54,1.55c.24,0-53.09,52.08-53.09,52.08h-49.78l54.5-53.63Z"/></g><g id="Layer_3"><path class="cls-1" d="m144.68,240.97s-.05,6.17,9.93,6.17h74.41s22.74-4.59,12.32-28.6c-.63.32-30.95-71.7-54.01-78.65h-35.06s-6-.32-5.37,2.84c-.32,1.26-2.21,98.23-2.21,98.23Z"/></g><g id="Layer_7"><circle class="cls-1" cx="163.31" cy="150.71" r="7.45"/><circle class="cls-1" cx="164.18" cy="230.3" r="7.45"/><circle class="cls-1" cx="219.48" cy="229.63" r="7.45"/></g></svg>
            `
        })



const bronx = document.getElementById("bronx");
const brooklyn = document.getElementById("brooklyn");
const manhattan = document.getElementById("manhattan");
const queens = document.getElementById("queens");
const staten = document.getElementById("staten");
const original = document.getElementById("original")
let audio = new Audio('assets/clapsound.mp3');

function showBronx(){
    bronx.classList.toggle("displaynone");
    brooklyn.classList.add("displaynone");
    manhattan.classList.add("displaynone");
    queens.classList.add("displaynone");
    staten.classList.add("displaynone");
    original.classList.add("displaynone");
    audio.play();
    document.getElementById("total").innerHTML = "Total permits issued in the Bronx = 237";

}

function showBrooklyn(){
    brooklyn.classList.toggle("displaynone");
    bronx.classList.add("displaynone");
    manhattan.classList.add("displaynone");
    queens.classList.add("displaynone");
    staten.classList.add("displaynone");
    original.classList.add("displaynone");
    audio.play();
    document.getElementById("total").innerHTML = "Total permits issued in Brooklyn = 2480";
}

function showManhattan(){
    manhattan.classList.toggle("displaynone");
    bronx.classList.add("displaynone");
    brooklyn.classList.add("displaynone");
    queens.classList.add("displaynone");
    staten.classList.add("displaynone");
    original.classList.add("displaynone");
    audio.play();
    document.getElementById("total").innerHTML = "Total permits issued in Manhattan = 3119";
}

function showQueens(){
    queens.classList.toggle("displaynone");
    bronx.classList.add("displaynone");
    brooklyn.classList.add("displaynone");
    manhattan.classList.add("displaynone");
    staten.classList.add("displaynone");
    original.classList.add("displaynone");
    audio.play();
    document.getElementById("total").innerHTML = "Total permits issued in Queens = 1269";
}

function showStaten(){
    staten.classList.toggle("displaynone");
    bronx.classList.add("displaynone");
    brooklyn.classList.add("displaynone");
    manhattan.classList.add("displaynone");
    queens.classList.add("displaynone");
    original.classList.add("displaynone");
    audio.play();
    document.getElementById("total").innerHTML = "Total permits issued in Staten Island = 70";
}