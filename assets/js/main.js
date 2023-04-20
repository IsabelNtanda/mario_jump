const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const game_over = document.querySelector('.game-over, .hidden')
const jump = () => { 
    mario.classList.add('jump')

    // setTimeout(funcao, acao) 
    setTimeout( () => {
    mario.classList.remove('jump')
    },500)

}
const loop = setInterval(() =>{


const pipePosition = pipe.offsetLeft
// + -> converte para numero
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')


if (pipePosition < 12 && pipePosition > 0  && marioPosition < 8 ){
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}rem`

    mario.style.animation = 'none'
    mario.style.bottom = `${ marioPosition}rem`

    mario.src = './assets/images/game-over.png'
    mario.style.width = '7.5rem'
    mario.style.margin = '5rem'

    game_over.classList.add('game-over')
    game_over.classList.remove('hidden')

    clearInterval(loop)
}

} , 10)
document.addEventListener('keydown', jump)
document.addEventListener('click', jump)