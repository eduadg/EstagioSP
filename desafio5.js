const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

readline.question('Digite uma string para ser invertida: ', inputString => {
    console.log(`String original: ${inputString}`);
    console.log(`String invertida: ${reverseString(inputString)}`);
    readline.close();
});
