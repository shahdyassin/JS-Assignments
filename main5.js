//  27 >> 30

// التكليف الاول
let userName = "Elzero";
console.log(userName[0].toLowerCase());
console.log(userName.charAt(0).toLowerCase());
console.log(userName.slice(0, 1).toLowerCase());
console.log(userName.substring(0, 1).toLowerCase());
console.log(userName.substr(0, 1).toLowerCase());
console.log(userName.slice(-6, -5).toLowerCase().repeat(3));

console.log("/////////////////");

// التكليف التاني
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ));
console.log(word.startsWith(letterE.toUpperCase()));
console.log(word.endsWith(letterO.toLowerCase()));
