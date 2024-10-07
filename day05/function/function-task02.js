// 20분
// 1) 값을 2개 전달 받아서 큰 값, 작은 값을 알려주는 함수
// const getMinMax = (num1, num2) => {
//   let min = 0;
//   let max = 0;
//   let same = "두 수는 같습니다";

//   if(num1 == num2){
//     return same;
//   }else if(num1 > num2){
//     max = num1;
//     min = num2;
//   }else{
//     max = num2;
//     min = num1;
//   }
//   return `작은 값 ${min}, 큰 값 ${max}`;
// }

// let result = getMinMax(20, 50);
// console.log(result);

// 2) 정수를 넘기면 홀수인지, 짝수인지 알려주는 함수
const getOddEven = (num1) => {
  let result = num1 % 2 == 0 ? "짝수" : "홀수";
  return result;
}

let result =getOddEven(11);
console.log(result)

// 3) 0, 1을 마구잡이로 5개 전달했을 때
// 0과 1의 개수를 알려주는 함수
// ex) myFunc(0, 1, 0, 0, 1)
// ex) 0의 개수 3개, 1의개수 2개

const getCount = (num1, num2, num3, num4, num5) => {
  let countZero = 5;
  let countOne = 0;

  if(num1){countOne++}
  if(num2){countOne++}
  if(num3){countOne++}
  if(num4){countOne++}
  if(num5){countOne++}

  countZero -= countOne;
  return `0의 개수 ${countZero}, 1의 개수 ${countOne}`;
};

console.log(getCount(1,1,0,0,0));


























