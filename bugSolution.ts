function add(a: number, b: number): number {
  return a + b;
}

function addString(a: string, b: string): string {
  return a + b;
}

const result1 = add(5, 10); //Correct
console.log(result1); // Output: 15
const result2 = addString('5','10'); //Correct
console.log(result2); // Output: 510