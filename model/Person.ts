export default abstract class Person {
  private _CPF: String = '';
  private _name: String = '';
  private _phone: String = '';

  constructor(cpf: String, name: String, phone: String) {
    this._CPF = cpf;
    this._name = name;
    this._phone = phone;
  }

  public get CPF(): String {
    return this._CPF;
  }

  public get name(): String {
    return this._name;
  }

  public get phone(): String {
    return this._phone;
  }
}
