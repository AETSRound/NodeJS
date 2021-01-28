const min = 2;
const max = 10000000;

const primes = [];

function getPrimeNumbs(start, range){
    let isPrime = true;
    const end = start + range;
    for(let i = start; i<end; i++){
        for(let j = min; j<Math.sqrt(end); j++){
            if(i !==j && i%j ===0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primes.push(i);
        }
        isPrime = true;
    }
}
console.time('소수찾기');
getPrimeNumbs(min, max);
console.timeEnd('소수찾기');
console.log(primes.length);

// 이런 경웨 multi thread를 쓴다면?
// 이건 primeWithMT.js 에서 계속
