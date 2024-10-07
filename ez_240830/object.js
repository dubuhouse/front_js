// let user = {
//   name : "김세환",
//   age : 20,
//   height : 200,
//   mbti : "enfj"
// };

// // console.log(user["mbti"]);

// const post = {
//   id : 1,
//   title : "오늘은 즐거운 금요일 또 공부중!",
//   content : "자바스크립트 객체 연습하면서 공부하는 프론트엔드",
//   name : "홍길동"
// }

// post.title = "와 불금엔 치킨";
// console.log(post.title);

// 의문. const 인데 왜 바뀌지?
// 자바스크립트는 싱글쓰레드..언어.. 쓰레드는 일꾼.. 
// const 는 주소값을 참조하므로 주소값이 바뀌지 않으면 된다.  주소값이 바뀌면 오류남
// 나중에 얕은복사 깊은복사 설명할때 좀더 설명해드리겠다




// // user.money = 20000;
// // user.name = "홍길동"
// // console.log(user.money)
// // console.log(user.name)

// // let user2 = new Object(); // {}










// 24.9.7 복습
//
// 변수를 여러개 담고싶을때.. "객체"와 "배열". 이중에 "객체"를 먼저배워보자
// 자바스크립트를 이루고있는 것들은 모두 객체이다. 아주 중요
// 객체가 뭐야? 객체는.. 상태와 행위를 갖고 있는 것들을 모두 객체라고함
// 고양이라는 객체를 만들어보겠다.. 털(상태), 다리(상태), 꼬리(상태), 할퀴기(행위), 자기(행위) 등등..
// 선풍기  객체,, 날개..모터,,버튼,,강약중,,회전...등..
// 이 객체를 자바스크립트에서는 오브젝트 라고 한다
// 선풍기라는 오브젝트를 만든것
// 오브젝트가 갖고있는 하나하나 값들 이런거를 "프로퍼티" 라고 한다
// 날개는 3개, 강약중 은 메서드로 정의, 회전은 함수로 정의, 버튼도 함수로 정의한 기능 등
// 이런 여러가지 ㅇㅇ 를 저장할수 있는 자료구조로 오브젝트를 사용
// 객체 안의 key 는 value 를 가져오기 위한 이름표 같은 걸로 이해하시면된다

// 객체(object)란?
// 자료를 저장하고 처리하는 데이터의 기본 단위이다.
// 추상화하여 상태와 행위를 가지는 것이 객체이다.
// 자바스크립트는 객체 기반의 스크립트 언어이며, 자바스크립트를 이루고 있는 모든 것이라고 해도 무방하다.
// 원시 타입 외에 데이터 타입은 모두 object 이다.

// 자바스크립트는 key와 value 값으로 구성된 속성들의 집합니다.
// key : 집합에서 특정한 값을 찾기 위해 다른 값들과 비교되는 값, 키는 중복이 있을 수 없다.
// value : 키로 이름을 구별하고 해당 키 값으로 구성되어 있다. (키와 값 한 쌍)
// 1. 객체의 생성
// let user = new Object() // "객체 생성자" 문법 : 프로토타입??
// let user = {} // "객체 리터럴" 문법

// 2. 객체의 접근 방법
// 1) 마침표 표기법
//     - img.src
// 2) 대괄호 표기법
//     - img["keyName"]

// 자바스크립트는 싱글쓰레드의 싱글 컨커런트 언어이다. 이는 동시에 하나의 작업이나
// 하나의 코드 조각만 실행할 수 잇는 것을 의미한다. 하나의 콜 스택을 가지며, 스택은
// 힙, 큐와 함께 V8엔진 내부에서 실행하는 자바스크립트 동시성 모델을 구성한다.
// 1. 콜스택(call stack)
// - 콜스택은 힙에 저장된 개체의 주소값을 저장한다.
// 2. 힙(memory heap)
// - 객체는 힙, 즉 대부분의 구조화되지 않는 메모리 영역에 할당된다.
// 변수와 객에체 대한 모든 메모리 할당은 여기에서 발생한다.

// 3. 원시 데이터의 값
// - 값: 원시 타입 값 자체는 callstack에 저장된다.
// - 변수 : 변수는 값이 저장된 call stack의 메모리의 주소를 참조한다.
// 4. 참조 데이터 값
// - 값 : 참조 타입(객체, 배열, 함수, ...)은 memory heap에 저장된다.
// 참조 값 : memory heap의 주소를 call stack에 저장한다.
// 변수 : 변수는 memory heap 주소가 저장된 call stack 메모리의 주소를 참조한다.
// let 과 const의 사용
// - let의 변경은 값의 변경이 아닌 메모리 주소의 변경(즉 재할당)이 가능함을 의미하므로
// 변수를 담고있는 객체의 주소값이 바뀌면 모든 값을 소실할 위험이 있다. 따라서
// let 사용을 지양한다.
// - let myObject = {} // bad
// - const myObject = {}; // good!

const products = {
  prudoct1 : "지우개",
  prudoct2 : "키보드",
  prudoct3 : "마우스",
  prudoct4 : "연필",
  prudoct5 : "공책",
  prudoct6 : "노트",
} // 객체는 순서가없다..근데 키값은 순서가있다? 규칙성있을때 반복문사용가능..

// 향상된 for, 빠른 for문, for in, for of 등으로 부른다
// 객체나 배열에서 사용가능함
// 프로덕트에 있는 값들을 위에서부터 순서대로 접근해서 i값에 넣음
// for(let i in products){
//   console.log(i)
// } 
// 이렇게하면 '인덱스'를 불러온다.
// 대괄호 접근법????

// for(let i in products){
//   console.log(products[i])
// }

const users = {
  user1 : {
    name : "홍길동",
    age : 20,
    point : 3000
  },
  user2 : {
    name : "이순신",
    age : 30,
    point : 5000
  },
  user3 : {
    name : "장보고",
    age : 25,
    point : 10000
  },
}

// console.log(user.user1.point);

// console.log(user.user1[point]);

// for(let i in users){
//   console.log(i)
// }

// for(let i in users){
//   console.log(users[i].point)
// }
// let sum = 0;
// for(let i in users){
//   sum += users[i].point;
// }
// console.log(sum);

// function calc(num1, num2){
//   let sum = num1 + num2;
//   let subtract = num1 - num2;
//   let mul = num1 * num2;
//   let divide = num1 / num2;
//   return {
//     sum : sum,
//     add : 
//   }
// }




// 빠른 for문을 이용하여 모든 유저의 point를 누적한 결과를 출력하기

// for (let i in user1){
//   console.log(user1[i])
// } 흠 안되네

// console.log(user.user1.point);

// let sum = 0;
// for (let i in user) {
//   sum = sum + this.point;
// }
// console.log(sum);


const user1 = {name : "홍길동"};
const user2 = {name : "이순신"};
const user3 = {name : "장보고"};
const user4 = {name : "김철수"};
const user5 = {name : "김영희"};
const user6 = {name : "흰둥이"};

// 이런 반복되는 객체들 만들때 '프로토타입'을 이용한다

// 프로토타입(Prototype)
// 객체 생성자 함수에 의해 생성되는 객체들이 공유하는 속성과 메소드를 저장하는 특수한 객체

// this
// 프로퍼티에 접근한 객체가 누구인지 알아야 해당 필드에 접근할 수 있다.
// 이 때 접근한 객체가 가지고 있는 할당된 필드의 주소값을 this라는 변수에 자동으로 담긴다.


function User(name){
  this.name = name;
}

// const user7 = new User("홍길동");
// console.log(user7);

const user7 = new User("홍길동");
const user8 = new User("이순신");
console.log(user7);
console.log(user8);