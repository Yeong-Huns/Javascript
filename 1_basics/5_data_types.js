/**
 * fileName       : 5_data_types
 * author         : Yeong-Huns
 * date           : 2024-09-25
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-25        Yeong-Huns       최초 생성
 */

/*
Data Types
여섯개의 Primitive Type 과
한개의 오브젝트 타입이있다.
1. Number (숫자)
2. String (문자열)
3. Boolean (불리언)
4. undefined (언디파인드)
5. null (널)
6. Symbol(심볼)
7. Object (객체)
	Function
	Array
	Object..
 */
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age); //number
console.log(typeof tempature); //number
console.log(typeof pi); //number

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity); //number
console.log(typeof nInfinity); //number

// String 타입
const codeFactory = '코드팩토리';
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "'아이브 안유진'"
console.log(ive);
console.log(typeof ive);

// Template Literal
/*
1) newLine -> /n
2) tab -> /t
3) 백슬래시를 스트링으로 표현하고 싶다면 두번 입력하면 된다.
 */
const iveYuJin = '아이브안유진'
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);

const iveWonYoung2 = `아이브 
장원영`;
console.log(iveWonYoung2);

const groupName = '아이브';
console.log(groupName + " 안유진");
console.log(`${groupName} 안유진`);

/*
Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/*
Undefined
사용자가 직접 값을 초기화하지 않았을때 지정되는 값
직접 undefined 로 값을 초기화하는건 지양
*/
let noInit;
console.log(noInit);
console.log(typeof noInit);

/*
null 타입
undefined 와 마찬가지로 값이 없다는 뜻이나
JS 에서는 개발자가 명시적으로 없는 값으로 초기화할때 사용된다.
 */

let init = null;
console.log(init);
console.log(typeof init);

/*
Symbol 타입
유일무이한 값을 생성할때 사용
타른 프리미티브 값들과 다른게 Symbol 함수를 호출해서 사용
 */

const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);

/*
Object 타입

Map
키 :밸류의 쌍으로 이루어져있다.
key:value
 */

const dictionary = {
	red: '빨간색',
	Orange: '주황색',
	Yellow: '노란색',
}

console.log(dictionary);
console.log(dictionary.red);
console.log(dictionary["Orange"]);
console.log(dictionary["Yellow"]);

console.log(typeof dictionary);

/*
* Array
* 값을 리스트로 나열 할 수 있는 타입이다.
* */

const iveMembersArray = [
	'안유진',
	'가을',
	'레이',
	'장원영',
	'리즈',
	'이서'
];
console.log(iveMembersArray);

console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = '코드팩토리'
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/*
static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시를 한다 -> ex
dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다.
JS-> dynamic typing
 */
