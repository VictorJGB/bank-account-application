import CurrentAccount from './models/CurrentAccount';

const account01 = new CurrentAccount(2000, '082-023-745-193');

console.log(account01);
account01.Deposit(200);
account01.Withdraw(100);
account01.Deposit(100);
account01.Withdraw(2200);
account01.Withdraw(100);
