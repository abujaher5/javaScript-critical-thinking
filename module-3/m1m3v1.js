// stateless vs stateful

const counter = (amount) => {
  let count = 0;
  count = count + amount;
  return count;
};
// in this upper scenario counter func behave like a stateless
// console.log(counter(2)); // output:2
// console.log(counter(3)); // output:3

// but if i declare the count variable as global the it will be works like stateful
let count = 0;
const counter2 = (amount) => {
  count = count + amount;
  return count;
};
// console.log(counter2(2)); // output:2
// console.log(counter2(3)); // output:5
// now stateful object
const counter3 = {
  count: 0,
  add(amount) {
    this.count = this.count + amount;
  },
  print() {
    // console.log(this.count); // output : 5
  },
};
counter3.add(2);
counter3.add(3);
counter3.print();
