const input = document.querySelector("#input")
const btnOne = document.querySelector("#hOne")
const btnTwo = document.querySelector("#hTwo")
const btnThree = document.querySelector("#hThree")
const output = document.querySelector("#output")

function toHOne(){
    console.log(output)
    output.innerHTML= `<h1>${input.value}</h1>`
    console.log(input.value)
}

function toHTwo(){
    console.log(output)
    output.innerHTML= `<h2>${input.value}</h2>`
    console.log(input.value)
}
function toHThree(){
    console.log(output)
    output.innerHTML= `<h3>${input.value}</h3>`
    console.log(input.value)
}

btnOne.addEventListener('click',toHOne)
btnTwo.addEventListener('click',toHTwo)
btnThree.addEventListener('click',toHThree)

