import { sum, multiply } from './Testing'

describe('Testing app', () => {
  it('sums numbers', () => {
    expect(sum(1, 2)).toEqual(3)
    expect(sum(2, 2)).toEqual(4)
  })

  it('multiplies numbers', () => {
    expect(multiply(3, 3)).toEqual(9)
  })
});
