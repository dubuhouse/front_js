// https://jsonplaceholder.typicode.com/users
// 1. 데이터 요청해서 콘솔에 users 출력하기
// 2. users에 name만 콘솔에 출력하기
// 시간 15분

// console.log(fetch("https://jsonplaceholder.typicode.com/users"))
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((result) => console.log(result))

// // 이상 1번

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//     if(!response.ok){
//         throw new Error(`response Error : ${response.status}`)
//     }
//     // .json() response 객체를 -> object객체로 바꿔서 데이터를 리턴해주는 메서드
//     return response.json();
// })
// // .then((result) => {console.log(result)})
// // .catch((error)=>{
// //     console.error(error)
// // })
// .then((result) => result.map((album) => album.name))
// .then((names) => console.log(names))
// .catch((error)=>{
//     console.error(error)
// })

// 이상 내가 쓴건데 더 간단하게 하셨네...

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((result) => result.map(({name}) => name))  // 이부분이 "비구조할당!"
.then((names) => console.log(names))
.catch((error)=>console.error(error))




// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((result) => result.map((album) => album.name))
// .then((names) => console.log(names))
// .catch((error)=>console.error(error))
