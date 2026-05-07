// solution 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((number) => number % 2 === 0);
};

const numArray = [1, 2, 3, 4, 5, 6, 43, 38, 46, 453, 234];
console.log(filterEvenNumbers(numArray));




// solution 2
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

const testString = "hello from TypeScript";
console.log(reverseString(testString));
