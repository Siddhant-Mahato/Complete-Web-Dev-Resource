let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolved after 2 Seconds");
    resolve(165);
  }, 2000);
});

// jaisehi p1 complete abb kuch orr run karna hai 

p1.then((value) => {
  console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     resolve("Promise2");
//   });
//   return p2;
    return new Promise((resolve, reject) => {
            resolve("Promise2");
          });
})
  .then((value) => {
    console.log(value);
    return 2;
  })
  .then((value) => {
    console.log(value);
    console.log("Finished Chaining");
  });
