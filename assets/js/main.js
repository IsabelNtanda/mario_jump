const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
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


    clearInterval(loop)
}

} , 10)
document.addEventListener('keydown', jump)