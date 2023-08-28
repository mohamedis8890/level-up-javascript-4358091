// Write your code here

function totalBill(drinks = [], price = 1) {
  const total = drinks.reduce((runningTotal, drink) => {
    return runningTotal + drink * price;
  });

  return `The total bill is $${total}`;
}

const drinks = [2, 3, 1, 5];
const price = 1.25;
console.log(totalBill(drinks, price));
