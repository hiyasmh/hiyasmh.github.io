console.log('Hey Nika');


var svg1 = document.querySelector('.svg1');
        svg1.addEventListener('click',()=>{
            svg1.innerHTML=`
            <?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792 612"><defs><style>.cls-1{fill:#292929;stroke:#fff;stroke-miterlimit:10;stroke-width:3px;}</style></defs><g id="Layer_2"><path class="cls-1" d="m154.6,247.14h512.44v257.36s4.56,25.81-31.89,22.02c-.76,0-453.22.38-453.22.38,0,0-30.37,1.9-27.33-25.43-.76-3.04,0-254.32,0-254.32Z"/></g><g id="Layer_5"><path class="cls-1" d="m144.34,142.29l520.36-.4s5.9.09,5.94,5.16c-.35-.48,1.75,41.66,1.75,41.66,0,0,1.28,3.16-6.33,3.22l-517.69,4.85-4.04-54.5Z"/><path class="cls-1" d="m228.95,193.52l438.27-.43s6.01,6.28,4.75,6.28.17,43.15.17,43.15c0,0,4.44,7.15-14,4.62H229.01l-.06-53.63Z"/></g><g id="Layer_6"><polygon class="cls-1" points="231.75 142.83 281.92 143 341.37 192.68 291.62 193.56 231.75 142.83"/><polygon class="cls-1" points="343.7 142.92 394.14 143.38 453.36 192 402.13 191.41 343.7 142.92"/><polygon class="cls-1" points="455.84 142.4 506.03 142.83 564.42 191.58 514.45 191.46 455.84 142.4"/><path class="cls-1" d="m567.56,142.12l50.71.56,53.1,45.18s2.61,4.7-4.02,4.17c.18-.2-40.72-1.04-40.72-1.04l-59.08-48.87Z"/><polygon class="cls-1" points="284.38 247.14 339.82 193.52 289.8 193.52 235.06 247.14 284.38 247.14"/><polygon class="cls-1" points="401.4 193.52 451.4 193.52 396 247.14 344.54 247.14 401.4 193.52"/><polygon class="cls-1" points="512.77 193.52 563.49 193.52 507.81 247.14 456.14 247.14 512.77 193.52"/><path class="cls-1" d="m624.13,193.52h44.83s3.3-.1,3.54,1.55c.24,0-53.09,52.08-53.09,52.08h-49.78l54.5-53.63Z"/></g><g id="Layer_3"><path class="cls-1" d="m144.68,240.97s-.05,6.17,9.93,6.17h74.41s22.74-4.59,12.32-28.6c-.63.32-30.95-71.7-54.01-78.65h-35.06s-6-.32-5.37,2.84c-.32,1.26-2.21,98.23-2.21,98.23Z"/></g><g id="Layer_7"><circle class="cls-1" cx="163.31" cy="150.71" r="7.45"/><circle class="cls-1" cx="164.18" cy="230.3" r="7.45"/><circle class="cls-1" cx="219.48" cy="229.63" r="7.45"/></g></svg>
            `
        },false);

var svg2 = document.querySelector('.svg2');
        svg2.addEventListener('click',()=>{
            svg2.innerHTML=`
            <?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792 612"><defs><style>.cls-1{fill:#292929;stroke:#fff;stroke-miterlimit:10;stroke-width:3px;}</style></defs><g id="Layer_2"><path class="cls-1" d="m154.6,247.14h512.44v257.36s4.56,25.81-31.89,22.02c-.76,0-453.22.38-453.22.38,0,0-30.37,1.9-27.33-25.43-.76-3.04,0-254.32,0-254.32Z"/></g><g id="Layer_5"><path class="cls-1" d="m144.34,142.29l520.36-.4s5.9.09,5.94,5.16c-.35-.48,1.75,41.66,1.75,41.66,0,0,1.28,3.16-6.33,3.22l-517.69,4.85-4.04-54.5Z"/><path class="cls-1" d="m228.95,193.52l438.27-.43s6.01,6.28,4.75,6.28.17,43.15.17,43.15c0,0,4.44,7.15-14,4.62H229.01l-.06-53.63Z"/></g><g id="Layer_6"><polygon class="cls-1" points="231.75 142.83 281.92 143 341.37 192.68 291.62 193.56 231.75 142.83"/><polygon class="cls-1" points="343.7 142.92 394.14 143.38 453.36 192 402.13 191.41 343.7 142.92"/><polygon class="cls-1" points="455.84 142.4 506.03 142.83 564.42 191.58 514.45 191.46 455.84 142.4"/><path class="cls-1" d="m567.56,142.12l50.71.56,53.1,45.18s2.61,4.7-4.02,4.17c.18-.2-40.72-1.04-40.72-1.04l-59.08-48.87Z"/><polygon class="cls-1" points="284.38 247.14 339.82 193.52 289.8 193.52 235.06 247.14 284.38 247.14"/><polygon class="cls-1" points="401.4 193.52 451.4 193.52 396 247.14 344.54 247.14 401.4 193.52"/><polygon class="cls-1" points="512.77 193.52 563.49 193.52 507.81 247.14 456.14 247.14 512.77 193.52"/><path class="cls-1" d="m624.13,193.52h44.83s3.3-.1,3.54,1.55c.24,0-53.09,52.08-53.09,52.08h-49.78l54.5-53.63Z"/></g><g id="Layer_3"><path class="cls-1" d="m144.68,240.97s-.05,6.17,9.93,6.17h74.41s22.74-4.59,12.32-28.6c-.63.32-30.95-71.7-54.01-78.65h-35.06s-6-.32-5.37,2.84c-.32,1.26-2.21,98.23-2.21,98.23Z"/></g><g id="Layer_7"><circle class="cls-1" cx="163.31" cy="150.71" r="7.45"/><circle class="cls-1" cx="164.18" cy="230.3" r="7.45"/><circle class="cls-1" cx="219.48" cy="229.63" r="7.45"/></g></svg>
            `
        })

var svg3 = document.querySelector('.svg3');
        svg3.addEventListener('click',()=>{
            svg3.innerHTML=`
            <?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792 612"><defs><style>.cls-1{fill:#292929;stroke:#fff;stroke-miterlimit:10;stroke-width:3px;}</style></defs><g id="Layer_2"><path class="cls-1" d="m154.6,247.14h512.44v257.36s4.56,25.81-31.89,22.02c-.76,0-453.22.38-453.22.38,0,0-30.37,1.9-27.33-25.43-.76-3.04,0-254.32,0-254.32Z"/></g><g id="Layer_5"><path class="cls-1" d="m144.34,142.29l520.36-.4s5.9.09,5.94,5.16c-.35-.48,1.75,41.66,1.75,41.66,0,0,1.28,3.16-6.33,3.22l-517.69,4.85-4.04-54.5Z"/><path class="cls-1" d="m228.95,193.52l438.27-.43s6.01,6.28,4.75,6.28.17,43.15.17,43.15c0,0,4.44,7.15-14,4.62H229.01l-.06-53.63Z"/></g><g id="Layer_6"><polygon class="cls-1" points="231.75 142.83 281.92 143 341.37 192.68 291.62 193.56 231.75 142.83"/><polygon class="cls-1" points="343.7 142.92 394.14 143.38 453.36 192 402.13 191.41 343.7 142.92"/><polygon class="cls-1" points="455.84 142.4 506.03 142.83 564.42 191.58 514.45 191.46 455.84 142.4"/><path class="cls-1" d="m567.56,142.12l50.71.56,53.1,45.18s2.61,4.7-4.02,4.17c.18-.2-40.72-1.04-40.72-1.04l-59.08-48.87Z"/><polygon class="cls-1" points="284.38 247.14 339.82 193.52 289.8 193.52 235.06 247.14 284.38 247.14"/><polygon class="cls-1" points="401.4 193.52 451.4 193.52 396 247.14 344.54 247.14 401.4 193.52"/><polygon class="cls-1" points="512.77 193.52 563.49 193.52 507.81 247.14 456.14 247.14 512.77 193.52"/><path class="cls-1" d="m624.13,193.52h44.83s3.3-.1,3.54,1.55c.24,0-53.09,52.08-53.09,52.08h-49.78l54.5-53.63Z"/></g><g id="Layer_3"><path class="cls-1" d="m144.68,240.97s-.05,6.17,9.93,6.17h74.41s22.74-4.59,12.32-28.6c-.63.32-30.95-71.7-54.01-78.65h-35.06s-6-.32-5.37,2.84c-.32,1.26-2.21,98.23-2.21,98.23Z"/></g><g id="Layer_7"><circle class="cls-1" cx="163.31" cy="150.71" r="7.45"/><circle class="cls-1" cx="164.18" cy="230.3" r="7.45"/><circle class="cls-1" cx="219.48" cy="229.63" r="7.45"/></g></svg>
            `
        })

var svg4 = document.querySelector('.svg4');
        svg4.addEventListener('click',()=>{
            svg4.innerHTML=`
            <?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792 612"><defs><style>.cls-1{fill:#292929;stroke:#fff;stroke-miterlimit:10;stroke-width:3px;}</style></defs><g id="Layer_2"><path class="cls-1" d="m154.6,247.14h512.44v257.36s4.56,25.81-31.89,22.02c-.76,0-453.22.38-453.22.38,0,0-30.37,1.9-27.33-25.43-.76-3.04,0-254.32,0-254.32Z"/></g><g id="Layer_5"><path class="cls-1" d="m144.34,142.29l520.36-.4s5.9.09,5.94,5.16c-.35-.48,1.75,41.66,1.75,41.66,0,0,1.28,3.16-6.33,3.22l-517.69,4.85-4.04-54.5Z"/><path class="cls-1" d="m228.95,193.52l438.27-.43s6.01,6.28,4.75,6.28.17,43.15.17,43.15c0,0,4.44,7.15-14,4.62H229.01l-.06-53.63Z"/></g><g id="Layer_6"><polygon class="cls-1" points="231.75 142.83 281.92 143 341.37 192.68 291.62 193.56 231.75 142.83"/><polygon class="cls-1" points="343.7 142.92 394.14 143.38 453.36 192 402.13 191.41 343.7 142.92"/><polygon class="cls-1" points="455.84 142.4 506.03 142.83 564.42 191.58 514.45 191.46 455.84 142.4"/><path class="cls-1" d="m567.56,142.12l50.71.56,53.1,45.18s2.61,4.7-4.02,4.17c.18-.2-40.72-1.04-40.72-1.04l-59.08-48.87Z"/><polygon class="cls-1" points="284.38 247.14 339.82 193.52 289.8 193.52 235.06 247.14 284.38 247.14"/><polygon class="cls-1" points="401.4 193.52 451.4 193.52 396 247.14 344.54 247.14 401.4 193.52"/><polygon class="cls-1" points="512.77 193.52 563.49 193.52 507.81 247.14 456.14 247.14 512.77 193.52"/><path class="cls-1" d="m624.13,193.52h44.83s3.3-.1,3.54,1.55c.24,0-53.09,52.08-53.09,52.08h-49.78l54.5-53.63Z"/></g><g id="Layer_3"><path class="cls-1" d="m144.68,240.97s-.05,6.17,9.93,6.17h74.41s22.74-4.59,12.32-28.6c-.63.32-30.95-71.7-54.01-78.65h-35.06s-6-.32-5.37,2.84c-.32,1.26-2.21,98.23-2.21,98.23Z"/></g><g id="Layer_7"><circle class="cls-1" cx="163.31" cy="150.71" r="7.45"/><circle class="cls-1" cx="164.18" cy="230.3" r="7.45"/><circle class="cls-1" cx="219.48" cy="229.63" r="7.45"/></g></svg>
            `
        })

var svg5 = document.querySelector('.svg5');
        svg5.addEventListener('click',()=>{
            svg5.innerHTML=`
            <?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792 612"><defs><style>.cls-1{fill:#292929;stroke:#fff;stroke-miterlimit:10;stroke-width:3px;}</style></defs><g id="Layer_2"><path class="cls-1" d="m154.6,247.14h512.44v257.36s4.56,25.81-31.89,22.02c-.76,0-453.22.38-453.22.38,0,0-30.37,1.9-27.33-25.43-.76-3.04,0-254.32,0-254.32Z"/></g><g id="Layer_5"><path class="cls-1" d="m144.34,142.29l520.36-.4s5.9.09,5.94,5.16c-.35-.48,1.75,41.66,1.75,41.66,0,0,1.28,3.16-6.33,3.22l-517.69,4.85-4.04-54.5Z"/><path class="cls-1" d="m228.95,193.52l438.27-.43s6.01,6.28,4.75,6.28.17,43.15.17,43.15c0,0,4.44,7.15-14,4.62H229.01l-.06-53.63Z"/></g><g id="Layer_6"><polygon class="cls-1" points="231.75 142.83 281.92 143 341.37 192.68 291.62 193.56 231.75 142.83"/><polygon class="cls-1" points="343.7 142.92 394.14 143.38 453.36 192 402.13 191.41 343.7 142.92"/><polygon class="cls-1" points="455.84 142.4 506.03 142.83 564.42 191.58 514.45 191.46 455.84 142.4"/><path class="cls-1" d="m567.56,142.12l50.71.56,53.1,45.18s2.61,4.7-4.02,4.17c.18-.2-40.72-1.04-40.72-1.04l-59.08-48.87Z"/><polygon class="cls-1" points="284.38 247.14 339.82 193.52 289.8 193.52 235.06 247.14 284.38 247.14"/><polygon class="cls-1" points="401.4 193.52 451.4 193.52 396 247.14 344.54 247.14 401.4 193.52"/><polygon class="cls-1" points="512.77 193.52 563.49 193.52 507.81 247.14 456.14 247.14 512.77 193.52"/><path class="cls-1" d="m624.13,193.52h44.83s3.3-.1,3.54,1.55c.24,0-53.09,52.08-53.09,52.08h-49.78l54.5-53.63Z"/></g><g id="Layer_3"><path class="cls-1" d="m144.68,240.97s-.05,6.17,9.93,6.17h74.41s22.74-4.59,12.32-28.6c-.63.32-30.95-71.7-54.01-78.65h-35.06s-6-.32-5.37,2.84c-.32,1.26-2.21,98.23-2.21,98.23Z"/></g><g id="Layer_7"><circle class="cls-1" cx="163.31" cy="150.71" r="7.45"/><circle class="cls-1" cx="164.18" cy="230.3" r="7.45"/><circle class="cls-1" cx="219.48" cy="229.63" r="7.45"/></g></svg>
            `
        })


// const boroughs = ['bronx', 'brooklyn', 'manhattan', 'queens', 'staten'];
// const audio = new Audio('assets/clapsound.mp3');

// function showBorough(borough) {
//   boroughs.forEach(b => {
//     const el = document.getElementById(b);
//     el.classList.toggle('displaynone', b !== borough);
//   });
//   audio.play();
// }

// boroughs.forEach(b => {
//   document.getElementById(`${b}-btn`).addEventListener('click', () => {
//     showBorough(b);
//     const count = document.querySelectorAll(`#${b} .sqtxt`).length;
//     document.getElementById('total').innerHTML = `Total permits issued in ${b} = ${count}`;
//   });
// });

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

const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const item6 = document.getElementById("item6");
const item7 = document.getElementById("item7");
const item8 = document.getElementById("item8");
const item9 = document.getElementById("item9");
const item10 = document.getElementById("item10");
const item11 = document.getElementById("item11");
const item12 = document.getElementById("item12");
const item13 = document.getElementById("item13");
const item14 = document.getElementById("item14");
const item15 = document.getElementById("item15");
const item16 = document.getElementById("item16");
const item17 = document.getElementById("item17");
const item18 = document.getElementById("item18");
const item19 = document.getElementById("item19");
const item20 = document.getElementById("item20");
const item21 = document.getElementById("item21");
const item22 = document.getElementById("item22");
const item23 = document.getElementById("item23");


function toggleitem1(){
    item1.classList.toggle("item1")
}

function toggleitem2(){
    item2.classList.toggle("item2")
}

function toggleitem3(){
    item3.classList.toggle("item3")
}

function toggleitem4(){
    item4.classList.toggle("item4")
}

function toggleitem5(){
    item5.classList.toggle("item5")
}

function toggleitem6(){
    item6.classList.toggle("item6")
}

function toggleitem7(){
    item7.classList.toggle("item7")
}

function toggleitem8(){
    item8.classList.toggle("item8")
}

function toggleitem9(){
    item9.classList.toggle("item9")
}

function toggleitem10(){
    item10.classList.toggle("item10")
}

function toggleitem11(){
    item11.classList.toggle("item11")
}

function toggleitem12(){
    item12.classList.toggle("item12")
}

function toggleitem13(){
    item13.classList.toggle("item13")
}

function toggleitem14(){
    item14.classList.toggle("item14")
}

function toggleitem15(){
    item15.classList.toggle("item15")
}

function toggleitem16(){
    item16.classList.toggle("item16")
}

function toggleitem17(){
    item17.classList.toggle("item17")
}

function toggleitem18(){
    item18.classList.toggle("item18")
}

function toggleitem19(){
    item19.classList.toggle("item19")
}

function toggleitem20(){
    item20.classList.toggle("item20")
}

function toggleitem21(){
    item21.classList.toggle("item21")
}

function toggleitem22(){
    item22.classList.toggle("item22")
}

function toggleitem23(){
    item23.classList.toggle("item23")
}

const items = [];
for (let i = 1; i <= 23; i++) {
  items.push(document.getElementById("item" + i));
}

function toggleItem(index) {
  items[index].classList.toggle("item" + (index + 1));
}

// Get all the elements with class "sq"
var elements = document.getElementsByClassName("sq");

// Loop through all the elements and add a click event listener
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
    // Find the child element with class "sqtxt" and replace its class with "sqtxton"
    var txtElement = this.querySelector('.sqtxt');
    txtElement.classList.replace("sqtxt", "sqtxton");
  });
}

