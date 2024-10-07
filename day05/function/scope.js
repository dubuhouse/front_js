// let b = 10;

// function func(){
//   if(true){
//     let a = 10;
//     console.log(a)
//   }
//   // console.log(a)
// }
// // func();

// console.log(a)


let x = 10;
function f(){
  let x = 20;
  x = 30;
  console.log(x)
}
f()
console.log(x);


globalThis.x = 10;
function f2(){
  let x = 20;
  globalThis.x = 30;
  console.log(x)
}
f2()
console.log(globalThis.x);


















