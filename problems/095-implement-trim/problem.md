# [BFE.dev Problem 95 - implement String.prototype.trim()](https://bigfrontend.dev/problem/implement-String-prototype-trim)

## Description

[String.prototype.trim()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim) removes whitespace from both ends of a string.

Implement your own `trim(str)` that returns the same result.

**Approaches:**
- Regex: `str.replace(/^\s+|\s+$/g, '')`
- Two pointers: find first and last non-whitespace indices, slice
- Loop from start/end until non-whitespace

## Difficulty

medium

## Tags

JavaScript, String

## Approach

- Whitespace: space, tab, newline, carriage return, form feed, nbsp (U+00A0), ideographic space (U+3000)
- Find `start` = index of first non-whitespace (or `str.length` if all whitespace)
- Find `end` = index of last non-whitespace
- Return `str.slice(start, end + 1)` or `''` if `start > end`

## Links

- [Problem](https://bigfrontend.dev/problem/implement-String-prototype-trim)
- [Solution](https://bigfrontend.dev/solution/implement-String-prototype-trim)
