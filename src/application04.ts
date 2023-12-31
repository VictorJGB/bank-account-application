import Address from './models/concrets/Address';
import Client from './models/concrets/Client';
import CurrentAccount from './models/concrets/CurrentAccount';
import SavingsAccount from './models/concrets/SavingsAccount';

const currentAddress = new Address(
  '60337-500',
  'Travessa Martan',
  '100',
  'Apt. 03',
  'Fortaleza',
  'Ceará'
);

const savingsAddress = new Address(
  '41306-795',
  'Rua Nilo Peçanha',
  '30',
  'Casa',
  'Salvador',
  'Bahia'
);

// Conta corrente
const currentClient = new Client(
  false,
  '917.374.060-80',
  'Jefferson',
  '(24) 3411-5788',
  [currentAddress]
);

const currentAccount = new CurrentAccount(200, '1108700-0', currentClient);

// Conta poupança
const savingsClient = new Client(
  false,
  '394.938.450-28',
  'Eliana',
  '(88) 3274-2914',
  [savingsAddress]
);

const savingsAccount = new SavingsAccount('187345-8', savingsClient);

currentClient.authenticate();
savingsClient.authenticate();
currentAccount.Deposit(1000);
savingsAccount.Deposit(1000);
currentAccount.Transfer(savingsAccount, 500);
