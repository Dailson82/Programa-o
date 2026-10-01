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

switch (pagamento) {  
    case "pix":
        console.log("Valor final: R$ " + (Total * 0.9).toFixed(2));
        break;
    case "cartao_credito":
        console.log("Valor final: R$ " + Total.toFixed(2));
        break;
    case "cartao_debito":
        console.log("Valor final: R$ " + (Total * 0.95).toFixed(2));
        break;
}