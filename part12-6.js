const {checkInventory} = require('./part12-3.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

const handleSuccess = (resolved) => {
  console.log(resolved)
}

const handleFailure = (reject) => {
  console.log(reject)
}

checkInventory(order)
  .then(handleSuccess, handleFailure);
