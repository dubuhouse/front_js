const file = require("fs");

const user = new Object();
user.name = "김은중";
user.email = "dubuhouse";
user.password = "1234";

const userJSON = JSON.stringify(user);

console.log(user);
console.log(userJSON);

// file.write("경로","내용", "인코딩방식", "콜백함수")
// file.writeFile("user.json", userJSON, "utf-8", (err, content)=>{
//     if(err){
//         console.error(err)
//     }else{
//         console.log("출력 성공")
//     }
// })

let user2;
// file.readFile("경로", "인코딩", "콜백함수")
// file.readFile("user.JSON", "utf-8", (err, content) => {
//     user2 = JSON.parse(content);
// })

// console.log(user2); // 이렇게하니 undefined 가 나온다

user2 = JSON.parse(file.readFileSync("user.json", "utf-8")); // sync 는 동기화.. async 는 비동기..

console.log(user2);