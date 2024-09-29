/**
 * fileName       : 3_immutable_object
 * author         : Yeong-Huns
 * date           : 2024-09-30
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-30        Yeong-Huns       최초 생성
 */

const yuJin = {
	name: '안유진',
	year: 2003,
	get age(){
		return new Date().getFullYear()-this.year;
	},
	set age(age){
		this.year = new Date().getFullYear()-age;
	}
}

console.log(yuJin);

/**
 * Extensible
 */

console.log(Object.isExtensible(yuJin)); // true => 확장 가능한

yuJin['position'] = 'vocal'
//yuJin.position = 'vocal'

console.log(yuJin) // => position 이라는 프로퍼티가 추가됨

Object.preventExtensions(yuJin); // => Extension을 막는다 (prevent)

console.log(Object.isExtensible(yuJin)) // false

yuJin.groupName = '아이브';
console.log(yuJin) // => groupName 이 추가되지 않음 (확장을 막아뒀기때문)

delete yuJin.position; // => 포지션 삭제
console.log(yuJin) // => 확장을 막은거지 삭제를 막은게 아니다. 삭제됨

/**
 * Seal
 */

console.log('==========')

const yuJin2 = {
	name: '안유진',
	year: 2003,
	get age(){
		return new Date().getFullYear()-this.year;
	},
	set age(age){
		this.year = new Date().getFullYear()-age;
	}
}

console.log(yuJin2)
console.log(Object.isSealed(yuJin2)) // false => 봉인이 되었냐? -> false 가 기본값

Object.seal(yuJin2); // yuJin2 를 봉인함
console.log(Object.isSealed(yuJin2)) // true

yuJin2.groupName = '아이브';
console.log(yuJin2)

delete yuJin2.name;
console.log(yuJin2) // 삭제도 안됨 . 아예 Sealed 했기 때문
Object.defineProperty(yuJin2, 'name', {
	writable: false,
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name')) //{ value: '안유진', writable: false, enumerable: true, configurable: false }

// 결국 Sealed 를 하는 작업은 , configurable 을 false 로 만드는것과 동일하다!!

/**
 * Freezed
 *
 * 읽기 외에 모든 작업을 불가능하게 변경한다.
 */

const yuJin3 = {
	name: '안유진',
	year: 2003,
	get age(){
		return new Date().getFullYear()-this.year;
	},
	set age(age){
		this.year = new Date().getFullYear()-age;
	}
}

console.log(Object.isFrozen(yuJin3)) // false
Object.freeze(yuJin3); // => Freeze!
console.log(Object.isFrozen(yuJin3)) // true

delete yuJin3.name;
console.log(yuJin3) // => 멀쩡함



// 오류
/*Object.defineProperty(yuJin3, 'name', {
	value: '김영훈'
})*/
console.log(yuJin3)


console.log(Object.getOwnPropertyDescriptors(yuJin3)) // writable , configurable 모두 false

const yuJin4 = {
	name: '안유진',
	year: 2003,
	wonYoung: {
		name: '장원영',
		year: 2004
	},
}

Object.freeze(yuJin4)
console.log(Object.isFrozen(yuJin4)) // true
console.log(Object.isFrozen(yuJin4.wonYoung)) // false  => 즉 , yuJin4 의 하위 객체는 Frozen 되지 않음 (상위 객체가 Freeze 되었다 하더라도)
