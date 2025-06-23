let num = 10;
// setTimeout(()=>{
//   console.log("this is inner CB, comes after 2s");
// },2000) // runs the callback funtion after 2000ms(2sec).
// console.log(num);
// const callBack = ()=>{
//   console.log("this is outer callback function");
// }

// setTimeout(callBack,1000);// runs the callback funtion after 1000ms(1sec).

// const id = setInterval(() => {
//   console.log("this function is running in every 3s");
// }, 3000);

// // clearInterval(id)
// setTimeout(()=>{
//   clearInterval(id);
// },3000*4)

// promise
// let b =10;
// const myPromise = new Promise((resolve,reject)=>{
//   let num = Math.random()*10
//   if(num<5){
//     resolve(num)
//   }else{
//     reject(num)
//   }
// })

// myPromise.then((data)=>{
//   console.log("promis resolved",data);
// }).catch((error)=>{
//   console.log("promise rejected",error);
// });
// console.log(b);

// const myNewPromise = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("this is a promise which is resloved after 2s");
//     resolve();
//   },2000)
// })

// myNewPromise.then(()=>{
//   console.log("promise resolved");
// })

// console.log(myNewPromise);


// const chainPromise = new Promise((resolve,reject)=>{
//   let num = Math.random()*100
//   if(num<50){
//     resolve(num)
//   }else{
//     reject(num)
//   }
// })

// chainPromise.then((data)=>{
//   if(data<25){
//     return `num is less than 25 ${data}`
//   }else{
//     return `num is greater than 25 ${data}`
//   }
// }).then((dta)=>{
//   console.log(dta);
// }).catch(()=>{console.log("object");})


// async functions
let a = 10;
async function fun() {
    console.log("async function");
}
let result;

const arrowFun = async () => {
    console.log("async arrow function start");
    // let res = await fetch("https://randomuser.me/api/");
    // result = await res.json();
    let res = await axios.get("https://randomuser.me/api/")
    result = res.data;
    console.log(result);
    console.log("async arrow function end");
}

arrowFun();
console.log(result);
console.log(a);