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
