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


// function toggleInfo(){
//     console.log(this)
// }


// const toggleDropdown = document.getElementsByClassName("toggle");
// toggleDropdown.addEventListener("click", function() {
//   toggleDropdown.classList.toggle("closed");
// });

for (let dropdown of document.querySelectorAll('div.toggle'))
  {
    dropdown.addEventListener("click", function() {
    dropdown.classList.toggle("closed");
    })
  }

// elem.addEventListener("click", e => alert(`Capturing: ${elem}`))

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
        const newSpan = document.createElement("span")
        newSpan.textContent = char
        newSpan.style.transform = `rotate(3deg)`
        newSpan.style.display = `block`
        newDiv.append(newSpan)
        textRotatingHero.append(newDiv)
    })
    
}

textSpinner(textrotatingHero)
textSpinner(textrotatingBlack)
textSpinner(textrotatingWhite)


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

  incrementScroll('textrotatingBlack')
  incrementScroll('textrotatingWhite')


// TREE COUNTER GOING UP _______________________________

const counterObserver = new IntersectionObserver(
  
  (entries) => {

    for (const entry of entries) {

      if (entry.isIntersecting){

        const counter = document.getElementById(entry.target.id)
        const speed = 200
        
        const updateCount = () => {
          const target = parseInt(counter.getAttribute('data-target'))
          const count = parseInt(counter.innerText)
          const increment = Math.trunc(target / speed)
          if (count < target) {
            counter.innerText = count + increment
            setTimeout(updateCount, 1)
          } else {
            counter.innerText = target
          }
        }
        updateCount()

        // only execute once
        counterObserver.unobserve(entry.target)
      } 
    }
  }
)

counterObserver.observe(document.getElementById('treeCounter'))

const treeIconObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {

      if (entry.isIntersecting){
          let treeIcon =  document.getElementById(entry.target.id)
          treeIcon.classList.add('fadein')

          treeIconObserver.unobserve(entry.target)
      } 
    }
  }
)

treeIconObserver.observe(document.getElementById('treeIcon'))