import Person from './Person';
import Address from './Address';

export default class Client extends Person {
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

  get vip(): boolean {
    return this._vip;
  }

  listAddress() {
    console.log('Cliente: ', this.Name);
    this._addressList.map((address, index) => {
      console.log('\nEndereço', index + 1);
      console.log('CEP:', address.CEP);
      console.log('Logradouro:', address.PublicPlace);
      console.log('Nº:', address.Number);
      console.log('Complemento:', address.Complement);
      console.log('Cidade:', address.City);
      console.log('UF:', address.UF);
    });
  }
}
