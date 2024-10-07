//어떤 값을 받으면 값을 출력해주는 함수 (화살표함수로)

// const printText = ( text = "") => { console.log (text) };

// printText("김은중");

// const printText = text => console.log(text) ;

// printText("김은중");

// //3개의 정수를 받아서 3개 모두 빼주는 함수 (화살표함수)

// // const subTract = (num1, num2, num3) => num1 - num2 - num3;

// // console.log(subTract(10,5,2));

// // 홍길동을 n번 출력하기 (화살표함수,중괄호사용)

// const printNtimes = (name,num) => { 
//     for (i = 0 ; i < num ; i++) {
//         console.log(name);
//     }
// }

// printNtimes("홍길동",5);

// // 1~n 까지 홀수만 출력해주는 함수

// const printOddNumOnly = (num) => {
//     for (i = 0 ; i < num ; i++){
//         let j = i + 1;
//         if (j % 2 == 1) {
//             console.log(j);
//         }
//         else {
//             continue;
//         }
//     }
// }

// printOddNumOnly(20);

// 1~n 까지 홀수만 출력해주는 함수 (if(odd)로 작성)

// const printOddOnly = (num) => { 
//     for (i = 0 ; i < num ; i++) {
//         const odd = (i+1) % 2 == 1;
//         if (odd) { console.log (i+1)} ;
//     }
// }

// printOddOnly(20);

//문자열을 입력받고 원하는 문자의 개수를 구해주는 함수

// 문자열을 변수로 입력
// ...
// 문자의 개수를 sum 같은 변수로 지정
// for문으로 문자열 i+1번째 개수에 대해 원하는 문자와 비교
// 원하는 문자와 같으면 문자의 개수에 +1 해서 저장
// 끝까지 돌렸으면 종료하고 sum 값을 리턴

// function countNumOfCharacter (text="", character="") {
//     let sum = 0;
//     for (i = 0 ; i < text.length ; i++ ) {
//         let isCharacter = text.charAt(i) == character;
//         if (isCharacter) {
//             sum = sum + 1;
//         }
//     }
//     return sum; 
// }

// let result = countNumOfCharacter ("abbccc","c");

// console.log(result);
        
// function countNumOfCharacter (text="", character="") {
//     let count = 0;
//     for (i = 0 ; i < text.length ; i++ ) {
//         let isCharacter = text.charAt(i) == character;
//         if (isCharacter) { count++ }
//         }
    
//     return count; 
// }

// let result = countNumOfCharacter ("abbccc","c");

// console.log(result);
        

//한글을 정수로 바꿔주는 함수 (일공이사=>1024)

//공일이삼사오육칠팔구
//흠.. 1대1 매칭이긴하네
//저걸 텍스트변수로 하나 만들고
//매칭되는 indexOf 로 나오는 숫자의 조합을 반환하면 되겠네

// let hangle = "공일이삼사오육칠팔구";
// let result = "";

// function changToInt (text) {
//     for (i = 0 ; i < text.length ; i++) {
//         intValue = hangle.indexOf(text.charAt(i));
//         result = result + intValue.toString();
//     }
//     return result;
// }

// console.log(changToInt ("구사팔육칠팔"));

// 정수를 한글로 바꿔주는 함수

// "공일이삼사오육칠팔구" 를 텍스트변수로 저장하고 : hangle = "공일이삼사오육칠팔구"
// 정수 입력값을 받아 텍스트 변수로 저장하고 : num = 3456 ; numText = num.toString()
// 정수 입력값의 i번째 자리수의 값(정수)를 구해서 변수로 저장하고 : charOfI = numText.charAt(i)
// 해당 값에 해당하는 한글로 변환하여 변수로 저장하고 => hangle.charAt(?)
// 해당 텍스트가 쌓일수있도록 sum 으로 합침
// 최종 sum을 반환

// const hangle = "공일이삼사오육칠팔구";
// let result = "";

// function intToChar (num) {
//     for (i = 0 ; i < (num.toString()).length ; i++) {
//         let intOfI = +((num.toString()).charAt(i)); // 3 이 숫자로 저장됨
//         let charOfI = hangle.indexOf(intOfI); // hangle 에서 3번째 인덱스에 해당하는 한글을 가져옴
//         let result = result + charOfI; // 글자를 누적함
//     }
//     return result ;
// }

// console.log(intToChar (3524));

// 흠.. 처음부터 다시하자

// 정수를 한글로 바꿔주는 함수

// 정수 입력값을 num 으로 받아서..

// function intToChar (num) {

//     return // 결과값을 리턴, 이때 결과값은 삼오이사 처럼 텍스트를 이어붙인 형이 나옴
// }

// console.log(intToChar (3524)) ; // 최종적으로 3524 에 대한 한글값 삼오이사 를 출력하면 됨

// num = 3524 ; 
// numText = num.toString(); // 입력값을 반드시 텍스트로 바꿔주어야 자리수를 알 수 있다.
// console.log(numText.indexOf(3));

//num = 3524;
// //numText = num.toString();
// const hangle = "일이삼사오육칠팔구";
// let resultText = ""; // 텍스트를 합칠 값


// function intToChar (num) {
//     numText = num.toString();
//     // for (i = 0 ; i < num ; i++) {
//     //     console.log(numText.charAt(i));// numText 의 0번째 텍스트 값 확인해서 resultText 에 합침
//     // }
//     console.log(numText.charAt(1));
// }

// // intToChar(3524);

// // let num = 3526;
// // let numText = num.toString();
// // let firstChar = numText.charAt(0);

// console.log (numText);
// console.log (firstChar);

//다시 
// 정수를 한글로 바꿔주는 함수

const hangle = "공일이삼사오육칠팔구";
let resultText = "";
let ithInt = 0;
let ithChar = "";

function intToChar (num) {
    numText = num.toString();
    for (i = 0 ; i < numText.length ; i++) {
        ithInt = +numText.charAt(i);
        ithChar = hangle.charAt(ithInt);
        resultText = resultText + ithChar;
    }
return resultText;
}

console.log(intToChar (3546));





