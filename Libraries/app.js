const customer=['A','B','C'];

const activeCustomer=['A','B'];

const inactiveCustomer=_.difference(customer,activeCustomer);

console.log(inactiveCustomer);