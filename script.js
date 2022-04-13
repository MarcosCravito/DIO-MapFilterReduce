//Mappin Function é a função que levando como exemplo
//os conjuntos em matematica ocorre a alteração dos valores um array em outros valores
//essa operação é realizada em ordem 


/*Sintaxe

array.map(callback, thisArg)
o argumento this é opcional.

Map vs ForEach

A diferença é que o map retorna por um exemplo

const array = [ 1, 2, 3, 4, 5]
array.map((item)=> item * 2) 

o retorno será o item * 2 

logo o forEach retornará
undefined

const array = [1, 2, 3, 4, 5]
array.forEach((item)=> item * 1); undefined

*/


/* Filter 

o que é o filter?

 O filter é necessariamente o mesmo que aderir todo o array
 em um filtro e ele retorna um novo array,
 apenas os itens que passaram pelo meu filtro.

 Sintaxe

 array.filter(callback, thisArg);

 Quase mesmo processo de map

 exemplo:

 const frutas = ['maça fuji', 'maça verde', 'laranja', 'abacaxi'];
 frutas.filter((fruta) => fruta.includes('maça'))

  o retorno será ['maça fuji', 'maça verde'];




  METODO REDUCE


  Ele não retorna outro array.
  Ele executa uma função em todos os elementos do array, retornandoi um valor único.

  O valor pode ser qualquer coisa, desde um array até um numero em específico.

  Como utilizar:

  array.reduce(callbackFn, InitialValue)


  CallBack> é a função a ser executada a partir do acumulador

  InitialValue> Valor sobre o qual o retorno final irá atuar.


const callbackFn = function(accumulator, currentValue, index, array) {
    //do someting
}

Accumulator/prevValue> acumulador de tiodas as chamadas de callbackFn

currentValue> Elemento atual sendo acessado pela função

*/

//ATIVIDADE

const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg){
    return arr.map(function(item){
      return  item * this.value;
    }, thisArg);
}

const nums = [1, 2]

console.log('this -> maca', mapComThis(nums, maca))
console.log('this -> laranja', mapComThis(nums, laranja))


//FUNÇÃO QUE NAO UTILIZA O THIS



function mapSemThis(arr){
   return arr.map(function(item){
        return item * 2
    });
}

const num = [2, 4, 6, 8, 10];

console.log(mapSemThis(num));

console.log(num);

//EXERCICIO DE FILTER

function filtrarPares(arr) {
    return arr.filter(callBack);
}

function callBack(item) {
    return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtrarPares(meuArray));

//REDUCE

function Somanumeros(arr){
   return arr.reduce(function (prev, current) {
    
    console.log({ prev } );
    console.log({ current});
    return prev + current;

    });
}

const meuoutroarray = [1, 2];
console.log(Somanumeros(meuoutroarray));


//EXERCICIO 2 REDUCE

const lista = [
{
    name: 'sabao em po',
    preco: 30,
},
{
    name: 'cereal',
    preco: 12,
},
{
    name: 'toalha',
    preco: 30,
},
];

const saldodisponivel = 100;
function calculasaldo(saldodisponivel, lista){

    return lista.reduce(function(prev, current, index){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldodisponivel);

}

console.log(calculasaldo(saldodisponivel, lista));