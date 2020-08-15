import { bot } from './init_bot.js';

export class Controller {

  static echo(msg, match) {
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
  }
}
