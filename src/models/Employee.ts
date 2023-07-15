import Person from './Person';

export default class Employee extends Person {
  private _salary: number = 0.0;
  private _office: String = '';

  constructor(
    salary: number,
    cpf: String,
    name: String,
    phone: String,
    office: String
  ) {
    super(cpf, name, phone);
    this._salary = salary;
    this._office = office;
  }

  get Salary(): number {
    return this._salary;
  }

  get Office(): String {
    return this._office;
  }
}
