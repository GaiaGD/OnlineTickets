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
    const charsArray = (textRotatingHero.innerHTML.replace(/\s/g, '')).split(/(?!$)/u)
    
    // replace the straight text
    textRotatingHero.innerHTML = ''

    // calculate how many letters in the array to spread rotation evenly
    const rotation = 360/charsArray.length

    textRotatingHero.innerHTML = ''
    let rotated = charsArray.map((char, index) => {
        const newSpan = document.createElement("span")
        newSpan.style.transform = `rotate(${index * rotation}deg)`
        newSpan.classList = `circleSize`
        newSpan.textContent = char
        textRotatingHero.append(newSpan)
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
          console.log('intersecting')

          // Initial state  
          var scrollPos = 0
          // adding scroll event
          window.addEventListener('scroll', function() {
            let direction = ''

            // detects new state and compares it with the new one
            if ((document.body.getBoundingClientRect()).top > scrollPos)
              {
                direction = 'up'
                console.log(direction)
              }
            else
              {
                direction = 'down'
                console.log(direction)
              }
                    // saves the new position for iteration.
              scrollPos = (document.body.getBoundingClientRect()).top

          })
        } else {
          console.log('not intersecting')
        }
      }
    }
)

  const first = document.getElementById('textrotatingHero')
  const second = document.getElementById('textrotatingBlack')
  const third = document.getElementById('textrotatingWhite')

//   observer.observe(first)
  observer.observe(document.getElementById('textrotatingBlack'))
//   observer.observe(third)