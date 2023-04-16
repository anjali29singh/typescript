var message = "hello World";
console.log(typeof message);
var user1 = {
    username: "anjali",
    id: 23455,
    email: "anjalisingh34@gmail.com",
};
console.log(typeof user1);
// function add(a, b) {
//   console.log(a + b);
// }
// add(3, "3");
var add = function (a, b) {
    return a + b;
};
var sum = add(2, 5);
console.log(sum);
var fail = true;
console.log(typeof fail);
var userId = 1234556;
console.log(typeof userId);
// const  marks:arrayType =[1,2,'a'] //error
var marks = [1, 2, 4, 5, 6, 7, 9];
//properties inside User type is optional
var user2 = {
    //no error
    username: "john",
    id: 1234444,
};
console.log(typeof user2);
//required<Type> : constructs a type with all properties are required
var user3 = {
    username: "abcd",
    id: 33312333,
    email: "abcd@gmail.ac.in",
};
console.log(user3);
