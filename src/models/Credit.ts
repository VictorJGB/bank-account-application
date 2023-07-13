import Account from './Account';

export default class Credit extends Account {
  private _value: number = 0;
  private _date: Date = new Date();

  constructor(number: String, value: number, date: Date) {
    super(number);
    this._value = value;
    this._date = date;
  }
}
