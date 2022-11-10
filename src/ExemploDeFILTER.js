const numeros = [1, 2, 3, 4, 5, 6]

// sem funcao de array
let numerosPares2 = []
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        numerosPares2.push(numeros[i])
    }
}

// com funcao de array
const numerosPares = numeros.filter((numero) => {
    if (numero % 2 === 0) {
        return numero
    }
})

console.log(numerosPares)