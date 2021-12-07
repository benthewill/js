const lineItems = [
    { description: 'Eggs (Dozen)', quantity: 1, price: 3, total: 3 },
    { description: 'Cheese', quantity: 0.5, price: 5, total: 2.5 },
    { description: 'Butter', quantity: 2, price: 6, total: 12 }
  ];

// Sum the totals
lineItems.map(li => li.total).reduce(sumReducer, 0);

// Sum the quantities using the same reducer
const Quantity = lineItems.map(li => li.quantity).reduce(sumReducer, 0);

function sumReducer(sum, val) {
  return sum + val;
}

console.log(Quantity);