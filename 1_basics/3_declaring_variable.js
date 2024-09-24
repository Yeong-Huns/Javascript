/**
 * fileName       : 3_declaring_variable
 * author         : Yeong-Huns
 * date           : 2024-09-25
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-25        Yeong-Huns       최초 생성
 */
// Variable 선언하기
/*
1) var - 더이상 쓰지 않는다.
2) let
3) const
*/
// 1.var
var name = "안유진";
console.log(name);

var age = 32;
console.log(age);

// 2.let
let ive = '아이브';
console.log(ive);

ive = '안유진';
console.log(ive);

// let var 은 추후 값을 변경 가능
const newJeans = '뉴진스';
console.log(newJeans);

/*newJeans = '카리나';*/
console.log(newJeans);

// const 는 재할당 불가

/*
선언과 할당
1. 변수를 선언하는 것.
2. 할당
 */

let girlFriend;
console.log(girlFriend); // undefined
// 초기값이 undefined 라는걸 알 수 있다.

/*const girlFriend2;
* 할당하지 않으면 사용할 수 없다.
* */
