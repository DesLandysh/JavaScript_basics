const print = (...args) => console.log(...args);

const persons = [
  {
    id: 1,
    username: "Des",
    surname: "Kitten",
    age: 36,
  },
  {
    id: 2,
    username: "Mary",
    surname: "Kitten",
    age: 47,
  }, {
    id: 4,
    username: "Some",
    surname: "Tai-girl",
    age: 29,
  },
];

/*      MUTATIVE METHODS */
/*        splice, fill, sort == changes input array*/
/*            not pure */
// persons.fill(0);
// print(persons); // [0,0,0]
// const popped_inbetween = persons.splice(1, 1); // nothing
// print(persons, "\n", { popped_inbetween });

/*      ITERATIVE METHODS */
print("\n\n\t** Iterative methods **")
/*        forEach, includes, find, findIndex == do not change input array*/
print("\nFinding Mary by her name:")
const wheres_Mary = persons.find(user => user.username === "Mary");
print("\t", wheres_Mary);

print("\nFinding the youngest person in array of objs:")
const minAge = Math.min(...persons.map(user => user.age));
const youngest_one = persons.find(user => user.age === minAge);
print("\t", youngest_one);

/*      GENERATIVE METHODS */
print("\n\n\t** Generative moethods **")
/*        map, filter, slice  == returns NEW array*/
print("\nNew array of names from initial array of objs:")
const names = persons.map(user => user.username);
print("\t", names);

print("\nNew Array of persons who elder than 30 years:")
const elders30 = persons.filter(user => user.age > 30);
print("\t", elders30);

print("\nCreating a copy of array by using .slice():")
print("but not true copy, just cloning links to the same elements")
const copied_array = persons.slice();
print("\t", copied_array);


/* chain */
print("chain:");

console.time("2 .maps");
const all_names = persons
  .map(user => user.username)
// .map(name => name.slice(0, 3));
//.sort((a, b) => a - b);
print(all_names);
console.timeEnd("2 .maps");

/* map polyfill */
//recreate a existing foo
// if it not exit yet or to train algorthmic vision
// TODO: recreate other's methods
function my_map(array, callback, thisArg) {
  callback = thisArg ? callback.bind(thisArg) : callback;

  let arr = [];
  for (let i = 0; i < array.length; i++) {
    const item = callback(array[i], i, array)
    arr.push(item)
  }

  return arr;
}

// polyfill checking
console.time("2 my_map foos");
const all_names2 = my_map(persons, user => user.username);
print(all_names);
console.timeEnd("2 my_map foos");

/* Lodash lib */
// get, chunk, pick, cloneDeep foos...

print("Chunk functions")
// my ver 1
function chunk(array, divider) {
  let arr2 = [];
  let iter = 0;
  while (iter <= Math.ceil(array.length / divider) + divider) {
    arr2.push(array.splice(0, divider))
    iter++
  }
  return arr2;
}

//my ver 2
function chunk_true(array, divider) {
  let arr2 = [];

  while (true) {
    if (array.length < 1) {
      break;
    }
    arr2.push(array.splice(0, divider))
  }
  return arr2;
}

print("my versions:")
print(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 3));
print(chunk_true([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 3));

print("Constcode realization:");
function chunk_constcode(array, size) {
  const result = [];

  let sub = [];
  for (let i = 0; i < array.length; i++) {
    sub.push(array[i]);

    if (sub.length >= size) {
      result.push(sub);
      sub = [];
    }
  }

  if (sub.length) {
    result.push(sub);
    sub = [];
  }
  return result;
}
print(chunk_constcode([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));