console.log("hey Nika!");

let btns = document.querySelectorAll('.btn');
let colors = ["teal", "gray", "yellow", "seagreen", "orange", "lightgoldenrodyellow", "indigo", "darkred", "green", "red", "coral", "indianred", "magenta", "skyblue", "cyan", "fuchsia", "floralwhite", "aquamarine", "burlywood", "olive", "brown", "ivory", "greenyellow", "peachpuff", "blueviolet", "paleturquoise"];

btns.forEach(btn =>{
  btn.addEventListener("click", () => newColor(btn))
})

function newColor(btn) {
  let randIndex = Math.floor(Math.random() * colors.length);
  let randColor = colors[randIndex];
  btn.style.backgroundColor = randColor;
}