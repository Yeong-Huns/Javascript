/**
 * fileName       : 4_using_function_to_create_objects
 * author         : Yeong-Huns
 * date           : 2024-10-01
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-10-01        Yeong-Huns       최초 생성
 */

/**
 * Using function to create objects
 */

function IdolModel(name, year){
	if(!new.target){ // => new.target 이 undefined 면 (함수로 객체 생성시 new 키워드를 누락했다면) new 를 써서 반환해준다.
		return new IdolModel(name, year);
	}
	this.name = name;
	this.year = year;

	this.dance = function (){
		return `${this.name}이 춤을 춥니다.`;
	}
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin)
console.log(yuJin.dance())
const yuJin2 = IdolModel('안유진', 2003); // new 를 누락함.
console.log(yuJin2) // undefined

const IdolModelArrow = (name, year) => {
	this.name = name;
	this.year = year;
}
/*
const yuJin3 = new IdolModelArrow('안유진', 2003);
console.log(yuJin3) // => 화살표 함수는 new 키워드 사용불가
*/
