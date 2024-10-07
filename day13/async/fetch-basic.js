// https://jsonplaceholder.typicode.com/posts

// fetch(backendUrl, option)  --> option 은 node 때 좀더 자세하게 알려드리겠다.
// get 요청
// fetch(backendUrl) -> 이렇게 요청하면 get 요청이된다

// console.log(fetch("https://jsonplaceholder.typicode.com/posts"))
// fetch("https://jsonplaceholder.typicode.com/posts")
//     // .then((response) => console.log(response))
//     .then((response) => response.json())
//     .then((result) => console.log(result))
//     // 이상은 '데이터'를 가져오는 '비동기' 코드이다!

    // https://jsonplaceholder.typicode.com/albums
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => {
            if(!response.ok){
                throw new Error(`response Error : ${response.status}`)
            }
            // .json() response 객체를 -> object객체로 바꿔서 데이터를 리턴해주는 메서드
            return response.json();
        })
        // .then((result) => {console.log(result)})
        // .catch((error)=>{
        //     console.error(error)
        // })
        .then((result) => result.map((album) => album.title))
        .then((titles) => console.log(titles))
        .catch((error)=>{
            console.error(error)
        })