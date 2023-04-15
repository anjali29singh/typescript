var message: string = "hello World";
console.log(typeof message);

interface User {
  username: String;
  id: Number;
}

const user: User = {
  username: "anjali",
  id: 23455,
};
console.log(typeof user);

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
