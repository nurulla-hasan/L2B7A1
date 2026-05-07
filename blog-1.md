# TypeScript এ `any` এবং `unknown`

## Introduction

TypeScript এ অনেক সময় এমন data নিয়ে কাজ করতে হয় যার type আগে থেকে জানা থাকে না। যেমন API response বা user input। এই ধরনের data handle করার সময় `any` এবং `unknown` ব্যবহার করা যায়। কিন্তু দুইটার মধ্যে বড় পার্থক্য আছে।

## Why `any` is risky

`any` ব্যবহার করলে TypeScript type checking অনেকটা বন্ধ করে দেয়। তখন ভুল code লিখলেও TypeScript error দেখায় না।

```ts
let value: any = 123;

console.log(value.toUpperCase());
```

এখানে `value` number, কিন্তু আমরা string method use করেছি। TypeScript error দেখাবে না, কিন্তু code run করলে problem হবে। তাই `any` কে type safety hole বলা হয়।

## Why `unknown` is safer

`unknown` ব্যবহার করলে value সরাসরি use করা যায় না। আগে type check করতে হয়।

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

এখানে আগে check করা হয়েছে value string কিনা। তাই code বেশি safe।

## Type Narrowing

Type narrowing মানে হলো check করার মাধ্যমে TypeScript কে নির্দিষ্ট type বুঝানো।

```ts
function checkValue(value: unknown) {
  if (typeof value === "string") {
    return value.toUpperCase();
  }

  if (typeof value === "number") {
    return value.toFixed(2);
  }

  return "Unsupported value";
}
```

এখানে `typeof` use করে TypeScript বুঝতে পারে কোন জায়গায় value string আর কোন জায়গায় number।

## Conclusion

আমার মতে, type না জানা থাকলে `any` এর চেয়ে `unknown` ব্যবহার করা ভালো। কারণ `unknown` আমাদের type check করতে বাধ্য করে। এতে ভুল কম হয় এবং TypeScript এর type safety বজায় থাকে।