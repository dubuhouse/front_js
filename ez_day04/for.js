// // 1부터 10까지 출력

// for ( let i = 0 ; i < 10 ; i++) {
//     console.log(i+1);
// }

// 1부터 10까지 출력하되 6은 빼고 출력

for ( let i = 0 ; i < 10 ; i++) {
    if ( i == 5 ) {
        continue;
    }
    console.log(i+1);
}