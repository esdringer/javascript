var botao = document.querySelector('#botao')
botao.addEventListener('click', clicar)

function clicar() {
    var input = document.querySelector('#inum').value
    var num = Number(input)
    var resp = document.querySelector('#resp')
    var res = 0
    var c = 1
    resp.innerHTML = ''

    if (input === '') {
        alert('Por favor, Digite um Número.')
    } else {
        for (c = 1; c <= 10; c++) {
            res = num * c
            resp.innerHTML += `<p>${num} x ${c} = ${res}</p>`
        }
    }
}