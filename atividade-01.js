const readline = require("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
entradaDeDados.question("Digite o nome do cliente: ", function (nome) {
    let nomeCliente = nome

    entradaDeDados.question("Digite qual o produto: ", function (produto) {
        let ProdutoCliente = produto

        entradaDeDados.question("Qual o valor do produto: ", function (valorProduto){
            let valor = valorProduto

            entradaDeDados.question("Digita a taxa de juros: ", function (taxa){
                let juros = taxa

                entradaDeDados.question("Quantas vezes ira parcelar: ", function (parcela) {
                    let mes = parcela

                    if (nomeCliente == "" || ProdutoCliente == "") {
                        console.log("Um campo nao foi preenchido")
                    } else if (valor == "" || juros == "" || mes == "") {
                        console.log("É preciso digitar um valor!!!")
                    }else if(isNaN (valor) || isNaN(juros) || isNaN(mes)){
                        console.log("Somente numeros são permitidos")
                    }


                    let calcularMontatente
                    juros = (Number(taxa)) / 100
                    calcularMontatente = (Number (valor) * Number(1 + juros) ** Number(mes))
                    console.log(`
                        ******************* [Viva Moda] ******************* \n
                        Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.\n
                        A compra do produto ${ProdutoCliente}, tem um valor de: ${valorProduto}.\n
                        A sua compra será parcelada em ${mes} vezes e o Sr(a) pagará: ${calcularMontatente.toFixed(2)}.\n
                        O acréscimo realizado ao valor de: ${valorProduto} será de ${calcularMontatente.toFixed(2)}.\n
                        Muito obrigado por escolher a [Viva Moda]. \n
                        *******************************************************
                        `)




                })
            })

        })
    })
})