import { bot } from "./inicializadores/init_bot.js";
import { Aulas } from "./Models/Aulas.js";
import { mensagemCarregando } from "./helpers/bot_helpers.js";
import { AulaMensagemResource } from "./Resources/AulaMensagemResource.js";

export class Controller {
  // /echo mensagem
  static echo(msg, match) {
    const chatId = msg.chat.id;
    const resp = match[1] + "🐧";

    bot.sendMessage(chatId, resp);
  }

  static async proxima(msg, match) {
    const chatId = msg.chat.id;
    mensagemCarregando(chatId);

    const aulas = new Aulas();
    let aula;

    try {
      const proxima = await aulas.getProximaAulaData();
      aula = await proxima.aula.get().then((aula) => {
        return aula.data();
      });
    } catch (error) {
      console.log(error.name);
      bot.sendMessage(chatId, error.toString());
      return;
    }

    console.log(aula);
    const resposta = new AulaMensagemResource(aula);

    bot.sendMessage(chatId, resposta.toString());
  }
}
