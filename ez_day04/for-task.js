// // // // // //1부터 100까지 출력
// // // // // for ( let i = 0 ; i < 100 ; i++ ) {
// // // // //     console.log(i+1);
// // // // // }

// // // // // 1부터 100까지 짝수만 출력

// // // // // for ( let i = 0 ; i < 100 ; i++ ) {
// // // // //         if ( i % 2 == 0 ) {
// // // // //             continue ;
// // // // //         }

// // // // //         else {
// // // // //             console.log(i+1);
// // // // //         }
// // // // // }
// // // // // 이상 if 로 작성

// // // // // for ( let i = 0 ; i < 100 ; i++ ) {
// // // // //     let isEven = i % 2 == 0 ; // i를 2로나눈 나머지가 0이면, 즉 i가 짝수이면 참
// // // // //     isEven ? console.log(i) : ""; // i가 참이면, 즉 isEven이 참이면 i를 찍어주고 참이 아니면 공백을 찍어준다
    
// // // // // }

// // // // // for ( let i = 0 ; i < 100 ; i++ ) {
// // // // //     let isEven = i % 2 == 0 ; // i를 2로나눈 나머지가 0이면, 즉 i가 짝수이면 참
// // // // //     isEven ? console.log(i) : ""; // i가 참이면, 즉 isEven이 참이면 i를 찍어주고 참이 아니면 공백을 찍어준다
    
// // // // // }

// // // // // // 1~10까지 모든 합 출력
// // // // // let sum = 0;
// // // // // for (let i = 0 ; i < 10 ; i++) {
// // // // //     let j = i + 1 ;
// // // // //     sum += j ;
// // // // // }
// // // // // console.log(sum);

// // // // // let sum = 0;
// // // // // for (let i = 0 ; i < 10 ; i++) {
// // // // //     sum += i + 1 ;
// // // // // }
// // // // // console.log(sum);

// // // // // 1~n 까지 합의 출력

// // // // // let num = 20;
// // // // // let sumToNum = 0;
// // // // // for (let i = 0 ; i < num ; i++) {
// // // // //     sumToNum += i + 1 ;
// // // // // }
// // // // // console.log(sumToNum);

// // // // // 012340123401234 출력
// // // // // 반복회수 를 num 으로 놓고해보자

// // // // // let num = 3;
// // // // // const series= "01234";
// // // // // for (let i = 0 ; i < num ; i++) {
// // // // //     let sum = "";
// // // // //     sum = sum + series ; // i 가 0 일때 series 를 1번 나타냄, i가 1일때 series 를 2번 나타냄, i가 2일때 3번. i가 3이면 종료. 결국 3번 나타냄.
// // // // //     if (i == num) {
// // // // //         console.log(sum);
// // // // //     }
// // // // //     else {
// // // // //         continue;
// // // // //     }
// // // // // }
// // // // // console.log(sum);

// // // // // 흠..잘안되네.. 다시..

// // // // // const series = "01234";

// // // // // let sum = series.toString() + series.toString() ;

// // // // // console.log(sum);

// // // // // 오키.. 힌트얻었다.console


// // // // // const series = "01234";
// // // // // let sum = "";
// // // // // const num = 5;
// // // // // for (let i = 0 ; i < num ; i++) {
// // // // //     if (i + 1 < num) {
// // // // //         sum = sum + series.toString();
// // // // //         continue;
// // // // //     }
    
// // // // //     if (i + 1 == num) {
// // // // //         sum = sum + series.toString();
// // // // //         console.log(sum);
// // // // //     }
// // // // //     else {
// // // // //         break;
// // // // //     }
// // // // // }

// // // // // // 흠.. 겨우 만들긴 했는데.. 좀더 최적화가 가능할것 같다
// // // // // 헐.. 챗gpt 물어보니 바로 나오네 ㅠ
// // // // // 한번 코드를 붙여써볼까

// // // // let n = 5; // Replace this with the number of times you want to print "01234"

// // // // for (let i = 0; i < n; i++) {
// // // //     console.log("01234");
// // // // }
// // // // // 흠 그런데 이것은 줄을 바꿔서 출력함.. 줄을 바꿔서 출력하지 않고 한줄에 표시하려면?


// // // let n = 5; // Number of times to repeat "01234"
// // // let result = ""; // Variable to store the concatenated result

// // // for (let i = 0; i < n; i++) {
// // //     result += "01234"; // Concatenate "01234" to the result
// // // }

// // // console.log(result); // Output the final string in one line

// // // // 이상 응답1



// // let n = 5; // Replace this with the number of times you want to print "01234"
// // let text = "01234";
// // let result = "";

// // for (let i = 0; i < n; i++) {
// //     result += text;
// // }

// // console.log(result);

// // // 이상 응답2

// // 흠... 
// // 두번째것이 더 나은것 같은데. 

// // 이렇게 해보자. 


// // let n = 5;
// // let text = "01234";
// // let sum = "";
// // for (let i = 0 ; i < n ; i++){
// //     sum = sum + text;
// // }

// // console.log(sum);

// // 오키. 이상과 같이 간단히 짰다. 더하기 함수만 좀더 보완해보자.

    

// let n = 5;
// let text = "01234";
// let sum = "";
// for (let i = 0 ; i < n ; i++){
//     sum += text;
// }

// console.log(sum);

// 1~10까지 짝수면 짝수입니다. 홀수면 홀수입니다. 출력
// 1~n까지 짝수면 짝수입니다. 홀수면 홀수입니다. 출력 -> 이문제로 업그레이드한다.

// 1~10까지 짝수면 짝수입니다, 홀수면 홀수입니다. 출력
// ex) 1는 홀수입니다.
// ex) 2는 짝수입니다.
// ...

// 1~n까지 짝수면 짝수입니다, 홀수면 홀수입니다. 출력
// ex) 1는 홀수입니다.
// ex) 2는 짝수입니다.
// ...



// const num = 10;
// const even = "짝수";
// const odd = "홀수";

// for ( let i = 0 ; i < num ; i++ ) {
//     let j = i + 1;
//     let result = j % 2 == 0 ? even : odd ;
//     console.log(`${j}는 ${result}입니다.`)

// }

// 100~ 1까지 출력

// let num = 100;
// for (let i = 0 ; i < num ; i++) {
//     console.log(num - i);
// }

// 1~10까지 5부터는 +2를 시켜서 출력

// const num = 10;
// const startNum = 5;
// const addNum = 2;

// for (i = 0 ; i < num ; i++){
//     let j = i + 1;
//     if ( j >= startNum ) {
//         console.log( j + addNum );
//     }
//     else {
//         console.log ( j );
//     }
    
// }

// 이상. 다시 삼항연산자로 표현해보자

const num = 10;
const startNum = 3;
const addNum = 5;

for (i = 0 ; i < num ; i++){
    let j = i + 1;
    j >= startNum ? console.log( j + addNum ) : console.log ( j );
}




