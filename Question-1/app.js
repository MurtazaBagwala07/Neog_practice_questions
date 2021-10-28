const inputOne = document.querySelector("#inputOne")
const inputTwo = document.querySelector("#inputTwo")

const output = document.querySelector("#output")

const btnAdd=document.querySelector("#add")
const btnSub=document.querySelector("#sub")
const btnMul=document.querySelector("#mul")
const btnDiv=document.querySelector("#div")

function addInput(){
    let first = Number(inputOne.value)
    let second = Number(inputTwo.value)
    let result = first+second
    output.innerHTML=result
}

function subInput(){
    let first = Number(inputOne.value)
    let second = Number(inputTwo.value)
    let result = first-second
    output.innerHTML=result
}

function mulInput(){
    let first = Number(inputOne.value)
    let second = Number(inputTwo.value)
    let result = first*second
    output.innerHTML=result
}

function divInput(){
    let first = Number(inputOne.value)
    let second = Number(inputTwo.value)
    let result = first/second
    output.innerHTML=result
}

btnAdd.addEventListener('click',addInput)
btnSub.addEventListener('click',subInput)
btnMul.addEventListener('click',mulInput)
btnDiv.addEventListener('click',divInput)

