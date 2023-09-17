const makebubble =()=>{
    let randomNum = "";
    for (let i=1; i<=170; i++){
        let rn = Math.floor(Math.random()*10);
        randomNum += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#bottombar").innerHTML = randomNum;
}

makebubble();