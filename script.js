document.getElementById('formulario-calcular').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del formulario
    
    const cantidadKwh = parseFloat(document.getElementById('cantidad-kwh').value);
    let costoTotal = 0;
    
    const tramos = [
        [0, 100, 0.33],
        [101, 150, 1.07],
        [151, 200, 1.43],
        [201, 250, 2.46],
        [251, 300, 3.00],
        [301, 350, 4.00],
        [351, 400, 5.00],
        [401, 450, 6.00],
        [451, 500, 7.00],
        [501, 600, 11.05],
        [601, 700, 11.81],
        [701, 1000, 12.31],
        [1001, 1800, 13.50],
        [1801, 2600, 14.75],
        [2601, 3400, 16.13],
        [3401, 4200, 17.44],
        [4201, 5000, 18.75],
        [5001, Infinity, 25.00] // Representa cualquier valor mayor a 5000 kWh
    ];
    
    for (let i = 0; i < tramos.length; i++) {
        const [limiteInferior, limiteSuperior, precio] = tramos[i];
        if (cantidadKwh >= limiteInferior && cantidadKwh <= limiteSuperior) {
            costoTotal += precio * (cantidadKwh - limiteInferior + 1);
            
        } else if (cantidadKwh > limiteSuperior) {
            costoTotal += precio * (limiteSuperior - limiteInferior + 1);
            
        }
    }
    
    document.getElementById('resultado').innerText = `El costo total de ${cantidadKwh} kWh es de ${costoTotal.toFixed(2)} CUP.`;
});
