///Diferenças 
//var - global scope
//let - local scope variable
//const - local scope non variable value

let y = 11;
if (y > 10){
    let nome = "gabes"

    console.log("Y MAIOR QUE 10")
    console.log(nome)
}

// console.log(nome);

let x = 11;
if (x > 10){
    nome = "gabes"

    console.log("X MAIOR QUE 10")
    console.log(nome)
}

console.log(nome);

//com LET local, causo "X" seja maior que "10", o Console.log() a baixo do if não é indentificado e fica "nome is not definded". Mas causo você use VAR (global scope) todos as variaveis que está com nome que foi inserido no VAR vai ser identificado logo o Console.log() a baixo do if será identificado.

//Resumo: Com o let dentro de um if, tudo que usar o let só vai dar certo causo esteja dentro do If.
//Resumo: Com VAR não importa a onde, deis que tenha o nome inserido ao VAR, vai dar certo. 