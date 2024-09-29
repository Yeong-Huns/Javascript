/**
 * fileName       : 2_ㅔproperty_attribute
 * author         : Yeong-Huns
 * date           : 2024-09-30
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-30        Yeong-Huns       최초 생성
 */

/**
 * Property Attribute
 *
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 * 	설정할때 호출되는 함수로 구성된 프로퍼티
 * 	예를 들면 getter 와 setter
 */

const yuJin = {
	name: '안유진',
	year: 2003
}

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name')) // Object 의 스태틱 메서드
//{ value: '안유진', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(yuJin, 'year')) // Object 의 스태틱 메서드
// { value: 2003, writable: true, enumerable: true, configurable: true }

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정 할 수 있는지 여부, false 로 설정하며 프로퍼티 값을 수정할 수 있다.
 * 3) enumerable - 열거가 가능한지 여부 . for... in loop 등을 사용할 수 있으면 true 반환
 * 4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부 판다.
 * 	false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지, 단 , writable 이 true 인 경우 값 변경과 writable 을 변경하는건 가능하다.
 */

console.log(Object.getOwnPropertyDescriptor(yuJin, 'name'));
console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {
	name: '안유진',
	year: 2003,
	get age(){
		return new Date().getFullYear() - this.year;
	},
	set age(age){
		this.year = new Date().getFullYear()-age;
	}
}

console.log(yuJin2)
console.log(yuJin2.age);
yuJin2.age = 32;
console.log(yuJin2.age)
console.log(yuJin2.year)

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

//yuJin2.height = 172;
/*yuJin2['height'] = 172;

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height')); // { value: 172, writable: true, enumerable: true, configurable: true }
*/


Object.defineProperty(yuJin2, 'height', {
	value: 172,
	writable: true,
	enumerable: true,
	configurable: true
})

console.log(yuJin2)
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'))

yuJin2.height = 100;
console.log(yuJin2);

Object.defineProperty(yuJin2, 'height', {
	writable: false
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'))

console.log("--------")
yuJin2.height = 172; // Object defineProperty 의 writable 이 false 이기 때문에 변경할 수 없음
console.log(yuJin2.height)

/**
 * Enumerable
 */
console.log(Object.keys(yuJin2));
for(let key in yuJin2){ // key 를 통한 순회
	console.log(key); // name , year, age, height
}

Object.defineProperty(yuJin2, 'name', {
	enumerable: false,
});


console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name')); // enumerable 를 false 하면 열거가 불가능

console.log('----------------------')
for(let key in yuJin2){
	console.log(key) // year, age, height
}
console.log(yuJin2) // 여기도 name 안보임
console.log(yuJin2.name) // 하지만 열거가 안될뿐이지, 값이 사라진건 아님

/**
 * Configurable
 */
Object.defineProperty(yuJin2, 'height', {
	writable: true, // writable 이 true 이기 때문에 값과 writable 을 변경하는건 가능 but 설정 변경 불가
	configurable: false,
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'))

/*
Object.defineProperty(yuJin2, 'height', {
	enumerable: false,
})
*/

Object.defineProperty(yuJin2, 'height', {
	value: 172
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'))
console.log(yuJin2)

Object.defineProperty(yuJin2, 'height', {
	writable: false, // false 로 변경은 가능하다
})
/*

// 하지만 true 로 다시 writable 을 변경할 순 없다.
Object.defineProperty(yuJin2, 'height', {
	writable: true
})*/
