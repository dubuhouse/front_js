// 브론즈
// 1부터 100까지 출력
// for(let i = 0; i < 100; i++){
//   console.log(i+1)
// }

// 1부터 100까지 짝수만 출력
// for(let i = 1; i <= 100; i++){
//   let even = i % 2 == 0;
//   even ? console.log(i) : "";
// }

// for(let i = 1; i <= 50; i++){
//   let even = i * 2;
//   console.log(even);
// }

// for(let i = 0; i < 100; i++){
//   let even = i % 2 == 0;
//   if(even){ console.log(i) };
// }

// for(let i = 0; i < 100; i++){
//   let even = i % 2 == 0;
//   if(!even){ continue; };
//   console.log(i);
// }

// 1부터 100까지 홀수만 출력
// for(let i = 0; i < 100; i++){
//   let even = i % 2 == 0;
//   if(even){ continue; };
//   console.log(i);
// }

// 0~10까지 5만 빼고 출력
// for(let i = 0; i < 10; i++){
//   let target = i == 5;
//   if(target){ continue; }
//   console.log(i)
// }

// 실버
// 1~10까지 모든 합 출력
// let result = 0;
// for(let i = 0; i < 10; i++){
//   result += i + 1;
// }
// console.log(result);

// 골드
// 1~n까지 합의 출력
let input = 20;
let result2 = 0;
for(let i = 0; i < input; i++){
  result2 += i + 1;
}
console.log(result2)

// 012340123401234 출력
// 1~10까지 짝수면 짝수입니다, 홀수면 홀수입니다. 출력
// ex) 1는 홀수입니다.
// ex) 2는 짝수입니다.
// ...

// 100 ~ 1까지 출력
// 1~10까지 5부터는 +2를 시켜서 출력
