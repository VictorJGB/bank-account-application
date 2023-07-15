import Address from './models/Address';
import Client from './models/Client';

const address01 = new Address(
  '6311',
  'Coronel Jose Maia',
  '1',
  'casa',
  'Crato',
  'Ceará'
);
const address02 = new Address(
  '6312',
  'Coronel Jose',
  '2',
  'Apartamento',
  'Juazeiro',
  'Ceará'
);

const client01 = new Client(false, '000-000-000-81', 'Carlos', '123', [
  address01,
  address02,
]);

client01.listAddress();
