// 48 >> 53

// التكليف الاول
let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i += start) {
  if (i === exclude) {
    continue;
  }
  console.log(i);
}
console.log("/////////////////");

// التكليف التاني
let startt = 10;
let endd = 0;
let stop = 3;
for (let j = startt; j > endd; j--) {
  if (j < startt) {
    console.log(`0${j}`);
  } else {
    console.log(j);
  }
  if (j === stop) {
    break;
  }
}

console.log("/////////////////");

// التكليف التالت
let startOne = 1;
let endOne = 6;
let breaker = 2;

for (let k = startOne; k <= endOne; k++) {
  console.log(`${k}`);
  for (let m = breaker; m < endOne; m += breaker) {
    console.log(`-- ${m}`);
  }
}

console.log("/////////////////");

// التكليف الرابع
let index = 10;
let jump = 2;
let endtwo = 0;

let l = index;
for (;;) {
  if (l > endtwo) {
    console.log(`${l}`);
  }
  if (l === jump + jump) {
    break;
  }
  l -= jump;
}

console.log("/////////////////");

// التكليف الخامس

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
number = letter.length;
for (let n = letter.length - letter.length; n < friends.length; n++) {
  if (friends[n].startsWith(letter.toUpperCase())) {
    continue;
  }
  console.log(`"${number} => ${friends[n]}"`);
  number++;
}

console.log("/////////////////");

// التكليف السادس
let starttwo = 0;
let swappedName = "elZerO";
let result = "";
for (let h = starttwo; h < swappedName.length; h++) {
  if (swappedName[h] === swappedName[h].toLowerCase()) {
    result += swappedName[h].toUpperCase();
  } else if (swappedName[h] === swappedName[h].toUpperCase()) {
    result += swappedName[h].toLowerCase();
  }
}
console.log(result);

console.log("/////////////////");

// التكليف السايع
let startthree = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let v = startthree + mix.indexOf(2); v < mix.length; v++) {
  if (typeof mix[v] === "string") {
    continue;
  }
  console.log(mix[v]);
}

console.log("////////////////////////////////////////////////");

//  54 >> 56

// التكليف الاول

let friendss = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let indexx = 0;
let counter = 0;

while (indexx < friendss.length) {
  if (
    typeof friendss[indexx] === "number" ||
    friendss[indexx].startsWith("A")
  ) {
    indexx++;
    continue;
  }
  console.log(`"${++counter} => ${friendss[indexx]}"`);
  indexx++;
}
