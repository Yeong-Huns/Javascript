/**
 * fileName       : 1_class_keyword
 * author         : Yeong-Huns
 * date           : 2024-09-28
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-28        Yeong-Huns       최초 생성
 */

/**
 * Class Keyword
 */


class IdolModel { // 무조건 대문자
	//name;
	//year;
	/**
	 *
	 * @param {String} name 멤버 이름
	 * @param {number} year 출생년도
	 */
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
	sayName(){ // class 내부에서는 function 이라는 키워드를 사용하지 않아도 된다.
		return `안녕하세요 저는 ${this.name}입니다.`
	}
}

// constructor - 생성자

const yuJin = new IdolModel('안유진', 2003); // class 로 새로운 객체 (인스턴스) 를 생성했음.
console.log(yuJin); // IdolModel { name: '안유진', year: 2003 }
const gaeul = new IdolModel('가을', 2002);
console.log(gaeul)
const ray = new IdolModel('레이', 2004);
console.log(ray)
const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung)
const liz = new IdolModel('리즈', 2004);
console.log(liz)
const eseo = new IdolModel('이서', 2007);
console.log(eseo);

console.log(yuJin.name);
console.log(yuJin.year);

// 자바 스크립트는 박살난 모델 (음해있음)
// 어떤 property 가 존재해야하는지 명시해두는게 좋다. (없어도 동작은 됨)

console.log(yuJin.sayName())
console.log(wonYoung.sayName())

console.log(typeof IdolModel); //function => class 는 함수다.
console.log(typeof yuJin); //object => 객체(인스턴스) 는 object 다.
