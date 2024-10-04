# Async Programming 
> 비동기 프로그래밍

## Thread 란? 
> 📌 `8 Core 16 Tread` -> 8 개의 코어가 각각 2개의 쓰레드를 가지고 있어서 16개의
> 쓰레드를 활용 가능하다.(동시에 몇 가지의 연산을 할 수 있는가)

## Javascript 는 Single Thread 이다! 
> 📌 JS 는 동시에 단 하나의 작업만 실행 할 수 있다.

## Sync Programming(동기 프로그래밍)
> 1. 콘솔에 `Hello` 출력
> 2. 2초가 걸리는 작업 시작
> 3. 위 작업 시작 후 (작업이 끝나기 전) 바로 `World` 출력
> 4. 2초가 걸리는 작업 완료 후 `완료` 출력 

```javascript
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
```
```bash
Hello 
# 2초 대기 
완료
World
```

> 📌 `Sync Programming(동기 프로그래밍)` 
> `console.log('Hello')`; 
> `~longWork()` -> 2초간 수행(수행 완료까지 쓰레드를 막음)
> `console.log('World')`

### Async Programming (비동기 프로그래밍)
> 1. 콘솔에 `Hello` 출력
> 2. 2초가 걸리는 작업 `longWork2()` 실행
> 3. 콘솔에 `World` 출력
> 4. `longWork2()` 종료 후 `완료` 출력

```javascript
function longWork2(){
	setTimeout(()=>{
		console.log('완료');
	},2000); //2초간 기다리고 실행함(비동기)
}

console.log('Hello');
longWork2();
console.log('World');
```
```bash
Hello 
World
# 2초 대기 
완료
```
> 📌 `Async Programming (비동기 프로그래밍)`
> 1. `console.log('Hello')`
> 2. `longWork2();` -> setTimeout 실행
> 3. `console.log('World')`
> 4. `console.log('완료')`

## Event Loop 

> 📌 call Stack 에 올라간 비동기 함수는 `Task Queue(Event Queue)` 로 이동
> `Event Loop` 는 `Task Queue` 를 계속해서 바라보면서 종료된 작업이 있나 확인 & Call Stack 이 비었나 확인

