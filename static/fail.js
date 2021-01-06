function solution(N, stages){
    let result = [];

    let players = stages.length;

    let fMap = {};

    for(let stage of stages){
        if (stage <= N){
            if(fMap[stage]){
                fMap[stage] += 1;
            }
            else{
                fMap[stage] = 1;
            }
        }
    }
    
    for(let i = 0; i < N; i++){
        if(!fMap[i+1]){
            fMap[i+1] = 0;
        }
    }
    let sortList = [];
    let _frate = {};

    for(let i in fMap){
        let temp = fMap[i];
        let tlist = [];
        if(_frate[temp/players]){
            if(typeof _frate[temp/players] === 'object'){
                _frate[temp/players].forEach(element => {
                    tlist.push(element);
                });
            }else{
                tlist.push(_frate[temp/players]);
            }
            tlist.push(i);
            _frate[temp/players] = tlist;
        }else{
            _frate[temp/players] = i;
        }
        if(sortList.indexOf(temp/players) < 0){
            sortList.push(temp/players);
        }   
        players -= temp;
        //실패율 넣기.
    }

    sortList.sort().reverse();

    for(let i of sortList){
        if(typeof _frate[i] === 'object'){
            _frate[i].forEach(element => {
                result.push(element);
            });
        }else{
            result.push(_frate[i]);
        }
    }
    
    console.log(result);

    return result;
}

// solution(5, [2, 1, 2, 6, 2, 4, 3, 3])
solution(4, [4,4,4,4,4])