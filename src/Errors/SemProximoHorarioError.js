import {BaseError} from './BaseError.js';

export class SemProximoHorarioError extends BaseError {
  constructor(horaAtual, ultimaHora) {
    super(`A hora atual ${horaAtual} é maior que o ultimo horario ${ultimaHora}`);
  }
}