export default class Office {
  private _name: String = '';

  constructor(name: String) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value: String) {
    this._name = value;
  }
}
