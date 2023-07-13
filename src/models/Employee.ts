import Person from './Person';

export default class Employee extends Person {
  private _salary: number = 0.0;

  constructor(salary: number, cpf: String, name: String, phone: String) {
    super(cpf, name, phone);
    this._salary = salary;
  }
}
