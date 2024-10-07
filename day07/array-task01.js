// 35분
// 1) 1~10까지 Array객체에 담은 후 짝수만 출력하기
// const datas = new Array(10).fill(0);
// const result = datas.map((data, i) => i + 1).filter((data) => data % 2 == 0);
// result.forEach((data) => { console.log(data) });

// 2) 한글을 숫자로
// ex) "일이삼사" -> "1234"
// const hangles = "공일이삼사오육칠팔구";
// .indexOf
// const input = "일칠팔오";
// console.log(hangles.indexOf("일"))
// let result = input.split("").map((data) => hangles.indexOf(data)).join("")
// console.log(result)

// 3)숫자를 한글로
// ex) "1234" -> "일이삼사"
// const hangles = "공일이삼사오육칠팔구";
// const input = "1576";

// console.log(hangles.charAt(input))
// let result2 = input.split("").map((data) => hangles.charAt(data)).join("");
// console.log(result2);

// 4) 1~100까지 합을 출력
// 100칸짜리 배열을 만든다.
// const arr1 = new Array(100).fill(0);
// let result = 0;
// arr1.map((data, i) => i + 1).forEach((data) => result += data);
// console.log(result);

// 5) 문자열을 반대로 출력하기 .reverse()
// "apple"
// let result3 = "apple".split("").reverse().join("");
// console.log(result3)


// 6) 전화번호를 파라미터로 받아서 파싱하기
// ex) 010-1111-4455
// result) 010-****-4455

const phone = "010-1111-4455";
let parsePhone = phone.split("-");
parsePhone[1] = "****";
console.log(parsePhone.join("-"));

let parsePhone2 = phone.replaceAll("1", "*").replace("*", "1");
console.log(parsePhone2)




