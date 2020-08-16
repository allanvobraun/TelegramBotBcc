import { bot } from "./inicializadores/init_bot.js";
import { Aulas } from "./Models/Aulas.js";
import { mensagemCarregando } from "./helpers/bot_helpers.js";
import { AulaMensagemResource } from "./Resources/AulaMensagemResource.js";

export class Controller {
  // /echo mensagem
  static echo(msg, match) {
    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
  }

  static async proxima(msg, match) {
    const chatId = msg.chat.id;
    mensagemCarregando(chatId);

    const aulas = new Aulas();
    const proxima = await aulas
      .getProximaAulaData()
      .catch((error) => console.log('1'));
    const aula = await proxima.aula
      .get()
      .then((aula) => {
        return aula.data();
      })
      .catch((error) => console.log('oi'));
    console.log(aula);
    const resposta = new AulaMensagemResource(aula);

    bot.sendMessage(chatId, resposta.toString());
  }
}
