// 1) 입력받은 3개 중 홀수만 모두 더해주는 함수

// let addOdd = 0;

// function addOddOnly (num1, num2, num3) {

//     if (num1 % 2 == 1) {
//         addOdd = addOdd + num1;
//     }
//     if (num2 % 2 == 1) {
//         addOdd = addOdd + num2;
//     }
//     if (num3 % 2 == 1) {
//         addOdd = addOdd + num3;
//     }
//     return addOdd ;
// }

// console.log(addOddOnly(1,1,4));


// 2) 입력받은 수까지 반복 후 짝수의 합을 모두 더해주는 함수

// let sumOfEven = 0;
// function addEvenOnly (num) {
//     for (i = 0 ; i < num ; i++) {
//         console.log (i+1);
//         if((i+1) % 2 == 0) {sumOfEven+=(i+1);}
//     }
//     console.log (`짝수의 합은 ${sumOfEven}입니다.`);
// }

// addEvenOnly (10);


// 3) 입력한 값 중 a를 제거해주는 함수
// ex) "가a나a다a라a마a바" -> "가나다라마바"

// let resultText = "";
// function getRidOfA (text) {
//     for (i = 0 ; i < text.length ; i++) {
//         if (text.charAt(i) != "a") {
//             resultText = resultText + text.charAt(i);
//         }
//     }
//     return resultText;
// }

// console.log(getRidOfA ("1aa2aa3aa4bb5"));

// 4) 입력한 값이 실수인지 정수인지 알려주는 함수
// parseInt() : 정수로 바꿔주는 함수

// function isIntOrReal (num) {
//     if (num == parseInt(num)) {
//         console.log("정수입니다.")
//     }
//     else { 
//         console.log("실수입니다.")
//     }
// }

// isIntOrReal (3.3);







// 5) 입력받은 문자를 뒤집어주는 함수
// ex) "abcdefg" -> "gfedcba";

let resultText = "";
function reverseText (text) {
    textSize = text.length;
    for (i = 0 ; i < textSize ; i++) {
        resultText += text.charAt(textSize-i-1);
    }
    return resultText;
}
console.log(reverseText("abcdefg"));

// let text = "abc";
// console.log(text.length)