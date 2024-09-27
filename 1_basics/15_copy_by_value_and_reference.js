/**
 * copy by value 값에 의한 저달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value 다.
 * 2) 객체는 copy by reference 이다.
 */

// copy by value
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.'
console.log('------------------')
console.log(original) // 안녕하세요
console.log(clone) // 안녕하세요 안유진 입니다.

// copy by reference
console.log('------------------')
let originalObj = {
	name: '안유진',
	group: '아이브',
}
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('------------------')

originalObj.group = '김영훈';
console.log(originalObj); // { name: '안유진', group: '김영훈' }
console.log(cloneObj); // { name: '안유진', group: '김영훈' }

console.log('------------------')
console.log(original === clone); // false
console.log(originalObj === cloneObj); // true

originalObj = {
	name: '김영훈',
	group: 'kosa'
}

cloneObj = {
	name: '김영훈',
	group: 'kosa'
};

console.log('------------------')
console.log(originalObj === cloneObj); // false

// 값이 같다고 true 가 출력되는게 아니다.

console.log('------------------')
const yuJin1 = {
	name: '안유진',
	group: '아이브',
}
const yuJin2 = yuJin1;
const yuJin3 = {
	name: '안유진',
	group: '아이브'
}

console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false

/*
spread operator
copy by value
 */
console.log('------------------')
const yuJin4 = {
	...yuJin3,
}

console.log(yuJin4);
console.log(yuJin4 === yuJin3);

console.log('------------------')
const yuJin5 = {
	year: 2003,
	...yuJin3
}
console.log(yuJin5)

const yuJin6 = {
	name: '김영훈',
		...yuJin3,
}
console.log(yuJin6) // { name: '안유진', group: '아이브' } => '김영훈' 으로 변경되지 않은 이유? => 순서가 중요함!!!

const yuJin7 = {
	...yuJin3,
	name: '김영훈',
}
console.log(yuJin7) // { name: '김영훈', group: '아이브' }

const numbers = [1,3,5];

const numbers2 = [
	10,
	...numbers,
]

console.log(numbers2)

const numbers3 = [
	...numbers,
	10
]
console.log(numbers3)
