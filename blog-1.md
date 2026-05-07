# TypeScript এ any এবং unknown

TypeScript এ কাজ করার সময় অনেক সময় এমন data আসে যেটার type আগে থেকে জানা থাকে না। যেমন API response বা user input। এই ধরনের ক্ষেত্রে সাধারণত `any` বা `unknown` use করা হয়। কিন্তু দুইটার behaviour এক না।

`any` use করলে TypeScript type checking অনেকটা ignore করে ফেলে। তাই ভুল code লিখলেও অনেক সময় error দেখায় না।

```ts
let value: any = 123;

console.log(value.toUpperCase());
```

এখানে `value` আসলে number। কিন্তু আমরা string method use করেছি। TypeScript কিছু বলবে না, কিন্তু runtime এ error হবে।

এই কারণে `any` কে অনেক সময় type safety hole বলা হয়।

অন্যদিকে `unknown` safer। কারণ `unknown` value সরাসরি use করা যায় না। আগে type check করতে হয়।

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

এখানে আগে check করা হয়েছে value string কিনা। তাই safely method use করা যাচ্ছে।

এই type check করার process টাকেই type narrowing বলে।

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

আমার কাছে `unknown` বেশি ভালো লাগে। কারণ এটা type check করতে বাধ্য করে। এতে ভুল কম হয় আর code বেশি safe থাকে।