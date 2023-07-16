import Address from './models/concrets/Address';
import Client from './models/concrets/Client';

const address01 = new Address(
  '78746-570',
  'Rua A-20',
  '90',
  'Casa',
  'Rondonópolis',
  'Mato Grosso'
);
const address02 = new Address(
  '25571-330',
  'Rua Miami',
  '180',
  'Loteamento Pedra',
  'São João de Meriti',
  'Rio de Janeiro'
);
const address03 = new Address(
  '51270-681',
  'Rua Engenho Pedra Lavada',
  '90',
  'Apt. 67',
  'Recife',
  'Pernambuco'
);

const client = new Client(
  true,
  '000.000.000-01',
  'Fernanda',
  '(88) 9 9711-2279',
  [address01, address02, address03]
);

client.authenticate();
client.listAddress();
