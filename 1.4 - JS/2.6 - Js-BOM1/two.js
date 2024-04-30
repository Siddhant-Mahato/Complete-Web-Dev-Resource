//! - Resolve Way

// let p = new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log("Hello");
//     }, 4000);

//     resolve(1303);
// });

// console.log("Star");

// ! - Reject Way

// let p = new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log("Hello");
//     }, 4000);

//     reject(new Error("Error hai"));
// });
// console.log("Star");

//! - Eg

// let p1 = new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log("Hello1");
//     }, 4000);

//     resolve(1303);
// });

// let p2 = new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log("Hello2");
//     }, 2000);

//     resolve(1303);
// });

// console.log("Star");

//! - One Way to Use then and catch

// let p1 = new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log("Hello1");
//     }, 4000);

//     // resolve(90);
//     reject(new Error("Error hai"));
//     return 2;

// });

// p1.then((value)=>{console.log(value);});

// p1.catch((error)=>{console.log("Error Received");});

//!- One More Way to Use THEN and CATCH

// let p1 = new Promise(function(resolve, reject){

//     setTimeout(function(){
//         console.log("Hello1");
//     }, 4000);

//     // resolve(90);
//     reject(new Error("Error hai"));
//     // return 2;

// });

// p1.then((value)=>{console.log(value);},(error)=>{console.log("Error Received");});

// p1.catch();





// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolved after 2 Seconds");
//     resolve(165);
//   }, 2000);
// });



// jaisehi p1 complete abb kuch orr run karna hai

// p1.then((value) => {
//   console.log(value);
//   //   let p2 = new Promise((resolve, reject) => {
//   //     resolve("Promise2");
//   //   });
//   //   return p2;
//   return new Promise((resolve, reject) => {
//     resolve("Promise2");
//   });
// })
//   .then((value) => {
//     console.log(value);
//     return 2;
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("Finished Chaining");
//   });


let a = [9,6,7,9];
let b = a;
a.length = 0;
console.log(a);
console.log(b);