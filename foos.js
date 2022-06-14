// Python-like print() thru lambda foo (but arrow-foos haven't 'this')
const print = str => console.log(str);

print("Sum [5, 1, 2, 3, 4]: ");
// wrapper for measuring time
const measureTime = (foo, title) => {
  console.time(title);
  foo;
  console.timeEnd(title);
};

// oldbeard method
function getSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

measureTime(print(getSum(5, 1, 2, 3, 4)), "built-in arguments");

// spread method
function getSum2(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

measureTime(print(getSum2(5, 1, 2, 3, 4)), "Spread ... syntax");

// Reduce method
function getSum3(...rest) {
  return rest.reduce((a, b) => a + b, 0);
}

measureTime(print(getSum3(5, 1, 2, 3, 4)), "Reduce + spread");

// lambda-reduce
const getSum4 = (...summers) => summers.reduce((a, b) => a + b, 0);
measureTime(print(getSum4(5, 1, 2, 3, 4)), "Lambda-Reduce + spread");

// IIFE
print("\nIIFE:");
(function (a, b) { console.log(a, b) })(1, 2);

print("\n");

// Strategy pattern
const some_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

print("Strategy patten: odd/even auto-check by random from 0 to 1:")
// 1 for true and 0 for false... just an auto-checker
const variant = Math.floor(Math.random() * 2);

let sort = variant ? getEven : getOdd;

const output = sort(some_arr);
print(output);

function getOdd(some_arr) {
  const output = [];

  for (const i of some_arr) {
    if (i % 2 !== 0) {
      output.push(i);
    }
  }
  return output;
}

function getEven(some_arr) {
  const output = [];

  for (const i of some_arr) {
    if (i % 2 === 0) {
      output.push(i);
    }
  }
  return output;
}


print("\n");

// obj and foos... adding foo to the obj
const user = {
  userName: "Des",
  userSurname: "Kitten",
  userAge: 36,
  // there might be a getFullName function
};

print("Full name from obj 'user':\n");

// hmm, it might be useful to add features to the player characters
function getFullName() { return `${this.userName} ${this.userSurname}` }

user.getFullName = getFullName;

const fullName = user.getFullName();

print("Added to the 'user' obj: " + fullName + "\n");


// bind
// we bind foo to the strict obj
const getFullNameBind = getFullName.bind(user);
// calling the binded foo
const fullName2 = getFullNameBind();

const obj = {};
obj.getFullNameBind = getFullNameBind;
const fullName3 = obj.getFullNameBind();

print("Binded: " + fullName2 + "\n");
print("From empty obj: " + fullName3 + "\n");

// call (obj + args) == .apply (but obj + one array of args)
const fullName4 = getFullName.call(user);
print("Thru .call: " + fullName4 + "\n");
const fullName5 = getFullName.apply(user);
print("Thru .apply: " + fullName5 + "\n");