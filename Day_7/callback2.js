

// function cb(x){
//     console.log("Callback function")
//     return function(y){
//         console.log("Inner Function Called");
//         return x + y;
//     }
// }

// function higher(callback){
//     console.log("Higher Order Function Called");
//     let innerFun = callback(5);
//     console.log("This is Below Call");
//     return innerFun(10);
// }

// console.log(higher(cb));


// Q. 2
function cb(x){
    console.log("Callback function")
    if(x>10){
        return "Greater than 10";
    }
    else {
        return "Less than or equal to 10";
    }
}

function higher(callback, value){
    console.log("Higher Order Function Called");
    let ans = callback(value);
    console.log("This is Below Call");
    return ans;
}

console.log(higher(cb,5));
