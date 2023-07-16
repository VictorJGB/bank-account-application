import Address from './models/concrets/Address';
import Client from './models/concrets/Client';
import CurrentAccount from './models/concrets/CurrentAccount';
import SavingsAccount from './models/concrets/SavingsAccount';

const currentAddress = new Address(
  '75071-690',
  'Rua PP 6',
  '50',
  'Casa',
  'Anápolis',
  'Goiás'
);

const savingsAddress = new Address(
  '25725-637',
  'Rua Affonso Kuenes',
  '148',
  'Apt. 107',
  'Petrópolis',
  'Rio de Janeiro'
);

// Conta corrente
const currentClient = new Client(
  false,
  '110.568.841-00',
  'Fabrício Albuquerque',
  '(88) 3883-7576',
  [currentAddress]
);

// Conta poupança
const savingsClient = new Client(
  false,
  '435.022.500-57',
  'Paulo Marcos Vinicius Silva',
  '(24) 98938-5772',
  [savingsAddress]
);

const currentAccount = new CurrentAccount(100, '1925456-9', currentClient);
const savingsAccount = new SavingsAccount('1925456-9', savingsClient);

currentClient.authenticate();
savingsClient.authenticate();

currentAccount.Deposit(300);
savingsAccount.Deposit(100);
currentAccount.Transfer(savingsAccount, 1000);
