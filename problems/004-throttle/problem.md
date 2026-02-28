# [BFE.dev Problem 4 throttle](https://bigfrontend.dev/problem/implement-basic-throttle)

## Description
Throttling is a common technique used in Web apps, in most cases using lodash solution would be a good choice.

In case you forgot, throttle(func, delay) returns a throttled function, which invokes func at a max frequency no matter how throttled one is called.

Here is an example.

Before throttling we have following series of calls.

─ A ─ B ─ C ─ ─ D ─ ─ ─ ─ ─ ─ E ─ ─ F ─ G
After throttling at wait time of 3 dashes, it becomes like this.

─ A ─ ─ ─ C ─ ─ ─ D ─ ─ ─ ─ E ─ ─ ─ G 
A is triggered right way because not in waiting time. B is swallowed because B, C are in the cooling time from A, and C is called after B.

Could you implement your own version of basic throttle()?

## Difficulty
medium 

## Tags
Lodash

## Approach


