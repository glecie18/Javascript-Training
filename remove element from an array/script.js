const orderQueue = ['1XT567437', '1U7857317', '1I9222528'];


const shipping = orderQueue.shift();


const cancelled = orderQueue.pop();

console.log(shipping); 
console.log(orderQueue);
console.log(cancelled); 