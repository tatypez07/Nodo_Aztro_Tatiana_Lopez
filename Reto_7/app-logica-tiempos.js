function calcularpromedio() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let d = parseFloat(document.getElementById('d').value);
    let e = parseFloat(document.getElementById('e').value);

    let resultado = (a + b + c + d + e) / 5;

    document.getElementById('Resultado').textContent = resultado.toFixed(2); // Mostrar el resultado con dos decimales
}

document.getElementById('form-logica').addEventListener("submit", function(event) {
    event.preventDefault();
    calcularpromedio();
});










