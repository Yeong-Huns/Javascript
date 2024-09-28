/**
 * fileName       : 4_inheritance
 * author         : Yeong-Huns
 * date           : 2024-09-29
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-29        Yeong-Huns       최초 생성
 */

/*
Inheritance
 */

class IdolModel{
	name;
	year;
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
}

class FemaleIdolModel extends IdolModel{
	dance(){
		return `여자 아이돌이 춤을 춥니다.`
	}
}

class MaleIdolModel extends IdolModel{
	sing(){
		return `남자 아이돌이 노래를 부릅니다.`
	}
}

const yuJin = new FemaleIdolModel('안유진', 2003);
const jiMin = new MaleIdolModel('지민', 1995);

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jiMin.sing());
console.log(jiMin.name);

// console.log(yuJin.sing());

const yh = new IdolModel('김영훈', 1994);
console.log(yh);

console.log(yh.name);

console.log(yuJin instanceof IdolModel) // true => 상속했기 때문에
console.log(yuJin instanceof FemaleIdolModel) // true
console.log(yuJin instanceof MaleIdolModel) // false

console.log('--------------------')
console.log(jiMin instanceof IdolModel) // true => 상속했기 때문에
console.log(jiMin instanceof FemaleIdolModel) // false
console.log(jiMin instanceof MaleIdolModel) // true

console.log('--------------------')
console.log(yh instanceof IdolModel); // true
console.log(yh instanceof FemaleIdolModel) // false
console.log(yh instanceof MaleIdolModel) // false