document.querySelector('#botao').addEventListener('click', clicar)

function clicar() {
    var anoNasc = document.querySelector('#iano')
    var anoAtual = new Date().getFullYear()
    var res = document.querySelector('#res')
    if (anoNasc.value.length != 4 || Number(anoNasc.value) > anoAtual || Number(anoNasc.value) < 1900) {
        alert('Verifique os dados e tente novamente.')
    } else {
        var idade = anoAtual - Number(anoNasc.value)
        var sexo = document.getElementsByName('sexo')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade < 13) {
                img.setAttribute('src', 'imagens/homem-crianca.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/homem-jovem.jpg')
            } else if (idade < 65) {
                img.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else {
                img.setAttribute('src', 'imagens/homem-idoso.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade < 13) {
                img.setAttribute('src', 'imagens/mulher-crianca.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/mulher-jovem.jpg')
            } else if (idade < 65) {
                img.setAttribute('src', 'imagens/mulher-adulto.jpg')
            } else {
                img.setAttribute('src', 'imagens/mulher-idosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
        res.appendChild(img)
    }
}