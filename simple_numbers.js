// used node.js 16 in vs code. Launching with node simple_numbers.js

// Python-like print function
const print = str => console.log(str);

// safety number that my PC can work with
const stop_number = 1000000;
let simple_num_arr = [];
let simple_num_arr2 = [];
let simple_num_arr3 = [];
let simple_num_arr4 = [];

print('number to check for simple numbers: ' + stop_number);
console.time("Simple numbers")
for (let number = 1; number <= stop_number; number++) {
   let flag = true;
   for (let delimeter = 2; delimeter < number; delimeter++) {
     if (number % delimeter === 0) {
       flag = false;
     }
   }

   if (flag) {
     simple_num_arr.push(number);
   }
}
console.timeEnd("Simple numbers")
print(simple_num_arr);

console.time("Simple numbers with break")
for (let number = 1; number <= stop_number; number++) {
  let flag = true;
  for (let delimeter = 2; delimeter < number; delimeter++) {
    if (number % delimeter === 0) {
      flag = false;
      break;
    }
  }

  if (flag) {
    simple_num_arr2.push(number);
  }
}
console.timeEnd("Simple numbers with break")


console.time("while");
let number = 1;
while (number < stop_number) {
  let flag = true;
  for (let delimeter = 2; delimeter < number; delimeter++) {
    if (number % delimeter === 0) {
      flag = false;
    }
  }

  if (flag) {
    simple_num_arr3.push(number);
  }
  number++;
}
console.timeEnd("while");

console.time("while with break");
let number = 1;
while (number < stop_number) {
  let flag = true;
  for (let delimeter = 2; delimeter < number; delimeter++) {
    if (number % delimeter === 0) {
      flag = false;
      break;
    }
  }

  if (flag) {
    simple_num_arr4.push(number);
  }
  number++;
}
console.timeEnd("while with break");

// print(simple_num_arr);
// Checking that all arrays are equal
print('is arr == arr2: ' + (simple_num_arr.join() === simple_num_arr2.join()));
print('is arr == arr3: ' + (simple_num_arr.join() === simple_num_arr3.join()));
print('is arr2 == arr4: ' + (simple_num_arr.join() === simple_num_arr4.join()));


// Foo
function isSimple(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
let num = 155;

console.time("isSimple");
const result = isSimple(num);
console.timeEnd("isSimple");

print(`Is the number ${num} is simple? ${result}`);

// ternary
print("\nTernary operator used:\n");
for (let i = 2; i <= 5; i++) {
  print(isSimple(i) ? `${i} is simple number` : `${i} is not a simple number`);
}
