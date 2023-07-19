export default class Address {
  private _CEP: String = '';
  private _publicPlace: String = '';
  private _number: String = '';
  private _complement: String = '';
  private _city: String = '';
  private _uf: String = '';

  constructor(
    CEP: String,
    publicPlace: String,
    number: String,
    complement: String,
    city: String,
    uf: String
  ) {
    this._CEP = CEP;
    this._publicPlace = publicPlace;
    this._number = number;
    this._complement = complement;
    this._city = city;
    this._uf = uf;
  }

  get CEP(): String {
    return this._CEP;
  }
  get PublicPlace(): String {
    return this._publicPlace;
  }
  get Number(): String {
    return this._number;
  }
  get Complement(): String {
    return this._complement;
  }
  get City(): String {
    return this._city;
  }
  get UF(): String {
    return this._uf;
  }
}
