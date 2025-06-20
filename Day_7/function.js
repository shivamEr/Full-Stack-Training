
// function fun(a,b){
//     return a+b;
// }

// function fun(a,b,c){
//     return a+b+c;
// }
// console.log(fun(3,4,5)); // Return NaN because of Hosting

// function fun(a,b,c,d){
//     return a+b+c+d;
// }
// console.log(fun(3,4,5,6)) ;// work and return sum



// Arrow function
// var fun = function (a,b){
//     return a+b;
// }

// var fun = function (a,b,c){
//     return a+b+c;
// }

// console.log(fun(3,4,5));
// var fun = function (a,b,c,d){
//     return a+b+c+d;
// }

// console.log(fun(3,4,5,6)) ;

// higher Order function
function helper() {
    console.log("Hello, Helper");
    return 10;
}

function higherOrder(fun) {
    console.log("Hello, Higher Order");
    let res = fun();
    return +(res) + 5; // convert string to number
}

let result = higherOrder(helper);
console.log(result); // Output: 25


let result2 = higherOrder(()=>{
     console.log("Annonymous function");
    return "20";
})
console.log(result2); // Output: 25