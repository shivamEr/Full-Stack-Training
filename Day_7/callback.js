// Callbacks functions

// function cb(a,b){
//     console.log("Call back Executing");
//     return a+b;
// }

// function parent(a,b,cb){
//     console.log("Parent function executing");
//     let sum = a + b;
//     let result = cb(sum,20);
//     return result;
// }
// let result = parent(10,20,cb);
// console.log(result);


// Example of callbacks for square and cube of a number
function square(num) {
    return num * num;
    // return num ** 2;
}
function cube(num){
    return num * num * num;
}

function ArrConverter(array, cb){
    let result = [];
    for(let element of array){
        let powVal = cb(element);
        result.push(powVal);

    }
    return result;
}
console.log(ArrConverter([1,2,3,4,5],square));
console.log(ArrConverter([1,2,3,4,5],cube));
