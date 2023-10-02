const heart = document.querySelector('.fa-heart')
const pause = document.querySelector('#pauseButton')

heart.onclick = function () {
    heart.classList.toggle('fa-beat')
    heart.classList.toggle('red')
}

pause.onclick = function () {
    pause.classList.toggle('fa-play')
    pause.classList.toggle('fa-pause')
}