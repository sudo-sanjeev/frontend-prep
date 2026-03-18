# [BFE.dev Problem 64 - auto-retry Promise on rejection](https://bigfrontend.dev/problem/retry-promise-on-rejection)

## Description
Implement `fetchWithAutoRetry(fetcher, maximumRetryCount)`.

- `fetcher` is a function returning a Promise.
- If it rejects, retry automatically.
- Stop retrying after `maximumRetryCount` retries.
- If all attempts fail, reject with the last error.
- If any attempt succeeds, resolve immediately with its value.

## Difficulty
medium

## Tags
JavaScript

## Example

```js
let count = 0;
const fetcher = () => {
	count += 1;
	return count < 3 ? Promise.reject('fail') : Promise.resolve('ok');
};

await fetchWithAutoRetry(fetcher, 2); // 'ok' (3rd attempt)
```

## Approach

- Track how many retries have been used.
- Call `fetcher()`.
- On rejection:
	- if retries are exhausted, reject
	- else increment retry counter and retry
- On resolve, return success immediately.

## Links
- [Problem](https://bigfrontend.dev/problem/retry-promise-on-rejection)
