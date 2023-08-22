import calculate from '../service/calculator/calculate/calculate';

describe('Checking the operation of expression calculation', () => {
  it('check of binary operations and negative values', () => {
    expect(calculate('')).toBe(0);
    expect(calculate('2')).toBe(2);
    expect(calculate('-2')).toBe(-2);
    expect(calculate('-(-5)')).toBe(5);
    expect(calculate('2+3')).toBe(5);
    expect(calculate('4-2')).toBe(2);
    expect(calculate('4-20')).toBe(-16);
    expect(calculate('2*3')).toBe(6);
    expect(calculate('10/2')).toBe(5);
    expect(calculate('2+3*4')).toBe(14);
    expect(calculate('(2+3)*4')).toBe(20);
    expect(calculate('((2+3)*4-1+5)/2')).toBe(12);
    expect(calculate('(((2+3)*4-1+5)/2)+(1*(-(-(1))))')).toBe(13);
  });
});
