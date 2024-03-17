// método que junta dois ou mais arrays .concat()
// vai criar uma variavel de nomes
let nome = ["Jesus", "Sophia", "Leonardo", "Eliane", "Jefferson", "Vitor"];
// vai criar outa variavel com outos nome para juntar com o outro array
let novonome = nome.concat(["Bruna", "Brian"]);
// vai exibir os nomes do primeiro array
console.log(nome);
// vai exibir o primeiro array junto com o novo array
console.log(novonome);

//Saida esperada:
//"Jesus", "Sophia", "Leonardo", "Eliane", "Jefferson", "Vitor"
//"Jesus", "Sophia", "Leonardo", "Eliane", "Jefferson", "Vitor", "Bruna", "Brian"


// segundo exemplo
let letras = ["a", "b", "c", "d", "e"];
let novasletras = letras.concat(["f", "g", "h"]);
console.log(letras);
console.log(novasletras);

//Saida esperada:
//"a", "b", "c", "d", "e"
//"a", "b", "c", "d", "e", "f", "g", "h"