const readline = require("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDeDados.question("Digite o nome do cliente: ", function(nome) {
    let nomeCliente = nome

    entradaDeDados.question("Digite qual o produto: ", function(produto){
        let ProdutoCliente = produto
       
        entradaDeDados.question("Qual o valor do produto: ", function(valorProduto){
            let valor = valorProduto
         
       entradaDeDados.question("Digita a taxa de juros: ", function(taxa){
                let juros = taxa
            
        entradaDeDados.question("Quantas vezes ira parcelar: ", function (parcela){
                let mes = parcela

               if(nomeCliente == "" || ProdutoCliente == ""){
                console.log("Um campo nao foi preenchido")
               }else if(valor < 0 || juros < 0 || mes < 0){
                console.log("É preciso digitar um valor!!!")
               }
                





            })
        })
     
    })



})
})