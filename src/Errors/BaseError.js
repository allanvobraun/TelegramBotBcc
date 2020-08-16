export class BaseError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }

  toString() {
    const header = "🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑\n";
    return `${header}${this.nameLegivel}\n${header}${this.message}`;
  }

  get nameLegivel() {
    const words = this.name.match(/[A-Za-z][a-z]*/g) || [];
    return words.map(this.capitalize).join(" ");
  }

  capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }
}
