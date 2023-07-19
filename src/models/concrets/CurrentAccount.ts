import Account from '../abstracts/Account';
import Client from './Client';
import Credit from './Credit';
import Debt from './Debt';

export default class CurrentAccount extends Account {
  private _limit: number = 0;
  private _depositExtract: number = 0; //Deposit history
  private _debtExtract: number = 0; //Debt history
  private _limitExtract: number = 0; //Limit history

  constructor(limit: number, number: string, person: Client) {
    super(number, person);
    this._limit = limit;
  }

  get DepositExtract(): number {
    return this._depositExtract;
  }

  get DebtExtract(): number {
    return this._debtExtract;
  }

  calculateTotalBalance(): number {
    const extractSum = this._depositExtract - this._debtExtract;

    return extractSum + this._limit;
  }

  calculateBalance(): number {
    const extractSum = this._depositExtract - this._debtExtract;
    return extractSum;
  }

  // Log de transferência
  transferLogExtract(destinationAccount: Account, value: number) {
    console.log('\nTransferência de R$', value, 'reais realizada com sucesso!');
    console.log('********************************');
    console.log('Data: ', new Date().toUTCString());
    console.log('Conta remetente: ', this.Number);
    console.log('Dono(a) da conta:', this.Person.Name);
    console.log('Tipo: Conta Corrente');
    console.log('Saldo final: R$', this.calculateTotalBalance(), 'reais');
    console.log('********************************');
    console.log('Conta destinatária: ', destinationAccount.Number);
    console.log('Dono(a) da conta:', destinationAccount.Person.Name);
    console.log('Tipo: Conta Poupança');
    console.log(
      'Saldo final: R$',
      destinationAccount.calculateBalance(),
      'reais'
    );
  }

  // Log para erro de transferência
  transferLogError(destinationAccount: Account, value: number) {
    console.log('\nTRANSAÇÃO CANCELADA!');
    console.log(
      'Saldo inválido para transferência no valor de: R$',
      value,
      'reais'
    );
    console.log('Data:', new Date().toUTCString());
    console.log('********************************');
    console.log('Conta remetente: ', this.Number);
    console.log('Dono(a) da conta:', this.Person.Name);
    console.log('Tipo: Conta Corrente');
    console.log('Saldo final: R$', this.calculateTotalBalance(), 'reais');
    console.log('********************************');
    console.log('Conta destinatária: ', destinationAccount.Number);
    console.log('Dono(a) da conta:', destinationAccount.Person.Name);
    console.log('Tipo: Conta Poupança');
    console.log(
      'Saldo final: R$',
      destinationAccount.calculateBalance(),
      'reais'
    );
  }

  Transfer(destinationAccount: Account, value: number) {
    const date = new Date();
    const debt = new Debt(value, date);
    this._debtExtract += debt.Value;
    if (this.calculateTotalBalance() >= 0) {
      destinationAccount.Deposit(value, true);
      this.transferLogExtract(destinationAccount, value);
    } else {
      // saldo inválido
      this._debtExtract -= debt.Value;
      this.transferLogError(destinationAccount, value);
    }
  }

  // Log do depósito
  depositLogExtract(credit: Credit, limit: number) {
    console.log('\nDepósito no valor de: R$', credit.Value, 'reais realizado!');
    console.log('Conta: ', this.Number);
    console.log('Dono(a) da conta:', this.Person.Name);
    console.log('Tipo: Conta Corrente');
    console.log('Data do depósito: ', credit.Date.toUTCString());
    console.log('Limite atual:', limit);
    console.log('Saldo da conta:', this.calculateBalance(), 'reais');
    console.log('Saldo total: R$', this.calculateTotalBalance(), 'reais');
  }

  Deposit(value: number, isTransfer?: boolean): void {
    const date = new Date();
    const credit = new Credit(value, date);
    this._depositExtract += credit.Value;
    if (!isTransfer) {
      this.depositLogExtract(credit, value);
    }
  }

  // Log de débito
  withdrawLogExtract(debt: Debt) {
    console.log('\nDébito no valor de: R$', debt.Value, 'reais realizado!');
    console.log('Conta: ', this.Number);
    console.log('Dono(a) da conta:', this.Person.Name);
    console.log('Tipo: Conta Corrente');
    console.log('Data do débito: ', debt.Date.toUTCString());
    console.log('Saldo final: R$', this.calculateTotalBalance(), 'reais');
  }

  // Log do erro de débito
  withdrawLogError(debt: Debt) {
    console.log('\nTRANSAÇÃO CANCELADA!');
    console.log(
      'Saldo inválido para saque no valor de: R$',
      debt.Value,
      'reais'
    );
    console.log('Conta: ', this.Number);
    console.log('Data:', debt.Date.toUTCString);
    console.log('Tipo: Conta Corrente');
    console.log('Saldo atual: R$', this.calculateTotalBalance());
  }

  Withdraw(value: number): void {
    const date = new Date();
    const debt = new Debt(value, date);
    this._debtExtract += debt.Value;

    if (this.calculateTotalBalance() >= 0) {
      this.withdrawLogExtract(debt);
    } else {
      this._debtExtract -= debt.Value;
      this.withdrawLogError(debt);
    }
  }
}
