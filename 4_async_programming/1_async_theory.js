/**
 * fileName       : 1_async_theory
 * author         : Yeong-Huns
 * date           : 2024-10-04
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-10-04        Yeong-Huns       최초 생성
 */

/**
 * Async theory
 */

function longWork(){
	const now = new Date();

	/**
	 * milliseconds since epoch
	 * 1970 년도 1월 1일 부터 지금 코드가 실행되는 순간까지의 시간을 밀리초로 반환
	 */
	const milliseconds = now.getTime();
	const afterTwoSeconds = milliseconds + 2 * 1000;
	while(new Date().getTime() < afterTwoSeconds){

	}

	console.log('완료');
}

console.log('Hello');
longWork();
console.log('World');


function longWork2(){
	setTimeout(()=>{
		console.log('완료');
	},2000); //2초간 기다리고 실행함(비동기)
}

console.log('Hello');
longWork2();
console.log('World');