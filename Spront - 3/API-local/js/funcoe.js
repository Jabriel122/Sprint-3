const urlViaCep= "https://viacep.com.br/ws"
const urlCepProfessor = 'http://172.16.35.155:3000/myceps';
const urlContato = ""

async function cadastrar(e){
    e.preventDefault();
    
    //pega os valores do campos de formulário
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const numero = document.getElementById("numero").value;
    const endereco = document.getElementById("endereco").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("nome").value.trim();

    //extra - fazer a validadção (dica - crie uma função : bool)

    dados = {
        nome,
        email,
        cep,
        numero,
        endereco,
        cidade,
        estado
    }

    try{
        const promise = await fetch('http://172.16.35.155:3000/myceps', {
            data: JSON.stringify(ojbCadastro),
            method: "post",
            headers: {"Content-type": "application/json"}
        })
    
        const dados = await promise.json()

        consolo.log(dados)
    }catch(error){
        console.log("Deu ruim");

        console.log(error)
    }
    
        

}

async function buscarEndereco(cep){
    //complemento do endereço da API
    const resource =`/${cep}/json`
    
    //transoformo o jsno retonado em um objeto ou array
    try{
        // const promise = await fetch(urlViaCep +  resource);

        const promise = await fetch(`${urlCepProfessor}/${cep}`);

        const endereco =  await promise.json();
        console.log(endereco);

        //Preencher formulario automáticamente com o cep inserido no placeholder
        document.getElementById("endereco").value = endereco.logradouro
        document.getElementById("cidade").value = endereco.localidade
        document.getElementById("estado").value = endereco.uf

        // function preencherCampo(endereco){
        //     logradouro: endereco.logradouro,
        //     localidade
        // }
    }catch(error){
        alert(error)
        console.log(error);

        document.getElementById("not-found").innerText = error
    }
}


