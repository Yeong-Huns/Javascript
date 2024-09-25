/**
 * fileName       : 11_coercion
 * author         : Yeong-Huns
 * date           : 2024-09-26
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-26        Yeong-Huns       최초 생성
 */

/*
타입 변환
Type Conversion

1) 명시적
2) 암묵적
 */

let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

let test = age + '';
console.log(typeof test, test); // 숫자에 문자를 더하면 그냥 문자가 되어버림...

console.log('98' + 2); // 문자가 되어버림
console.log('98' + '2'); // 문자열로 하려면 이렇게 하는게 권장
console.log('98' * 2); // 숫자가 되어버림
console.log('98' - 2); // 숫자가 되어버림

/*
명시적 변환 몇가지 더 배우기
 */

console.log('------------------------');

console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log('------------------------');
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');

/*
Boolean 타입으로의 변환
 */
console.log('------------------------');
console.log(!'x');
console.log(!!'x');

console.log(!!'');

console.log(!!0);
console.log(!!'0');
console.log(!!'false');
console.log('------------------------');
console.log(!!false);
console.log(!!undefined);
console.log(!!null);

console.log('------------------------');
console.log(!!{});
console.log(!![]);

/*
1. 아무 글자도 없는 String
2. 값이 없는 경우 ex) null, undefined
3. 0
모두 false 반환
 */