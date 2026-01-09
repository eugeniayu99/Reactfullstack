"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "홍길동",
    age: 5,
    boo: () => console.log("this is boo"),
};
// 객체의 타입을 인터페이스로 지정할 떄 타입을 꼭 지켜야 한다.
// 인터페이스에 정의되지 않은 속성은 추가할 수 없다.
// 매개변수에서 인터페이스를 타입으로 받는다.
function booboo(a) {
    console.log(`${a.name} is ${a.age} years old`);
}
;
booboo(person); // da is 5 years old
person.boo(); // this is boo
const worker1 = {
    name: "홍길동",
    age: 35,
    job: "developer",
};
// job 속성이 없어도 유효하다.
const worker2 = {
    name: "김민수",
    age: 28,
};
const appConfig = {
    API_KEY: "secret-key-123",
    SERVER_URL: "http://localhost:8080"
};
//인터페이스로 객체를 처음 선언하여 값을 대입할때는 문제가 없다. 
//그러나 그후에 따로 프로퍼티에 접근해서 수정하려고 하면 오류가 나게 된다.
// appConfig.API_KEY = "new-key"; // Error: Cannot assign to 'API_KEY' because it is a read-only property.
appConfig.SERVER_URL = "http://production:3000"; // OK
//# sourceMappingURL=index.js.map