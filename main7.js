//  33 >> 37

// التكليف الاول
let num = 9;
if (num < 10) {
  console.log(`${"00"}${num}`);
} else if (num > 10 && num < 100) {
  console.log(`${"0"}${num}`);
} else {
  console.log(num);
}

console.log("/////////////////");

// التكليف التاني
let num1 = 9;
let str = "9";
let str2 = "20";
if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}
if (num1 !== str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num1 !== str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
console.log("///////////////////");

// التكليف التالت
let numone = 10;
let num2 = 30;
let num3 = "30";
if (
  num3 > numone &&
  num3 !== num2 &&
  num3 > numone &&
  num3 !== num2 &&
  num3 !== numone &&
  num3 !== num2
) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number" +
      "\n" +
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number" +
      "\n" +
      "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}

console.log("/////////////////");

// التكليف الرابع
// Edit What You Want Here

let num6 = 10;
let num7 = 5;
let num8 = 10;
let num9 = 36;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num6 > num7) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num6 > num7 && num6 < num9) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num6 > num7 && num6 === num8) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num6 + num7 < num9) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num6 + num8 < num9) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num6 + num7 + num8 < num9) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num9 - (num6 + num8) + num7 === 21) {
  console.log("True");
} else {
  console.log("False");
}

console.log("///////////////////////////////////////////////");

// 38 >> 39 SWITCH STATEMENT
// التكليف الاول
let day = "   friday  ";
day = day.trim();
day = day.charAt(0).toUpperCase() + day.slice(1);

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
}
