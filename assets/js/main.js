const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const game_over = document.querySelector('#game_over_img')
const btn = document.querySelector('#button')
const jump_song = document.querySelector('.jump_song')
const over_song = document.querySelector('.game_over_song')

const jump = () => {
  mario.classList.add('jump')

  jump_song.currentTime = 0.1
  jump_song.volume = 0.1
  jump_song.play()

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500)
}

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

  if (pipePosition < 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

    mario.src = './assets/images/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    game_over.classList.add('.game_over')
    game_over.classList.remove('hidden')

    btn.classList.add('.game_over')
    btn.classList.remove('hidden')

    btn.addEventListener('click', function () {
      location.reload()
    })

    over_song.currentTime = 0.1
    over_song.volume = 0.2
    over_song.play()

    clearInterval(loop)
  }
}, 10)

document.addEventListener('keydown', jump)
document.addEventListener('click', jump)
