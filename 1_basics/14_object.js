/**
 * fileName       : 14_object
 * author         : Yeong-Huns
 * date           : 2024-09-27
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-27        Yeong-Huns       최초 생성
 */

/*
Object 객체
 */
// key: value pair
let yuJin = {
	name: '안유진',
	group: '아이브',
	dance: function (){
		return `${this.name}이 춤을 춥니다.`; // this => 함수가 정의 되어 있는 객체를 나타냄.
	},
}
console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']); // 이건 위랑 같다.

const key = 'name';

console.log(yuJin[key]); // key 에 해당하는 value 값을 가져올 수 있음

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
	[nameKey]: nameValue,
	[groupKey]: groupValue,
	dance: function (){
		return `${this.name}이 춤을 춥니다.`
	}
}

console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '김영훈';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin'; // 존재하지 않는 키를 선언했더니, 자동으로 추가되었다.
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);

// const 로 선언했는데 , 어떻게 변경할 수 있을까?
// copy by value , copy value Reference

/**
 * 객체의 특징
 * 1) const 로 선언할 경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */

const wonYoung = {
	name: '장원영',
	group: '아이브',
}
console.log(wonYoung);

// wonYoung = {}; -> 이건 안됨. (객체 자체를 변경하려 하기때문)

wonYoung['group'] = '김영훈';
console.log(wonYoung);

/**
 * 모든 키값 다 가져오기
 *
 */

console.log(Object.keys(wonYoung)); // ['name' , 'group'];
console.log(Object.values(wonYoung)); // ['장원영', '김영훈'];

const name = '안유진';
const yuJin3 = {
	name,
}
console.log(yuJin3) // { name: '안유진' }
// name 의 key 와 변수의 key 가 같으면 , 하나의 name 만 작성해도 된다.