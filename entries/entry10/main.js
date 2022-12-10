console.log("hey Nika!");

let keys = document.querySelectorAll('.key')

keys.forEach(key =>{
	key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
	let noteAudio = document.getElementById(key.dataset.note)
	noteAudio.play()
}