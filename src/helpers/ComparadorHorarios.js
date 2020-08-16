import { removerSegundos } from "./dates.js"
import { SemProximoHorarioError } from "../Errors/SemProximoHorarioError.js";
import { NaoEstaEmAulaError } from "../Errors/NaoEstaEmAulaError.js";

export class ComparadorHorarios {
  constructor(horarioAtual) {
    this.horarios = [
      { inicio: "18:15:00", fim: "19:00:00" },
      { inicio: "19:00:00", fim: "19:45:00" },
      { inicio: "19:45:00", fim: "20:30:00" },
      { inicio: "20:45:00", fim: "21:30:00" },
      { inicio: "21:30:00", fim: "22:15:00" },
      { inicio: "22:15:00", fim: "23:00:00" },
    ];

    this.horarioAtual = horarioAtual;
  }

  get ultimoHorario() {
    return this.horarios.slice(-1)[0];
  }

  get horariosIniciais() {
    return this.horarios.map( horario => {
      return horario.inicio;
    });
  }

  diferencaHorario(horarioFinal, horarioInicial) {
    return (
      Date.parse(`01/01/2000 ${horarioFinal}`) -
      Date.parse(`01/01/2000 ${horarioInicial}`)
    );
  }

  // checka se passou do horario de uma aula
  checarPassouDoHorario(ultimaHora, horaAgora) {
    if (this.diferencaHorario(ultimaHora, horaAgora) < 0) {
      throw new SemProximoHorarioError(horaAgora, ultimaHora);
    }
  }

  horarioInicioAulaAtual() {
    return this.horarios.find((horario) => {
      return horario.fim >= this.horarioAtual && this.horarioAtual >= horario.inicio;
    });
  }

  // horario de inicio da aula atual
  getHoraInicioAula() {
    const horaObject = this.horarioInicioAulaAtual();
    if (typeof horaObject === 'undefined') {
      throw new NaoEstaEmAulaError();
    }

    return removerSegundos(horaObject.inicio);
  }

  proximoHorarioDeAula() {
    
    this.checarPassouDoHorario(this.ultimoHorario.inicio, this.horarioAtual);
  
    let horario_pivo = this.horariosIniciais[0]; 
    let pivo = this.diferencaHorario(horario_pivo, this.horarioAtual);
  
    this.horariosIniciais.forEach((horario) => {
      const diferenca = this.diferencaHorario(horario, this.horarioAtual);
  
      if ((diferenca < pivo && diferenca > 0) || pivo < 0) {
        pivo = diferenca;
        horario_pivo = horario;
      }
    });
    return horario_pivo;
  }

  // o horario de inicio da proxima aula
  getProximoHorarioAula() {
    return removerSegundos(this.proximoHorarioDeAula());
  }

}


// const horarioAtual = "22:35:00";

// const comparador = new ComparadorHorarios(horarioAtual);

// console.log(comparador.getHoraInicioAula());