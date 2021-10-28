const input = document.querySelector("#input")
const incBtn = document.querySelector("#inc")
const decBtn = document.querySelector("#dec")

let fS = parseInt(window.getComputedStyle(input).getPropertyValue('font-size'))
console.log(fS)
function increase(){
    fS+=2;
    input.style.fontSize = `${fS}px`;
    console.log(fS)
}

function decrease(){
    fS-=2;
    input.style.fontSize = `${fS}px`;
    console.log(fS)
}

incBtn.addEventListener('click',increase)
decBtn.addEventListener('click',decrease)

