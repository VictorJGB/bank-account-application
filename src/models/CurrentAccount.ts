import Account from './Account';
import Credit from './Credit';
import Debt from './Debt';

export default class CurrentAccount extends Account {
  private _limit: number = 0;
  private _depositExtract: number = 0; //Deposit history
  private _debtExtract: number = 0; //Debt history

  constructor(limit: number, number: string) {
    super(number);
    this._limit = limit;
  }

  get DepositExtract(): number {
    return this._depositExtract;
  }

  get DebtExtract(): number {
    return this._debtExtract;
  }

  calculateBalance(): number {
    const extractSum = this._depositExtract - this._debtExtract;

    return extractSum + this._limit;
  }

  Transfer(destinationAccount: Account, value: number) {
    if (this.calculateBalance() > 0) {
      this._debtExtract += value;
      destinationAccount.Deposit(value);
      console.log(
        'Transferência de R$',
        value,
        ' reais realizada com sucesso!'
      );
      console.log('Data: ', new Date().toUTCString);
      console.log('Conta remetente: ', this.Number);
      console.log('Saldo final: R$', this.calculateBalance(), 'reais');
      console.log('********************************');
      console.log('Conta destinatária: ', destinationAccount.Number);
      console.log(
        'Saldo final: R$',
        destinationAccount.calculateBalance(),
        'reais'
      );
    }
  }

  //Extended from Account class
  Deposit(value: number): void {
    const date = new Date();
    const credit = new Credit(value, date);
    this._depositExtract += credit.Value;
    console.log('Depósito no valor de: ', credit.Value, 'reais realizado!');
    console.log('Data do depósito: ', credit.Date.toUTCString);
  }

  Withdraw(value: number): void {
    const date = new Date();
    const debt = new Debt(value, date);
    if (this.calculateBalance() > 0) {
      this._debtExtract += debt.Value;
      console.log('\nDébito no valor de: R$', debt.Value, 'reais realizado!');
      console.log('Conta: ', this.Number);
      console.log('Data do débito: ', date.toUTCString);
    } else {
      console.log('\nSaldo inválido para saque!');
      console.log('Conta: ', this.Number);
      console.log('Saldo atual: R$', this.calculateBalance());
    }
  }
}
