## 클래스의 정의 
> `클래스` 는 객체지향 프로그래밍에서 특정 `객체(인스턴스)` 를 생성하기 위한 
> 변수와 메소드(함수)를 정의하는 일종의 틀이다.

## 상속의 정의
> `상속(inheritance)`은 객체들 간의 관계를 구축하는 방법이다. 
> 슈퍼클래스 , 또는 부모 클래스 등의 기존의 클래스로부터 속성과 동작을 상속받을 수 있다.

```javascript
class IdolModel{
	name;
	year;
	constructor(name, year){
		this.name = name;
		this.year = year;
    }
}

class FemaleIdolModel{
	name;
	year;
	dance(){
		console.log(`${this.name}이 춤을 춥니다.`);
    }
	constructor(name, year){
		this.name = name;
		this.year = year;
    }
}

class MaleIdolModel{
	name;
	year;
	sing(){
		console.log(`${this.name}이 노래를 부릅니다.`);
    }
	constructor(name, year){
		this.name = name;
		this.year = year;
    }
	
}
```
### 공통되는 데이터 정리

```javascript
name;
year;
```

### 부모/슈퍼 클래스
> `IdolModel` : (name, year)

### 자식 클래스 
> `FemaleIdolModel` , `MaleIdolModel`

