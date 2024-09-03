
# Desafio de Estágio - Node.js Scripts

Este repositório contém uma coleção de scripts desenvolvidos em Node.js como parte de um desafio técnico para um processo de estágio. Os scripts abordam diferentes problemas de programação e manipulação de dados.

## Descrição dos Scripts

- **Cálculo de Soma**: Calcula a soma de números de 1 até 13.
- **Verificador de Fibonacci**: Verifica se um número específico está na sequência de Fibonacci.
- **Análise de Faturamento Diário**: Calcula o menor e maior faturamento diário e o número de dias com faturamento acima da média mensal, a partir de dados em um arquivo JSON ou XML.
- **Cálculo Percentual de Faturamento por Estado**: Calcula o percentual de representação que cada estado teve dentro do valor total mensal de uma distribuidora.
- **Inversão de String**: Inverte os caracteres de uma string.

## Tecnologias Utilizadas

- Node.js
- JSON
- XML

## Configuração e Execução

### Pré-requisitos

Você precisa ter o Node.js instalado em sua máquina, que deve suportar módulos ES. Para verificar se o Node.js está instalado, use o comando:

```bash
node -v
```

Certifique-se de que seu ambiente está configurado para suportar módulos ES, adicionando `"type": "module"` no seu `package.json`.

### Instalação

Clone este repositório localmente usando:

```bash
git clone https://github.com/eduadg/EstagioSP.git
```

Após clonar o repositório, instale as dependências necessárias executando:

```bash
npm install
```

Isso instalará `xml2js` entre outras dependências listadas no `package.json`.

### Execução dos Scripts

Para executar qualquer um dos scripts, navegue até o diretório do repositório clonado e execute com o seguinte formato:

```bash
node nome_do_script.js
```

Por exemplo, para executar o script de análise de faturamento diário:

```bash
node desafio3.js
```

Você será solicitado a escolher se deseja processar dados de um arquivo JSON ou XML. Escolha conforme sua preferência para ver os resultados.
