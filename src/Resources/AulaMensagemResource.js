import { BaseMensagemResource } from "./BaseMensagemResource.js";

export class AulaMensagemResource extends BaseMensagemResource {

  constructor(aulaObject) {
    super();
    this.aula = aulaObject;
  }

  toString() {
    return `${this.aula.nome}\nProfessor: ${this.aula.professor}`;
  }

  static collection(aulasArray) {
    let mensagem = this.mensagemHeader(" Aulas do 4° semestre ", '=') + '\n';
    const header = this.mensagemHeader(" Aula ", '=') + '\n';
    aulasArray.forEach(aulaObj => {
      let aula = new AulaMensagemResource(aulaObj);
      mensagem += (header + aula) + '\n';
    });
    
    return mensagem;
  }
}
