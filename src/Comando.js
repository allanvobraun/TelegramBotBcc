import { bot } from './init_bot.js';

export class Comando {
  constructor(comando, callback) {
    console.log('potata');
    
    this.regex = new RegExp(String.raw`\/${comando} (.+)`, 'g');
    this.comando = bot.onText(this.regex, callback);
  }
}