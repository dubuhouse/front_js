//두 수를 더해서 출력하기

// const add = function (num1, num2, callback) {

// }

// const print = () => { };


// //15분
// // 두 정수의 덧셈 결과를 출력

// const print = (result) => {
//     console.log(result)
// }

// const sum = (num1, num2, callback) => {
//     callback(num1 + num2)
// }

// sum(10, 20, print)

// 두 정수의 곱셈 결과를 출력

// 곱셈 함수가 필요
// 출력 함수가 필요
// 곱셈 함수에 인자로 "출력함수" 를 넣기
// "출력함수" 기 콜백함수 가 됨


// const print = (text) {
//     console.log (text)
// }

// const mul = (num1, num2, callback) {
//     result = num1 * num2;
// }

// mul (10,5,print)

//에라이. 다시

// const print = (result) => {
//     console.log(result)
// }

// const mul = (num1,num2,callback) => {
//     callback (num1 * num2);
// }

// mul(10,20,print)

//흠 .. 뭔지모르지만 그냥 어거지로 이해.. 다음 넘어가보자

// // 성과 이름을 전달받아서 "000님 환영합니다"를 출력

// 성과 이름을 전달 받아서...
// print 함수를 전달해서 
// 해보자

// 함수는 greet


// const print = (result) => {
//     console.log(result)
// }

// const greet = (familyName, givenName, callback) => {
//     callback(familyName + givenName)
// }

// greet("김","은중",print)


// 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력

// 두수를 더하는 프로세스
// 홀수인지 짝수인지 판별하는 프로세스
// 출력하는 프로세스

// const myFunc = (num1, num2) => {

//     let sum = num1 + num2;
//     if ( sum % 2 == 0 ) {
//         console.log("짝수입니다.")
//     }
//     if ( sum % 2 == 1 ) {
//         console.log("홀수입니다.")
//     }
//     if ( sum % 1 != 0 ) {
//         console.log("정수가 아닙니다.")
//     }
// }

// const isSumOddOrEven = (num1, num2, callback) => {
//     callback(num1,num2)
// }

// isSumOddOrEven(3,9,myFunc)

// 음.. 인수부분의 콜백함수 자리를 "익명함수" 로 표현해서 풀어보자
// add 함수 , isEven 함수와 print 함수를 씀
// add 함수는 num1 과 num2, 콜백함수를 받아서 콜백함수에게 num1+num2 값을 인자로 넘겨줌
// isEven 함수는 num1,콜백함수를 받아서 num1이 짝수인지 홀수인지 판별한 결과값을 콜백함수에게 인자로 넘겨줌
// print 함수는 인수로 받은 값을 console.log 로 출력함
// 최종적으로 add 함수를 사용
// 함수들의 선언은 const 로 함

// const add = (num1, num2, callback) => {
//     callback(num1+num2);
// }

// const isEven = (num1, callback) => {
//     let result = num1 % 2 == 0 ? "짝수" : "홀수";
//     callback (result);
// }

// const print = (result) => {
//     console.log(result);
// }

// add(3,8,(result)=>{
//     isEven(result, print)
// }) 


// ** 아항.. 익명함수.. 인제 얼핏 이해가 될것 같은데..
// add (20, 30, 어쩌구 저쩌구 기능이 있는 함수)
// 애당초 add 함수는 앞의 2개 인수는 값을 받고 3번째 인수는 "함수"로 받는 함수이다
// add 함수가 호출되면 중괄호 안에가 실행되면서 그 안에 2개 인수 및 함수 가 활용된다
// 이때 add 함수는 앞의값과 뒤의값을 더한 다음에 그 값을 가지고 ~~ 하는 로직이 실행된다
// add(20, 30, 익명함수)
// 이렇게 쓰면 익명함수가 호출된다 그 익명함수는 
// function 익명함수 (result) {
//    isEven(result, print)
// }
// 즉, 익명함수가 호출되면 isEven 이 호출되고 인자값이 전달되는데
// 이때 인자값이 num1 + num2 가 된다.
// 라고 정의될 수 있는 함수인데 콜백함수는 별도로 함수명을 정해주지 않는것같다. function 으로 생성하지 않고 
// 익명함수로 생성하는게 문법상 맞는가보다. 



// 이부분이 좀 어려운데.. 3과 8을 넣었을 때 이 값의 합에 대한 부분이 먼저 나와줘야하고
// 그다음에 그 합을 다시 isEven 에 넣어서 홀수인지 짝수인지 판별해서
// 그 값을 프린트 해줘야한다
// 즉, add 함수로는 안되고 그 결과를 isEven 으로 다시 호출해줘야하고 
// isEven 호출할때 print 함수도 호출해서 print 까지 할수있게 해야한다
// 이렇게하면 이렇게 3개 함수를 합칠 수 있는데
// 그렇다고하면 4개 (4단계) 함수도 이런식으로 합칠수있나?
// 한번 테스트해볼까. isEven 말고 다른걸 넣어볼까. 3의 배수라든지. 



// const add = (num1, num2, callback) => {
//     callback(num1+num2);
// }

// const isEven = (num1, callback) => {
//     let result = num1 % 2 == 0 ? "짝수" : "홀수";
//     callback (result);
// }

// const isMultiplesOf3 = (num1 , callback) => {
//     let result = num1 % 3 == 0 ? "3의 배수" : "3의 배수 아님";
//     callback (result)
// }

// const print = (result) => {
//     console.log(result);
// }

// add(5,7,(result)=>{
//     isEven(result, print);
//     isMultiplesOf3(result, print);
// }) 







// 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력
// // 다시 작성해보자. 선생님이 한대로..

// const add = (num1, num2, callback) => {
//     callback(num1+num2);
// }

// const isEven = (num1, callback) => {
//     result = num1 % 2 == 0 ? "짝수" : "홀수";
//     callback(result);
// }

// const print = (result) => {
//     console.log(result);
// }

// add(20, 30, (result) => {
//     isEven(result, print);
// })

//흠.. 알것같기도하고... 조금 어렵구만... 일단 넘어가자.




// 1) 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력

// 이 문제를 콜백함수를 쓰지 않고 해보자

// function mulAndDouble (num1, num2) {
//     result = num1 * num2 * 2;
//     console.log(result);
// }

// mulAndDouble (3,5)

// 간단한데.. 흠.. 이걸 다시 콜백함수로 써보자

// const addAndDouble = (num1, num2, callback) => {
//     callback (num1 * num2 * 2);
// }

// const print = (result) => {
//     console.log(result);
// }

// addAndDouble (3,5,print)




// 1) 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
// 이문제는, 두정소 곱셈구하는 함수 multiple 과 2를 곱하는 함수 multipleBy2  2개 함수로 콜백함수를 써서 구한다

// const multiple = (num1, num2, callback) => {
//     callback(num1*num2);
// }

// const multipleBy2 = (num1, callback) => {
//     callback(num1*2);
// }

// const print = (result) => {
//     console.log(result)
// }

// multiple(10,3,(result)=>{
//     multipleBy2(result, print)
// })

// 오케이 풀었다!!!


  // 2) 두 정수의 값 중 작은 값을 반환하여 출력

  // 두정수의 값을 비교해서 작은값을 리턴하는 함수
  // 그 리턴값을 프린트하는 함수

//   const min = (num1, num2, callback) => {
//         if (num1 > num2) {
//             result = num2;
//         }
//         if (num1 < num2) {
//             result = num1;
//         }
//         if (num1 = num2) {
//             result = num1;
//         }

//         callback(result);
//   }

//   const print = (result) => {
//         console.log(result);
//   }

//   min (12, 15, print)
// 이상 내 답안인데.. 답이 안나온다 더 큰값이 출력됨 ㅠ 
// 다시해보자. 선생님은 print 함수도 쓰지 않고 바로 익면함수에서 console로 출력되게 했네

// 익명함수 : 두수의 min값을 출력함 
// 함수명은 getMin

// const getMin = (num1, num2, callback) => {
//     if (num1 == num2) {
//         callback("두 수가 같습니다.");
//     } else if (num1 < num2) {
//         callback(num1);
//     } else {
//         callback(num2);
//     }
// }

// getMin (13, 11, (result)=>{
//     console.log(result)
// })

// 어떤 함수를 실횅하면서 다른 함수**를 같이 실행해야할 때 등등 쓰면 괜찮을것 같다. 
// 이정도로 러프하게 이해..





 
  // 3) 결제 상품 이름과, 결제 상태를 전달 받아서
  // 결제 상태가 ture일 경우 결제완료 false일 경우 결제 취소를 출력

// 함수1 :이름과 결제상태를 전달받아서 ㅇㅇ를 출력
// 함수2 : 결제상태가 true 인지 확인하는 프로세스
// 함수3 : 함수2의 결과에 따라 결제완료 또는 결제취소 를 출력하는 프로세스
// 최종적으로 실행할때 함수1(인자1, 인자2, 익명함수) 로 쓰고
// 익명함수를 함수2와 함수3을 잘 실행하게 쓰면 되겠다.


// const getPaymentStatus = (name,status,callback) => {
//     if (status == true) {
//         callback(name + " 결제 완료");
//     } else if (status == false ) {
//         callback(name + " 결제 취소");
//     } else {
//         callback(name + " 오류")
//     }
// }

// const print = (result) => {
//     console.log(result)
// }

// getPaymentStatus ("과일",false,print)

//오키. 굿. 

  // * 다 푼 사람들
  // 4) 문자열을 받아서 순서를 반대로 바꾼 후 출력

// 함수1 : 문자열을 받아서 콜백함수를 호출
// 함수2 : 문자열의 순서를 바꿔줌
// 함수3 : 바꾼 문자열을 출력

// const reverseText = (text, callback) => {
//     callback(text)
// }

// const reverse = (text) => {
//     textSize = text.length;
//     textReverse = "";
//     for (i = 0 ; i < textSize ; i++) {
//         textReverse += text.charAt(textSize-i-1);
//     }
//     return textReverse;
// }

// const print = (result) => {
//     console.log(result);
// }

// reverseText ("abcdefgggaa", (result)=>{
//     console.log(reverse(result));
// })

  // 5) 사용자가 입력한 값까지 누적합 후 5의 배수인지 확인 후 출력
// 함수1 : 사용자 입력값을 받아 *** 해서 출력
// 함수2 : 인수를 받아 누적합 해서 리턴
// // 함수3 : 인수를 받아 5의 배수인지 확인 후 출력

// const isSumisMultipleOf5 = (num1,callback) => {
//     let sum = 0;
//     for (i = 0 ; i < num1 ; i++) {
//         sum = sum + i + 1;
//     }
//     callback(sum);
// }

// const isMultipleOf5AndPrint = (num1) => {
//     if(num1 % 5 == 0) {
//         console.log("5의 배수")
//     } else {
//         console.log("5의 배수가 아님")
//     }
// }

// // isSumisMultipleOf5 (3,(result)=>{
// //     isMultipleOf5AndPrint (result);
// isSumisMultipleOf5 (3, isMultipleOf5AndPrint) // 호오. 굳이 익명함수를 풀어쓸게아니라 그냥 함수명을 적으면 되는구나. 오키. 함수명을 안적고 싶을때 익명함수로 쓰면 되는것이고.. 
// // 익명함수가 print 처럼 간단한 것일때 굳이 함수명 적으며 선언하지않고. 저렇게 하면 되겠다. 

// 2개의 정수 중 최소 값과 최대 값을 비교 후 큰 값에 2를 곱해서 출력
// => 이 문제를 아래와 같이 좀더 어렵게 만들어서 풀자
// 4개의 정수 중 최소 값과 최대 값을 비교 후 큰 값에 2를 곱해서 출력

// 함수1 : 4개의 정수와 함수를 입력받아 실행
// 함수2 : 4개의 정수를 입력받아 최소값과 최대값을 리턴
// 함수3 : 

// 흠.. 이건 문제가좀 후진데. 그냥 pass 하자. 위에 한것까지도 충분 하다. 











  // 6) 1~100까지 짝수만 더한 후 결과 값의 2를 곱한 후 출력
// 음 이거 안풀었네..풀어보자

// 함수1 : 메인함수 (인수1-숫자, 인수2-콜백함수)
// 함수2 : 인수1을 받아 1부터 인수1까지 짝수까지의 누적합에 *2 출력

// const evenAndDouble = (num1, callback) => {
//   callback(num1);
// }

// const sumEvenAndDoubleAndPrint = (num) => {
//   let sum = 0;
//   for (i = 0 ; i < num ; i++) {
//     if ((i+1) % 2 == 0) {
//       sum = sum + (i+1);
//     }
//   }
//   console.log(sum*2);

// }

// evenAndDouble (100, sumEvenAndDoubleAndPrint)








  // 7) 2개의 정수 중 최소 값과 최대 값을 비교 후 큰 값에 2를 곱해서 출력
  // 이때 타입이 정수가 아니면 "잘못 입력했습니다."를 출력하게함

  // 함수1 : 메인함수 (인수1-숫자, 인수2-숫자, 콜백함수)
  // 함수2 : 콜백함수 (인수1, 인수2)

// const getMaxDoublePrint = (num1, num2, callback) => {
//   callback(num1, num2);
// }

// const maxDoublePrint = (num1, num2) => {
//   if(typeof(num1)!=="number" || typeof(num2)!=="number") {
//     console.log("잘못 입력했습니다.");
//   }
//   else if(num1 == num2) {
//     console.log("두 수가 같습니다.")
//   }
//   else if(num1 > num2) {
//     console.log (num1*2)
//   }
//   else {
//     console.log (num2*2)
//   }
// }

// getMaxDoublePrint ( 5, "a", maxDoublePrint)

// 음 보니.. 함수의 관계가.. 
// 일단 max 를 구하는 함수가 메인이고.. => getMax
// max 를 구한담에 *2 를 구하는 콜백함수를 썼네
// *2 하는 함수를 따로 선언하지않고 getMax 함수 안에 익명함수로 씀
// 그럼 프린트는 어디서?
// 오홍.. 프린트 함수를 따로 만들고 getMax 안에 익명함수를 쓸때 다시 프린트함수를 콜백함수로 사용했네!
// 이렇게 한번 만들어보자

const print = (result) => {
  console.log(result)
}

const multipleBy2 = (num, callback) => {
  callback(num*2)
}

const getMax = (num1, num2, callback) => {
  if(typeof(num1)!=="number"||typeof(num2)!=="number") {
    return console.log("잘못 입력했습니다.")
  } else if (num1 == num2) {
    return console.log("두 수가 같습니다.")
  } else if (num1 > num2) {
    callback(num1)
  } else {
    callback(num2)
  }
}

getMax("a","a",(result)=>{multipleBy2(result,print)})












  
  
  
  
  
  
  
  