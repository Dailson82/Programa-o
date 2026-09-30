import { input, number } from "@inquirer/prompts";
const nome = await input({message: "Qual é o seu nome?"});
let idade = await number({
    message: "Idade",
    min:0,
    max:120,
    required:true,
})

let idade_depois = idade + 1;

console.log("Bem vindo," + nome + "!");
console.log(typeof idade);
console.log(typeof idade_depois);
console.log("Ano que vem vc terá " + idade_depois + "anos.");
