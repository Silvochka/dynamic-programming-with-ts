const classicFibonacciSequence: number[] = [0, 1, 1];

/**
 * Classic Fibonacci problem.
 * Solved by using memoization into the array for the follow up calls and calculating sequence iteratively
 * @param n Index in fibonacci sequence that should be returned
 * @returns Number of Fibonacci sequence with index ${n}
 */
export function getFibonacciNumber(n: number): number {
  if (n <= 0) {
    return 0;
  }

  if (classicFibonacciSequence[n]) {
    return classicFibonacciSequence[n];
  }

  for (let i = classicFibonacciSequence.length - 1; i <= n; i++) {
    classicFibonacciSequence[i] = classicFibonacciSequence[i - 1] + classicFibonacciSequence[i - 2];
  }

  return classicFibonacciSequence[n];
}
