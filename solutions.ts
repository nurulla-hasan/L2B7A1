// solution 1
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((number) => number % 2 === 0);
};

// solution 2
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

// solution 3
const checkType = (value: string | number): string => {
  if (typeof value === "string") {
    return "String";
  }
  return "Number";
};

// solution 4
const getProperty = <O, K extends keyof O>(obj: O, key: K): O[K] => {
  return obj[key];
};

// solution 5
interface IBook {
  title: string;
  author: string;
  publishedYear: number;
}
const toggleReadStatus = (book: IBook): IBook & { isRead: boolean } => {
  const newObj = { ...book, isRead: true };
  return newObj;
};

// solution 6
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// solution 7
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const set = new Set(arr2);
  return arr1.filter((item) => set.has(item));
};
