// Some

const numbers = [1, 2, 3, 4, 5, 6];
const hasEvenNumber = numbers.some((number) => number % 2 === 0);
const hasOddNumber = numbers.some((number) => !number % 2 === 0);
// console.log(hasEvenNumber, hasOddNumber);

const currentUserRoles = ["user", "editor", "admin", "host"];

const featureAccessRoles = ["admin", "manager", "host"];

const canAccess = currentUserRoles.some((role) =>
  featureAccessRoles.includes(role)
);

// form() method
const text = "A quick brown fox jumps over the lazy dog.";
const arrForm = Array.from(text);
// arrForm is a array.The element of this array is all single text letter

// console.log(arrForm);

const oddNum = [1, 3, 5, 7, 9];

const arr = Array.from(oddNum, (value, i) => {
  return value * value;

  // use return for multi line code and the inner function is changing the array element in square form for value * value
});

// Range

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );

// console.log(range(0, 11, 2));
const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

// console.log(arrayRange(1, 5, 1));
