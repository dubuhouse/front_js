// 두 수를 더해서 출력하기
// const add = (num1, num2, callback) => {
//   callback(num1 + num2);
// }

// const print = (value) => {
//   console.log(value);
// }

// add(20, 30, print)


// 성과 이름을 받아서 연결하고 출력해주는 함수

// const getFullName = (lastName, firstName, callback) => {
//   callback(lastName + firstName);
// }

// getFullName("김", "세환", print)

// 15분
// 두 정수의 덧셈 결과를 출력
// const print = (result) => {
//   console.log(result)
// }

// const sum = (num1, num2, callback) => {
//   callback(num1 + num2)
// }

// sum(10, 20, print)

// 두 정수의 곱셉 결과를 출력
// const mul = (num1, num2, callback) => {
//   callback(num1 * num2)
// }

// mul(10, 20, print)

// 성과 이름을 전달받아서 "000님 환영합니다"를 출력
// const getFullName = (lastName, firstName, callback) => {
//   callback(lastName + firstName)
// }

// getFullName("김", "세환", print)



// 두 수를 더하고 홀수인지 짝수인지 비교한 후 출력
// const add = (num1, num2, callback) => {
//   callback(num1 + num2);
// }

// const isEven = (num1, callback) => {
//   let result = num1 % 2 == 0 ? "짝수" : "홀수";
//   callback(result);
// }

// const print = (result) => {
//   console.log(result);
// }

// add(20, 30, (result) => {
//   isEven(result, print)
// })

// add(20, 30, isEven)

// 1) 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
// const multiply = (num1, num2, callback) => {
//   callback(num1 * num2)
// }

// const multiplyBy2 = (num, callback) => {
//   callback(num * 2)
// }

// const print = (result) => {
//   console.log(result)
// }

// multiply(1, 2, function(result){
//   multiplyBy2(result, (result) => {
//     console.log(result)
//   })
// })


// 2) 두 정수의 값 중 작은 값을 반환하여 출력
// const getMin = (num1, num2, callback) => {
//   if(num1 == num2) {
//     callback("두 수가 같습니다.")
//   }else if(num1 > num2){
//     callback(num2)
//   }else{
//     callback(num1)
//   }
// }

// getMin(10, 20, (result) => {
//   console.log(result)
// })


// 3) 결제 상품 이름과, 결제 상태를 전달 받아서
// 결제 상태가 ture일 경우 결제완료 false일 경우 결제 취소를 출력
// const payment = (productName, status, callback) => {
//   let paymentStatement = status ? "결제 완료" : " 결제 취소";
//   result = `${productName}은(는) ${paymentStatement}`;
//   callback(result)
// }


// payment("선풍기", true, print);

// --------------------------------------------------------------------------

const print = (value) => {
  console.log(value)
}
// 4) 문자열을 받아서 순서를 반대로 바꾼 후 출력
// const reverse = (content, callback) => {
//   let result = "";
//   for(let i = 0; i < content.length; i++){
//     result += content.charAt(content.length - 1 - i);
//   }
//   callback(result);
// }

// reverse("안녕하세요", print)

// 5) 사용자가 입력한 값까지 누적합 후 5의 배수인지 확인 후 출력
// const sum = (limit, callback) => {
//   let result = 0;
//   for(let i = 0 ; i <= limit; i++){
//     result += i;
//   }
//   callback(result)
// }

// const isMultipleBy5 = (num, callback) => {
//   let condition = num % 5 == 0;
//   let result = condition ? "5의 배수입니다" : "5의 배수가 아닙니다";
//   callback(result)
// }

// sum(21, (result) => {
//   isMultipleBy5(result, print)
// })

// 6) 1~100까지 짝수만 더한 후 결과 값의 2를 곱한 후 출력

// const sumEven = (callback) => {
//   let result = 0;
//   for(let i = 1; i <= 100; i++){
//     let even = i % 2 == 0;
//     if(even){ result += i };
//   }
//   callback(result);
// }

const multipleby2 = (num, callback) => {
    callback(num * 2)
}

// sumEven((result)=>{
//   multipleby2(result, print)
// })

// 7) 2개의 정수 중 최소 값과 최대 값을 비교 후 큰 값에 2를 곱해서 출력
const getMax = (num1, num2, callback) => {
  if(typeof(num1) !== "number" || typeof(num2) !== "number"){
    return console.log("잘 못 입력하셨습니다.")
  }

  if(num1 == num2){
    return console.log("두 수는 같습니다.")
  }else if(num1 > num2){
    callback(num1)
  }else{
    callback(num2)
  }
}

getMax(10, "글자", (result) => {
  multipleby2(result, print)
})














