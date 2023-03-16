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



function textSpinner(param){
    console.log(param.id)
    // id targeted to spin 
    const textRotatingHero = document.getElementById(param.id)
    console.log(textRotatingHero)
    // calculate how many letters to spread evenly
    const numOfChars = (textRotatingHero.innerHTML.replace(/\s/g, '')).length
    const rotation = 360/numOfChars

    // get all the letters then add <span style="transform: rotate(28.4211deg)">LETTER</span>
    const charsArray = (textRotatingHero.innerHTML.replace(/\s/g, '')).split(/(?!$)/u)  

    charsArray.map((char, index) => {
        const newSpan = document.createElement("span")
        newSpan.style.transform = `rotate(${index * rotation}deg)`
        newSpan.textContent = char
        textRotatingHero.append(newSpan)
    })

}
textSpinner(textrotatingtest)
textSpinner(textrotatingtest2)
// document.getElementById(textrotatingtest2).innerHTML = textSpinner(textrotatingtest2)
