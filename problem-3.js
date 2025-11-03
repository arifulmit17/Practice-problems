const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

const sorted=numbers.sort((a,b)=>a-b)
const sorted2=fruits.sort((a,b)=>a.localeCompare(b))

console.log(sorted2);

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const tags=[...new Set(tagsFromPosts.flat())]
console.log(tags);