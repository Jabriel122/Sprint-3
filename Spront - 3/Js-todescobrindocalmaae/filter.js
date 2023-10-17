const numeros = [1, 2, 32, 65, 5, 10, "200", 3, 9, 17];

console.log(numeros)

const nMenor10 = numeros.filter((n) => { return n <10});

console.log(nMenor10)

const nMaior10 = numeros.filter((n) => { return n > 10});

console.log(nMaior10)

const doisDuzentos = numeros.filter((n) =>{ 
    return n === 2 || n === '200';
})

console.log(doisDuzentos)




const cometarios = [
    {comentario: "bla bla bla", exibe: true},
    {comentario: "Evento é um coco", exibe: false},
    {comentario: "Otímo evento", exibe: true}
];

const comentariosOk = cometarios.filter( (c)=> {return c.exibe === true;}); //os "===" é do JavaScript, são 3 iguais pois eles comparam "VALOR" e "TIPO".

console.log(comentariosOk);

