// --- Constanten ---
const hamburger = document.querySelector(".hamburgermenu");
const openbutton = document.querySelector(".openbutton")
const closebutton = document.querySelector(".closehamburger")
// --- Variabelen ---

let playButton = document.querySelector('.playbutton')
let playButtonStatus = false
let icoonPlayButton = document.querySelector('.svgiconplay')
let frontPageVideo = document.querySelectorAll('.videomobile, .videodesktop')

// --- Functies ---



//Funtie die de rallylichten verandert (boolean)
function videoPauzeren(){

    if (playButtonStatus){

        icoonPlayButton.src = 'https://cdn.ui.porsche.com/porsche-design-system/icons/pause.e41b935.svg'
        playButtonStatus = false
        frontPageVideo.forEach(video => {
            video.play()
        })

    } 
    else {

        icoonPlayButton.src = 'https://cdn.ui.porsche.com/porsche-design-system/icons/play.24226d4.svg'
        playButtonStatus = true
        frontPageVideo.forEach(video => {
            video.pause()
        })
    }
  
}

function openMenu(){
    hamburger.classList.toggle("active")
    openbutton.classList.toggle("active")
    closebutton.classList.toggle("active")
    console.log("hi")
}


function closeMenu(){
    hamburger.classList.remove("active")
    openbutton.classList.remove("active")
    closebutton.classList.remove("active")
}


// --- Event listeners ---



//koppeling van de constanten aan de functies koppelt
playButton.addEventListener('click', videoPauzeren)

openbutton.addEventListener('click', openMenu)
closebutton.addEventListener('click', closeMenu)