const {checkInventory} = require('./part12-7lib');

const order = [['sunglasses', 1], ['bags', 2]];

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
  console.log(rejectReason);
};

// Write your code below:

checkInventory(order)
  .then(handleSuccess)
  .catch(handleFailure)
