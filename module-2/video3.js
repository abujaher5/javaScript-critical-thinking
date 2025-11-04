// javascript sort

const numbers = [13, 45, 100, 22, 2, 34, 55];
const sortedNumber = numbers.sort((a, b) => b - a);
// a-b is for ascending order and b-a is for descending

const flowers = ["Rose", "Jasmine", "Lily", "lotas", "belly", "sunflower"];
const sortedFlower = flowers.sort((a, b) => a.localeCompare(b));
// localCompare remove the case sensitive ness and create an array like alphabetical order

// nested array flay

const nestedArray = [
  2,
  34,
  [83, 73, [2, 5, 6, 7, 0], 93],
  3,
  [33, [37, 37, 83, 3], 42, 3],
];
const flatArray = nestedArray.flat(Infinity).sort((a, b) => a - b);

// Infinity for all the nested array need to sort in this place number also allowed for how many nested array need to flat

const technologyName = [
  ["html", "css", "javascript"],
  ["mongodb", "javascript", "nodejs", "react"],
  ["tailwind", "react", "express"],
];
// const filterTags = [...new Set(technologyName.flat())];

// this upper code is create a array made by set object without and duplicate entry
const flatArr = technologyName.flat();
