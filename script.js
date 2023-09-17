const makebubble = () => {
  let randomNum = "";
  for (let i = 1; i <= 170; i++) {
    let rn = Math.floor(Math.random() * 10);
    randomNum += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#bottombar").innerHTML = randomNum;
};

const runtimer = () => {
  let timer = 60;
  const timerInt = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }
    else{
        clearInterval(timerInt);
    }
  }, 1000);
};

runtimer();
makebubble();
