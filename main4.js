// 23 >> 26

// التكليف الاول
console.log(100_000);
console.log(100000);
console.log(5e4 + 5e4);
console.log(Math.round(100000.4));
console.log(Math.ceil(99999.999999));
console.log(Math.floor(100000.53534));
console.log(Math.trunc(100000.777));
console.log(Math.pow(10, 5));
console.log(10 ** 5);
console.log(parseInt((100000.44).toFixed(0)));
console.log(Math.max(4000, 5000, 100000, 10000));
console.log(Math.min(1990283, 100000, 2000000, 23456789876));
console.log(Math.round(parseFloat(100000.456)));

console.log("/////////////////");

// التكليف التاني
console.log(-Number.MIN_SAFE_INTEGER);

console.log("/////////////////");

// التكليف التالت
console.log(`${Number.MAX_SAFE_INTEGER}`.length);

console.log("/////////////////");

// التكليف الرابع
let myVar = "100.56789 Views";

console.log(parseInt(myVar));
console.log(Number(parseFloat(myVar).toFixed(2)));

console.log("/////////////////");

// التكليف الخامس
let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num));

console.log("/////////////////");

// التكليف السادس

let flt = 10.4;

console.log(Math.round(flt));
console.log(Math.floor(flt));
console.log(Number((10.4).toFixed(0)));
console.log(Math.trunc(flt));
console.log(parseInt(flt));

console.log("/////////////////");

// التكليف السابع
console.log(Math.floor(Math.random() * 4) + 1);
