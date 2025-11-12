// Polyfill for Promise.withResolvers
// Ensures compatibility on browsers (e.g., Safari) where this API is missing

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore - augmenting Promise at runtime
if (!Promise.withResolvers) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (Promise as any).withResolvers = function <T>() {
    let resolve: (value: T | PromiseLike<T>) => void;
    let reject: (reason?: unknown) => void;

    const promise = new Promise<T>((res, rej) => {
      resolve = res;
      reject = rej;
    });

    return {
      promise,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      resolve: resolve!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      reject: reject!,
    };
  };
}

export {};


