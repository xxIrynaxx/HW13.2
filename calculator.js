/* eslint-disable default-case */

export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reverse();
};

console.log(reverseArray('Hi')); // -> null
console.log(reverseArray(['H', 'e', 'y'])); // -> ['y', 'e', 'H']
console.log(reverseArray([3, 8, 5, 0, 4, 2])); // -> [2, 4, 0, 5, 8, 3]

export const withdraw = (clients, balances, client, amount) => {
  const user = clients.indexOf(client);
  const balance = balances[user];
  if (balance > amount) {
    return balance - amount;
  } else {
    return -1;
  }
};

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)); // ==> 37 (balances array should be [1400, 37, -6])
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)); // ==> -1 (balances array should be [1400, 87, -6])
console.log(withdraw(['Iryna', 'Daria', 'Max'], [1400, 87, -6], 'Iryna', 300)); // ==> 1100

export const getAdults = obj => {
  const newObj = {};
  for (let keys in obj) {
    if (obj[keys] >= 18) {
      newObj[keys] = obj[keys];
    }
  }
  return newObj;
};

console.log(getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 })); // ==> { 'John Doe': 19, Bob: 18 }
console.log(getAdults({ Ann: 56, Andrey: 7 })); // ==> { Ann: 56 }
console.log(getAdults({ Iryna: 18, Daria: 15 }));
