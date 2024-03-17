// método que junta dois ou mais arrays .concat()
// vai criar uma variavel de nomes
let nome = ["Sophia", "Eliane", "Jefferson", "Vitor"];
// vai criar outa variavel com outos nome para juntar com o outro array
let novonome = nome.concat(["Renata", "Valeria"]);
// vai exibir os nomes do primeiro array
console.log(nome);
// vai exibir o primeiro array junto com o novo array
console.log(novonome);

//Saida esperada:
//[ 'Sophia', 'Eliane', 'Jefferson', 'Vitor' ]
//[ 'Sophia', 'Eliane', 'Jefferson', 'Vitor', 'Renata', 'Valeria' ]


// segundo exemplo
let letras = ["a", "b", "c",];
let novasletras = letras.concat(["d", "e", "f"]);
console.log(letras);
console.log(novasletras);

//Saida esperada:
//[ 'a', 'b', 'c' ]
//[ 'a', 'b', 'c', 'd', 'e', 'f' ]