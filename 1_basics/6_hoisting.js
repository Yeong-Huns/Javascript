/**
 * fileName       : 6_hoisting
 * author         : Yeong-Huns
 * date           : 2024-09-25
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-25        Yeong-Huns       최초 생성
 */

//Hoisting
console.log("Hello");
console.log("World");

console.log("-----------");

/*
Hoisting 은 무엇인가?
모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */
console.log(name);
var name = '코드팩토리';
console.log(name);

console.log(yujin);
//slet yujin = '안유진';

/*
호이스팅이 발생은 한다.
하지만 let과 const 도 undefined 로 존재는 하는데,
초기화 전에 접근하려하면 막아준다.
반면 var은 막지못함
 */