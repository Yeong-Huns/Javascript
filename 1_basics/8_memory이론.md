## 메모리란? 

### 연산을 해야하는 CPU 
* 실제 연산을 하게 되는 공간

### RAM 이라고 부르는 영역을 담당 
* 결과를 저장하는 공간 

#### 메모리안엔 여러개의 메모리 셀이 존재 
* 메모리 셀은 각각 주소가 존재 `0x000000`,`0x000001`, `0x000002` ...
```javascript
let calc = 2 + 5;
```
`0x000002` -> 2 
`0x000005` -> 5 
calc -> `0x000006` -> 7
calc 라는 변수의 의미는 이 `0x000006` 주소라고 생각하면됨.

