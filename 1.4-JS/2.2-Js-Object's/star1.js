
// function createRec() {
//     let Rec = {
//         length: 2,
//         breadth: 4,

        // draw: function () {
        // console.log("Drawing rectangle");
        // }
//     };

//     return Rec
// }

// let rec1 = createRec();
// console.log(rec1.length);
// console.log(rec1.draw());


function Rec(len,bre) {
    this.length = len,
    this.breath = bre,

    this.draw = function(){
        console.log("Star");
    }
}

let rec1 = new Rec(6,8);
console.log(rec1);
console.log(rec1.length);
console.log(rec1.breath);