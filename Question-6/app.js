const textH = document.querySelector("#text")
const btn = document.querySelector("#btn")

function hideText(){
    textH.style.display="none"
}

btn.addEventListener('click',hideText)
