function calcularVolume() {
    const raioInput = document.getElementById("raio").value;
    const resultadoDiv = document.getElementById("resultado");

    const raio = parseFloat(raioInput);

    if (isNaN(raio) || raio <= 0) {
        resultadoDiv.textContent = "Por favor, insira um valor válido para o raio.";
        resultadoDiv.style.color = "red";
        return;
    }

    // Fórmula: V = (4/3) * π * r³
    const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);

    resultadoDiv.style.color = "#222";
    resultadoDiv.textContent = `O volume da esfera é: ${volume.toFixed(2)}`;
}