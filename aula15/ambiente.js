let num = [6, 8, 9, 11]

num[4] = 5

num[2] = 7

num.push('Olá')

console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(8)

if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

