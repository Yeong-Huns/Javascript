/**
 * fileName       : 3_static_keyword
 * author         : Yeong-Huns
 * date           : 2024-09-28
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-28        Yeong-Huns       최초 생성
 */

/**
 * Static Keyword
 */

class IdolModel{
	name;
	year;
	static groupName = '아이브';
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
	static returnGroup(){
		return '아이브';
	}
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);

console.log(IdolModel.groupName); // 클래스 자체에 귀속이 된다. (인스턴스가 아니라)
console.log(IdolModel.returnGroup());

/**
 * factory constructor
 */

class IdolModel2{
	name;
	year;
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}

	static fromObject(object){
		return new IdolModel2(
			object.name,
			object.year,
		)
	}

	static fromList(list){
		return new IdolModel2(
			list[0],
			list[1]
		)
	}
}

const yuJin2 = IdolModel2.fromObject({
	name: '안유진',
	year: 2003,
})
const wonYoung = IdolModel2.fromList([
	'장원영',
	2003,
])

console.log(yuJin2);
console.log(wonYoung)