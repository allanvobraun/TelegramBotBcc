export class BaseError extends Error {
  constructor(message, mostrarErrorHeader = true) {
    super(message);
    this.name = this.constructor.name;
    this.header = mostrarErrorHeader ? "🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑\n" : "";
    Error.captureStackTrace(this, this.constructor);
  }

  toString() {
    return `${this.header}${this.nameLegivel}\n${this.header}${this.message}`;
  }

  get nameLegivel() {
    const words = this.name.match(/[A-Za-z][a-z]*/g) || [];
    return words.map(this.capitalize).join(" ");
  }

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }
}
