function calcularImposto(valor, porcentagem) {
    return (valor * porcentagem) / 100;
}

function gerarNotaFiscal() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itensVendidos = document.getElementById('itensVendidos').value;
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);

    const valorIRPF = calcularImposto(valorVenda, irpf);
    const valorPIS = calcularImposto(valorVenda, pis);
    const valorCOFINS = calcularImposto(valorVenda, cofins);
    const valorINSS = calcularImposto(valorVenda, inss);
    const valorISSQN = calcularImposto(valorVenda, issqn);

    const totalImpostos = valorIRPF + valorPIS + valorCOFINS + valorINSS + valorISSQN;
    const valorLiquido = valorVenda - totalImpostos;

    const notaFiscalHTML = `
        <h2>Nota Fiscal de Serviço</h2>
        <p><strong>Itens Vendidos:</strong> ${itensVendidos}</p>
        <p><strong>Valor da Venda:</strong> R$ ${valorVenda.toFixed(2)}</p>
        <p><strong>IRPF:</strong> R$ ${valorIRPF.toFixed(2)}</p>
        <p><strong>PIS:</strong> R$ ${valorPIS.toFixed(2)}</p>
        <p><strong>COFINS:</strong> R$ ${valorCOFINS.toFixed(2)}</p>
        <p><strong>INSS:</strong> R$ ${valorINSS.toFixed(2)}</p>
        <p><strong>ISSQN:</strong> R$ ${valorISSQN.toFixed(2)}</p>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
        <p><strong>Valor Líquido:</strong> R$ ${valorLiquido.toFixed(2)}</p>
    `;

    document.getElementById('notaFiscal').innerHTML = notaFiscalHTML;
}