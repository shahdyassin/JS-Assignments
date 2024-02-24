// 40 >> 47 Arrays
// التكليف الاول
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends);

// Method 2
myFriends.length = num;
console.log(myFriends);

console.log("/////////////////");

// التكليف التاني
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();
console.log(friends);

console.log("/////////////////");

// التكليف التالت

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr);

console.log("/////////////////");

// التكليف الرابع
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(
  words[website.length][website.length - website.length]
    .slice(website.length)
    .toUpperCase()
);

console.log("/////////////////");

// التكليف الخامس
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle)) {
  console.log("Found");
}
if (needle === haystack[1]) {
  console.log("Found");
}
if (haystack.indexOf(needle)) {
  console.log("Found");
}

console.log("/////////////////");

// التكليف السادس
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1
  .concat(arr2)
  .sort()
  .join("")
  .slice(arr2.indexOf("E") + arr2.indexOf("Y"))
  .toLowerCase();

console.log(allArrs);
