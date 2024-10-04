/**
 * fileName       : 9_closure
 * author         : Yeong-Huns
 * date           : 2024-10-03
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-10-03        Yeong-Huns       최초 생성
 */

/*
Closure

A closure is the combination of a function and the lexical
environment within which that function was declared

클로저는 어떤 함수와 해당 함수가 선언된 렉시컬 환경의 조합이다.
상위 함수보다 하위 함수가 더 오래 살아있는 경우를 closure 라고 한다.
 */

function getNumber(){
	var number = 5;
	function innerGetNumber(){
		return number;
	}
	return innerGetNumber();
}

// console.log(number)
//console.log(getNumber()());

function getNumber(){
	var number = 5;
	function innerGetNumber(){
		return number;
	}
	return innerGetNumber;
}

const runner = getNumber();
console.log(runner);
console.log(runner())

/**
 * 1. 데이터 캐싱
 */

function cacheFunction(newNumb){
	// 아래 계산은 매우 오래걸린다는 가정
	var number = 10 * 10; //

	function innerCacheFunction(newNumb){
		return number * newNumb; //number 를 캐싱해서 바로 새로운 값과 *
	}

	return innerCacheFunction;
}

const runner2 = cacheFunction();
console.log(runner2(10));
console.log(runner2(20));
console.log(runner2(30));

function cacheFunction2(){
	var number = 99;
	function increment(){
		number++;
		return number;
	}
	return increment;
}

const runner3 = cacheFunction2();
console.log(runner3()) // 100
console.log(runner3()) // 101
console.log(runner3())
console.log(runner3())
console.log(runner3())
console.log(runner3())
console.log(runner3())

/*
3) 정보 은닉
 */
function Idol(name,year){
	this.name = name;
	var _year = year;

	this.sayNumberAndYear = function (){
		return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;
	}
};
const yuJin = new Idol('안유진', 2003);
console.log(yuJin.name);
console.log(yuJin.sayNumberAndYear())