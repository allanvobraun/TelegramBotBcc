import { bot } from "./inicializadores/init_bot.js";

export class Comando {
  constructor(comando, aceitaParametro ,callback) {
    let regexParametro = "";
    if (aceitaParametro) {
      regexParametro = " (.+)";
    }
    
    this.regex = new RegExp(String.raw`\/${comando}${regexParametro}`, "g");
    this.comando = bot.onText(this.regex, callback);
  }
}
