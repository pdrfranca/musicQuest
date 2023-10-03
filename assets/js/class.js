const heart = document.querySelector('.fa-heart')
const pause = document.querySelector('#pauseButton')
const back = document.querySelector('#back')

heart.onclick = function () {
    heart.classList.toggle('fa-beat')
    heart.classList.toggle('red')
}

pause.onclick = function () {
    pause.classList.toggle('fa-play')
    back.
        pause.classList.toggle('fa-pause')
}