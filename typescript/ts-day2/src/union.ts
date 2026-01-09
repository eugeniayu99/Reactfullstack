let union = 'HEllo type!';
//union = 1213;
// union = false; 문자열과 숫자형만 지정을 했기 때문에 논리형은 안된다.

// 배열에 문자열과 숫자만 허용을 할 수 있다.
// 튜플보다 좀 더 유연하게 설정할 수 있다.
let array: (string|number)[] = ['Apple',1,2,'Banana',3,'Mango'];
let arr: Array<string | number> = ['Apple', 1, 2, 'Banana', 'Mango', 3];

//주의할 점
type Person = {
  name: string;
  age: number;
}

type Developer = {
  name: string;
  skill: string;
}