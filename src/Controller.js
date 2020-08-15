import { bot } from "./inicializadores/init_bot.js";
import { db } from "./inicializadores/init_firebase.js"

export class Controller {
  // /echo mensagem
  static  async echo(msg, match) {
    const chatId = msg.chat.id;
    const resp = match[1];

    const aulasRef = db.collection('aulas');
    const data = [];
    await aulasRef.get().then(snapshot => {
      snapshot.docs.forEach( doc => {
        data.push(doc.data().nome)
      })
    })

    // send back the matched to the chat
    bot.sendMessage(chatId, data.toString());
  }

}
