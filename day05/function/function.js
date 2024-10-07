// 이름을 1번 출력해주는 함수
// function printName(){
//   console.log("김세환");
// }

// console.log(printName())

// 100이라는 값을 주는 함수
// function get100(){
//   return 100;
// }

// console.log(get100());

// 두 수를 합쳐서 결과값을 주는 함수
// function add(num1, num2){
//   return num1 + num2;
// }

// function add(num1, num2){
//   return 0;
// }

// 15분
// 성과 이름을 받아서 붙여주는 함수
// function getFullName(lastName, firstName){
//   let fullName = lastName + firstName;
//   return fullName;
// }

// let name = getFullName("김", "세환");
// console.log(name);

// 이름을 출력해주는 함수
// function printName(name){
//   console.log(name)
// }

// printName("김세환");

// 이름을 10번 반복해주는 함수
// function printNameTo10(name){
//   for(let i = 0; i < 10; i++){
//     console.log(name)
//   }
// }

// printNameTo10("김세환2");

// 숫자 5개를 받아서 모두 더해주는 함수
// 매개변수, 파라미터, 파람, 인자
// 디폴트 파라미터
// function add(num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0){
//   return num1 + num2 + num3 + num4 + num5;
// }

// let result = add(10, 30, 40);
// console.log(result);

// 숫자 3개를 받아서 모두 곱해주는 함수

function return10(){
  return 10;
}

function mul(num1, num2, num3, num4 = return10()){
  return num1 * num2 * num3 * num4;
}

let result2 = mul(10,10,10);
console.log(result2);


// 즉시 사용함수 ()()
(function(){
  console.log("선언과 동시에 사용")
}
)();

// 화살표 함수 () => {} (ES6)
// 숫자 2개를 받아서 더하고 출력해주는 함수
function addPrintNum(num1, num2){

};

const addPrintNum2 = (num1, num2) => {
  
};



















