const numeros = [10, 12, 20];

const somatorio = numeros.reduce((total, n) =>{
    return total + n
}, 0);

console.log(somatorio);

const produtos = [
    {produto: "Camiseta", preço: 129.90},
    {produto: "Tênis", preço: 350.97},
    {produto: "Jaqueta de Couro", preco: 700.01},
];

let totProduto = produtos.reduce((vlInicial, oP) =>{
    return vlInicial + oP.preco;
}, 0);

console.log(`Gerente, o total de vendas é: R$${totProduto}`);

const objVendedor = {
    vendedor,
    comisao,
    idade: 41
}

console.log(objVendedor)