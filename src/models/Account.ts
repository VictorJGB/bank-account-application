export default abstract class Account {
  private _number: String = '';

  constructor(number: String) {
    this._number = number;
  }

  get number(): String {
    return this._number;
  }

  set number(value: String) {
    this._number = value;
  }

  //Métodos a serem sobrescritos
  Deposit(value: Number) {}

  Withdraw(value: Number) {}
}
