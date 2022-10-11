var values = [1, 2, 5, 6, 9, 4]

//console.log(values)

/* console.log(values[0])
console.log(values[1])
console.log(values[2])
console.log(values[3])
console.log(values[4])
console.log(values[5]) */

//MANEIRA TRADICIONAL

for (var pos = 0; pos < values.length; pos += 1) {
    console.log(values[pos])
}

//MANEIRA SIMPLIFICADA

for (let pos in values) {
    console.log(values[pos])
}