/**
 * fileName       : 2_callback_hell_and_promise
 * author         : Yeong-Huns
 * date           : 2024-10-04
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-10-04        Yeong-Huns       최초 생성
 */


/**
 * Callback
 */
function waitAndRun(){
	setTimeout(()=>{
		console.log('끝');
	}, 2000);
}

waitAndRun();

function waitAndRun2(){
	setTimeout(()=> {
		console.log('1번 콜백 끝');
		setTimeout(()=>{
			console.log('2번 콜백 끝')
			setTimeout(()=>{
				console.log('3번 콜백 끝')
			},2000)
		}, 2000)
	},2000)
}

waitAndRun2();

/**
 * Promise
 */

const timeoutPromise = new Promise((resolve, reject)=> {
	setTimeout(()=>{
		resolve('완료');
	},2000)
})

timeoutPromise.then((res)=>{
	console.log('---then---')
	console.log(res);
});

const getPromise = (sec) => new Promise((res, rej)=> {
	setTimeout(()=>{
		res('완료');
	},sec * 1000);
})

getPromise(3).then((res)=>{
	console.log('---first then ----')
	console.log(res);
	return getPromise(3);
}).then((res)=> {
	console.log('---second then---');
	console.log(res);
	return getPromise(3);
}).then((res)=> {
	console.log('---third then---');
	console.log(res);
	return getPromise(3);
})


const getPromise2 = (sec) => new Promise((res, rej)=> {
	setTimeout(()=>{
		if((!sec % 3)) res('성공');
		else rej('에러');
	},sec * 1000);
})

getPromise2(3).then((res)=>{
	console.log(res);
})
.catch((err)=>{
	console.error(err);
})
.finally(()=>{
	console.log('---finally---')
});

Promise.all([
	getPromise(1),
	getPromise(2),
	getPromise(3)
]).then((res)=>{
	console.log(res);
})