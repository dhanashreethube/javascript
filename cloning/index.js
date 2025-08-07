let source1 = {
    name:"omkar",
    age:27,
    wgt:94
};


let source2 = {
    name:"dhanashree",
    age:31,
    wgt:54
};


// let destination = source

// let destination = {...source}


let destination1 = Object.assign ( {} , source1)
let destination2 = {...source2}

// destination.wgt = 70
console.log("src1:",source1)
console.log("dest1:",destination1 )

console.log("src2:",source2)
console.log("dest2:",destination2 )