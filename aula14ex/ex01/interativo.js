var botao = document.querySelector('#botao')
botao.addEventListener('click', clicar)

function clicar() {
    var inicio = document.querySelector('#icom').value
    var fim = document.querySelector('#ifim').value
    var passo = document.querySelector('#ipas').value
    var resp = document.querySelector('#resp')
    resp.innerHTML = ''
    var c = 1

    if (inicio === '' || fim === '' || passo === '') {
        alert('Complete todos os campos.')
    } else if (Number(inicio) == Number(fim)) {
        alert('O valor inicial é igual ao valor final. CORRIJA!')
    } else if (Number(passo) <= 0) {
        alert('Passo inválido. Corrija e tente novamente.')
    } else if (Number(inicio) < Number(fim)) {
       if (Number(passo) > (Number(fim) - Number(inicio))) {
            alert('Passo inválido. Corrija e tente novamente.')
       } else {
            for (c = Number(inicio); c <= Number(fim); c += Number(passo)) {
                resp.innerHTML += `${c} \u{1F449}`
            }
            resp.innerHTML += `\u{1F3C1}`
       }
    } else if (Number(inicio) > Number(fim)) {
        if (Number(passo) > (Number(inicio) - Number(fim))) {
            alert('Passo inválido. Corrija e tente novamente.')
       } else {
            for (c = Number(inicio); c >= Number(fim); c -= Number(passo)) {
                resp.innerHTML += `${c} \u{1F449}`
            }
            resp.innerHTML += `\u{1F3C1}`
       }
    }
    
}