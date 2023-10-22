export class MyDate {
  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9
  ) { }

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);

    return `${day}/${month}/${this.year}`;
  }

  addPadding(value: number): number | string {
    if (value >= 10) return value;

    return `0${value}`;
  }

  add(amount: number, type: 'days' | 'month' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }

    if (type === 'month') {
      this._month += amount;
    }

    if (type === 'years') {
      this.year += amount;
    }
  }

  get day(): number {
    return this._day;
  }

  get month(): number {
    return this._month;
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;

    if (this.year % 100 === 0) return false;

    return (this.year % 4 === 0);
  }

  set month(month: number) {
    if (this.month < 1 || this.month > 12)
      throw new Error('El mes está fuera de rango');

    this._month = month;
  }
}

const myDate = new MyDate(2000, 7, 9);
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.isLeapYear);

myDate.month = 11;
console.log(myDate.month);
