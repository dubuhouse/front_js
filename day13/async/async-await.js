// async awit (ES8)
// const getUsers = () => {
//     const response = fetch("https://jsonplaceholder.typicode.com/users");
//     const datas = response.json();
//     return datas;
// }

// console.log(getUsers()) // 이렇게하면 오류남. 당연하다. 비동기를 동기로 불러올수없으므로.

const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const datas = await response.json();
    return datas;
}

getUsers().then((result) => console.log(result))
