export default abstract class Person {
  private _CPF: String = '';
  private _name: String = '';
  private _phone: String = '';

  constructor(cpf: String, name: String, phone: String) {
    this._CPF = cpf;
    this._name = name;
    this._phone = phone;
  }

  get CPF(): String {
    return this._CPF;
  }

  get Name(): String {
    return this._name;
  }

  get Phone(): String {
    return this._phone;
  }
}
