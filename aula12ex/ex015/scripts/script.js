function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')
    if (Number(fano.value) > ano || Number(fano.value) < 1900) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('border-radius', '50%')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //crianca
                img.setAttribute('src', 'fotos/ft-bebe-h.jpg')
                img.setAttribute('style', 'border-radius: 50%;')
            } else if (idade > 10 && idade <= 21) {
                //jovem
                img.setAttribute('src', 'fotos/ft-jovem-h.jpg')
                img.setAttribute('style', 'border-radius: 50%;')
            } else if (idade > 21 && idade <= 50) {
                //adulto
                img.setAttribute('src', 'fotos/ft-adulto-h.jpg')
                img.setAttribute('style', 'border-radius: 50%;')
            } else {
                //idoso
                img.setAttribute('src', 'fotos/ft-idoso-h.jpg')
                img.setAttribute('style', 'border-radius: 50%;')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //crianca
                img.setAttribute('src', 'fotos/ft-bebe-m.jpg')
                img.setAttribute('style', 'border-radius: 50%;')
            } else if (idade > 10 && idade <= 21) {
                //jovem
                img.setAttribute('src', 'fotos/ft-jovem-m.jpg')
                img.setAttribute('style', 'border-radius: 50%;')
            } else if (idade > 21 && idade <= 50) {
                //adulto
                img.setAttribute('src', 'fotos/ft-adulto-m.jpg')
                img.setAttribute('style', 'border-radius: 50%;')
            } else {
                //idoso
                img.setAttribute('src', 'fotos/ft-idoso-m.jpg')
                img.setAttribute('style', 'border-radius: 50%;')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
