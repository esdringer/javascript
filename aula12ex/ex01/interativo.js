window.addEventListener('load', carregar)

function carregar() {
    var hora = new Date().getHours()
    var res = document.querySelector('#msg')
    var img = document.querySelector('#img')
    if (hora < 12) {
        res.innerHTML = `São ${hora} horas da manhã.`
        document.body.style.backgroundColor = '#e2cd9f'
        img.src = 'imagens/manha.jpg'
    } else if (hora < 18) {
        res.innerHTML = `São ${hora} horas da tarde.`
        document.body.style.backgroundColor = '#b9846f'
        img.src = 'imagens/tarde.jpg'
    } else {
        res.innerHTML = `São ${hora} horas da noite.`
        document.body.style.backgroundColor = '#515154'
        img.src = 'imagens/noite.jpg'
    }
}