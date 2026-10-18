let preco = Number(prompt("Digite o preço do produto:"));
let listaProdutos = "";
let quantidade = 0;
let total = 0;

while (preco !== 0){
   quantidade = quantidade + 1;
   listaProdutos = listaProdutos + "Produto " + quantidade + ": R$ " + preco + "\n";
   total += preco;
   preco = Number(prompt("Digite o preço do produto:"));
}

let media = total / quantidade;

alert("Produtos cadastrados:\n" + listaProdutos +
   "\nQuantidade: " + quantidade +
   "\nValor total: R$ " + total +
   "\nMédia dos preços: R$ " + media);