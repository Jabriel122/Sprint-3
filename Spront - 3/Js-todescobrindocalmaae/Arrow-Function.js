//=+++===+=+=+==++++++==+++++++ANTES DE RODAR OS CÓDIGOS COMENTE OS EXEMPLOS QUE VOCÊ NÃO VAI VER+++++=++++++======+++=+===+=+===+=====

const numeros = [ 1, 2, 5, 10, 300];

const pessoa = ["Carlos", "Anna", "Demétrio", "Vinícius", "Lacrada", "Eveliny" ];

//+++++++++++++++++++++callback funcitons+++++++++++++
// pessoa.forEach(
//     function carlos(cadaPessoa){
//         console.log('Bom dia ' + cadaPessoa);
//     }
// );

// =================função anônima============
// pessoa.forEach(
//     function carlos(cadaPessoa){
//         console.log('Bom dia ' + cadaPessoa);
//     }
// );

// ********************arrow functions*****************

pessoa.forEach((cadaPessoa) => {
    console.log("Bom dia " + cadaPessoa);
});

//** ***arrow function - É um maneira rapida e fácil de fazer uma função*** **

// const dobro0 =  (x) => {
//     return x * 2;
// }

// console.log( dobro0(5) );


//***********forma simplificada com return implícito ************

// const dobro1 = (x) => x * 2;//retorna o dobro

// console.log( dobro1(10) );

//***********forma simplificada com return implícito ************

// const dobro2 = x => x * 2;//retorna o dobro, por ter um só parâmetro é possível tirar os "()" do "x" estava assim antês "(x)"

// console.log( dobro2(10) );
const bomDia = () => "Bom Dia" //retorna o texto bom di

console.log(bomDia());



//=+++===+=+=+==++++++==+++++++ANTES DE RODAR OS CÓDIGOS COMENTE OS EXEMPLOS QUE VOCÊ NÃO VAI VER+++++=++++++======+++=+===+=+===+=====