const name = "김은중";
let korScore = 80;
let mathScore = 70;
let engScore = 90;
let sciScore = 20;

let cutLine = 60;
let pass = "합격";
let notPass = "불합격";

let totalScore = korScore + mathScore + engScore + sciScore ;
let averageScore = totalScore / 4;
let passingResult = averageScore >= cutLine ? pass : notPass ;
let result = `${name}님의 이번 총점은 ${totalScore
}, 평균은 ${averageScore}점으로 ${passingResult}입니다. `;

console.log(result);
