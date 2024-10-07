// .indexOf() : 해당 문자의 index 번호를 리턴하는 메서드
// console.log("abcdef".indexOf("c"))

// .charAt() : 해당 인덱스의 값을 리턴하는 메서드
// console.log("abcdef".charAt(2))

// .length : 문자열의 길이
// let str1 = "abcd";
// console.log(str1.length)
// for(let i = 0; i < str1.length; i++){
//   console.log(i)
// }

// 실습 30분

// 브론즈
// 어떤 값을 받으면 값을 출력해주는 함수
// const print = (value) => {
//   console.log(value);
// }

// print("안녕하세요.");
// print(20);

// 3개의 정수를 받아서 3개 모두 빼주는 함수
// const subtract = (num1, num2, num3) => {
//   return num1 - num2 - num3;
// }

// let result = subtract(10, 20, 30);
// console.log(result)


// 실버
// 홍길동을 n번 출력해주는 함수
// const printByHong = (num) => {
//   let hong = "홍길동";
//   for(let i = 0; i < num; i++){
//     console.log(hong);
//   }
// }

// printByHong(2)



// 골드
// 1~n까지 홀수만 출력해주는 함수
// const printOdd = (num) => {
//   for(let i = 0; i < num; i++){
//     let odd = i % 2 == 1;
//     if(odd) { console.log(i) };
//     // let even = i % 2 == 0;
//     // if(even) { continue };
//     // console.log(i)
//   }
// }
// printOdd(10);


// 문자열을 입력받고 원하는 문자의 개수를 구해주는 함수

// 문자열을 받는다 (매개변수)
// 문자도 받는다 (매개변수)
// 함수 정의한다
// 문자열의 길이 .length를 이용해서 반복문을 돌린다.
// charAt()을 사용한다.
// 문자랑 비교한다
// 같으면 개수를 센다
// 값을 리턴한다.

// ex) getCount("abcabc", "a") -> return 2
// const getCountCharacterInContent = (content, char) => {
//     let count = 0;
//     for(let i = 0; i < content.length; i++){
//       if(content.charAt(i) == char){
//         count++;
//       }
//     }
//     return count;
// }

// let count = getCountCharacterInContent("abcabcabcabc", "a");
// console.log(count)

// 플레티넘
// 한글을 정수로 바꿔주는 함수 (일공이사 -> 1024)

// 공일이삼
// const changeToInt = (hangle) => {
//   let hangles = "공일이삼사오육칠팔구";
//   let result = "";
//   for(let i = 0; i < hangle.length; i++){
  //     result += hangles.indexOf(hangle.charAt(i));
  //   }
  //   return result;
  // }
  // let result = changeToInt("공삼육칠");
  // console.log(result);
  
  
  // 정수를 한글로 바꿔주는 함수 ("1024" -> 일공이사)
  // "1026"
  const changeToHangle = (number) => {
    let hangles = "공일이삼사오육칠팔구";
    let result = "";
    for(let i = 0; i < number.length; i++){
      result += hangles.charAt(number.charAt(i));
    }
    return result;
  }

  let result = changeToHangle("2557");
  console.log(result);


















