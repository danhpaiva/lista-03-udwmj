function calcularArea() {
    const raioInput = document.getElementById("raio").value;
    const resultadoDiv = document.getElementById("resultado");

    const raio = parseFloat(raioInput);

    if (isNaN(raio) || raio <= 0) {
        resultadoDiv.textContent = "Por favor, insira um valor válido para o raio.";
        resultadoDiv.style.color = "red";
        return;
    }

    const area = Math.PI * Math.pow(raio, 2);

    resultadoDiv.style.color = "#222";
    resultadoDiv.textContent = `A área do círculo é: ${area.toFixed(2)}`;
}