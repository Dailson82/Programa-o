import { number } from "@inquirer/prompts";

const idade = await number({message: "Digite sua idade:" });
if (idade >= 18) {
    console.log("✅ Entrada Liberada: Bem-vindo ao evento.");
} else {
    console.log("⛔ Entrada bloqueada: Evento restrito para maiores de 18 anos.");
}

