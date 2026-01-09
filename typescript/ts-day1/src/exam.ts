// 1.
let mathScore : number = 85;
let englishScore : number = 92;
let mathSscienceScore : number = 78;

let totalScore : number = mathScore + englishScore + mathSscienceScore;
let averageScore : number = totalScore / 3;

console.log(`총점 : ${totalScore}`);
console.log(`평균 : ${averageScore}`);

// 2.
let userName : string = "김김김";
let userAge : number = 30;
let isAdult : boolean = userAge >= 20;

let welcomeMessage : string = `환영합니다, ${userName}님! 당신은 올해 ${userAge}살입니다.`

console.log(welcomeMessage);
console.log(`성인 여부 : ${isAdult}`);

// 3.
function calculateArea(width: number, height: number): string {
    const area: number = width * height;
    return `면적은 ${area}입니다. (너비 : ${width}, 높이 : ${height})`;
}

let resultString : string = calculateArea(15,10);
console.log(resultString);

// 4.
let projectNames: string[] = ["팀 A 프로젝트", "팀 B 프로젝트", "팀 C 프로젝트"];
let userRecord : [number, string, boolean] = [202401, "김민수", true ];
let secondProject : string[] = projectNames[1];
let recordName: string = userRecord[1];

console.log(`두 번째 프로젝트: ${secondProject}`);
console.log(`기록된 사용자 이름: ${recordName}`);