import Account from './Account';
import Client from './Client';
import Credit from './Credit';
import Debt from './Debt';

export default class SavingsAccount extends Account {
  private _depositExtract: number = 0; //Deposit history
  private _debtExtract: number = 0; //Debt history

  constructor(number: string, person: Client) {
    super(number, person);
  }

  get DepositExtract(): number {
    return this._depositExtract;
  }

  get DebtExtract(): number {
    return this._debtExtract;
  }

  calculateBalance(): number {
    const extractSum = this._depositExtract - this._debtExtract;

    return extractSum;
  }

  //Extended from Account class
  Deposit(value: number, isTransfer?: boolean): void {
    const date = new Date();
    const credit = new Credit(value, date);
    this._depositExtract += credit.Value;
    if (!isTransfer) {
      console.log(
        '\nDepósito no valor de: R$',
        credit.Value,
        'reais realizado!'
      );
      console.log('Conta: ', this.Number);
      console.log('Dono(a) da conta:', this.Person.Name);
      console.log('Tipo: Conta Poupança');
      console.log('Data do depósito: ', credit.Date.toUTCString());
      console.log('Saldo final: R$', this.calculateBalance(), 'reais');
    }
  }

  Withdraw(value: number): void {
    const date = new Date();
    const debt = new Debt(value, date);
    this._debtExtract += debt.Value;

    if (this.calculateBalance() >= 0) {
      console.log(this.calculateBalance());
      console.log('\nDébito no valor de: R$', debt.Value, 'reais realizado!');
      console.log('Conta: ', this.Number);
      console.log('Dono(a) da conta:', this.Person.Name);
      console.log('Tipo: Conta Poupança');
      console.log('Data do débito: ', date.toUTCString());
      console.log('Saldo final: R$', this.calculateBalance(), 'reais');
    } else {
      this._debtExtract -= debt.Value;
      console.log('\nTRANSAÇÃO CANCELADA!');
      console.log('Saldo inválido para saque no valor de: R$', value, 'reais');
      console.log('Conta: ', this.Number);
      console.log('Dono(a) da conta:', this.Person.Name);
      console.log('Tipo: Conta Poupança');
      console.log('Saldo atual: R$', this.calculateBalance());
    }
  }
}
