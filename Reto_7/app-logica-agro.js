function calcularvolumen() {
    let largo = parseFloat(document.getElementById('largo').value);
    let ancho = parseFloat(document.getElementById('ancho').value);
    let alto = parseFloat(document.getElementById('alto').value);
    
    let volumen = largo * ancho * alto;

    // Cálculo de litros de pesticida
    let area = largo * ancho; // Área del terreno
    let litrosPesticida = area * 1.5;

    // Cálculo de perímetro para la cerca eléctrica
    let perimetro = 2 * (largo + ancho);

    // Mostrar resultados
    document.getElementById('resultado_volumen').innerHTML = `Volumen: ${volumen} m³`;
    document.getElementById('resultado_pesticida').innerHTML = `Litros de pesticida: ${litrosPesticida} L`;
    document.getElementById('resultado_cerca').innerHTML = `Metros de cerca eléctrica: ${perimetro} m`;
}

// Añadir el evento de envío del formulario
document.getElementById('form-logica').addEventListener("submit", (e) => {
    e.preventDefault(); // Evitar el envío del formulario
    calcularvolumen(); // Llamar a la función de cálculo
});
