const Circunferencia = require ('./circuferencia')

circunferencia1 = new Circunferencia(2, 'amarillo')
console.log(circunferencia1.getLongitud())
circunferencia2 = new Circunferencia(4, 'azul')
console.log(circunferencia2.getLongitud())
arrayCircunferencias = []
arrayCircunferencias.push(circunferencia1)
arrayCircunferencias.push(circunferencia2)
Circunferencia.mostrarDatos(arrayCircunferencias)