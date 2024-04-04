window.addEventListener("load", () => {
  const draw1 = document.querySelector("#draw1");
  const ctx = draw1.getContext("2d");

  draw1.height = window.innerHeight;
  draw1.width = window.innerWidth;

  let painting = false;
  function startPosition(e){
    painting = true;
    draw(e);
  }
  function finishedPosition(){
    painting = false;
    ctx.beginPath();
  }
  function draw(e){
    if(!painting) return;
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.strokeStyle = "red";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

draw1.addEventListener('mousedown', startPosition);
draw1.addEventListener('mouseup', finishedPosition);
draw1.addEventListener('mousemove', draw);
});