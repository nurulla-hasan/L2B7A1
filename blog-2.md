# TypeScript Generics

TypeScript এ Generics খুব useful একটা feature। এর মাধ্যমে reusable function বা type বানানো যায়। মানে একই function different type এর data নিয়ে কাজ করতে পারে, কিন্তু type safety ঠিক থাকে।

একটা simple example:

```ts
function identity<T>(value: T): T {
  return value;
}
```

এখানে `T` একটা generic type। এটা placeholder এর মতো কাজ করে।

```ts
const name = identity("John");
const age = identity(21);
```

প্রথমটায় TypeScript বুঝবে এটা string, আর দ্বিতীয়টায় number।

আমরা চাইলে `any` দিয়েও করতে পারি।

```ts
function identity(value: any): any {
  return value;
}
```

কিন্তু `any` use করলে TypeScript ঠিকভাবে type বুঝতে পারে না। তাই ভুল হওয়ার chance বেশি থাকে। Generics use করলে function reusable থাকে, আবার type safety ও থাকে।

Generics array এর সাথেও use করা যায়।

```ts
function getFirstItem<T>(items: T[]): T {
  return items[0];
}
```

এখন এটা number array বা string array দুইটার সাথেই কাজ করবে।

```ts
const firstNumber = getFirstItem([10, 20, 30]);
const firstString = getFirstItem(["apple", "mango"]);
```

TypeScript automatically বুঝে নেয় কোনটার type কী।

Object এর property safely access করার সময়ও Generics useful।

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

এখানে `K extends keyof T` মানে key অবশ্যই object এর মধ্যে থাকতে হবে।

```ts
const user = {
  id: 1,
  name: "John",
  age: 21,
};

const userName = getProperty(user, "name");
```

যদি ভুল key দেই তাহলে TypeScript error দেখাবে।

```ts
// getProperty(user, "email");
```

কারণ `email` user object এর মধ্যে নেই।

আমার কাছে Generics এর সবচেয়ে ভালো দিক হলো reusable code লেখা যায়, কিন্তু type safety নষ্ট হয় না। বড় project এ clean এবং maintainable code লিখতে এটা অনেক helpful।