var message: string = "hello World";
console.log(typeof message);

interface User {
  username: String;
  id: Number;
  email: string;
  account: string;
}

const user1: User = {
  username: "anjali",
  id: 23455,
  email: "anjalisingh34@gmail.com",
  account: "Macebook",
};
console.log(typeof user1);

// function add(a, b) {
//   console.log(a + b);
// }

// add(3, "3");

const add = (a: number, b: number): number => {
  return a + b;
};
const sum = add(2, 5);
console.log(sum);

type boolType = true | false;
const fail: boolType = true;
console.log(typeof fail);

type id = number | string;
const userId: id = 1234556;
console.log(typeof userId);

//Generics : this provides variable to types

//In  js array can contain elements with different data types

type arrayType = Array<number>;

// const  marks:arrayType =[1,2,'a'] //error

const marks: arrayType = [1, 2, 4, 5, 6, 7, 9];

//properties inside User type is optional
const user2: Partial<User> = {
  //no error
  username: "john",
  id: 1234444,
};

console.log(typeof user2);

//Required<Type> : constructs a type with all properties are required

const user3: Required<{ username; id; email }> = {
  username: "abcd",
  id: 33312333,
  email: "abcd@gmail.ac.in",
};
console.log(user3);

//Readonly  cannot assign value to that property

const user4: Readonly<{ account }> = {
  username: "anshuman",
  id: 3456710,
  email: "anshuman@gmail.ac.in",
};
