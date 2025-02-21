const faturamentoMensal = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const total = Object.values(faturamentoMensal).reduce((acc, val) => acc + val, 0);




console.log('Percentual de cada estado:');
for (const individual in faturamentoMensal) {
    const percentual = (faturamentoMensal[individual] / total) * 100;
    console.log(`${individual}: ${percentual.toFixed(2)}%`)
}