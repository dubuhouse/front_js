// async await 문법으로 
// https://jsonplaceholder.typicode.com/todos
// getTitles
// todos에서 title만 5개 가져오기 (0~4)
// 값으로 가져와서 가져온 데이터를 "제목 : title" 내용으로 변경하여 출력하기
// 20분

// const getTitles = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const datas = await response.json();
//     return datas;
// }

// const titles = getTitles().then((result) => result.map((todos)=>todos.title));
// console.log(titles)
// 이상 내 코드 . 작동안함 ㅠ 

const getTitles = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if(!response.ok) return;
    const datas = await response.json();
    return datas
};

// getTitles().then((datas) => console.log(datas)) => datas 가 어떻게 생겼는지 보기위해..
const titles = getTitles().then((datas) => datas.map((todo) => todo.title));
titles
    .then((titles) => titles.slice(0,5))
    // .then(console.log) ==> 5개 잘 짤리는지 보기위해..
    .then((titles) => titles.map((title) => `제목 : ${title}`))
    .then((titles) => titles.forEach((title) => { console.log(title)}))
    .catch((error) => console.error(error))
    // 이상 어려운 분들 day07 의 array 메서드들 많이 써보시라.