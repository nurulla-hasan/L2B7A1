# TypeScript Generics

## Introduction

Generics TypeScript এর একটি useful feature। এর মাধ্যমে আমরা reusable function বা type বানাতে পারি। একই function different type এর data নিয়ে কাজ করতে পারে, কিন্তু type safety নষ্ট হয় না।

## Basic Example

```ts
function identity<T>(value: T): T {
  return value;
}
```

এখানে `T` হলো generic type। এটা placeholder এর মতো কাজ করে।

```ts
const name = identity("John");
const age = identity(21);
```

প্রথম call এ TypeScript বুঝবে type string। দ্বিতীয় call এ বুঝবে type number।

## Why not `any`?

আমরা চাইলে `any` ব্যবহার করতে পারি।

```ts
function identity(value: any): any {
  return value;
}
```

কিন্তু `any` use করলে TypeScript ঠিকভাবে type track করতে পারে না। এতে ভুল হওয়ার chance থাকে। Generics ব্যবহার করলে function flexible থাকে, আবার type safety ও থাকে।

## Generics with Array

```ts
function getFirstItem<T>(items: T[]): T {
  return items[0];
}
```

এই function number array বা string array দুইটার সাথেই কাজ করবে।

```ts
const firstNumber = getFirstItem([10, 20, 30]);
const firstString = getFirstItem(["apple", "mango"]);
```

TypeScript automatically বুঝে নেয় কোনটা number আর কোনটা string।

## Generics with Object Key

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

এখানে `K extends keyof T` মানে key অবশ্যই object এর valid key হতে হবে।

```ts
const user = {
  id: 1,
  name: "John",
  age: 21,
};

const userName = getProperty(user, "name");
```

যদি ভুল key দেওয়া হয়, TypeScript error দেখাবে।

```ts
// getProperty(user, "email");
```

কারণ `email` user object এর মধ্যে নেই।

## Conclusion

Generics reusable এবং type-safe code লিখতে সাহায্য করে। এতে একই ধরনের code বারবার লিখতে হয় না। বড় TypeScript project এ clean এবং maintainable code লিখতে Generics অনেক useful।