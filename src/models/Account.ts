export default abstract class Account {
  private _number: String = '';

  constructor(number: String) {
    this._number = number;
  }

  get Number(): String {
    return this._number;
  }

  //Métodos a serem sobrescritos
  calculateBalance() {}

  Deposit(value: number) {}

  Withdraw(value: number) {}
}
