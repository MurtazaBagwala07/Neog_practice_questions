const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const output =document.querySelector("#output")

function checkLength(){
    if(input.value.length>10){
        btn.disabled = false;
        input.style.backgroundColor = "green"
    }
    else{
        btn.disabled=true;
        input.style.backgroundColor = "red"
    }
}

function successError(){
    if(input.value.length>10){
        output.innerText = "Success"
    }
}

input.addEventListener('keyup',checkLength)
btn.addEventListener('click',successError)
