# [BFE.dev Problem 156 - implement _.set()](https://bigfrontend.dev/problem/lodash-set)

## Description

[_.set(object, path, value)](https://lodash.com/docs/4.17.15#set) is a handy method for updating an object without checking property existence.

Can you create your own `set()`?

```js
const obj = {
  a: {
    b: {
      c: [1, 2, 3]
    }
  }
}

set(obj, 'a.b.c', 'BFE')
console.log(obj.a.b.c) // "BFE"

set(obj, 'a.b.c.0', 'BFE')
console.log(obj.a.b.c[0]) // "BFE"

set(obj, 'a.b.c[1]', 'BFE')
console.log(obj.a.b.c[1]) // "BFE"

set(obj, ['a', 'b', 'c', '2'], 'BFE')
console.log(obj.a.b.c[2]) // "BFE"

set(obj, 'a.b.c[3]', 'BFE')
console.log(obj.a.b.c[3]) // "BFE"

set(obj, 'a.c.d[0]', 'BFE')
// valid digits treated as array elements
console.log(obj.a.c.d[0]) // "BFE"

set(obj, 'a.c.d.01', 'BFE')
// invalid digits treated as property string
console.log(obj.a.c.d['01']) // "BFE"
```

## Difficulty

medium

## Tags

JavaScript, Lodash

## Approach

- Parse path: support both string (`'a.b.c'`, `'a.b.c[1]'`) and array (`['a','b','c']`)
- Traverse/create nested structure: use next segment to decide `[]` vs `{}` (valid number → array, else object)
- Mutate object in place

## Links

- [Problem](https://bigfrontend.dev/problem/lodash-set)
- [Solution](https://bigfrontend.dev/solution/lodash-set)
