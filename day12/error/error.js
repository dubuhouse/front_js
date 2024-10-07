// 오류 또는 예외, 그리고 에러
// 컴파일 오류
// 빌드 오류
// 런타임 오류

// try {
//     console.log(number)
//     let number =++ 10;
// } catch (error) {
//     // name, message, stack
//     console.log(error.name)
//     // instanceof 앞에 있는 객체와 타입을 비교한다
//     // 객체 instanceof 타입
//     // 런타임 오류만 잡을 수 있다.
//     if(error instanceof ReferenceError()){
//         console.log("객체의 레퍼런스 오류가 밣생했어요!")
//     }else if(error instanceof SyntaxError)
//         // SyntaxError
//         // 자바스크립트 엔진이 해석할 수 없는 오류같은 경우 동작하지 않는다.
//         console.log("문법적인 오류가 발생했어요!")
    
    // try{
    //     // 몇 초 뒤에 실행하는 함수
    //     // setTimeout(콜백함수, 초(1000))
    //     setTimeout(() => {
    //         console.log(a)
    //         let a = 100;
    //     }, 2000)
    
    // } catch (error) {
    //     if(error instanceof ReferenceError){
    //         console.log("레퍼런스 오류 발생!")
    //     }
    
    // } finally {
    //     console.log("무조건 한 번 실행!")
    // }
    // 이상 코드 문제는.. "비동기 에러" 를 try/catch 문이 못잡기때문이라고함

setTimeout(()=>{
    try{
        // 몇 초 뒤에 실행하는 함수
        // setTimeout(콜백함수, 초(1000))
        setTimeout(() => {
            console.log(a)
            let a = 100;
        }, 2000)
    
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log("레퍼런스 오류 발생!")
        }
    
    } finally {
        console.log("무조건 한 번 실행!")
    }
})
