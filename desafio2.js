const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function isFibonacci(num) {
    let a = 0, b = 1, c = 1;
    if (num === 0 || num === 1) return true;
    while (c <= num) {
        c = a + b;
        a = b;
        b = c;
        if (c === num) return true;
    }
    return false;
}

readline.question('Digite um número para verificar na sequência de Fibonacci: ', num => {
    num = parseInt(num);
    console.log(`O número ${num} ${isFibonacci(num) ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`);
    readline.close();
});
