const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function processFaturamento(faturamentos) {
    let menor = Number.MAX_SAFE_INTEGER;
    let maior = 0;
    let soma = 0;
    let diasComFaturamento = 0;

    faturamentos.forEach(faturamento => {
        if (faturamento > 0) {
            if (faturamento < menor) menor = faturamento;
            if (faturamento > maior) maior = faturamento;
            soma += faturamento;
            diasComFaturamento++;
        }
    });

    const media = soma / diasComFaturamento;
    const diasAcimaDaMedia = faturamentos.filter(f => f > media).length;

    console.log(`Menor faturamento: ${menor}`);
    console.log(`Maior faturamento: ${maior}`);
    console.log(`Dias acima da média mensal: ${diasAcimaDaMedia}`);
}

function loadFaturamentoFromFile() {
    fs.readFile('faturamento.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Erro ao ler o arquivo:', err);
            return readline.close();
        }
        const faturamentos = JSON.parse(data);
        processFaturamento(faturamentos);
        readline.close();
    });
}

readline.question('Você gostaria de testar com os dados do arquivo JSON (1) ou inserir seus próprios dados (2)? ', choice => {
    if (choice === '1') {
        loadFaturamentoFromFile();
    } else if (choice === '2') {
        readline.question('Insira os valores de faturamento separados por vírgula: ', input => {
            const faturamentos = input.split(',').map(Number).filter(f => f > 0);
            processFaturamento(faturamentos);
            readline.close();
        });
    } else {
        console.log('Opção inválida. Por favor, reinicie o programa e selecione 1 ou 2.');
        readline.close();
    }
});
