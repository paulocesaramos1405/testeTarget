fetch('faturamento.json')
    .then(response => response.json())
    .then(data => {
        const valorValido = data
            .map(dia => dia.valor)
            .filter(valor => valor > 0);

        const menorFaturamento = Math.min(...valorValido);
        const maiorFaturamento = Math.max(...valorValido);

        const media = valorValido.reduce((acc, val) => acc + val, 0) / valorValido.length;
        const acimaMedia = valorValido.filter(valor => valor > media).length;

        console.log(`Menor faturamento diário: R$ ${menorFaturamento.toFixed(2)}`);
        console.log(`Maior faturamento diário: R$ ${maiorFaturamento.toFixed(2)}`);
        console.log(`Número de dias com faturamento acima da média: ${acimaMedia}`);
    })
  
