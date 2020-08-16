const horario = {
  hora_fim: "20:30",
  hora_inicio: "19:45",
};
export class HorarioMensagemResource {
  constructor(horarioObject) {
    this.horario = horarioObject;
  }

  toString() {
    return `Começa as: ${this.horario.hora_inicio}\nTermina as: ${this.horario.hora_fim}`;
  }
}
