# [BFE.dev Problem 85 - implement _.get()](https://bigfrontend.dev/problem/implement-lodash-get)

## Description

[_.get(object, path, [defaultValue])](https://lodash.com/docs/4.17.15#get) is a handy method to help retrieve data from an arbitrary object. If the resolved value from `path` is `undefined`, `defaultValue` is returned.

Please create your own `get()`.

```js
const obj = {
  a: {
    b: {
      c: [1, 2, 3]
    }
  }
};

get(obj, 'a.b.c');        // [1, 2, 3]
get(obj, 'a.b.c.0');     // 1
get(obj, 'a.b.c[1]');    // 2
get(obj, ['a', 'b', 'c', '2']);  // 3
get(obj, 'a.b.c[3]');    // undefined
get(obj, 'a.c', 'bfe');  // 'bfe'
```

## Difficulty

medium

## Tags

JavaScript, Lodash

## Approach

- Parse `path`: support both string (`'a.b.c'`, `'a.b.c[1]'`) and array (`['a','b','c']`) formats
- Normalize string path: replace `[` with `.`, remove `]`, then split by `.`
- Iterate through path parts; before each access, check `source == null` (can't traverse) → return `defaultValue`
- After traversal: return `defaultValue` only when resolved value is `undefined` (not `null`)

## Links

- [Problem](https://bigfrontend.dev/problem/implement-lodash-get)
- [Solution](https://bigfrontend.dev/solution/implement-lodash-get)
