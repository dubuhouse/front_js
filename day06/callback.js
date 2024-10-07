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
const multiply = (num1, num2, callback) => {
  callback(num1 * num2)
}

const multiplyBy2 = (num, callback) => {
  callback(num * 2)
}

// const print = (result) => {
//   console.log(result)
// }

multiply(1, 2, function(result){
  multiplyBy2(result, (result) => {
    console.log(result)
  })
})


// 2) 두 정수의 값 중 작은 값을 반환하여 출력
const getMin = (num1, num2, callback) => {
  if(num1 == num2) {
    callback("두 수가 같습니다.")
  }else if(num1 > num2){
    callback(num2)
  }else{
    callback(num1)
  }
}

getMin(10, 20, (result) => {
  console.log(result)
})


// 3) 결제 상품 이름과, 결제 상태를 전달 받아서
// 결제 상태가 ture일 경우 결제완료 false일 경우 결제 취소를 출력

// * 다 푼 사람들
// 4) 문자열을 받아서 순서를 반대로 바꾼 후 출력
// 5) 사용자가 입력한 값까지 누적합 후 5의 배수인지 확인 후 출력
// 6) 1~100까지 짝수만 더한 후 결과 값의 2를 곱한 후 출력
// 7) 2개의 정수 중 최소 값과 최대 값을 비교 후 큰 값에 2를 곱해서 출력



















