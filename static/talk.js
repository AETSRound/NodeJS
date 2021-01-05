function solution(list){
    let tList = [];
    Object.assign(tList, list);

    //채팅방 입장
    const ENTER = "Enter";
    //채팅방 퇴장
    const LEAVE = "Leave";
    //닉네임 변경
    const CHANGE = "Change";

    let msgMap = {
        Enter:"들어왔습니다",
        Leave:"나갔습니다",
    }
    let msgList = [];
    // Action UID Nam 으로 구성된 string이 배열의 element
    let systemMap = {};
    for(let _map of tList){
        let _tMap = [];
        _tMap = _map.split(" ");    
        console.log(_tMap);
        if(_tMap[0]===ENTER){
            systemMap[_tMap[1]] = _tMap[2];
            msgList.push(`${_tMap[2]}님이 ${msgMap[_tMap[0]]}`);
        }
        else if(_tMap[0]===LEAVE){
            msgList.push(`${_tMap[2]}님이 ${msgMap[_tMap[0]]}`);
        }
        else{
            systemMap[_tMap[1]] = _tMap[2];
        }

    }
    console.log(msgList);
    //메세지 넣는거랑 map의 id의 일관성 유지하는걸 따로할 필요가 있다.

    return tList;
}

let tL = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
solution(tL);
// console.log(solution(tL));
