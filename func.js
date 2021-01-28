const value = require('./var');
//이 방식은 Node의 모듈 시스템.

//JS의 모듈 시스템도 있다.
import {odd, even} from "./var.js"
//이렇게 지원은 하긴 하지만, node에서의 module 시스템을 알아둬야 읽고 사용이 가능하다.

//require - module.exports 와 import - default export 와는 동작 방식이 다르다.


console.log(value);


const {odd, even} = require('./var');

function checkOddOrEven(num){
    if (num % 2 == 0){
        return '짝수입니다.';
    }else{
        return '홀수입니다.';
    }
}

console.log(odd);
console.log(even);

module.exports = checkOddOrEven;