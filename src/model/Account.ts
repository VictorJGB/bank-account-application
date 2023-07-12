export default abstract class Account {
  private _number: String = '';

  constructor(number: String) {
    this._number = number;
  }

  //Métodos a serem sobrescritos
  Deposit(value: Number) {}

  Withdraw(value: Number) {}
}
