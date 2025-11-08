// for using global variable this is like a stateful but using this types func not good for func behavior

// let count = 0;
// const counter = (amount) => {
//   count = count + amount;
//   return count;
// };
// console.log(counter(2)); // output:2
// console.log(counter(3)); // output:5

// const createCounter=()=>{
//     let count =0;
//     return (amount)=>{
//         count=count +amount;
//         return count;
//     }
// }
// const counter=createCounter();
// console.log(counter(3)); // output: 3
// console.log(counter(5)); // output: 8

// stateful class and reuseable(reproducible)

class Counter {
  constructor(count) {
    this.count = count;
  }

  add(amount) {
    this.count = this.count + amount;
  }
  print() {
    console.log(this.count);
  }
}

const counter1 = new Counter(0);
// counter1.print(); // output: 0

counter1.add(2);
counter1.add(3);

counter1.print(); // output: 5  behaves like stateful

const counter2 = new Counter(10);

counter2.print(); // output:10
counter2.add(15);
counter2.add(10);
counter2.print(); // output:35
