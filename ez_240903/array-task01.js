// 35분
// 1) 1~10까지 Array객체에 담은 후 짝수만 출력하기

// const arr1 = [1,2,3,4,5,6,7,8,9,10];
// arr1.forEach ((data, i, arr1) => {
//     if(arr1[i] % 2 == 0) {
//         console.log(arr1[i])
//     }
// })

// const datas = new Array(10).fill(0);
// // datas.map((data,i) => i+1) // 1부터 10까지의 배열
// const result = datas.map((data,i) => i+1).filter((data) => data % 2 == 0);
// result.forEach((data) => {
//     console.log(data)
// })


// 2) 한글을 숫자로
// ex) "일이삼사" -> "1234"
// ** indexOf 메서드를 사용!

// 음.. 인수를 한글을 넣으면 숫자로 바꿔주는 함수를 구현하자
// 인수 text를 배열로 바꿔서 배열변수로 저장하자
// string 의 몇번째 인덱스를 가져오는 .. 그런게 있어야할텐데?
// slice 를 이용하자. slice는 startIndex 에서 endIndex 앞글자까지 가져옴
// for문으로 연속해서 가져와서 가각의 배열에 입력

// let text = "일이삼사";
// let result = text.slice(0,1);
// console.log(result)

// 오키 해보자

// const text = "일이삼사";
// const sample = "공일이삼사오육칠팔구";
// const textArray = new Array(text.length).fill("0"); // 배열을 선언하자
// // for (i = 0 ; i < text.length ; i++) {
// //     textArray[i] = text.slice(i,i+1)
// // }
// // console.log(textArray)
// textArray.map((i)=>{return text.slice(i,i+1)})
// console.log(textArray)

// // 흠.. 스플릿? split("")? 이건또뭐야..

// const input = "일칠팔오";
// const hangle = "공일이삼사오육칠팔구";
// let inputArray = input.split(""); // 이렇게 쉽게 배열로 변했다..
// result = inputArray.map((data,i)=>hangle.indexOf(inputArray[i])).join("");

// console.log(result)








// 1) 텍스트를 배열로 만들고
// 2) 샘플텍스트도 배열로 만들고
// 3) 배열의 i번째 텍스트를 가지고 indexOf 메서드로 샘플텍스트의 몇번째인지 찾아서
// 4) 그 값을 새로운 배열의 [i]값으로 저장해서
// 5) 새로운 배열을 리턴
// 6) 이 과정을 map 함수로 돌려준다

// datas.map((data,i,datas) => {
//     console.log(sample.indexOf(data))
// });

// console.log(datas[1])





// --------------------------------------------------
// 이상 위에 다시 품!
// console.log(datas)

// for(i = 0 ; i < text.length ; i++) {
//     datas[i] = text.slice(i,i+1);
// console.log(datas)
// } ==> 이상 forEach나 map 을 안쓰고 기존 for문 활용

// let result = datas.map((data, i, datas)=> {
//     indexOf(text.slice(i,i+1))
// });
// console.log(result)
// 아우 안되겠다. 시간넘많이걸림.. 답보자 ㅠ




// for (i = 0 , i < 4, i++) {
//     let text1st = text.slice(i,i+1); // 배열의 첫번째 열에 ㅇㅇ를 담는다

// }; => 이상 오류나는 코드!

// function textToNumber (text) {
//     let textArray = 
// }

// result = textToNumber("일이삼사");
// console.log(result)


// 3)숫자를 한글로
// ex) "1234" -> "일이삼사"

// const input = "6577";
// const hangle = "공일이삼사오육칠팔구";

// let inputArray = input.split("");
// let result = inputArray.map((data,i,datas)=>{
//     return hangle.charAt(inputArray[i])
// }).join("");
// console.log(result)

// 휴.. 겨우 했다.

// 1~100까지 합을 출력
// 100칸짜리 배열을 만든다.

// const array = new Array(100);

// // console.log(array)

// array.map((data,i)=>{
//     return data+1;
//     data++
// });

// console.log(array)
// 아 모르겠다.. 답보자.

// const array = new Array(100).fill(0);

// arr1 = array.map((data,i)=>i+1);
// let result = 0;
// arr1.forEach((data,i)=>{result += data})
// console.log(result)

// let result = 0;
// array.map((data,i)=>i+1).forEach((data,i)=>{result += data})
// console.log(result)

// 1번. [1,2,3,4,... 100] 배열을 만든다
// 2번. 1번 배열의 각각의 값을 더하는 행위를 해서 result 로 저장한다
// 끝.








// 문자열을 반대로 출력하기 .reverse()
// "apple"

// const input = "apple";
// const inputArray = input.split("");
// let resultArray = inputArray.reverse();
// let result = resultArray.join("");
// console.log(result)



// 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1111-4455
// // result) 010-****-4455

// function phoneNumberParsing (phone) {
//     const phoneArray = phone.split("");  // 전화번호를 배열로 바꿈
//     phoneArray.splice(4,4,"****");
//     let resultArray2 = phoneArray.join("");
//     return resultArray2;
// }

// let result = phoneNumberParsing ("010-6737-6577");
// console.log(result)

// 대충완료
