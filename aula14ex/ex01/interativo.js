var botao = document.querySelector('#botao')
botao.addEventListener('click', clicar)

function clicar() {
    var inicio = document.querySelector('#icom').value
    var fim = document.querySelector('#ifim').value
    var passo = document.querySelector('#ipas').value
    var resp = document.querySelector('#resp')
    resp.innerHTML = ''
    var c = 0

    if (inicio == 0 || fim == 0 || passo == 0) {
        alert('Complete todos os campos.')
    } else if (Number(inicio) >= Number(fim)) {
        alert('O Número inicial é maior ou igual ao Número final. Verifique e tente novamente.')
    } else if (Number(passo) > (Number(fim) - Number(inicio))) {
        alert('O passo está muito grande. Diminua e tente novamente.')
    } else {
        for (c = Number(inicio); c <= Number(fim); c += Number(passo)) {
            resp.innerHTML += `${c}...`
        }
    }
}