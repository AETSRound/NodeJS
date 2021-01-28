/*
노드에서 멀티 쓰레드 방식으로 작업할 수 있다.
하지만 몇몇의 부분에서 사용하긴 하지만,
대체로 노드는 싱글스레드로 동작하게 하는게 쉽고 직관적이다.

1. worker_threads

*/

const {Worker, isMainThread, parentPort, workerData} = require('worker_threads');

if(isMainThread){
    //메인스레드
    const threads = new Set();
    threads.add(new Worker(__filename, {
        workerData:{start:1},
    }));
    threads.add(new Worker(__filename, {
        workerData:{start:2},
    }));

    for(let worker of threads){
        worker.on('message', (value)=>{
            console.log('워커로부터', value);
        });
        worker.on('exit', ()=>{
            threads.delete(worker);
            if(threads.size === 0){
                console.log('워커 끝');
            }
        });
        // worker.postMessage('ping');
    }
}else{
    //워커스레드
    // parentPort.on('message', (value) => {
    //     console.log('부모로부터', value);
    //     parentPort.postMessage('pong');
    //     parentPort.close();
    // })

    const data = workerData;
    parentPort.postMessage(data.start + 100);
}


//2부터 1000만 까지의 숫자중에 소수찾기 예제는
//prime.js 에서 계속