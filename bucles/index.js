const array = []
let circunferencia1 = {
    radio : 5,
    color : 'rojo'
}
const circunferencia2 = {
    radio : 6,
    color : 'verde'
}
array.push(circunferencia1)
array.push(circunferencia2)
console.log(array)
for (let index = 0; index < array.length; index++) {
    // Circunferencia: de radio 5 y color rojo
    console.log(`Circunferencia: de radio ${array[index].radio} y color ${array[index].color}`)
    
}
for (circunferencia of array) {
    console.log(`Circunferencia: de radio ${circunferencia.radio} y color ${circunferencia.color}`)
}
array.forEach(
    circunferencia => console.log(`Circunferencia: de radio ${circunferencia.radio} y color ${circunferencia.color}`))