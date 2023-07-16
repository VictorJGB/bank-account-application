import Person from '../abstracts/Person';
import Address from './Address';
import IUser from '../../interfaces/IUser';

export default class Client extends Person implements IUser {
  private _vip: boolean = false;
  private _addressList: Array<Address> = [];

  constructor(
    vip: boolean,
    cpf: String,
    name: String,
    phone: String,
    addressList: Array<Address>
  ) {
    super(cpf, name, phone);
    this._vip = vip;
    this._addressList = addressList;
  }
  authenticate() {
    console.log('\nUSUÁRIO', this.Name.toUpperCase(), 'AUTENTICADO!\n');
    return true;
  }

  get vip(): boolean {
    return this._vip;
  }

  listAddress() {
    console.log('Cliente: ', this.Name);
    this._vip === true ? console.log('Usuário vip') : null;
    this._addressList.map((address, index) => {
      console.log('\n Endereço', index + 1);
      console.log(' CEP:', address.CEP);
      console.log(' Logradouro:', address.PublicPlace);
      console.log(' Nº:', address.Number);
      console.log(' Complemento:', address.Complement);
      console.log(' Cidade:', address.City);
      console.log(' UF:', address.UF);
    });
  }
}
