document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Mensagem enviada com sucesso!");
    });

    // Função para calcular o impacto ambiental
    const impactForm = document.getElementById('impact-form');
    const resultado = document.getElementById('resultado');

    impactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const peso = document.getElementById('peso-eletronico').value;
        const impacto = peso * 1.37;  // Estimativa: 1.37 kg de CO2 economizado por kg de lixo eletrônico descartado corretamente

        resultado.textContent = `Ao descartar corretamente ${peso} kg de eletrônicos, você ajudou a economizar aproximadamente ${impacto.toFixed(2)} kg de CO2!`;
    });
});
