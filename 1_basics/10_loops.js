/**
 * fileName       : 10_loops.js
 * author         : Yeong-Huns
 * date           : 2024-09-25
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-25        Yeong-Huns       최초 생성
 */


/*
Loops

1.for
2.while
 */

for(let i = 0; i < 10; i++) {
	console.log(i); // 0 ~ 9
}

console.log('----------------------------')

for(let i = 10; i > 0; i--){
	console.log(i);
}

console.log('----------------------------')

for(let i = 0; i < 3; i++){
	for(let j = 3; j > 0; j--){
		console.log(i, j);
	}
}

console.log('----------------------------')

let str = '';
for(let i = 0; i < 6; i++){
	for(let j = 0; j < 6; j++){
		str += '*';
	}
	str+='\n';
}
console.log(str);
console.log('--------------------------------');

/*
for...in
 */

const yuJin = {
	name: '안유진',
	year: 2003,
	group: '아이브',
}
console.log('--------------------------------');
for(let key in yuJin){
	console.log(key); // Object 는 key 값을 받을 수 있고,
	console.log(yuJin[key]);
}


const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];
console.log('--------------------------------');

for (let key in iveMembersArray){
	console.log(key); // Array는 index 값을 받을 수 있다.
	console.log(`${key}: ${iveMembersArray[key]}`);
}

/*
for ...of
 */
console.log('--------------------------------');
for(let value of iveMembersArray){
	console.log(value);
}

/*
while loop
 */
console.log('--------------------------------');
let number = 0;
while(number < 10){
	number++;
}

console.log(number);

/*
do...while -> 비권장
 */
console.log('--------------------------------');
number = 0;
do{
	number++; // 먼저 코드를 실행하고
}while(number < 10); // 조건에 해당하는지를 판단한다.

console.log(number);

/*
break
 */
console.log('--------------------------------');
for(let i = 0; i < 10; i++){
	if(i===5) break;
	console.log(i);
}
console.log('--------------------------------');
number = 0;
while(number < 10){
	if(number === 5){
		break;
	}
	number++;
	console.log(number);
}

/*
continue

 */
console.log('--------------------------------');
for(let i = 0; i < 10; i++){
	if(i===5) continue; // 5와 같으면 스킵하고 다음 Loop 로 이동한다.
	console.log(i);
}
number = 0;
console.log('--------------------------------');
while(number < 10){
	number++;
	if(number === 5) continue;
	console.log(number);
}

let date = new Date();
let a = new Intl.DateTimeFormat('kr', {dateStyle: 'full'}).format(date);
console.log(a)

/**
 *
 * @param {String} name
 * @param {number} age
 * @returns {String} 두개 합쳐서 문자로 뱉어줌.
 */
function hello(name, age){
	return name + age;
}

hello('김철수', 10);

function ellow(name, age){
	return name + age;
}

console.log(hello(10, '김일성')); // JSDOC 과 타입이 일치하지 않으면 경고해줌

ellow('동그라미', 20);