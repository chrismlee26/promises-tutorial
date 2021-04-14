const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

// Write your code below:

const executorFunction = (resolve, reject) => { 
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
};

const myFirstPromise = new Promise(executorFunction);