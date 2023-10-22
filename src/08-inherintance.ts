export class Animal {
  constructor(
    public name: string
  ) { }

  move(): void {
    console.log('Moving along!');
  }

  gretting(): string {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.gretting());

const cheis = new Dog('cheis', 'Darwin');
cheis.move();
console.log(cheis.gretting());
console.log(cheis.woof(5));
console.log(cheis.owner);
