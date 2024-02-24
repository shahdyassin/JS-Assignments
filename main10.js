//  57 >> 63
// التكليف الاول
function sayHello(theName = "", theGender = "") {
  if (theGender === "Male") {
    theGender = "Mr";
  } else if (theGender === "Female") {
    theGender = "Miss";
  }
  document.write(`<p>"Hello ${theGender} ${theName}"</p>`);
}
sayHello("Osama", "Male");
sayHello("Eman", "Female");
sayHello("Sameh");

console.log("/////////////////");

// التكليف التاني
function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined && operation === undefined) {
    console.log("Second Number Not Found");
  } else if (operation === undefined) {
    console.log(firstNum + secondNum);
  } else if (operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  }
}

calculate(20);
calculate(20, 30);
calculate(20, 30, "add");
calculate(20, 30, "subtract");
calculate(20, 30, "multiply");

console.log("/////////////////");

// التكليف التالت

function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
  } else {
    console.log(`the age with years is ${theAge}`);
    console.log(`the age with months is ${theAge * 12}`);
    console.log(`the age with weeks is ${theAge * 12 * 4}`);
    console.log(`the age with days is ${theAge * 12 * 4 * 7}`);
    console.log(`the age with hours is ${theAge * 12 * 4 * 7 * 24}`);
    console.log(`the age with minutes is ${theAge * 12 * 4 * 7 * 60 * 24}`);
    console.log(
      `the age with seconds is ${theAge * 12 * 4 * 7 * 60 * 60 * 24}`
    );
  }
}
ageInTime(110);
ageInTime(38);

console.log("/////////////////");

// التكليف الرابع

function checkStatus(a, b, c) {
  let name;
  let age;
  let status;

  if (typeof a === "string") {
    name = a;
  } else if (typeof a === "number") {
    age = a;
  } else {
    status = a;
  }
  if (typeof b === "string") {
    name = b;
  } else if (typeof b === "number") {
    age = b;
  } else {
    status = b;
  }
  if (typeof c === "string") {
    name = c;
  } else if (typeof c === "number") {
    age = c;
  } else {
    status = c;
  }
  if (status === true) {
    status = "You Are Available For Hire";
  } else {
    status = "You Are Not Available For Hire";
  }
  document.write(`<p>"Hello ${name}, Your Age Is ${age}, ${status}"</p>`);
}

checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38);

console.log("/////////////////");

// التكليف الخامس

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value = "${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

console.log("///////////////////");

// التكليف السادس

function multiply(...numbers) {
  for (j = 0; j < numbers.length; j++) {
    if (typeof numbers[j] === "string") {
      continue;
    } else {
      result = parseInt(numbers[j - 1]) * parseInt(numbers[j]);
    }
  }
  return result;
}

console.log(multiply(10, 20));
console.log(multiply("A", 10, 30));
console.log(multiply(100.5, 10, "B"));

console.log("//////////////////////////////////");

// 64 >> 70

// التكليف الاول

function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    return `${zName.slice(0, zName.indexOf(" "))}${zName
      .substr(zName.indexOf(" "), 2)
      .toUpperCase()}.`;
  }
  namePattern();
  function ageWithMessage() {
    return `Your Age Is ${parseInt(zAge)}`;
  }
  ageWithMessage();
  function countryTwoLetters() {
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }
  countryTwoLetters();
  function fullDetails() {
    return `Hello ${namePattern()} , ${ageWithMessage()} , ${countryTwoLetters()}`;
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));

console.log("/////////////////");

// التكليف التاني
itsMe = () => `Iam A Normal Function`;

console.log(itsMe());

urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org"));

console.log("/////////////////");

// التكليف التالت

checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

console.log("/////////////////");

// التكليف الرابع
function specialMix(...data) {
  let resultt = 0;
  for (let k = 0; k < data.length; k++) {
    if (isNaN(parseInt(data[k])) === false) {
      resultt += parseInt(data[k]);
    }
  }
  if (resultt === 0) {
    return `All Is Strings`;
  }
  return resultt;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
