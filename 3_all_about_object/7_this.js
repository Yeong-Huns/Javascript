/**
 * fileName       : 7_this
 * author         : Yeong-Huns
 * date           : 2024-10-03
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-10-03        Yeong-Huns       최초 생성
 */

/**
 * this
 *
 * JS 는 Lexical Scope 를 사용하기 때문에 함수의 상위 스코프가
 * 정의 시점에 평가된다.
 * 하지만 this 키워드는 바인딩이 객체가 생성되는 시점에 결정된다.
 */

const testFunction = function(){
	return this;
}

console.log(testFunction());
console.log(testFunction() === global);

const yuJin = {
	name: '안유진',
	year: 2003,
	sayHello: function (){
		return `안녕하세요 저는 ${this.name}입니다.`
	}
}

console.log(yuJin.sayHello())

function Person(name,year){
	this.name = name;
	this.year = year;

	this.sayHello = function (){
		return `안녕하세요 저는 ${this.name}입니다.`
	}
}

const yuJin2 = new Person('안유진', 2003);
console.log(yuJin2);

Person.prototype.dance = function (){
	return `${this.name}이 춤을 춥니다.`;
	/*function dance2(){
		return `${this.name}이 춤을 춥니다`
	}*/ // 이건 global
}

console.log(yuJin2.dance())

/**
 * this 키워드가 어떤걸 가르키냐는 세가지만 기억한다.
 *
 * 1. 일반 함수 호출할땐  this 가 최상위 객체 (global 또는 window) 를 가르킨다.
 * 2. 메서드로 호출할땐 호출된 객체를 가리킨다.
 * 3. new 키워드를 사용해서 객체를 생성했을땐 객체를 가르킨다.
 */

/**
 * 1. apply()
 * 2. call()
 * 3. bind()
 */

function returnName(){
	return this.name;
}
console.log(returnName()) // undefined

const yuJin3 = {
	name: '안유진'
}

console.log(returnName.call(yuJin3));
console.log(returnName.apply(yuJin3));

/**
 * 1. call -> 컴마를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2. apply -> 아큐먼트를 리스트로 입력해야한다.
 */

function multiply(x,y,z){
	return `${this.name} / 결과값 : ${x * y * z}`;
}

console.log(multiply.call(yuJin3, 3,4,5));
console.log(multiply.apply(yuJin3,  [3,4,5])); // 배열로 넘김

/**
 * bind();
 */

const laterFunc = multiply.bind(yuJin3, 3,4,5);
console.log(laterFunc);
console.log(laterFunc());

// call 과 apply 는 호출 즉시 실행되지만, bind 는 선언해두고, 나중에 적용가능하다.