function hello() {
  console.log("hello");
}
hello();
// arrow function without parameter
const hello1 = () => console.log("Arrow function : hello1");
function add(a, b) {
  return a + b;
}
const sum = add(34, 54);
console.log("Sum = ", sum);

//arrow function with parameter
const add1 = (a, b) => a + b;
const sum1 = add1(134, 254);
console.log("Arrow Function Sum=", sum1);
