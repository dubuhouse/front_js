// input
const inputs = document.querySelectorAll("input");
console.log(inputs);

// font-size를 25px로 키우기
// border의 스타일을 변경하기, solid 2px green
// width 200px
// height 40px

// 단, inputs[0] -> 방번호로 들고오지 않는다
// inputs 반복문을 사용해서 변경하기

inputs.forEach((input)=>{
    input.style.fontSize = "25px";
    input.style.border = "solid 2px green";
    input.style.Width = "200px";
    input.style.height = "40px";

    input.addEventListener("blur", (e)=>{
        console.log(e.target.value)
    })
})

button.addEventListener("click", () => {
    inputs.forEach((input) => {
        console.log(input.value)
    })
})