// GENERAR COMENTARIO "//" DOBLE DIAGONAL

// GENERAR MENSAJES A LA TERMINAL DEL CLIENTE (GOOGLE CHROME O FIREFOX O OPERA O SAFARI)
console.log("Hola mundo desde JavaScript")


// VARIABLES
// PRIMITIVOS

// 1. STRING - Texto plano
// var - JAVASCRIPT TRADICIONAL (ES5)
var nombre =  "Hola soy Mike Nieva"
console.log(nombre)

// let
// Forma de crear variables pero el cual su contenido puede ser mutable. Puede cambiar.

let saludo = "Hola, cómo están?"
saludo = "How are you?"
console.log(saludo)


// const
// Forma de crear variables pero el contenido va a ser estático y fijo. No es mutable.
// const iva = 16
// iva = 10
// console.log(iva)

/**
 * REGLA DE VIDA EN JS
 * Siempre usar const a menos que necesites mutarlo.
 */


// 2. NUMBER - Número
const age = 34
console.log(age)


// 3. BOOLEAN - True o False
const isRaining = false
console.log("Está lloviendo?", isRaining)


// 4. undefined - No está definido aún, pero lo estará.

let price
console.log("Precio indefinido", price)

price = 15
console.log("Precio ya definido", price)


// 5. null - nulo - Ya se definió y es un valor inexistente. Ausencia de valor.

const hasEngine = null



// NO PRIMITIVOS

//Objeto
const comida = {
    desayuno: "Hot Cakes",
    comida: "Chilaquiles",
    cena: "manzana"


}

//Practica
console.log("Hola a todos")
