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