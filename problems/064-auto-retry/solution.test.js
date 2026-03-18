import { describe, it, expect, vi } from 'vitest';
import { fetchWithAutoRetry as fetchWithAutoRetryImpl, solution } from './solution.js';

const fetchWithAutoRetry = fetchWithAutoRetryImpl ?? solution;

describe('Problem 64 - auto-retry Promise on rejection', () => {
  it('resolves immediately when first attempt succeeds', async () => {
    const fetcher = vi.fn(() => Promise.resolve('ok'));
    await expect(fetchWithAutoRetry(fetcher, 3)).resolves.toBe('ok');
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it('retries and resolves before hitting max retries', async () => {
    const err = new Error('temporary');
    const fetcher = vi
      .fn()
      .mockRejectedValueOnce(err)
      .mockRejectedValueOnce(err)
      .mockResolvedValueOnce('ok');

    await expect(fetchWithAutoRetry(fetcher, 2)).resolves.toBe('ok');
    expect(fetcher).toHaveBeenCalledTimes(3);
  });

  it('rejects with last error when retries are exhausted', async () => {
    const err = new Error('permanent');
    const fetcher = vi.fn(() => Promise.reject(err));

    await expect(fetchWithAutoRetry(fetcher, 2)).rejects.toBe(err);
    expect(fetcher).toHaveBeenCalledTimes(3);
  });

  it('with maximumRetryCount = 0, it only tries once', async () => {
    const err = new Error('no retry');
    const fetcher = vi.fn(() => Promise.reject(err));

    await expect(fetchWithAutoRetry(fetcher, 0)).rejects.toBe(err);
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it('passes through resolved value type', async () => {
    const payload = { id: 1, name: 'test' };
    const fetcher = vi.fn(() => Promise.resolve(payload));

    await expect(fetchWithAutoRetry(fetcher, 1)).resolves.toBe(payload);
  });

  it('calls fetcher with no extra arguments and keeps context when bound', async () => {
    const obj = {
      value: 42,
      fetcher: vi.fn(function () {
        return Promise.resolve(this.value);
      }),
    };

    const boundFetcher = obj.fetcher.bind(obj);
    await expect(fetchWithAutoRetry(boundFetcher, 1)).resolves.toBe(42);
    expect(obj.fetcher).toHaveBeenCalledTimes(1);
    expect(obj.fetcher).toHaveBeenCalledWith();
  });
});
