// WARNING: comment min/max and code below if you want to increase the range of generater

// const numbers = Array(100000).fill().map(() => Math.floor(Math.random() * 100));
// Array Generator for 20 random numbers from 1 to 100
const numbers = Array(20).fill().map(() => Math.floor(Math.random() * 100)); // comment this to use line 6 and follow Warning instructions.
// const numbers = Array(100000).fill().map(() => Math.floor(Math.random() * 100));
const numbers2 = [
  2, 79, 42, 70, 15, 25, 52,
  47, 94, 92, 70, 11, 34, 17,
  33, 17, 15, 18, 17, 86
]

const odd = [];
const even = [];
console.time("For_of_cont")
for (let n of numbers) {
  if (n % 2 === 0) {
    even.push(n);
    continue;
  }
  odd.push(n);
};
console.timeEnd("For_of_cont")

const odd2 = [];
const even2 = [];
console.time("For_of_else")
for (let n of numbers) {
  if (n % 2 === 0) {
    even2.push(n);
  } else {
    odd2.push(n)
  };
};
console.timeEnd("For_of_else")

const odd3 = [];
const even3 = [];
console.time("For_loop_else")
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even3.push(numbers[i]);
  } else {
    odd3.push(numbers[i]);
  }
};
console.timeEnd("For_loop_else")

const odd4 = [];
const even4 = [];
console.time("Basic For-Loop")
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    even4.push(numbers[i]);
    continue;
  }
  odd4.push(numbers[i]);
};
console.timeEnd("Basic For-Loop")

// console.log(odd);
// console.log(even);

// BASIC FOR LOOP with ELSE-STATEMENT is FASTER!!! almost in 1.5-2 times

// Check equality
console.log("Odd equality");
console.log(odd.length === odd2.length, odd.length === odd3.length, odd.length === odd4.length);
console.log("Even equality");
console.log(even.length === even2.length, even.length === even3.length, even.length === even4.length);

// AVG
let sum = 0;

console.time("Basic_loop");
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
};
sum = sum / numbers.length;
console.timeEnd("Basic_loop");

let sum2 = 0
console.time("Forof_loop");
for (let i of numbers) {
  sum2 += i
};
sum2 /= numbers.length;
console.timeEnd("Forof_loop");

// Check equality
console.log(sum === sum2);


// Min max
let min = Infinity;
let max = -Infinity;
for (let n of numbers) {
  if (n < min) {
    min = n;
  } else if (n > max) {
    max = n;
  }
}
console.log({ min, max });

// sum of elements of two arrays same length
let sum_el = [];
for (let i = 0; i < numbers2.length; i++) {
  sum_el.push(numbers[i] + numbers2[i]);
}
console.log(sum_el);
console.log(numbers);
console.log(numbers2);
