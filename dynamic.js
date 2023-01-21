const board = document.querySelector('#board')
const colors = ['#ec3131', '#31c0ec', '#dfec31', '#314dec', '#31ec31', '#a131ec', '#ec8b31']
const SQUARES_NMB = 500

for(let i = 0; i < SQUARES_NMB; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)

}

function setColor(element){
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = ` 0 0 2px black`
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}