const arrfilme = [];
//Exercício

//Criar uma desesruruação para um objeto filmes
//trazer somente 3 propriedades
//crie um arquivo a parte e tente executar sem consulta


const filme =[
    {
        Nome: "Jurassic Park",
        Genero: ["Aventura", " Ação", " Dinossauro"],
        Publicadora: "Universal Studio"
    },
    {
        Nome: "StarWars",
        Genero: ["Aventura", " Ação", " Espaço"],
        Publicadora: "LucasFilm"
    },
    {
        Nome: "Prenda-me se for capaz",
        Genero: ["Drama", " Batalha Pisicólógica", " Leonardo DiCaprio"],
        Publicadora: "Paramont+"
    }
    
]

// const {Nome, Genero, Publicadora} = filme;
//Aqui a gente fez de Destruturação enquanto fazia a forEach por isso que está com "{Nome, Genero, publicadora}"
filme.forEach( ( {Nome, Genero, Publicadora}, i ) =>{ 

    console.log(`
            FIlme${i+1}: ${Nome.toUpperCase()}
            Genero: ${Genero.toString()}
            Publicadora: ${Publicadora.toString()}
    `);
})

