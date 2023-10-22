export class MyDate {
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private day: number = 9
  ) { }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);

    return `${day}/${month}/${this.year}`;
  }

  addPadding(value: number): number | string {
    if (value >= 10) return value;

    return `0${value}`;
  }

  add(amount: number, type: 'days' | 'month' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }

    if (type === 'month') {
      this.month += amount;
    }

    if (type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1993, 7, 9);
console.log(myDate.printFormat());

const myDate2 = new MyDate();
console.log(myDate2.printFormat());

const myDate3 = new MyDate(2022);
console.log(myDate3.printFormat());

const myDate4 = new MyDate(2022, 3);
console.log(myDate4.printFormat());
