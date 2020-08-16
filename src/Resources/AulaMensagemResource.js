const aula = {
  nome: "Métodos Quantitativos para Computação",
  professor : "Manoel Camillo de Oliveira Penna Neto"
}

export class AulaMensagemResource {

  constructor(aulaObject) {
    this.aula = aulaObject;
  }

  toString() {
    return `${this.aula.nome}\nProfessor: ${this.aula.professor}`;
  }

}
