import { bot } from "./inicializadores/init_bot.js";
import { db } from "./inicializadores/init_firebase.js"

export class Controller {
  // /echo mensagem
  static echo(msg, match) {
    const chatId = msg.chat.id;
    const resp = match[1];

    const aulasRef = db.collection('aulas');
    aulasRef.get().then(snapshot => {
      snapshot.docs.forEach( doc => {
        console.log(doc.data());
      })
    })

    // send back the matched to the chat
    bot.sendMessage(chatId, resp);
  }

}
