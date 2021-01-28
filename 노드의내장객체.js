/*
node 의 기본 내장 객체

외우지 말고 있는것 정도만 볼것.
사용시에 다시 찾아 볼것.

node책의 3장은 사전 같은 것.

1. browser 는 Window, Node는 global
최신 버전에서는 혼용이 없게 globalThis 가 된다.
global의 내장객체들은 global을 생략해서 사용해도 된다.
require 도 global.require였고,console.log 또한 global.console.log 이다.

2. global 의 속성을 모든 환경에서 공유가 가능하지만, 어느 위치에서 설정했는지 알 수가 없기 때문에 지양할것.

3. console 객체
console.log 말고도 console.dir 로 객체를 로깅할때 좋은 방법이 있다.
console.time("태그이름") ~ console.timeEnd("태그이름") 으로 소요시간을 볼 수 있다.
console.trade 는 호출스택을 로깅하는데 사용.
console 객체는 많이 써볼것.


4. console 객체 예제 아래에 있음.
*/

// const string = 'abc';
// const number = 1;
// const boolean = true;
// const obj = {
//     outside:{
//         inside:{
//             key:'value',
//         },
//     },
// };
// console.time('전체 시간');
// console.log('평범한 로그');
// console.log(string, number, boolean);
// console.error('에러 메세지');
// console.table([{name : '제로'}, {name:'Tony'}]);
// console.dir(obj, {colors:false, depth:2});
// console.dir(obj, {colors:true, depth:1});

// console.time('시간 측정');
// for(let i = 0; i< 10000; i++){}
// console.timeEnd('시간 측정');

// function b(){
//     console.trace('에러 위치 추적');
// }

// function a() {
//     b();
// }
// a();


/*
5. 타이머
setInterval 을 사용할 경우 
const 변수 = setInterval( () => {console.log('실행')}, 2000);
이렇게 변수에 할당하는게 일반적이다.
=> 이유는 추후에 일정 횟수나 일정 시간에 이 타이머를 해제 하기 위해서.
clearInterval(변수) 를 사용하면 해당 timer를 해제 할 수 있다.

setImmediate() 는 바로 실행하는 함수.
=> 왜 바로 실행 시키는걸 여기에 넣느냐.?
백그라운드로 넘기는 과정을 통해(백그라운드에서는 '동시에'실행 될 수가 있다.) 비동기화 한다.
어떠한 역할을 이렇게 동시에 실행 시키려는 목적으로 활용한다.

6. 타이머 예제.
타이머가 겹칠때 어떤 순서로 동작이 이루어지는지 알아둘 필요는 있다.
*/

// const timout = setTimeout(()=>{
//     console.log('1.5초후 실행');
// } ,1500);
// const interval = setInterval(() => {
//     console.log('1초 마다 실행');
// }, 1000);
// const timeout2 = setTimeout(() => {
//     console.log('실행되지 않는다.');
// } ,3000);
// setTimeout(()=>{
//     clearTimeout(timeout2);
//     clearInterval(interval);
// },2500);

// const immediate = setImmediate(()=> {
//     console.log('즉시 실행');
// });
// const immediate2 = setImmediate(()=>{
//     console.log('실행되지 않는다.');
// });

// clearImmediate(immediate2);


/*
    * node 는 컴퓨터 내부에 접근 할 수 있다.
    node 에서 javascript를 실행한다면, 위험할 수 있다.
    filesystem 에 접근하는 것에 보안적인 허점이 있다.

7. __filename, __dirname
*/

console.log(__filename);
console.log(__dirname);

console.log(this === module.exports);  //global ? => 아니다.  module.exports 이다.

//이걸 사용해서 exports 대신 this 를 쓸수 있다.
//this.odd = odd;
//this.even = even;
//처럼.. 근데, 헷갈리기도해서 잘 안쓴다.

function a(){
    console.log(this === global);
}
a();

// 함수 내부의 this 만 global
