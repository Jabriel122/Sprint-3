// const numeros = [1, 2, 3, 4, 5, 10, 100, 300]

//map passa por cada item do array original e retonra um novo array, modificado.

// const arrDobro = numeros.map((n) => {
//     return n * 2;
// })

// console.log(numeros);
// console.log(arrDobro);

// let hobbies = ['filmes', 'livros', 'futebol', 'músicas', 'artes'];
// const hobbiesList = hobbies.map(function(hobb){
// return `<li>${hobb}</li>`
// });
// console.log(hobbiesList);

//crie 2 arrays nomes e sobrenomes
//crie um terceiro array de nomesCompleto
//ao final os nomes completos no console com o foreach
//é necessário contem pelo menos 5 nomes
//utile arrow funcitions como calback functions

const nomes = ["Felipe", "Fábio", "Ricardo", "Paulo", "Thiago"]
const sobrenomes = ["Smith", "Porcha", "Avelon", "Mathias", "Bezerra"]

const arrNomeCompleto = nomes.map((nome, indice) =>{
    return (`${nome} ${sobrenomes[indice]}`)
});

arrNomeCompleto.forEach((nc) =>{console.log(nc);});

    //pessoa.forEach((cadaPessoa) => {
    //     console.log("Bom dia " + cadaPessoa);
    // });