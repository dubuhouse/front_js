// 배열을 생성하는 방법
const array1 = [10, 20, 30, 40, 50, 60];
console.log(array1[4])
const array2 = new Array();
const array3 = new Array(10).fill(false); // 길이를 알고 있을 때
const array4 = Array.of("1", "2", "3")

// console.log(array2)
// console.log(array3)
// console.log(array4)

// 길이를 확인
// console.log(array3.length)

// .split(), string 
// 전달된 매개변수를 기준으로 잘라서 배열로 리턴한다.
// 아무것도 전달하지 않으면 모두 자른다.
// const phone = "010-9999-5555";
// let array5 = phone.split("-");
// console.log(array5)

// .join() , array
// let phoneNumber = array5.join("-");
// console.log(phoneNumber)

// .replace(바꾸고 싶은 값, 바뀌는 값) , string
// .replaceAll(바꾸고 싶은 값, 바뀌는 값) , string
// 제일 먼저 만나는 값을 변경한다.
// const result = phone.replaceAll("9", "*");
// console.log(result);

// 추가
// .push(), array
// 기존에 배열에 값을 마지막 추가한다.
// const arr1 = ["김세환", "홍길동", "장보고"];
// arr1.push("김철수");
// arr1.push("흰둥이", "짱구");
// console.log(arr1)

// .concat(), array
// 2개의 배열을 합쳐서 *새로운 배열*로 리턴한다.
// const arr2 = ["기서", "병욱"];
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// .unshift(), array
// 맨 앞에 값을 추가하는 메서드
// arr3.unshift("김영희")
// console.log(arr3)

// 제거
// .pop(), array
// 맨 마지막의 요소를 추출, 마지막 값을 리턴
// console.log(arr3.pop())
// console.log(arr3)

// .shift(), array
// 맨 앞의 요소를 추출, 맨 앞의 값을 리턴
// console.log(arr3.shift())
// console.log(arr3)

// .slice(startIndex, endIndex), array
// 단 매개변수를 1개 전달하면 startIndex부터 끝까지 가져온다.
// 얕은 복사, 새로운 배열로 리턴한다.

// endIndex 전까지
// console.log(arr3.slice(2, 5));
// console.log(arr3.slice(4));
// console.log(arr3.slice(-2));
// console.log(arr3.slice(-4, -1));
// console.log(arr3)

// .splice(startIndex, deleteCount, addItems), array
// const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr4.splice(2, 3));
// console.log(arr4.splice(3, 0, 10))
// console.log(arr4.splice(4, 1, 50))
// console.log(arr4)

// 정렬
// .sort()
// 무작위로 들어간 데이터 값을 정렬하는 함수
// const arr5 = [150, 100, 20, 30, 500, 10, 200, 30, 70, 80];
// console.log(arr5.sort((a, b) => a - b))

// .reverse(), array
// console.log(arr5.sort((a, b) => a - b).reverse())


// ----------------------------------------------------------------------------
// 배열의 고차함수
// .forEach((data, i, array)=>{}), array
const arr6 = [10, 20, 30, 40, 50, 60, 70];
// arr6.forEach((data, i, array) => {
//   array[i] *= array[i]
// })

// .forEach()를 사용하여 기존 값을 제곱으로 변경하기
// i를 활용하여 iterable한 값에 접근할 수 있다.
// console.log(arr6)

// map(()=>{})
// 반복을 통해 값에 접근하고, 새로운 배열로 return한다.
// 반드시 return 값이 있어야한다.
// let result = arr6.map((data, i, datas) => {
//   return data + 10
// })

// let result = arr6.map((data, i, datas) => data + 10)
// console.log(result);

// .filter()
// 조건이 true인 값만 모아서 새로운 배열로 리턴한다.
// 반드시 리턴 값이 필요하다.

let result2 = arr6.filter((data, i, datas) => data % 4 == 0)
console.log(result2)




