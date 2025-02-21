function fibonacci(num) {
    let a = 0, b = 1, temp;

    while (a <= num) {
        if (a === num){
            return true;
        }
        temp = a + b;
        a = b;
        b = temp;
    }
    return false;
}

const numero = parseInt(prompt("Digite um numero: "), 10);

console.log(fibonacci(numero) ? `${numero} pertence a sequencia de Fibonacci` : `${numero} não pertence a sequencia de Fibonacci`);

