// 성능향상은 되지만, 코드길이가 길어지고,
// 고려할 사항도 늘어난다.
// 할 수는 있지만, 되도록 노드로는 하지않는 것을 추천.
// 잘 할 수 있다면 해도 상관 없다.

const {Worker, isMainThread, parentPort, workerData} = require('worker_threads');

const min = 2;
let primes = [];

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

getPrimeNumbs()

if(isMainThread){
    const max = 10000000;
    const threadsCount = 10;
    const threads = new Set();
    const range = Math.ceil((max - min) / threadsCount);
    let start = min;
    console.time('소수2찾기');
    for(let i = 0 ; i < threadsCount -1; i++){
        const wStart = start;
        threads.add(new Worker(__filename, {workerData : {start:wStart, range}}));
        start += range;
    }
    threads.add(new Worker(__filename, {workerData:{start, range:range+((max-min +1)%threadsCount)}}));
    for(let worker of threads){
        worker.on('error', (err)=>{
            //워커 에러시 복구 로직.
            throw err;
        });
        worker.on('exit', ()=> {
            threads.delete(worker);
            if(threads.size === 0){
                console.timeEnd('소수2찾기');
                console.log(primes.length);
            }
        });
        worker.on('message', (msg)=>{
            primes = primes.concat(msg);
        })
    }
}else{
    getPrimeNumbs(workerData.start, workerData.range);
    parentPort.postMessage(primes);
}