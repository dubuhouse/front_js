// 값을 2개 전달받아서 큰 값, 작은 값을 알려주는 함수

// function compareNumbers (num1, num2) {
//     if (num1 > num2) {
//         console.log(`${num1}이 ${num2}보다 큽니다`)
//     }
//     if (num1 < num2) {
//         console.log(`${num1}이 ${num2}보다 작습니다`)
//     }
//     if (num1 == num2) {
//         console.log(`${num1}이 ${num2}와(과) 같습니다`)
//     }
// }

// compareNumbers (17,16);

// 정수를 넘기면 홀수인지, 짝수인지 알려주는 함수

// function isOddOrEven (num) {
//     if (num % 2 == 0) {
//         console.log("짝수입니다");
//     }
//     if (num % 2 == 1) {
//         console.log("홀수입니다");
//     }
//     if (num % 1 != 0) {
//         console.log("정수가 아닙니다");
//     }
// }

// isOddOrEven (18.1);

// 3) 0, 1을 마구잡이로 5개 전달했을 때
// 0과 1의 개수를 알려주는 함수
// ex) myFunc(0, 1, 0, 0, 1)
// // ex) 0의 개수 3개, 1의개수 2개

// function myFunc (num1, num2, num3, num4, num5) {
//     numSize = 5;
//     numOfZero = 0;
//     numOfOne = 0;
//     if (num1 == 0) { numOfZero++ }
//     if (num2 == 0) { numOfZero++ }
//     if (num3 == 0) { numOfZero++ }
//     if (num4 == 0) { numOfZero++ }
//     if (num5 == 0) { numOfZero++ }

//     if (num1 == 1) { numOfOne++ }
//     if (num2 == 1) { numOfOne++ }
//     if (num3 == 1) { numOfOne++ }
//     if (num4 == 1) { numOfOne++ }
//     if (num5 == 1) { numOfOne++ }

//     console.log(`0의 개수 ${numOfZero}개, 1의 개수 ${numOfOne}개`)
// }

// myFunc (0,0,1,1,0);

// 이상 내가 푼 방법


function myFunc (num1, num2, num3, num4, num5) {
    numSize = 5;
    numOfZero = 0;
    numOfOne = 5;
    if (num1 == 0) { numOfZero++ / numOfOne--}
    if (num2 == 0) { numOfZero++ / numOfOne--}
    if (num3 == 0) { numOfZero++ / numOfOne--}
    if (num4 == 0) { numOfZero++ / numOfOne--}
    if (num5 == 0) { numOfZero++ / numOfOne--}
    
    console.log(`0의 개수 ${numOfZero}개, 1의 개수 ${numOfOne}개`)
}

myFunc (0,0,1,1,0);
