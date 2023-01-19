function tocaSom(seletorElemento) {
    const elemento = document.querySelector(seletorElemento);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento ou seletor não encontrado!')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio)
    };

    /* PRESSIONANDO O TECLADO COM APENAS O ENTER E O SPACE */
    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }

    /* SOLTANDO O TECLADO */
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
