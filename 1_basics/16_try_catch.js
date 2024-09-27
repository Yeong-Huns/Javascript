/**
 * fileName       : 16_try_catch
 * author         : Yeong-Huns
 * date           : 2024-09-28
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-09-28        Yeong-Huns       최초 생성
 */

/**
 * try...catch
 * 1) 발생시킬때 -> 던진다고한다. (throw)
 * 2) 명시적으로 인지할때 -> 잡는다고 한다. (catch)
 */

function runner() {
	try {
		console.log('Hello')
		throw new Error('큰 문제가 생겼습니다.'); // 새로운 에러 객체를 생성한다.
		console.log('김영훈') // => 에러가 던져지면 함수가 멈춤
	} catch (e) {
		console.log('----catch----') // 에러가 던져지면 바로 catch 로 이동
		console.log(e);
	} finally { // optional
		console.log('---finally---') // catch 로 이동하든 안하든 무조건 출력됨.
	}
}

runner();