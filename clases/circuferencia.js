module.exports = class Circunferencia {
    constructor (radio, color) {
        this.radio = radio
        this.color = color
    }
    getLongitud () {
        return 2 * this.radio * 3.14
    }
    static mostrarDatos (array) {
        array.forEach(
            circunferencia => console.log(`Circunferencia: de radio ${circunferencia.radio} y color ${circunferencia.color}`))
    }
}

// circunferencia1 = new Circunferencia(2, 'amarillo')
// console.log(circunferencia1.getLongitud())
// circunferencia2 = new Circunferencia(4, 'azul')
// console.log(circunferencia2.getLongitud())
// arrayCircunferencias = []
// arrayCircunferencias.push(circunferencia1)
// arrayCircunferencias.push(circunferencia2)
// Circunferencia.mostrarDatos(arrayCircunferencias)
