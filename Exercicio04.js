import { select, number } from "@inquirer/prompts";

const Total = await number({message: "Qual o valor total da compra (0 a 1000): ", step: "any" });

const pagamento = await select({
    message: "Selecione a forma de pagamento:",
    choices: [
        { name: "Pix (Desconto de 10%)", value: "pix" },
        { name: "Cartão de Crédito( Sem Desconto)", value: "cartao_credito" },
        { name: "Cartão de Débito(Desconto de 5%)", value: "cartao_debito" },
    ]
})

let valor_desconto = 0;

switch (pagamento) {  
    case "pix":
        // console.log("valor de Desconto Pix") + (pagamento * 0.9);
        valor_desconto = Total * 0.9
        break;
    case "cartao_credito":
        // console.log("Valor de Desconto cartão_credito");
        valor_desconto = Total * 1
        break;
    case "cartao_debito":
        // console.log("Valor de Desconto cartão_debito" + (pagamento * 0.95));
        valor_desconto = Total * 0.95
        break;
}


console.log("de acordo com a opção de pagamento");
console.log(`o valor a ser pago é de ${valor_desconto}`);