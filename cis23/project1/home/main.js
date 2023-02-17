console.log("Hey Nika!");

let btns = document.querySelectorAll('.btn');

btns.forEach(btn =>{
	btn.addEventListener('click', () => playNote(btn));
})

function playNote(btn) {
	let noteAudio = document.getElementById(btn.dataset.note);
	noteAudio.play()
}