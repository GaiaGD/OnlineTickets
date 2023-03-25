console.log("load")

// FONT RESIZING _______________________________
window.addEventListener('load', resizeFont)
window.addEventListener('resize', resizeFont)

    function resizeFont() {
        let maxWidth = window.innerWidth

        if (maxWidth < 576){
            let textToResizeArray = document.querySelectorAll('.resizedForResponsive')
            let fontSize = maxWidth / 10
            for (i of textToResizeArray){
                i.style.fontSize = fontSize + "px"
            }
        }

    }


// function toggleInfo(event){
//     let toggled = event.target
//     toggled.classList.toggle("closed")
// }

// TEXT SPINNING _______________________________
function textSpinner(param){
    // id targeted to spin 
    const textRotatingHero = document.getElementById(param.id)

    // get all the letters in one array
    const charsArray = (textRotatingHero.innerHTML).split(/(?!$)/u)
    
    // replace the straight text
    textRotatingHero.innerHTML = ''

    // calculate how many letters in the array to spread rotation evenly
    const rotation = 360/charsArray.length

    charsArray.map((char, index) => {
        const newDiv = document.createElement("div")
        newDiv.style.transform = `rotate(${index * rotation}deg)`
        newDiv.classList = `circleSize`
        if (char === "I"){
          c
          newDiv.style.paddingLeft = '-3px'
        }
        newDiv.textContent = char
        textRotatingHero.append(newDiv)
    })
    
}

textSpinner(textrotatingHero)
textSpinner(textrotatingBlack)
textSpinner(textrotatingWhite)


// TEXT SPINNING WHEN IN SCREEN _______________________________
const observer = new IntersectionObserver(

    (entries) => {
      for (const entry of entries) {

        if (entry.isIntersecting){

          // Initial state  
          var scrollPos = 0
          // adding scroll event
          window.addEventListener('scroll', function() {

            // detects new state and compares it with the new one
            if ((document.body.getBoundingClientRect()).top > scrollPos)
              {
                // entry.target.classList.remove(`clockwise`)
                // entry.target.classList.add(`antiClockwise`)
              }
            else
              {
                // entry.target.classList.remove(`antiClockwise`)
                // entry.target.classList.add(`clockwise`)
              }
              // saves the new position for iteration.
              scrollPos = (document.body.getBoundingClientRect()).top
          })
        } 
      }
    }
)

// ____________________________________________________


  function incrementScroll(targetId) {
    let oldPosition = document.documentElement.scrollTop

    window.addEventListener("scroll", (event) => {
  
      let currentPosition = document.documentElement.scrollTop

      let divToRotate = document.getElementById(targetId)

      let currentRotation = divToRotate.style.transform.replace(/[^0-9]/g, "")

      if(oldPosition < currentPosition){
        divToRotate.style.transform = `rotate(${parseFloat(currentRotation) + 2}deg)`
      } else if (oldPosition > currentPosition){
        divToRotate.style.transform = `rotate(${parseFloat(currentRotation) - 2}deg)`
      }

      oldPosition = currentPosition

    })
  }

  // incrementScroll('textrotatingHero')
  incrementScroll('textrotatingBlack')
  incrementScroll('textrotatingWhite')
