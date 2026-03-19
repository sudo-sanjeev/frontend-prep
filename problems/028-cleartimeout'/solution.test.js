import { describe, it, expect, vi, beforeAll, afterEach } from 'vitest';

const g = typeof window !== 'undefined' ? window : globalThis;

beforeAll(async () => {
  vi.useFakeTimers();
  await import('./solution.js');
});

afterEach(() => {
  if (g.clearAllTimeout) g.clearAllTimeout();
});

describe('Problem 28 - implement clearAllTimeout()', () => {
  it('should cancel all scheduled timeouts when clearAllTimeout is called', () => {
    const logs = [];
    g.setTimeout(() => logs.push('a'), 100);
    g.setTimeout(() => logs.push('b'), 200);
    g.setTimeout(() => logs.push('c'), 300);

    g.clearAllTimeout();

    vi.advanceTimersByTime(400);
    expect(logs).toEqual([]);
  });

  it('should allow setTimeout to work normally when clearAllTimeout is not called', () => {
    const logs = [];
    g.setTimeout(() => logs.push('first'), 50);
    g.setTimeout(() => logs.push('second'), 100);

    vi.advanceTimersByTime(150);
    expect(logs).toEqual(['first', 'second']);
  });

  it('should only clear timers created before clearAllTimeout', () => {
    const logs = [];
    g.setTimeout(() => logs.push('old'), 100);
    g.clearAllTimeout();

    g.setTimeout(() => logs.push('new'), 50);
    vi.advanceTimersByTime(150);
    expect(logs).toEqual(['new']);
  });

  it('should pass arguments to setTimeout callback', () => {
    const logs = [];
    g.setTimeout((a, b) => logs.push(a + b), 10, 2, 3);
    vi.advanceTimersByTime(20);
    expect(logs).toEqual([5]);
  });

  it('should allow clearTimeout to cancel individual timers', () => {
    const logs = [];
    const id1 = g.setTimeout(() => logs.push('a'), 100);
    const id2 = g.setTimeout(() => logs.push('b'), 200);
    g.clearTimeout(id1);

    vi.advanceTimersByTime(250);
    expect(logs).toEqual(['b']);
  });
});
