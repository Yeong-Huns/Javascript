/**
 * fileName       : 13_must_know_array_function
 * author         : Yeong-Huns
 * date           : 2024-09-27
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-27        Yeong-Huns       최초 생성
 */

/*
Function Methods
클래스 안에 귀속되는 함수들을 method 라고 함
 */

let iveMembers = [
	'안유진', '가을', '레이', '장원영', '리즈', '이서',
]

console.log(iveMembers);

// push();
// iveMembers 라는 Array 를 직접 변경을 했다.

console.log(iveMembers.push('김영훈')); // 7 -> 추가하고 난 후 길이 반환
console.log(iveMembers);

// pop();
console.log('-----------------')
console.log(iveMembers.pop()); // pop() 을 한 값이 출력이 된다.
console.log(iveMembers);

console.log('-----------------')

// shift()
console.log(iveMembers.shift()); // shift -> 앞을 삭제 후 출력
console.log(iveMembers);

console.log('-----------------')
console.log(iveMembers.unshift('안유진')); // 길이 반환
console.log(iveMembers);

console.log('-----------------')
console.log(iveMembers.splice(0,3)) // 0 부터 3개의 값을 빼서 배열로 반환
console.log(iveMembers);

/**
 *
 */


iveMembers = [
	'안유진', '가을', '레이', '장원영', '리즈', '이서',
]

// concat()
console.log('-----------------')
console.log(iveMembers.concat('김영훈')); // push 와 concat 의 차이 -> push 는 원본 배열을 변경 , concat 은 복사본 반환
console.log(iveMembers);

// slice()
console.log('-----------------')
console.log(iveMembers.slice(0, 3)); // 0 ~ 2 인덱스까지 잘라옴
console.log(iveMembers);

// spread operator
console.log('-----------------')
let iveMembers2 = [
	...iveMembers,
]
console.log(iveMembers2);

console.log('-----------------')
let iveMembers3 = [
	iveMembers,
]
console.log(iveMembers3);


console.log('-----------------')
let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

// imutable programming
console.log('-----------------')
console.log([...iveMembers, ] === iveMembers);

//join() -> 모든 값을 String 으로 묶을때 사용
console.log('-----------------')
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '))

// sort() & reverse()
// 오름차순
console.log('-----------------')
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

console.log('-----------------')
let numbers = [
	1,9,7,5,3
];
console.log(numbers);

// a, b, 를 비교했을때
//1. a 를 b 보다 나중에정렬하려면 (뒤에두려면) 0보다 큰 숫자를 반환
//2. a를 b 보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
//3. 원래 순서를 그대로 두려면 0을 반환
console.log('-----------------')
numbers.sort((a,b)=> {
	return a > b ? 1 : -1;
})
console.log(numbers);
console.log('-----------------')
numbers.sort((a,b)=> a > b ? -1 : 1);
console.log(numbers);

// map();
console.log('-----------------')
console.log(iveMembers.map(x=> x));
console.log(iveMembers.map(x=> `아이브: ${x}`))
console.log('-----------------')
console.log(iveMembers.map(x=> {
	if(x==='안유진'){
		return `아이브 : ${x}`;
	}else{
		return x
	}
}));
console.log(iveMembers);

//filter()
numbers = [1,8,7,6,3];
console.log('-----------------')
console.log(numbers.filter(x=> x % 2 === 0));

//find()
console.log('-----------------')
console.log(numbers.find(x=> x % 2 === 0));

//findIndex()
console.log('-----------------')
console.log(numbers.findIndex(x=> x % 2 === 0));

//reduce()
console.log('-----------------')
console.log(numbers.reduce((a, v)=> a + v ,0));
