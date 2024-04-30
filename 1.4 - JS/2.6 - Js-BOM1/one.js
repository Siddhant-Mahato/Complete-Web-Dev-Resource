
//     !- One Way 

// document.addEventListener('click',function() {
//     console.log("Clicked The Doc");
// })

//  !- 2nd Way 

// function star() {
//     console.log("Clicked The Doc");
// };

// document.addEventListener('click',star);
// document.removeEventListener('click',star); //!- Removed this way 


// ! - Removing not working this way :-



// document.addEventListener('click',function star(){
//     console.log("Clicked The Doc");
// });

// document.removeEventListener('click',function star(){
//     console.log("Clicked The Doc");
// });



// function star() {
//     console.log("Clicked The Doc");
// };

// document.addEventListener('click',star);


// let d = document.querySelector('#wrapper');
// d.addEventListener('click',function (event) {
//     console.log(event);
//     //!any name other than event can be written
// });



//! - 3rd Link Par Click krne par not Opening

// let b = document.getElementsByTagName('a');
// let c = b[2];
// c.addEventListener('click',function (event) {
//     event.preventDefault();
//     console.log("Good Work Done");
// });




// let myDiv = document.createElement('div');

// function star(event) {
//     console.log("I have Clicked On para");
// }

// myDiv.addEventListener('click', star);


// for (let i = 1; i <= 100; i++) {
//     let c = document.createElement('p');
//     c.textContent = "This is para " + i;

    
//     myDiv.appendChild(c);
// }

// document.body.appendChild(myDiv);


let ele = document.querySelector('#wrapper');
ele.addEventListener('click',function (event) {
    if(event.target.nodeName == 'SPAN')
    {
        console.log('Span pr clicked' + event.target.textContent);
    }
});