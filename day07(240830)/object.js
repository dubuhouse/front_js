// let user = {
//   name : "김세환",
//   age : 20,
//   height : 200,
//   mbti : "enfj"
// };

// user.money = 20000;
// user.name = "홍길동"
// console.log(user.money)
// console.log(user.name)

// let user2 = new Object(); // {}

// console.log(user["mbti"])

// const post = {
//   id : 1,
//   title : "오늘은 즐거운 금요일 또 공부중!",
//   content : "자바스크립트 객체 연습하면서 공부하는 프론트엔드",
//   name : "홍길동"
// }

// post.title = "와 불금엔 치킨";
// console.log(post.title);

const products = {
  product1: "지우개",
  product2: "키보드",
  product3: "마우스",
  product4: "연필",
  product5: "공책",
  product6: "노트",
}

// 향상된 for, 빠른 for문, for in, for of
// for(let i in products){
//   console.log(products[i])
// }

// 빠른 for문을 이용하여 모든 유저의 point를 누적한 결과를 출력하기
// 10분
// const users = {
//   user1 : {
//     name : "홍길동",
//     age : 20,
//     point : 3000
//   },
//   user2 : {
//     name : "이순신",
//     age : 30,
//     point : 5000
//   },
//   user3 : {
//     name : "장보고",
//     age : 25,
//     point : 10000
//   },
// }

// let result = 0;
// for(let i in users){
//   result += users[i].point;
// }
// console.log(result);

const user1 = {name : "홍길동"};
const user2 = {name : "이순신"};
const user3 = {name : "장보고"};
const user4 = {name : "김철수"};
const user5 = {name : "김영희"};
const user6 = {name : "흰둥이"};

// 프로토타입(Prototype)
// 객체 생성자 함수에 의해 생성되는 객체들이 공유하는 속성과 메소드를 저장하는 특수한 객체
function User(name, age){
  this.name = name;
  this.age = age;
}

const user7 = new User("홍길동");
const user8 = new User("이순신");
console.log(user7)
console.log(user8)

User.prototype.hello = "안녕하세요";
console.log(user7.hello)
console.log(user8.hello)

















