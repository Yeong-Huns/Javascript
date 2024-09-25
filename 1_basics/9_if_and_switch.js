/**
 * fileName       : 9_if_and_switch
 * author         : Yeong-Huns
 * date           : 2024-09-25
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-25        Yeong-Huns       최초 생성
 */


/*
If and Switch
 */

let number = 5;
if (number % 2 === 0) {
	console.log('number 변수는 짝수입니다.'); // 홀수이기때문에 출력되지않음
} else {
	console.log('number 변수는 홀수입니다.');
}

console.log('-----------------');

if (number % 2 === 0) {
	console.log('2의 배수입니다..');
} else if (number % 3 === 0) {
	console.log('3의 배수입니다..');
} else if (number % 4 === 0) {
	console.log('4의 배수입니다..');
} else if (number % 5 === 0) {
	console.log('5의 배수입니다..');
} else {
	console.log('2,3,4,5의 배수가 아닙니다.');
}

console.log('-----------------');

const englishsDay = 'Saturday';

let koreanDay;

switch (englishsDay) {
	case 'Monday':
		koreanDay = '월요일';
		break;
	case 'Tuesday':
		koreanDay = '화요일';
		break;
	case 'Wednesday':
		koreanDay = '수요일';
		break;
	case 'Thursday':
		koreanDay = '목요일';
		break;
	case 'Friday':
		koreanDay = '금요일';
		break;
	default:
		koreanDay = '주말';
		break;
}

console.log(koreanDay);