/**
 * fileName       : 3_async_await
 * author         : Yeong-Huns
 * date           : 2024-10-04
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-10-04        Yeong-Huns       최초 생성
 */

/**
 * Async / Await
 */
const getPromise = (seconds) => new Promise((res, rej) => {
	setTimeout(()=>{
		//res('완료');
		rej('에러')
	}, seconds * 1000);
})

async function runner(){
	try{
	const result1 = await getPromise(1);
	console.log(result1);
	console.log(await getPromise(2));
	console.log(await getPromise(3))
	}catch (e){
		console.error(e);
	}finally {
		console.log('--finally--')
	}
}
runner();
console.log('실행 끝');