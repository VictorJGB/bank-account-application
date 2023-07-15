import CurrentAccount from './models/CurrentAccount';

const account01 = new CurrentAccount(2000, '000.000.000.01');
const account02 = new CurrentAccount(2000, '000.000.000.02');

console.log(account01);
account01.Deposit(200);
account01.Transfer(account02, 200);
