import { bot } from "../inicializadores/init_bot.js";

function mensagemCarregando(chatId) {
  bot.sendMessage(chatId, "Esperae ta carregando...");
}

export { mensagemCarregando };
