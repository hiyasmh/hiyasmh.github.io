console.log("Hey Nika!");

let btns = document.querySelectorAll('.btn');

btns.forEach(btn =>{
	btn.addEventListener('click', () => playNote(btn));
})

function playNote(btn) {
	let noteAudio = document.getElementById(btn.dataset.note);
	noteAudio.play()
}

document.getElementById('pause').addEventListener('click', () => {
  document.querySelectorAll('audio').forEach(el => el.pause());
});

document.getElementById('plus').addEventListener('click', () => {
  document.querySelectorAll('audio').forEach(el => el.currentTime += 1.0);
});

document.getElementById('minus').addEventListener('click', () => {
  document.querySelectorAll('audio').forEach(el => el.currentTime -= 1.0)
});


function qmCursor(){
	document.getElementById("body").style.cursor = "url(assets/qm.png), auto";
}

function colonCursor(){
	document.getElementById("body").style.cursor = "url(assets/colon.png), auto";
}

function semicolonCursor(){
	document.getElementById("body").style.cursor = "url(assets/semicolon.png), auto";
}

function apsCursor(){
	document.getElementById("body").style.cursor = "url(assets/aps.png), auto";
}

function qtsCursor(){
	document.getElementById("body").style.cursor = "url(assets/qts.png), auto";
}

function commaCursor(){
	document.getElementById("body").style.cursor = "url(assets/comma.png), auto";
}

function periodCursor(){
	document.getElementById("body").style.cursor = "url(assets/period.png), auto";
}

function exclamationCursor(){
	document.getElementById("body").style.cursor = "url(assets/exclamation.png), auto";
}