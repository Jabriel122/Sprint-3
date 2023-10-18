const cmaisaLacoste = {
    descricao: "Camisa Lascoste",
    preco: 589.97,
    tamanho: "m",
    cor: "Amarela0",
    presente: true

}

const{descricao, preco} = cmaisaLacoste;
const{presente} = cmaisaLacoste;

// console.log("PRODUTO");
// console.log();

console.log(`
PRODUTO:
    Descrição: ${descricao}
    Preço: ${preco}
    Presente: ${presente? "Sim" : "Não"}

`);

const evento ={
    dataEvento : new Date(),
    descricaoEvento: "Evento de JavaScript",
    titulo: "Progremação web",
    presencaEvento: true,
    comentarioEvento : "evento maniero com edu"
}

const {dataEvento, descricaoEvento,titulo,presencaEvento,comentarioEvento} = evento;

console.log(`
        -${titulo}-
Dia: ${dataEvento}
Descrição ${descricao}
Vai vim ${presencaEvento}
O que achou ${comentarioEvento}

`)




