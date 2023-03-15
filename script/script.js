console.log("load")

window.addEventListener('load', resizeFont)
window.addEventListener('resize', resizeFont)

    function resizeFont() {
        let maxWidth = window.innerWidth

        if (maxWidth < 576){
            console.log(maxWidth)
            let textToResizeArray = document.querySelectorAll('.resizedForResponsive')
            let fontSize = maxWidth / 10
            for (i of textToResizeArray){

                i.style.fontSize = fontSize + "px"
            }
        }

    }


function toggleInfo(event){
    let toggled = event.target
    toggled.classList.toggle("closed")
}


const textRotating = document.getElementById('text-rotating')

// calculate how many letters to spread evenly
const charsNumbers = (textRotating.innerHTML.replace(/\s/g, '')).length
const rotation = 360/charsNumbers
console.log(rotation)

textRotating.innerHTML = textRotating.textContent.replace(/\S/g,"<span>$&</span>");
console.log(textRotating.innerHTML)

const ele = document.querySelectorAll('span')
for (var i = 1; i < ele.length; i++){
    ele[i].style.transform = "rotate("+i*rotation+"deg)"
}