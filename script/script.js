console.log("load")

// FONT RESIZING _______________________________
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
let prevScrollTop = window.pageYOffset
let prevScrollDirection = ''

const observer = new IntersectionObserver(

    (entries) => {
      for (const entry of entries) {
        window.addEventListener('scroll', function() {
            console.log("hi")
        })

        const intersecting = entry.isIntersecting
        console.log(entry)
        console.log(entry.boundingClientRect.y)
        // entry.target.classList = `rotate clockwise`
      }
    },
    // // 👇 Threshold is 100%
    { threshold:[ .2, .5, .7, 1 ]},
  )

  const first = document.getElementById('textrotatingHero')
  const second = document.getElementById('textrotatingBlack')
  const third = document.getElementById('textrotatingWhite')

//   observer.observe(first)
  observer.observe(second)
//   observer.observe(third)