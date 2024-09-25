/**
 * fileName       : 7_operators
 * author         : Yeong-Huns
 * date           : 2024-09-25
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-25        Yeong-Huns       최초 생성
 */

/*
산술 연산자
1. 덧셈
2. 뺄셈
3. 곱셈
4. 나눗셈
5. 나머지
 */

console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%10);
console.log(10%3); //나머지

console.log('--------------');

console.log(10 * (10 + 10));

/*
증가와 감소
 */

console.log('--------------')

let number = 1;

number ++;
console.log(number);

number --;
console.log(number);

/*
엱산자의 위치
 */
let result = 1;
console.log(result);

result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

/*
숫자 타입이 아닌 타입에 +, - 사용하면?
 */

console.log('-------------');

let sample = '99';

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
console.log(+sample); // NaN -> Not a Number

sample = '99';
console.log(-sample);
console.log(typeof -sample);

/*
할당 연산자
 */

console.log('-------');
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/*
비교 연산자
1. 값의 비교
2. 값과 타입의 비교
 */

console.log('-----------------------')

console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true==1);
console.log(false==0);
console.log(true=='1');

console.log('-----------------------')

console.log(5===5);
console.log(5 === '5');
console.log(0 === '');
console.log(true===1);
console.log(false===0);
console.log(true==='1');

console.log('-----------------------')

console.log(5 != 5);
console.log(5 != '5');
console.log(0 != '');
console.log(true!=1);
console.log(false!=0);
console.log(true!='1');

console.log('-----------------------')

console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true!==1);
console.log(false!==0);
console.log(true!=='1');

// == != 는 되도록 쓰지마라

/*
대소 관계 비교 연산자
 */

console.log('-----------------------')

console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/*
삼항 조건 연산자
 */

console.log('-----------------------')
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

/*
논리 연산자
1) &&
2) ||
 */

// && 조건은 모두 true 여야 true 반환
console.log('-----------------------')
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// ||는 하나만 true 여도 true 반환
console.log('-----------------------')
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('-----------------------')
console.log(10>1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);
console.log('-----------------------')
console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);

/*
단축 평가

1. && 사용했을때 좌측이 true 면 우측 값 반환
2. && 를 사용했을때 좌측이 false 면 좌측 값 반환
3. || 사용했을때 좌측이 true 면 좌측 값 반환
4. || 사용했을때 좌측이 false 면 우측 값 반환
 */
console.log('-----------------------')
console.log(true||'아이브');
console.log(false||'아이브');

console.log('-----------------------')
console.log(true&&'아이브');
console.log(false&&'아이브');

console.log('-----------------------')
console.log(true && true && '아이브');
console.log(true && false && '아이브');
console.log(true || true || '아이브')
console.log(true && true || '안유진')
console.log('-----------------------')


/*
지수 연산자
 */
console.log('-----------------------')
console.log(2 ** 2);
console.log(10 ** 3); // 10의 3승

/*
null 연산자
 */
console.log('-----------------------')

let name;
console.log(name); //undefined

name = name ?? '코드팩토리'; // name 이 null 이나 undefined 면 '코드팩토리반환'
console.log(name);

name = name ?? '아이브'; // name === '코드팩토리' 이기 때문에 '아이브'는 저장되지 않는다.
console.log(name);

let name2;
name2 ??= '코드팩토리'; // += 와같음
console.log(name2);




