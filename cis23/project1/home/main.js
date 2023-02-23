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

function activeB1(){
var element = document.getElementById("b1");
   element.classList.add("activeline");
}

function activeB2(){
var element = document.getElementById("b2");
   element.classList.add("activeline");
}

function activeB3(){
var element = document.getElementById("b3");
   element.classList.add("activeline");
}

function activeB4(){
var element = document.getElementById("b4");
   element.classList.add("activeline");
}

function activeB5(){
var element = document.getElementById("b5");
   element.classList.add("activeline");
}

function activeB6(){
var element = document.getElementById("b6");
   element.classList.add("activeline");
}

function activeB7(){
var element = document.getElementById("b7");
   element.classList.add("activeline");
}

function activeB8(){
var element = document.getElementById("b8");
   element.classList.add("activeline");
}

function activeB9(){
var element = document.getElementById("b9");
   element.classList.add("activeline");
}

function activeB10(){
var element = document.getElementById("b10");
   element.classList.add("activeline");
}

function activeB11(){
var element = document.getElementById("b11");
   element.classList.add("activeline");
}
function activeB12(){
var element = document.getElementById("b12");
   element.classList.add("activeline");
}

function activeB13(){
var element = document.getElementById("b13");
   element.classList.add("activeline");
}
function activeB14(){
var element = document.getElementById("b14");
   element.classList.add("activeline");
}
function activeB15(){
var element = document.getElementById("b15");
   element.classList.add("activeline");
}
function activeB16(){
var element = document.getElementById("b16");
   element.classList.add("activeline");
}
function activeB17(){
var element = document.getElementById("b17");
   element.classList.add("activeline");
}
function activeB18(){
var element = document.getElementById("b18");
   element.classList.add("activeline");
}
function activeB19(){
var element = document.getElementById("b19");
   element.classList.add("activeline");
}
function activeB20(){
var element = document.getElementById("b20");
   element.classList.add("activeline");
}
function activeB21(){
var element = document.getElementById("b21");
   element.classList.add("activeline");
}
function activeB22(){
var element = document.getElementById("b22");
   element.classList.add("activeline");
}
function activeB23(){
var element = document.getElementById("b23");
   element.classList.add("activeline");
}
function activeB24(){
var element = document.getElementById("b24");
   element.classList.add("activeline");
}
function activeB25(){
var element = document.getElementById("b25");
   element.classList.add("activeline");
}
function activeB26(){
var element = document.getElementById("b26");
   element.classList.add("activeline");
}
function activeB27(){
var element = document.getElementById("b27");
   element.classList.add("activeline");
}
function activeB28(){
var element = document.getElementById("b28");
   element.classList.add("activeline");
}
function activeB29(){
var element = document.getElementById("b29");
   element.classList.add("activeline");
}
function activeB30(){
var element = document.getElementById("b30");
   element.classList.add("activeline");
}
function activeB31(){
var element = document.getElementById("b31");
   element.classList.add("activeline");
}
function activeB32(){
var element = document.getElementById("b32");
   element.classList.add("activeline");
}function activeB33(){
var element = document.getElementById("b33");
   element.classList.add("activeline");
}function activeB34(){
var element = document.getElementById("b34");
   element.classList.add("activeline");
}function activeB35(){
var element = document.getElementById("b35");
   element.classList.add("activeline");
}function activeB36(){
var element = document.getElementById("b36");
   element.classList.add("activeline");
}function activeB37(){
var element = document.getElementById("b37");
   element.classList.add("activeline");
}function activeB38(){
var element = document.getElementById("b38");
   element.classList.add("activeline");
}function activeB39(){
var element = document.getElementById("b39");
   element.classList.add("activeline");
}
function activeB40(){
var element = document.getElementById("b40");
   element.classList.add("activeline");
}
function activeB41(){
var element = document.getElementById("b41");
   element.classList.add("activeline");
}
function activeB42(){
var element = document.getElementById("b42");
   element.classList.add("activeline");
}
function activeB43(){
var element = document.getElementById("b43");
   element.classList.add("activeline");
}
function activeB44(){
var element = document.getElementById("b44");
   element.classList.add("activeline");
}
function activeB45(){
var element = document.getElementById("b45");
   element.classList.add("activeline");
}
function activeB46(){
var element = document.getElementById("b46");
   element.classList.add("activeline");
}
function activeB47(){
var element = document.getElementById("b47");
   element.classList.add("activeline");
}
function activeB48(){
var element = document.getElementById("b48");
   element.classList.add("activeline");
}
function activeB49(){
var element = document.getElementById("b49");
   element.classList.add("activeline");
}
function activeB50(){
var element = document.getElementById("b50");
   element.classList.add("activeline");
}
function activeB51(){
var element = document.getElementById("b51");
   element.classList.add("activeline");
}
function activeB52(){
var element = document.getElementById("b52");
   element.classList.add("activeline");
}
function activeB53(){
var element = document.getElementById("b53");
   element.classList.add("activeline");
}
function activeB54(){
var element = document.getElementById("b54");
   element.classList.add("activeline");
}
function activeB55(){
var element = document.getElementById("b55");
   element.classList.add("activeline");
}
function activeB56(){
var element = document.getElementById("b56");
   element.classList.add("activeline");
}
function activeB57(){
var element = document.getElementById("b57");
   element.classList.add("activeline");
}
function activeB58(){
var element = document.getElementById("b58");
   element.classList.add("activeline");
}
function activeB59(){
var element = document.getElementById("b59");
   element.classList.add("activeline");
}
function activeB60(){
var element = document.getElementById("b60");
   element.classList.add("activeline");
}
function activeB61(){
var element = document.getElementById("b61");
   element.classList.add("activeline");
}
function activeB62(){
var element = document.getElementById("b62");
   element.classList.add("activeline");
}
function activeB63(){
var element = document.getElementById("b63");
   element.classList.add("activeline");
}
function activeB64(){
var element = document.getElementById("b64");
   element.classList.add("activeline");
}
function activeB65(){
var element = document.getElementById("b65");
   element.classList.add("activeline");
}
function activeB66(){
var element = document.getElementById("b66");
   element.classList.add("activeline");
}
function activeB67(){
var element = document.getElementById("b67");
   element.classList.add("activeline");
}
function activeB68(){
var element = document.getElementById("b68");
   element.classList.add("activeline");
}
function activeB69(){
var element = document.getElementById("b69");
   element.classList.add("activeline");
}
function activeB70(){
var element = document.getElementById("b70");
   element.classList.add("activeline");
}
function activeB71(){
var element = document.getElementById("b71");
   element.classList.add("activeline");
}
function activeB72(){
var element = document.getElementById("b72");
   element.classList.add("activeline");
}
function activeB73(){
var element = document.getElementById("b73");
   element.classList.add("activeline");
}
function activeB74(){
var element = document.getElementById("b74");
   element.classList.add("activeline");
}
function activeB75(){
var element = document.getElementById("b75");
   element.classList.add("activeline");
}
function activeB76(){
var element = document.getElementById("b76");
   element.classList.add("activeline");
}
function activeB77(){
var element = document.getElementById("b77");
   element.classList.add("activeline");
}
function activeB78(){
var element = document.getElementById("b78");
   element.classList.add("activeline");
}
function activeB79(){
var element = document.getElementById("b79");
   element.classList.add("activeline");
}
function activeB80(){
var element = document.getElementById("b80");
   element.classList.add("activeline");
}
function activeB81(){
var element = document.getElementById("b81");
   element.classList.add("activeline");
}
function activeB82(){
var element = document.getElementById("b82");
   element.classList.add("activeline");
}
function activeB83(){
var element = document.getElementById("b83");
   element.classList.add("activeline");
}
function activeB84(){
var element = document.getElementById("b84");
   element.classList.add("activeline");
}
function activeB85(){
var element = document.getElementById("b85");
   element.classList.add("activeline");
}
function activeB86(){
var element = document.getElementById("b86");
   element.classList.add("activeline");
}
function activeB87(){
var element = document.getElementById("b87");
   element.classList.add("activeline");
}
function activeB88(){
var element = document.getElementById("b88");
   element.classList.add("activeline");
}
function activeB89(){
var element = document.getElementById("b89");
   element.classList.add("activeline");
}
function activeB90(){
var element = document.getElementById("b90");
   element.classList.add("activeline");
}
function activeB91(){
var element = document.getElementById("b91");
   element.classList.add("activeline");
}
function activeB92(){
var element = document.getElementById("b92");
   element.classList.add("activeline");
}
function activeB93(){
var element = document.getElementById("b93");
   element.classList.add("activeline");
}
function activeB94(){
var element = document.getElementById("b94");
   element.classList.add("activeline");
}
function activeB95(){
var element = document.getElementById("b95");
   element.classList.add("activeline");
}
function activeB96(){
var element = document.getElementById("b96");
   element.classList.add("activeline");
}
function activeB97(){
var element = document.getElementById("b97");
   element.classList.add("activeline");
}
function activeB98(){
var element = document.getElementById("b98");
   element.classList.add("activeline");
}
function activeB99(){
var element = document.getElementById("b99");
   element.classList.add("activeline");
}
function activeB100(){
var element = document.getElementById("b100");
   element.classList.add("activeline");
}
function activeB101(){
var element = document.getElementById("b101");
   element.classList.add("activeline");
}
function activeB102(){
var element = document.getElementById("b102");
   element.classList.add("activeline");
}
function activeB103(){
var element = document.getElementById("b103");
   element.classList.add("activeline");
}
function activeB104(){
var element = document.getElementById("b104");
   element.classList.add("activeline");
}
function activeB105(){
var element = document.getElementById("b105");
   element.classList.add("activeline");
}
function activeB106(){
var element = document.getElementById("b106");
   element.classList.add("activeline");
}
function activeB107(){
var element = document.getElementById("b107");
   element.classList.add("activeline");
}
function activeB108(){
var element = document.getElementById("b108");
   element.classList.add("activeline");
}
function activeB109(){
var element = document.getElementById("b109");
   element.classList.add("activeline");
}
function activeB110(){
var element = document.getElementById("b110");
   element.classList.add("activeline");
}
function activeB111(){
var element = document.getElementById("b111");
   element.classList.add("activeline");
}
function activeB112(){
var element = document.getElementById("b112");
   element.classList.add("activeline");
}
function activeB113(){
var element = document.getElementById("b113");
   element.classList.add("activeline");
}
function activeB114(){
var element = document.getElementById("b114");
   element.classList.add("activeline");
}
function activeB115(){
var element = document.getElementById("b115");
   element.classList.add("activeline");
}
function activeB116(){
var element = document.getElementById("b116");
   element.classList.add("activeline");
}
function activeB117(){
var element = document.getElementById("b117");
   element.classList.add("activeline");
}
function activeB118(){
var element = document.getElementById("b118");
   element.classList.add("activeline");
}
function activeB119(){
var element = document.getElementById("b119");
   element.classList.add("activeline");
}







