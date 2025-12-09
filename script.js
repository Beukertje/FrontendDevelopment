// --- Constanten ---


// --- Variabelen ---

let playButton = document.querySelector('.playbutton')
let playButtonStatus = false
let icoonPlayButton = document.querySelector('.svgiconplay')
let frontPageVideo = document.querySelector('video')

// --- Functies ---



//Funtie die de rallylichten verandert (boolean)
function videoPauzeren(){

    if (playButtonStatus){

        icoonPlayButton.src = 'https://cdn.ui.porsche.com/porsche-design-system/icons/pause.e41b935.svg'
        playButtonStatus = false
        frontPageVideo.play()
    } 
    else {

        icoonPlayButton.src = 'https://cdn.ui.porsche.com/porsche-design-system/icons/play.24226d4.svg'
        playButtonStatus = true
        frontPageVideo.pause()
    }
  
}


// --- Event listeners ---



//koppeling van de constanten aan de functies koppelt
playButton.addEventListener('click', videoPauzeren)