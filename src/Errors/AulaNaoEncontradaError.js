import { BaseError } from "./BaseError.js";

export class AulaNaoEncontradaError extends BaseError{
  constructor(diaHoje, horarioBuscado) {
    super(`Não foi encontrada nenhuma aula para hoje, tente denovo amanhã\n\ 
    Dia de hoje: ${diaHoje}\nProximo horario de aula: ${horarioBuscado}`);
  }
}