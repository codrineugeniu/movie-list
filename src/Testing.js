export function sum(a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') {
    throw new Error('invalid input')
  }
  return a + b
}

export function multiply(a, b) {
  return a * b
}
