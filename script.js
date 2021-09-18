let ask = prompt('Вы готовы к просмотру этого сайта ?')

let again = prompt('Вы точно уверены ?')

const dead_inside = document.querySelector('.dead_inside')

dead_inside.addEventListener('click', () => {
    dead_inside.classList.toggle('active')
})