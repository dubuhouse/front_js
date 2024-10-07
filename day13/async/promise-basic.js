const promise = new Promise((resolve, reject) => {
    // let check = true;
    let check = false;
    if(check){
        resolve("결과 성공!")
    }else{
        reject("결과 실패!")
    }
})

promise.then((result) => {console.log(result)}).catch((error) => {console.error(error)});