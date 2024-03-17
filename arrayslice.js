// método que retorna uma copia do array .slice()
// vai criar uma variavel de letras
let arrayletras = ["a", "b", "c", "d", "e"];
// vai criar outra variável para pegar o primeiro array e copiar ele começando a partir do index 3 (d) 
let novoarray = arrayletras.slice(3);
// vai exibir o primeiro array
console.log(arrayletras);
// vai exibir a cópia do primeiro array começando a partir do index 3
console.log(novoarray);

//Saida esperada:
//[ 'a', 'b', 'c', 'd', 'e' ] primeiro array
//[ 'd', 'e' ] segundo array

// segundo exemplo
let arraynumeros = ["1", "2", "3", "4", "5"];
let copiaarray = arraynumeros.slice(2);
console.log(arraynumeros);
console.log(copiaarray);

//Saida esperada:
//[ '1', '2', '3', '4', '5' ]
//[ '3', '4', '5' ]
