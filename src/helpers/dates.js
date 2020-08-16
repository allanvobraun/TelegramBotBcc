import { SemProximoHorarioError } from "../Errors/SemProximoHorarioError.js";

function diaSemana() {
  const semana = [
    "domingo",
    "segunda",
    "terça",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
  ];
  const today = new Date().getDay();
  return semana[today];
}

function horaAtual() {
  const date = new Date();
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function diferencaHorario(horarioFinal, horarioInicial) {
  return (
    Date.parse(`01/01/2000 ${horarioFinal}`) -
    Date.parse(`01/01/2000 ${horarioInicial}`)
  );
}

function checarPassouDoHorario(horariosArray, horaAgora) {
  const [lastItem] = horariosArray.slice(-1);
  if (diferencaHorario(lastItem, horaAgora) < 0) {
    throw new SemProximoHorarioError(horaAgora, lastItem);
  }
}

function removerSegundos(timeString) {
  return timeString.slice(0, 5);
}

function proximoHorarioDeAula() {
  // TODO pegar horarios do banco
  const horarios = [
    "18:15:00",
    "19:00:00",
    "19:45:00",
    "20:45:00",
    "21:30:00",
    "22:15:00",
  ];
  const horaAgora = "19:00:00";

  checarPassouDoHorario(horarios, horaAgora);

  let horario_pivo = horarios[0]; // diferença de horario atual
  let pivo = diferencaHorario(horario_pivo, horaAgora);

  horarios.forEach((horario) => {
    const diferenca = diferencaHorario(horario, horaAgora);

    if ((diferenca < pivo && diferenca > 0) || pivo < 0) {
      pivo = diferenca;
      horario_pivo = horario;
    }
  });
  return removerSegundos(horario_pivo);
}


export { diaSemana, proximoHorarioDeAula };
