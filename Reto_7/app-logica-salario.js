function calcularLiquidacion(event) {
    event.preventDefault();

    let dias = parseFloat(document.getElementById('dias').value);
    let horasExDi = parseFloat(document.getElementById('extras-diurnas').value);
    let horasExNo = parseFloat(document.getElementById('extras-nocturnas').value);
    let festivos = parseFloat(document.getElementById('festivo').value);
    let nombreEmp = document.getElementById('Empleado').value;

    if (isNaN(dias)) {
        alert('Por favor valida bien el número de días ingresado');
        return;
    }

    let pagoPorDia = dias * 43000;
    let pagoHoExDi = horasExDi * 6915;
    let pagoHoExNo = horasExNo * 9681;
    let pagosFes = festivos * 11064;

    let salarioBruto = pagoPorDia + pagoHoExDi + pagoHoExNo + pagosFes;

    const descSalud = 0.04;
    const descPension = 0.04;
    const descAlimentacion = 0.03;

    let descSaludTotal = salarioBruto * descSalud;
    let descPensionTotal = salarioBruto * descPension;
    let descAlimentacionTotal = salarioBruto * descAlimentacion;

    let salarioNeto = salarioBruto - (descSaludTotal + descPensionTotal + descAlimentacionTotal);

    let salarioNetoFormateado = salarioNeto.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });

    let tabla = document.getElementById('form-liquidacion').getElementsByTagName('tbody')[0];
    let nuevaFila = tabla.insertRow();

    let celdaEmpleado = nuevaFila.insertCell(0);
    let celdaDias = nuevaFila.insertCell(1);
    let celdaExtrasDiurnas = nuevaFila.insertCell(2);
    let celdaExtrasNocturnas = nuevaFila.insertCell(3);
    let celdaFestivos = nuevaFila.insertCell(4);
    let celdaSalarioNeto = nuevaFila.insertCell(5);

    celdaEmpleado.textContent = nombreEmp;
    celdaDias.textContent = dias;
    celdaExtrasDiurnas.textContent = horasExDi;
    celdaExtrasNocturnas.textContent = horasExNo;
    celdaFestivos.textContent = festivos;
    celdaSalarioNeto.textContent = salarioNetoFormateado;

    document.getElementById('form-liquidacion').reset();
}

// Añadir evento al formulario
document.getElementById('form-liquidacion').addEventListener('submit', calcularLiquidacion);
