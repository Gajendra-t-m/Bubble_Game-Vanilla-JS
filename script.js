let timer = 60;
let hitrn = 0;
let score = 0

const makebubble = () => {
  let randomNum = "";
  for (let i = 1; i <= 168; i++) {
    let rn = Math.floor(Math.random() * 10);
    randomNum += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#bottombar").innerHTML = randomNum;
};

const runtimer = () => {
  const timerInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInt);
      document.querySelector("#bottombar").innerHTML = `<button id="refresh">Game Over Click to Restart</button> ` ;
      document.querySelector("#refresh").addEventListener("click", ()=>{
        location.reload();
      })
    }
  }, 1000);
};

const newhitnumber = () => {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitnum").textContent = hitrn;
};

const increasescore = () => {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
};

//logic for comparing a hitnumber number with clicked number
document.querySelector("#bottombar").addEventListener("click", (details) => {
  let clickedNum = Number(details.target.textContent);
  if (clickedNum === hitrn) {
    increasescore();
    makebubble();
    newhitnumber();
  }
});

newhitnumber();
runtimer();
makebubble();
