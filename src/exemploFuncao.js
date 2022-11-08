const numero1 = 10
const numero2 = 20
const numero3 = 50
const numero4 = 120

function multiplicacao(numero){
    const multiplica = numero * 2
    return multiplica
}

function somatorio(n1,n2){
    const soma = n1 + n2
    const mult = multiplicacao(soma)
    return mult
}

const somaEmultiplica = somatorio(10,50)


console.log(somaEmultiplica)