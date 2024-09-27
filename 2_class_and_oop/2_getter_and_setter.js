/**
 * fileName       : 2_getter_and_setter
 * author         : Yeong-Huns
 * date           : 2024-09-28
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-28        Yeong-Huns       최초 생성
 */


class IdolModel{
	name;
	year;

	constructor(name, year) {
		this.name = name;
		this.year = year;
	}

	/**
	 * 1) 데이터를 가공해서 새로운 데이터를 반환할때
	 * 2) private 한 값을 반환할때
	 */

	get nameAndYear(){
		return `${this.name}-${this.year}`;
	}

	set nameName(name){
		this.name = name;
	}
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear); //안유진-2003 => getter 는 함수처럼 생겼지만, 사용시 () 를 쓰지 않는다.

yuJin.name = '장원영';
console.log(yuJin); // setter 없어도 되는거아님? -> private 으로 설정하면 유효

yuJin.setName = '장원영';
console.log(yuJin);

class IdolModel2{
	#name;
	year;

	constructor(name, year) {
		this.#name = name;
		this.year = year;
	}
	get name(){
		return this.#name;
	}

	set name(name){
		this.#name = name;
	}
}

const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2) // IdolModel2 { year: 2003 } -> private 라 못가져옴.
console.log(yuJin2.name); //안유진 -> getter 를 통해 가져올 수 있다.

yuJin2.name = '김영훈';
console.log(yuJin2.name); // setter 를 통해 변경가능하지만, Immutable programing 원칙에 위반하기 때문에 진~~짜 안씀 (안쓰는거 추천)



