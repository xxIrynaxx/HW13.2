import { calc } from './calculator';

it('should return null', () => {
  const result = calc(1 + 5);
  expect(result).toEqual(null);
});

it('should return sum of expression', () => {
  const result = calc('1 + 4');
  expect(result).toEqual('1 + 4 = 5');
});

it('should return substraction of expression', () => {
  const result = calc('1 - 4');
  expect(result).toEqual('1 - 4 = -3');
});

it('should return multiply of expression', () => {
  const result = calc('1 * 4');
  expect(result).toEqual('1 * 4 = 4');
});

it('should return division of expression', () => {
  const result = calc('1 / 4');
  expect(result).toEqual('1 / 4 = 0.25');
});
