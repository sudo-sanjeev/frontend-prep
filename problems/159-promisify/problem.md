# [BFE.dev Problem 159 - implement promisify()](https://bigfrontend.dev/problem/promisify)

## Description

Error-first callbacks follow this pattern:

```js
const callback = (error, data) => {
  if (error) { /* handle error */ }
  else { /* handle data */ }
};
```

Async functions often take this callback as their last argument. Implement `promisify()` to convert such functions to return a Promise:

```js
const func = (arg1, arg2, callback) => {
  if (hasError) callback(someError);
  else callback(null, someData);
};

const promisedFunc = promisify(func);
promisedFunc(arg1, arg2).then(data => {}).catch(error => {});
```

## Difficulty

easy

## Tags

JavaScript, Promise, Async

## Approach

- Return a function that accepts `...args` and returns a `new Promise`
- Create a callback `(error, data)` that `reject(error)` or `resolve(data)`
- Call the original func with `args` and the callback as last argument
- Use `func.call(this, ...args, callback)` to preserve `this`

## Links

- [Problem](https://bigfrontend.dev/problem/promisify)
- [Solution](https://bigfrontend.dev/solution/promisify)
