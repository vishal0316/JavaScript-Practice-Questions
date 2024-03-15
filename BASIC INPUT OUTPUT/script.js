// 1

// var a = "Ram";
// console.log(a);

//2

// var a = 2;
// var b = 5;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

//3

// function calculateTriangleArea(a, b, c) {
//   var s = (a + b + c) / 2;
//   let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//   return area;
// }

// let side1 = parseFloat(prompt("Enter the length of side 1:"));
// let side2 = parseFloat(prompt("Enter the length of side 2:"));
// let side3 = parseFloat(prompt("Enter the length of side 3:"));

// // Calculate and display the area of the triangle
// let area = calculateTriangleArea(side1, side2, side3);
// //

//4

// let first = parseInt(prompt("Enter the first number"));
// let second = parseInt(prompt("Enter the second number"));

// if (first === second) {
//   alert("Triple their sum: " + (first + second) * 3);
// } else {
//   alert("Sum of the two numbers: " + (first + second));
// }

//5

// var a = prompt("enter any number");
// console.log(a);

//6

// var a = prompt("enter you name");

// alert("Hello  " + a);

//7

// let a = parseInt(prompt("Enter no. 1"));
// let b = parseInt(prompt("Enter no. 2"));
// let c = a + b;
// alert("Sum is " + a + " and " + b + " is " + c);

//8

// let user = prompt("enter your username");

// let age = prompt("enter your age");

// alert("Hello  " + user + " you are " + age);

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }
