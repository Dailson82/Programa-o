import {number} from "@inquirer/prompts";

const numero_digitado = await number({
    message: "Digite um número para a tabuada"
})

console.log(`tabuada do ${numero_digitado}`)
console.log("=".repeat(15))

for (let i = 1; i<= 10; i++) {
    console.log(`${1} x ${numero_digitado} = ${i*numero_digitado}`)
}