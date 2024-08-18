function esconderCrip() {
    const textoEncriptado = criptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    ocultarImagem();
    ocultarMensagem();
}


function criptar(stringCriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCriptada = stringCriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringCriptada.includes(matrizCodigo[i][0])) {
            stringCriptada = stringCriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringCriptada;
}

const textArea = document.querySelector(".text-area");
function esconderDes() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
    ocultarImagem();
}


function esconderDes(stringDescriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptado = stringDescriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDescriptado.includes(matrizCodigo[i][1])) {
            stringDescriptado = stringDescriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDescriptado;
}

const mensagem = document.querySelector(".mensagem");
function Copiar() {
    mensagem.select(); 
    document.execCommand("copy"); 
}


function ocultarImagem() {
    const imagem = document.getElementById("imagem");
    imagem.style.display = "none";
}

function ocultarImagem() {
    mensagem.style.backgroundImage = "none";
}

function mostrarImagem() {
    mensagem.style.backgroundImage = "url('/assets/boneco.png')";
}

const subtitulo = document.querySelector(".mensagemSaida");
const paragrafo = document.querySelector(".mensagemSaida2");
function ocultarMensagem() {
    const mensagem = document.querySelector('.mensagemSaida');
    const paragrafo = document.querySelector('.mensagemSaida2');

    if (mensagem) {
        mensagem.style.display = 'none';
    }

    else {
        paragrafo.style.display = 'none';
    }
}
