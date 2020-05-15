let circunferencia1 = {
    radio : 5,
    color : 'rojo'
}
const circunferencia2 = {
    radio : 6,
    color : 'verde'
}
circunferencia1.radio = 8
circunferencia1 = circunferencia2
console.log(circunferencia1)