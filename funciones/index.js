function saludar () {
    console.log('Hola mundo')
}

saludar()

function sumar (x, y) {
    return x + y
}
function sumar1 (x, y = 0) {
    return x + y
}
console.log(sumar(3,4,5,5 ,5))
console.log(sumar1(3))

function argumentos (...x) {
    let resultado = 0
    for(valor of x) {
        resultado += valor
    }
    return resultado
}
console.log(argumentos(1,2,3,4,5,6))

// (function () {
//     console.log("Funciones anonimas")
// })()

var arrowFunction = (x , y) =>  x * y //ES6

console.log(arrowFunction(5,4))

var otroFuncion = x => {
    console.log(`Argumento pasado ${x}`)
    return x**2
}
console.log(otroFuncion(3))