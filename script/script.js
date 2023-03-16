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

// id targeted to spin
const textRotatingHero = document.getElementById('text-rotating-hero')

// calculate how many letters to spread evenly
const charsNumbers = (textRotatingHero.innerHTML.replace(/\s/g, '')).length
const rotation = 360/charsNumbers

// split the string in spans
textRotatingHero.innerHTML = textRotatingHero.textContent.replace(/\S/g,"<span>$&</span>")

// rotate each span
const spansToRotate = document.querySelectorAll('span')
for (var i = 1; i < spansToRotate.length; i++){
    spansToRotate[i].style.transform = "rotate("+i*rotation+"deg)"
}

// MAKE IT MODULAR

// parameters I need:
// - ID in the page
// - how many characters in the string rotating
// - html replaced with spans
// - rotate these spans

function textSpinner(event){
        console.log(event.target.id)

    // id targeted to spin
    const textRotatingHero = document.getElementById(event.target.id)

    // calculate how many letters to spread evenly
    const numOfChars = (textRotatingHero.innerHTML.replace(/\s/g, '')).length
    const rotation = 360/numOfChars

    // split the string in spans
    textRotatingHero.innerHTML = textRotatingHero.textContent.replace(/\S/g,"<span>$&</span>")
    console.log(textRotatingHero.innerHTML)
    
    // console.log(innerHTML)
    // const spansToRotate = document.querySelectorAll('span')
    // for (var i = 1; i < spansToRotate.length; i++){
    //     spansToRotate[i].style.transform = "rotate("+i*rotation+"deg)"
    // }

}

