export class MyDate {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

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
