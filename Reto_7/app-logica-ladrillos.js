function calcularLadrillos() {
 
    const largo = parseFloat(document.getElementById('largo').value);
    const alto = parseFloat(document.getElementById('alto').value);
    const largoLadrillo = parseFloat(document.getElementById('largo_ladrillo').value);
    const altoLadrillo = parseFloat(document.getElementById('alto_ladrillo').value);
    const porcentaje = parseFloat(document.getElementById('porcentaje').value) / 100;

   
    const areaPared = (largo * alto) / 10000; 
    const areaLadrillo = (largoLadrillo * altoLadrillo) / 10000;

    // Calcular número de ladrillos
    let ladrillosNecesarios = areaPared / areaLadrillo;

   
    ladrillosNecesarios += ladrillosNecesarios * porcentaje;

    // Mostrar resultados
    document.getElementById('resultado').innerHTML = `
        <p>Ladrillos necesarios: <strong>${Math.ceil(ladrillosNecesarios)}</strong></p>
        <p>Área de la pared: <strong>${areaPared.toFixed(2)} m²</strong></p>
        <p>Área de un ladrillo: <strong>${areaLadrillo.toFixed(2)} m²</strong></p>
    `;
}


document.getElementById('form-ladrillos').addEventListener('submit', (e) => {
    e.preventDefault(); 
    calcularLadrillos(); 
});
