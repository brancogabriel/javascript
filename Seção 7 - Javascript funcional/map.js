var estudantes = [
    { nome: "Nathan", nota: 7.5 },
    { nome: "Linda", nota: 8 },
    { nome: "Paula", nota: 2.1 },
    { nome: "Ana", nota: 8.3 },
    { nome: "Lúcio", nota: 4.5 },
    { nome: "Nathália", nota: 6 },
]

let notas = []

for(i of estudantes){
    notas.push(i.nota)
}

var maior_nota = Math.max(...notas) //recebe todo o array de notas e grava a maior nota

let notas_normalizadas = estudantes.map(estudantes => (estudantes.nota*10/maior_nota).toFixed(2))

//console.log(`Notas antigas eram: ${notas}`)
//console.log(`Notas ordenadas: ${notas_normalizadas}`)

function normaliza(x){
    return (x*10/maior_nota).toFixed(2);
}
console.log(
    "Novas notas: "+
        estudantes
            .map(i => i.nota) //pega cada elemento dos arrays de nota
            .map(normaliza) //aplica a função normaliza
)