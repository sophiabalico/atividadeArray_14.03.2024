// método que inclui um novo elemento no início de um array .unshift()
// vai criar uma variavel de instrumentos
let instrumentos = ["baixo", "teclado", "violao"];
// vai incluir esse novo elemento no início do array
instrumentos.unshift("guitarra");
// vai exibir o array com o novo elemento no início
console.log(instrumentos);

//Saida esperada:
//[ 'guitarra', 'baixo', 'teclado', 'violao' ]

// segundo exemplo
let maquiagem = ["sombra", "rimel", "blush"];
maquiagem.unshift("gloss", "iluminador");
console.log(maquiagem);

//Saida esperada:
//[ 'gloss', 'iluminador', 'sombra', 'rimel', 'blush' ]