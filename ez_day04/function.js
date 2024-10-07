// 이름을 1번 출력해주는 함수   

// function printNameNtimes (name, num) {
//     for (let i = 0 ; i < num ; i++) {
//         console.log(name);
//     }
// }

// printNameNtimes("김은중",1);

// function return100 () {
//     return 100;
// }

// console.log(return100());

// 두 수를 합쳐서 결과값을 주는 함수

// function add2numbers (num1 , num2) {
//     return num1 + num2 ;
// }

// console.log(add2numbers(3,4));

// 성과 이름을 받아서 붙여주는 함수

// function fullName (familyName , givenName) {
//     return familyName + givenName ;
// }

// console.log(fullName("김","은중"));

// 이름을 출력해주는 함수
// function printName(name){
    
//     console.log(name);
// }

// printName("김은중");

// 숫자 5개를 받아서 모두 더해주는 함수

// function add5numbers (num1=0, num2=0, num3=0, num4=0, num5=0) {
//     sum = num1 + num2 + num3 + num4 + num5 ;
//     return sum;
// }

// result = add5numbers (1,2,3,5,10);

// console.log(result);

// 숫자 3개를 받아서 모두 곱해주는 함수

// function mul3numbers (num1, num2, num3) {
//     multiple = num1 * num2 * num3 ;
//     return multiple ;
// }

// result = mul3numbers (3, 4, 5);

// console.log(result);

// 선언과 동시에 사용 ()()

// (function () {
//     console.log("선언과 동시에 사용");
// })()

// 화살표 함수 ()

// 숫자 1개를 받아서 2배 곱하고 출력해주는 함수 (1)함수형

// function double (num1 = 0) {
//     result = num1 * 2;
//     console.log(result);
// }

// double (10);

// 숫자 1개를 받아서 2배 곱하고 출력해주는 함수 (2)변수형

// let double = function (num1 = 0) {
//     result = num1 * 2;
//     console.log(result);
// }

// double (20);

// 숫자 1개를 받아서 2배 곱하고 출력해주는 함수 (3)화살표함수 -소괄호,중괄호 사용

// let double = (num1) => { return num1 * 2 }

// console.log(double(3));

// 숫자 1개를 받아서 2배 곱하고 출력해주는 함수 (4)화살표함수 -소괄호 생략,중괄호 사용
// 파라미터가 1개일때

// let double = num1 => { return num1 * 2 }

// console.log(double(3));

// 숫자 1개를 받아서 2배 곱하고 출력해주는 함수 (5)화살표함수 -소괄호 생략,중괄호 생략
// return 항이 1줄일때

let double = num1 => num1 * 2 ;

console.log(double(3));
