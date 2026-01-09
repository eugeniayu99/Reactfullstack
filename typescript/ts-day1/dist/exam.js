"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1.
let mathScore = 85;
let englishScore = 92;
let mathSscienceScore = 78;
let totalScore = mathScore + englishScore + mathSscienceScore;
let averageScore = totalScore / 3;
console.log(`총점 : ${totalScore}`);
console.log(`평균 : ${averageScore}`);
// 2.
let userName = "김김김";
let userAge = 30;
let isAdult = userAge >= 20;
let welcomeMessage = `환영합니다, ${userName}님! 당신은 올해 ${userAge}살입니다.`;
console.log(welcomeMessage);
console.log(`성인 여부 : ${isAdult}`);
// 3.
function calculateArea(width, height) {
    const area = width * height;
    return `면적은 ${area}입니다. (너비 : ${width}, 높이 : ${height})`;
}
let resultString = calculateArea(15, 10);
console.log(resultString);
// 4.
let projectNames = ["팀 A 프로젝트", "팀 B 프로젝트", "팀 C 프로젝트"];
let userRecord = [202401, "김민수", true];
let secondProject = projectNames[1];
let recordName = userRecord[1];
console.log(`두 번째 프로젝트: ${secondProject}`);
console.log(`기록된 사용자 이름: ${recordName}`);
//# sourceMappingURL=exam.js.map