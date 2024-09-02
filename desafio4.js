const faturamentos = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const total = Object.values(faturamentos).reduce((acc, curr) => acc + curr, 0);

Object.entries(faturamentos).forEach(([estado, valor]) => {
    console.log(`Percentual de ${estado}: ${(valor / total * 100).toFixed(2)}%`);
});
