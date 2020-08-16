import { bot } from "./inicializadores/init_bot.js";
import { Aulas } from "./Models/Aulas.js";
import { mensagemCarregando } from "./helpers/bot_helpers.js";
import { AulaMensagemResource } from "./Resources/AulaMensagemResource.js";
import { HorarioMensagemResource } from "./Resources/HorarioMensagemResource.js";

export class Controller {
  // /echo mensagem
  static echo(telegramMessager, match) {
    const chatId = telegramMessager.chat.id;
    const resp = "Mesagem de teste " + "🐧";

    bot.sendMessage(chatId, resp);
  }

  static async proxima(telegramMessager, match) {
    const chatId = telegramMessager.chat.id;
    mensagemCarregando(chatId);

    const aulas = new Aulas();
    let aula;
    let proxima;

    try {
      proxima = await aulas.getProximaAulaData();
      aula = await proxima.aula.get().then((aula) => {
        return aula.data();
      });
    } catch (error) {
      console.log(error);
      bot.sendMessage(chatId, error.toString());
      return;
    }

    const aulaMensagem = new AulaMensagemResource(aula);
    const horarioMensagem = new HorarioMensagemResource(proxima);
    const resposta = `${aulaMensagem}\n${horarioMensagem}`

    bot.sendMessage(chatId, resposta);
  }
}
