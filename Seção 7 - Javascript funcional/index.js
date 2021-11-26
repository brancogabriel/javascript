// Função de texto

function hello(nome){
    return "hello " +nome;
}
var mensagem = hello("Gabriel");
console.log(mensagem);

/* Função soma
 function soma (a,b){
    return a+b
}
console.log(soma(2,5)); */


/* Função anônima de soma
 (function(x,y){
    console.log(x+y);
})(5,6); */


// Function expression
const soma = function(x,y){
    return x+y;
}

let resultado = soma(3,10);
console.log("Function expression simples: ", resultado);


 // Arrow function
const somav2 = (x, y) => {
    return x+y;
}
console.log("Arrow function: ", somav2(3,10));

const somav3 = (x, y) => x + y;
console.log("Arrow function 1 linha:", somav3(3,10));

const subtracao = (x, y) => x - y;
console.log("Arrow function subtração 1 linha:", subtracao(3,10)); 

//função invocada
(()=>{ console.log("Olá mundo")})();

//spread
const somav4 = ( x = 0, y = 0, z = 0)=> x + y + z; // caso a constante não receba nenhum valor como parâmetro, será considerada como valor 0
console.log(somav4(1,2,3));

const somav5 = (...numeros)=> {
    let aux = 0;
    for (i of numeros){
        aux += i;
    }
    return aux;
}
console.log(somav5(1,2,3,4,5,10,13,17));