export class BaseMensagemResource {

  constructor() {
    
  }

  // exemplo: ================mensagem================
  static mensagemHeader(mensagem, caracter) {
    const tamanhoLinha = 30; // tamanho linha telegram
    const tamanhoMensagem = mensagem.length;
    const totalEsquerda = Math.floor((tamanhoLinha - tamanhoMensagem) / 2) + tamanhoMensagem;
    return mensagem
      .padStart(totalEsquerda, caracter)
      .padEnd(tamanhoLinha, caracter);
  }
}
