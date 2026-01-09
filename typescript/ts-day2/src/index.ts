// 인터페이스
interface Human{
    //객체를 생성할 때 필요한 속성이나, 메서드의 "타입"을 정의한다.
    name : string;
    age : number;
    boo() : void; // boo함수는 반환타입이 void임
}

const person : Human = {
    name : "홍길동",
    age : 5,
    boo : () => console.log("this is boo"),
}
// 객체의 타입을 인터페이스로 지정할 떄 타입을 꼭 지켜야 한다.
// 인터페이스에 정의되지 않은 속성은 추가할 수 없다.

// 매개변수에서 인터페이스를 타입으로 받는다.
function booboo(a: Human): void {
  console.log(`${a.name} is ${a.age} years old`);
};

booboo(person); // da is 5 years old
person.boo(); // this is boo

// 선택적 속성(Optional Properties)
// 객체에 특정 속성이 있을 수도 있고 없을 수도 있을 때는 속성명 뒤에 ?를 붙여 선택적 속성으로 만들 수 있다.
interface personWithJob{
    name : string;
    age : number;
    job ?:string;
}

const worker1 : personWithJob = {
    name : "홍길동",
    age : 35,
    job : "developer",
} 
// job 속성이 없어도 유효하다.
const worker2 : personWithJob = {
    name : "김민수",
    age : 28,
} 

// 읽기 전용 속성(ReadOnly Properties)
// 인터페이스로 객체를 처음 생성할 때만 값을 할당하고, 그 이후에는 변경할 수 없는 속성을 의미한다.

interface Config{
    readonly API_KEY : string;
    SERVER_URL : string;
}

const appConfig: Config = {
    API_KEY: "secret-key-123",
    SERVER_URL: "http://localhost:8080"
}
//인터페이스로 객체를 처음 선언하여 값을 대입할때는 문제가 없다. 
//그러나 그후에 따로 프로퍼티에 접근해서 수정하려고 하면 오류가 나게 된다.
// appConfig.API_KEY = "new-key"; // Error: Cannot assign to 'API_KEY' because it is a read-only property.
appConfig.SERVER_URL = "http://production:3000"; // OK

