import Person from './Person';

export default class Client extends Person {
  private _vip: boolean = false;

  constructor(vip: boolean, cpf: String, name: String, phone: String) {
    super(cpf, name, phone);
    this._vip = vip;
  }

  get vip(): boolean {
    return this._vip;
  }

  set vip(value: boolean) {
    this._vip = value;
  }
}
