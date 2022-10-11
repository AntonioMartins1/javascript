function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`;

    if(hora >= 0 && hora < 12) {
        console.log('Bom dia!!!')
        img.src = 'fotos/ftmanha.jpg'
        document.body.style.background = '#FFE555'
    } else if(hora >= 12 && hora < 18) {
        console.log('Boa tarde!!!')
        img.src = 'fotos/fttarde.jpg'
        document.body.style.background = '#F3C57C'
    } else {
        console.log('Boa noite!!!')
        img.src = 'fotos/ftnoite.jpg'
        document.body.style.background = '#073270'
    }
}
