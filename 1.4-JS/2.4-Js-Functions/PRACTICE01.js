
let s = {
    fname :'Sid',
    lname :'Star',

    get fullName()
    {
        return `${s.fname} ${s.lname}`;
    },

    set fullName(value)
    {
        let p = value.split(" ");
        this.fname = p[0];
        this.lname = p[1];
    }


};

console.log(s.fullName);

s.fullName = "Sidd   Star";
console.log(s.fullName);

let d = s;

d.fullName = "siddhu yup";
console.log(d.fullName);



