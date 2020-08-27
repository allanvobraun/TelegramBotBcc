import { bot } from "./inicializadores/init_bot.js";
import { Aulas } from "./Models/Aulas.js";
import { mensagemCarregando } from "./helpers/bot_helpers.js";
import { AulaMensagemResource } from "./Resources/AulaMensagemResource.js";
import { HorarioMensagemResource } from "./Resources/HorarioMensagemResource.js";
import { AulaComHorarioResource } from "./Resources/AulaComHorarioResource.js";

export class Controller {
  // /echo mensagem
  static echo(telegramMessager, match) {
    const chatId = telegramMessager.chat.id;
    const resp = "Mensagem de teste " + "🐧";

    bot.sendMessage(chatId, resp);
  }

  static async proxima(telegramMessager, match) {
    const chatId = telegramMessager.chat.id;
    mensagemCarregando(chatId);

    const aulasModel = new Aulas();
    let aulaHorarios;
    let proximaAula;

    try {
      aulaHorarios = await aulasModel.getProximaAulaData();
      proximaAula = await aulaHorarios.aula.get().then((aula) => {
        return aula.data();
      });
    } catch (error) {
      console.log(error);
      bot.sendMessage(chatId, error.toString());
      return;
    }

    const resposta = new AulaComHorarioResource(proximaAula, aulaHorarios);

    bot.sendMessage(chatId, resposta.toString());
  }

  static async agora(telegramMessager, match) {
    const chatId = telegramMessager.chat.id;
    mensagemCarregando(chatId);

    const aulasModel = new Aulas();
    let aulaHorarios;
    let aulaAtual;

    try {
      aulaHorarios = await aulasModel.getAtualAulaData();

      aulaAtual = await aulaHorarios.aula.get().then((aula) => {
        return aula.data();
      });
    } catch (error) {
      console.log(error);
      bot.sendMessage(chatId, error.toString());
      return;
    }

    const resposta = new AulaComHorarioResource(aulaAtual, aulaHorarios);

    bot.sendMessage(chatId, resposta.toString());
  }

  static async aulas(telegramMessager, match) {
    const chatId = telegramMessager.chat.id;
    mensagemCarregando(chatId);
    
    const aulasModel = new Aulas();
    const aulasArray = await aulasModel.getAllData();

    const resposta = AulaMensagemResource.collection(aulasArray);

    bot.sendMessage(chatId, resposta.toString());
  }
}
