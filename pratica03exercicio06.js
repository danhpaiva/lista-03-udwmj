function calcularMontante() {
    const capitalInput = document.getElementById("capital").value;
    const taxaInput = document.getElementById("taxa").value;
    const tempoInput = document.getElementById("tempo").value;
    const resultadoDiv = document.getElementById("resultado");

    const capital = parseFloat(capitalInput);
    const taxaPorcentagem = parseFloat(taxaInput);
    const tempo = parseFloat(tempoInput);

    // Valida se os campos preenchidos são válidos
    if (isNaN(capital) || capital < 0 ||
        isNaN(taxaPorcentagem) || taxaPorcentagem < 0 ||
        isNaN(tempo) || tempo < 0) {
        resultadoDiv.textContent = "Por favor, preencha todos os campos com valores válidos.";
        resultadoDiv.style.color = "red";
        return;
    }

    // Converte a taxa de porcentagem para decimal (ex: 5% -> 0.05)
    const i = taxaPorcentagem / 100;

    // Fórmula: M = C * (1 + i)^t
    const montante = capital * Math.pow(1 + i, tempo);
    const jurosGerados = montante - capital;

    resultadoDiv.style.color = "#222";
    resultadoDiv.innerHTML = `
        Montante Final (M): R$ ${montante.toFixed(2)}<br>
        Juros Acumulados: R$ ${jurosGerados.toFixed(2)}
    `;
}