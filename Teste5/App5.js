function inversor(str) {
    let palavraInvertida = "";
    


    for (let i = str.length - 1; i >= 0; i--) {
        palavraInvertida += str[i];
    }

    return palavraInvertida;


}

const escrever = prompt("Digite uma palavra para ser invertida");
const resultado = inversor(escrever);

alert(`Palavra original: ${escrever}\nPalavra invertida: ${resultado}`);