// Polyfill for Promise.withResolvers
// Ensures compatibility on browsers (e.g., Safari) where this API is missing

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - augmenting Promise at runtime
if (!Promise.withResolvers) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (Promise as any).withResolvers = function <T>() {
    let resolve: (value: T | PromiseLike<T>) => void = () => {
      throw new Error('Promise resolver accessed before initialization.');
    };
    let reject: (reason?: unknown) => void = () => {
      throw new Error('Promise rejector accessed before initialization.');
    };

    const promise = new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    });

    return {
      promise,
      resolve,
      reject,
    };
  };
}

export {};


