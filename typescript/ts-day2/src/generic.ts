//function add(x: string|number, y:string|number): string|number{
//    return x + y;
//}

//add(1,2);
//add('hello','world');

// 의도한대로 값을 넣어서 실행이 잘 되면 좋지만, x와 y에 다른타입을 넣게 되면 의도하지 않은대로 실행대서 컴파일러가 에러를 일으킨다.

interface Add{
    (x:string, y:string) :string;
    (x:number, y:number) : number;
}

// 제네릭의 사용
function add<T>(x:T, y:T): T{
    return x + y;
}

// 1. 제네릭 함수 타입 구조를 정의하는 인터페이스
interface GenericIdentityFn {
		// <T> : 'T'는 타입 변수(Type Variable)로, 함수가 호출될 때 구체적인 타입(예: number, string)으로 결정됩니다.
   // (arg: T): T : 'T' 타입의 인자(arg)를 받고, 반환 타입도 동일한 'T' 타입임을 명시합니다.
   // 이 시그니처는 "어떤 타입을 받든, 그 타입을 그대로 반환하는 함수"라는 규격을 정의합니다.
   <T>(arg: T): T; // 제네릭 함수 타입 구조
}

// 2. GenericIdentityFn 인터페이스의 규격을 만족하는 실제 제네릭 함수 구현
function identity<T>(arg: T): T {
		// <T> : 함수 이름 바로 뒤에 타입 변수를 선언합니다.
   // (arg: T): T : 함수 시그니처는 위 인터페이스의 규격과 일치합니다.
   return arg;
}

// 3. 변수 myIdentity에 타입과 값 할당
// myIdentity 변수의 타입을 위에서 정의한 GenericIdentityFn 인터페이스로 지정합니다.
// 이로써 myIdentity는 '어떤 타입을 받아 그대로 반환하는 제네릭 함수'라는 규격을 강제받습니다.
let myIdentity: GenericIdentityFn = identity;

// 4. 함수 호출 (명시적 타입 인자 전달)
// myIdentity는 제네릭 함수이므로, <number>를 명시하여 T를 number로 확정합니다.
// 함수는 number 인자(100)를 받고 number를 반환합니다.
myIdentity<number>(100);

// 5. 함수 호출 (다른 타입 인자 전달)
// <string>을 명시하여 T를 string으로 확정합니다.
// 함수는 string 인자('100')를 받고 string을 반환합니다.
myIdentity<string>('100');