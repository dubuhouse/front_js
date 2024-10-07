// 옵셔널 체이닝(Optional chaining)
const movie = {
    name : "오펜하이머",
    detail : {
        price : "50000",
        date : "20240920"
    }
}

const movie2 = {
    name : "마블",
    detail : {
        price : "100000"
    }
}

function printMoviePrice(movie){
    console.log(movie.detail.price)
}

printMoviePrice(movie)
printMoviePrice(movie2)

function printMovieDate(movie){
   return movie?.detail?.date; // 지금은 이부분 학습할 환경이 안된다고함. 나중에 다시..
}

console.log(printMovieDate(movie))
console.log(printMovieDate(movie2))