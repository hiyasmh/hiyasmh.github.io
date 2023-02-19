console.log("Hey Nika!");

let btns = document.querySelectorAll('.btn');
let cntrls = document.querySelectorAll('.controls')

btns.forEach(btn =>{
	btn.addEventListener('click', () => playNote(btn));
})

cntrls.forEach(btn =>{
	cntrls.addEventListener('click', () => pauseNote(cntrls));
})

function playNote(btn) {
	let noteAudio = document.getElementById(btn.dataset.note);
	noteAudio.play()
}

function pauseNote(controls) {
	let pauseAudio = document.getElementById(controls.dataset.note);
	pauseAudio.pause()
}

