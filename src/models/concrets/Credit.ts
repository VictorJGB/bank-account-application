import Account from '../abstracts/Account';

export default class Credit {
  private _value: number = 0;
  private _date: Date = new Date();

  constructor(value: number, date: Date) {
    this._value = value;
    this._date = date;
  }

  get Value(): number {
    return this._value;
  }

  get Date(): Date {
    return this._date;
  }
}
