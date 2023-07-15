export default class Office {
  private _name: String = '';

  constructor(name: String) {
    this._name = name;
  }

  get Name() {
    return this._name;
  }
}
