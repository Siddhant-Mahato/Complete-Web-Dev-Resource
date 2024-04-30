let num = [3,4,5,6,7,8,8];
console.log(num[4]);



let objArray = [
    {
        No : 1,
        Name : 'Sid'
    }
    ,
    {
        No : 2,
        Name : 'Star'
    }
]


let s = objArray.find(function(obj){
    return obj  .Name == 'Sid';
});

console.log(s);

let s1= objArray.find(s1=>s1.Name == 'Sid');

console.log(s1);


let star = [3,4,5,6,7,8,8];

for(let i of star)
{
    console.log(i);
}

console.log("\n");
console.log("Now Via ForEach Loop =\n ");

star.forEach(function(num){
    return console.log(num);
});

console.log("\n \n");
star.forEach(c=>{
    if(c % 2 == 0)
    {
        console.log("Even");
    }

    else
    {
        console.log("Odd");
    }
});

console.log("\n \n");

// let star1 = [3,14,5,46,0,8,8];

// star1.sort(function(s){
     
// });

// console.log(star1);


let star1 = [3,14,5,46,0,8,8];

let fit = star1.filter(val=>val>=0);
let stat = fit.map(function(val){
    let ob = {val:val};
    return ob;
});

console.log(stat);

