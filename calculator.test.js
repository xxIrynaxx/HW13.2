import { reverseArray, withdraw, getAdults } from './calculator';

it('should get reverse array', () => {
  const result = reverseArray('Hi');
  expect(result).toEqual(null);
});

it('should get reverse array', () => {
  const result = reverseArray(['H', 'e', 'y']);
  expect(result).toEqual(['y', 'e', 'H']);
});

it('should get reverse array', () => {
  const result = reverseArray([3, 8, 5, 0, 4, 2]);
  expect(result).toEqual([2, 4, 0, 5, 8, 3]);
});

it("should receive the client's account balance", () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  expect(result).toEqual(37);
});

it("should receive the client's account balance", () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
  expect(result).toEqual(-1);
});

it("should receive the client's account balance", () => {
  const result = withdraw(
    ['Iryna', 'Daria', 'Max'],
    [1400, 87, -6],
    'Iryna',
    300
  );
  expect(result).toEqual(1100);
});

it('should get users 18 yers or older', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should get users 18 yers or older', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});

it('should get users 18 yers or older', () => {
  const result = getAdults({ Iryna: 18, Daria: 15 });
  expect(result).toEqual({ Iryna: 18 });
});
