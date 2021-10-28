const input =document.querySelector("#input")
const red =document.querySelector("#red")
const blue =document.querySelector("#blue")
const green =document.querySelector("#green")

function toRed(){
    input.style.color = "red"
}

function toBlue(){
    input.style.color = "blue"
}

function toGreen(){
    input.style.color = "green"
}

red.addEventListener('click',toRed)
blue.addEventListener('click',toBlue)
green.addEventListener('click',toGreen)

