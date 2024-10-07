// array에 담아서
// array.js에 있는 메서드들을 모두 사용하기

// 1) 1~10까지 누적합 구하기
const arr1 = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// let result1 = 0;
// arr1.forEach((num) => { result1 += num });
// console.log(result1)

// 2) 1~50까지 짝수만 배열에 담고 배열 안에 값에 3을 곱한 값으로 변경 후 출력하기
// new Array(50).fill(0).map((data, i) => i + 1).filter((data) => data % 2 == 0).map((data) => data * 3).forEach((data) => {console.log(data)})

// 3) 초기값으로 10, 20, 30, 40, 50 값을 넣고 내림차순 정렬 후 출력하기
// Array.of(10, 20, 30, 40, 50).reverse().forEach((data) => {console.log(data)})

// 4) 1~10까지 배열에 담고 값이 5보다 크다면 값을 2배로 변경 후 원본 배열을 출력하기
// const arr2 = new Array(10).fill(0);
// const arr3 = arr2.map((data, i) => { return i + 1 }).map((data) => data > 5 ? data * 2 : data)
// console.log(arr3)

// 5) 1~30까지 배열에 담고 홀수 값들만 "*"를 붙여서 출력하기
// ex) let arrTask1 = 1*3*5*7*9...
const arr4 = new Array(30).fill(0);
const arr5 = arr4.map((data, i) => i + 1).filter(data => data % 2 == 1);

// 6) arrTask1에 들어간 값에 "*"을 제거한 후 배열에 담아 arrTask1의 기존의 값을 2배로 변경 후
// let arrTask1 = arr5.join("*").split("*");
// 모든 값을 출력하기
// arrTask1.map(data => data * 2).forEach((data) => { console.log(data) })

// 7) 1~20까지 배열에 담고 배열의 들어간 값 중 뒤에서 5개 값을 더한 후 출력
let result4 = 0;
const arr6 = new Array(20).fill(0).map((data, i) => i + 1).splice(-5, 5).forEach(data => {result4 += data});
console.log(result4)

