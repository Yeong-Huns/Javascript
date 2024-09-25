/**
 * fileName       : 12_function
 * author         : Yeong-Huns
 * date           : 2024-09-26
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-26        Yeong-Huns       최초 생성
 */

/*
function -> 함수

 */

/*
만약에 2 라는 숫자에 * 10 / 2 % 3 스트링으로 변환해서 반환받고 싶으면?
 */
console.log((2 * 10 / 2 % 3).toString());

/*
Dry
D -> Don't
R -> Repeat
Y -> Yourself
 */

console.log('------------------------------');

function calculate(){
	console.log((2 * 10 / 2 % 3).toString());
}
//calculate();

console.log('------------------------------');

/*
파라미터 사용
 */

function calculate(number){
	console.log((number * 10 / 2 % 3).toString())
}

calculate(4);

/*
함수에서 입력받는 값에 대한 정의를 Parameter 라고 한다.
실제 입력하는 값은 argument 라고 한다.
 */
calculate(4);
calculate(5);

console.log('------------------------------');

function multiply(x, y){
	console.log(x * y);
}

multiply(2, 4);
console.log('------------------------------');
function multiply(x, y = 10){
	console.log(x * y);
}
multiply(2, 4);
multiply(2);

/*
반환받기
return 받기
 */

console.log('------------------------------');
function myltiply(x, y){
	return x * y;
}

const result = myltiply(2, 4);
console.log(result);
console.log('------------------------------');
const result2 = myltiply(4, 5);
console.log(result2);


/*
Arrow 함수
 */
console.log('------------------------------');
const multiply2 = (x, y) => {
	return x * y
}

console.log(multiply2(3, 4));

console.log('--------------------------');

const multiply3 = (x, y) => x * y
console.log(multiply3(4, 5));

console.log('--------------------------');

const multiply4 = x => x * 2;
console.log(multiply4(2));

console.log('--------------------------');

const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(10));

console.log('--------------------------');

function multiply6(x){
	return function(y){
		return function (z){
			return `x: ${x} y: ${y} z: ${z}`;
		}
	}
}

console.log(multiply6(2)(5)(10));

console.log('--------------------------');
const multiplyTwo = function(x, y){
	return x * y
}
console.log(multiplyTwo(4,5));

console.log('--------------------------');

const multiplyThree = function(x, y, z){
	console.log(arguments); // x , y , z 값이 어떤게 들어왔는지 알 수 있다.
	return x * y * z;
}
console.log('--------------------------');
console.log(multiplyThree(4,5,6));
console.log('--------------------------');
const multiplyAll = function(...argument){
	return Object.values(argument).reduce((a,b)=> a*b, 1);
}

console.log(multiplyAll(3,4,5,6,7,8,9,10));

console.log('--------------------------');
/*
즉시 실행 함수
 */
console.log('--------------------------');
// immediately invoked function
(function(x, y){
	console.log(x * y);
})(4,5);

console.log(typeof multiply);
console.log(multiply instanceof Object); // 함수는 Object 이다.