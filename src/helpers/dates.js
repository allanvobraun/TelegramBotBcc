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

function removerSegundos(timeString) {
  return timeString.slice(0, 5);
}

export { diaSemana, removerSegundos, horaAtual };
