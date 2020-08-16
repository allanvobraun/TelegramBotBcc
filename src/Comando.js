import { bot } from "./inicializadores/init_bot.js";

export class Comando {
  constructor(comando, callback) {
    this.regex = new RegExp(String.raw`\/${comando}`, "g");
    this.callback = callback;
    this.registrarEvento();
  }

  registrarEvento() {
    bot.onText(this.regex, this.callback);
  }
}
