var audioWeLive = document.getElementById('weLive')
var fileWeLive = audioWeLive.getAttribute('src');
var audio = new Audio(fileWeLive);   

let container = document.getElementById('container')
let smurfcat = document.createElement('img')
let title = document.createElement('h1')
title.classList.add('title')
title.textContent = 'WE LIVE... WE LOVE... WE LIE...'
title.style.display = 'none'
container.appendChild(title)
smurfcat.classList.add('smurfCat')
smurfcat.src = '../img/smurfcat.png'
smurfcat.style.display = 'none'
container.appendChild(smurfcat)
let img = 'url(../img/forest.jpg)'
container.style.backgroundImage = img
let button = document.createElement('span')
button.classList.add('buttons')
button.style.backgroundImage = 'url(../img/button.png)'
container.appendChild(button)

button.addEventListener('click', function() {
    container.style.animation = 'zoom 2s linear'
    button.style.display = 'none'
    container.addEventListener('animationend', function () {
        container.style.transform = 'scale(2.2)'
        container.style.left = '-200px'
        container.style.width = '188%'
        container.style.height = '303%'
        smurfcat.style.display = ''
        title.style.display = ''
        title.style.animation = 'textAppear 2s linear'
        audio.play()
        smurfcat.style.animation = 'gatoMoviendose 2s linear'
        title.addEventListener('animationend', function() {
            title.style.opacity = 1
        })
    } )
})