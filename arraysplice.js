//método que permite adicionar, remover ou substituir elementos em qualquer posição do array .splice()

//adição de elementos
//vai criar uma variável de profissões
let profissoes = ["perita", "bombeiro", "policial", "medico"];
//vai ser adicionado o elemento enfermeiro no array no index 2
profissoes.splice(2, 0, "enfermeiro");
//vai exibir o array com a profissões adicionado na posição indicada
console.log(profissoes);

//saída esperada:
//[ 'perita', 'bombeiro', 'enfermeiro', 'policial', 'medico' ]


//remoção de elementos
//vai criar uma variável de comidas
let comidas = ["arroz", "feijao","batata", "macarrao", "frango"];
//vão ser removidos 2 elementos a partir do index 2 (batata e macarrão)
comidas.splice(2, 2);
//vai exibir o array com as comidas removidas
console.log(comidas);

//saída esperada:
//[ 'arroz', 'feijao', 'frango' ]


//substituição de elementos:
//vai criar uma variável de família
let familia = ["pai", "mae", "irmao", "irma"];
//vai ser substituido o elemento do index 3
familia.splice(3, 1, "tia");
//vai ser exibido o array com a familia substituida
console.log(familia);

//saída esperada:
//[ 'pai', 'mae', 'irmao', 'tia' ]