// reduce

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/* function somanum(total, i){ 
    return total+i 
} */

const somanum = (total, i) => total + i

var somatorio = numeros.reduce(somanum)

console.log(somatorio)

var media = numeros.reduce(somanum)/somanum.length

console.log(media)
