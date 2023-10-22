console.log(Math.PI);
console.log(Math.max(1, 2, 3, 8, 0, 5));

class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]): number {
    return Math.max(...numbers);
  }
}

console.log(MyMath.PI);
//const NUMEROS = [0, 5, 14, 6, 5000000];
const NUMEROS = [-5, -3, -1];
console.log(MyMath.PI);
console.log(MyMath.max(...NUMEROS));

/* const math = new MyMath();
console.log(math.PI); */
