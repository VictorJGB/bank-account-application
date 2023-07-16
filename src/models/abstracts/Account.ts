import Client from '../concrets/Client';

export default abstract class Account {
  private _number: String = '';
  private _person: Client = new Client(false, '', '', '', []);

  constructor(number: String, person: Client) {
    this._number = number;
    this._person = person;
  }

  get Number(): String {
    return this._number;
  }

  get Person(): Client {
    return this._person;
  }

  //Métodos a serem sobrescritos
  calculateBalance() {}

  Deposit(value: number, isTransfer?: boolean) {}

  Withdraw(value: number) {}
}
