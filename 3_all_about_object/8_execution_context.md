## Execution Context? 

> `Execution Context` 는 실행하려는 JS 코드와 코드를 실행할때 필요한 정보를 담고있는 특수한 환경이다.
> 코드 실행에 필요한 모든 데이터를 들고있는 환경이라고 생각하면 된다.

> `Execution Context`는 크게 두개로 나뉘어진다. 
> `Global Context` -> 최상위 `Execution Context`다 코드를 실행하면 무조건 생성되는 context 로 
> 웹에서의 window 객체나 nodeJS 의 global 객체를 생성하고 들고있는다. 
> `Function Context` -> 함수가 실행될때마다 함수별로 실행되는 context 다. 함수 실행에 대한 모든 정보를 갖고 있는다. 

## Memory Heap & Call Stack 

### Memory Heap 

### Call Stack (Execution Context Stack)
> 먼저 들어온게 먼저 나간다. 

```javascript
function one(){
	console.log('run one');
	console.log('run one finished');
}
function two(){
	console.log('run two');
	one();
	console.log('run two finished');
}
function three(){
	console.log('run three');
	two();
	console.log('run three finished')
}
three();
```

> `Call Stack(Execution Context Stack`
> global -> function three() -> function two() -> function one() 

```bash
run three
run two
run one
run one finished 
```

> `Call Stack(Execution Context Stack`
> global -> function three() -> function two()

```bash
run three
run two
run one
run one finished 
run two finished
```

> `Call Stack(Execution Context Stack`
> global -> function three()

```bash
run three
run two
run one
run one finished 
run two finished
run three finished
```

### Creation Phase 
* Global Object 를 생성한다. window 또는 global 객체가 생성되고 함수에서는 arguments 객체가 생성된다. 
* this 를 window 또는 global 에 바인딩한다.
* 변수와 함수를 Memory Heap 에 배정하고 기본 값을 undefined 로 저장한다. (호이스팅)

### Execution Phase
* 코드를 실행한다. 
* 필요하다면 새로운 Execution Context 를 생성한다. 

