import Address from './models/Address';
import Client from './models/Client';
import CurrentAccount from './models/CurrentAccount';

const address = new Address(
  '60337-500',
  'Travessa Martan',
  '100',
  'Apt. 03',
  'Fortaleza',
  'Ceará'
);

const client = new Client(false, '229.763.930-95', 'Victor', '(24) 3411-5788', [
  address,
]);

const currentAccount = new CurrentAccount(1000, '001.200.100-90', client);

currentAccount.Deposit(100);
currentAccount.Deposit(100);
currentAccount.Deposit(100);
currentAccount.Withdraw(50);
