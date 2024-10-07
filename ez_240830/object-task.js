// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1) 
// 이름 : 홍길동
// 나이 : 30
// 포인트 : 3500

// 2) 
// 이름 : 이순신
// 나이 : 22
// 포인트 : 0

// 3) 
// 이름 : 장보고
// 나이 : 66
// 포인트 : 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.
// 유저의 이름만 모두 출력한다.
// 유저의 포인트를 모두 출력한다.

// function Users(name,age,point) {
//     this.name = name;
//     this.age = age;
//     this.point = point;
// }



// const mart = {
// user1 : new Users("홍길동",30,3500),
// user2 : new Users("이순신",22,0),
// user3 : new Users("장보고",66,9500)
// }

// for (i in mart) {
// console.log(i)
// }

// function Users(name,age,point) {
//     this.name = name;
//     this.age = age;
//     this.point = point;
// }

// const user1 = new Users("홍길동",30,3500);
// const user2 = new Users("이순신",22,0);
// const user3 = new Users("장보고",66,9500);

// const mart = { user1 , user2 , user3 };

// for(i in mart){
// console.log(mart[i].name)
// console.log(mart[i].point)
// }
// // 이상 나의 답안

// User.prototype.hello = "안녕하세요";
// console.log(user7.hello);
// console.log(user7.hello);

function User(name, age, point){
    this.name = name;
    this.age = age;
    this.point = point;
}

const market = new Object(); // === {}
const user1 = new User("홍길동",30,3500);
const user2 = new User("이순신",22,0);
const user3 = new User("장보고",66,9500);

market.user1 = user1;
market.user2 = user2;
market.user3 = user3;

// console.log(user1)
// console.log(user2)
// console.log(user3)

// for(let i = 0 ; i < 3 ; i++){
//     console.log(market[`user${i+1}`].name)
// }

for(let i in market){
    console.log(market[i].point)
}

