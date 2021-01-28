/**
내장 객체의 경우에는 직접 만들어서 썼다.
require('./var');
처럼

근데 내장 모듈의 경우에는 만들필요없이 갖다 쓰기만 하면된다.
1. os
운영체제 정보를 담고 있다.
* 
 */

// const os = require('os');

// console.log(os.cpus());
/**
 * 이게 중요한 이유는 node가 싱글 스레드 이기 때문에, 
 * 서버의 성능을 향상시키기 위해서는 HW의 cpu 코어 갯수를 파악해서
 * 활용해야 한다.
 * 
 * 2. os 모듈 메소드
 * https://nodejs.org/dist/latest-v15.x/docs/api/os.html
 * 
 * PASS
 * 
 * 3. path
 * 이건 자주 쓰인다.  => 경로 처리할때 많이 쓰임
 */
// const path = require('path');
// 역슬래시와 슬래시를 알아서 구분해준다.

// console.log(path.join(__dirname, 'var.js'));

// console.log(path.join(__dirname, '..', '/var.js'));
// console.log(path.resolve(__dirname, '..', '/var.js'));
/**
path.resolve 는 절대경로를 준수함.
path.join 은 앞의 경로가 있으면 잘 받고, 아니라면 절대 경로를 따라감.

path 모듈은 path.normalize 를 통해서 슬래시를 일관적으로 잘 만들어준다.
path.isAbsolute() 는 절대경로인지를 찾아준다.
path.relative(앞, 뒤) 를 통해 앞의 경로에서 뒤의 경로로 갈 수 있는 방법을 알려준다.
*/

// console.log(path.is('c:\Users\Futuregen\Desktop\복사\var.js', '/var.js'));

/**
4. URL
공식문서에 있는건 외우지 말자..
https://nodejs.org/dist/latest-v15.x/docs/api/url.html

5. searchParams 
*/
// const {URL} = require('url');
// const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
// console.log(myURL.searchParams);

/*
WHATWG 방식이 searchParms,
기존 방식이 querystring 을 사용하는 방식
두 방식으로 나뉜 이유는 기존 URL을 생략하는 경우 WHATWG 는 알 수가 없기때문에,
기존방식으로 알아오게된다.
*/


/*
6. 암호화
암호화는 resource를 많이 사용하기 때문에
Multi-Thread로 수행됨.

기본 노드의 암호화는 조금 더 어려우니...
그나마 쉬운 crypto-js 를 갖다 써서 사용하자.

7. util

deprecated 와 promisify 가 자주 쓰임

- util.deprecated(함수) 를 사용하면 함수를 사용할때마다 메세지를 띄운다.

- util.promisify 를 사용하면 일반적인 callback 함수들을 Promise처럼 변형시켜 준다.
단, callback 함수는 함수(에러, 데이터) => {} 형식 이어야 한다. 아니라면 바꿀 수 없다.
*/
const util = require('util');
const dontUseMe = util.deprecate( (x,y) => {
    console.log(x+y);
},'dontUseMe 함수는 deprecate 되었습니다.');

dontUseMe(1,2);
const crypto = require('crypto');

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
.then((buf)=>{
    console.log(buf.toString('base64'));
})
.catch((error)=>{
    console.log(error(error));
})

/*
promisify 와 반대로 callbackify 도 있지만, 거의 사용되지는 않는다...
Promise을 뭐하러 callback 함수로 바꾸나..?

다음의 worker_thread는
workerThread.js 에서 이어서 계속함.
*/