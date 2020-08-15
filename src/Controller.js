import { bot } from "./inicializadores/init_bot.js";

export class Controller {
  // /echo mensagem
  static echo(msg, match) {
    const chatId = msg.chat.id;
    const resp = match[1];

    // send back the matched to the chat
    bot.sendMessage(chatId, resp);
  }

  static
}
