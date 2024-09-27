```javascript
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진입니다.';
```

### Copy by Value 
original `0x000001` => 안녕하세요
clone `0x000003` => 안녕하세요 + 안유진입니다.

### Copy by Reference
```javascript
let originalObj = {
	name: '안유진',
	group: '아이브',
}
let cloneObj = originalObj;


console.log(originalObj);
console.log(cloneObj);

```
originalObj `0x000001` => `0x000003`
cloneObj `0x000002` => `0x000003`
`0x000003` => { name: '안유진', group: '아이브' }

```javascript
originalObj.group = '김영훈';
console.log(originalObj); // { name: '안유진', group: '김영훈' }
console.log(cloneObj); // { name: '안유진', group: '김영훈' }
```

`0x000003` => { name: '안유진', group: ~~'아이브'~~ '김영훈' }

