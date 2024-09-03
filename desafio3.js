import fs from 'fs';
import readline from 'readline';
import xml2js from 'xml2js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const parser = new xml2js.Parser({
    explicitArray: false,
    tagNameProcessors: [xml2js.processors.stripPrefix],
    mergeAttrs: true
});

function processFaturamento(faturamentos) {
    let menor = Number.MAX_SAFE_INTEGER;
    let maior = 0;
    let soma = 0;
    let diasComFaturamento = 0;

    faturamentos.forEach(faturamento => {
        let valor = parseFloat(faturamento.valor);
        if (valor > 0) {
            if (valor < menor) menor = valor;
            if (valor > maior) maior = valor;
            soma += valor;
            diasComFaturamento++;
        }
    });

    const media = soma / diasComFaturamento;
    const diasAcimaDaMedia = faturamentos.filter(f => parseFloat(f.valor) > media).length;

    console.log(`Menor faturamento: ${menor}`);
    console.log(`Maior faturamento: ${maior}`);
    console.log(`Dias acima da média mensal: ${diasAcimaDaMedia}`);
}

rl.question('Você gostaria de testar com os dados do arquivo JSON (1) ou XML (2)? ', choice => {
    if (choice === '1') {
        fs.readFile('dados.json', 'utf8', (err, data) => {
            if (err) {
                console.error('Erro ao ler o arquivo JSON:', err);
                rl.close();
                return;
            }
            const faturamentos = JSON.parse(data);
            processFaturamento(faturamentos);
            rl.close();
        });
    } else if (choice === '2') {
        fs.readFile('dados (2).xml', 'utf8', (err, data) => {
            if (err) {
                console.error('Erro ao ler o arquivo XML:', err);
                rl.close();
                return;
            }
            parser.parseString(data, (err, result) => {
                if (err) {
                    console.error('Erro ao parsear XML:', err);
                    rl.close();
                    return;
                }
                console.log(JSON.stringify(result, null, 2));
                const faturamentos = Array.isArray(result.row) ? result.row : [result.row];
                processFaturamento(faturamentos);
                rl.close();
            });
        });
    } else {
        console.log('Opção inválida. Por favor, reinicie o programa e selecione 1 ou 2.');
        rl.close();
    }
});
