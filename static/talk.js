function solution(list){
    let tList = [];
    Object.assign(tList, list);

    //채팅방 입장
    const ENTER = "Enter";
    //채팅방 퇴장
    const LEAVE = "Leave";
    //닉네임 변경
    const CHANGE = "Change";

    // let msgMap = {
    //     Enter:"들어왔습니다",
    //     Leave:"나갔습니다",
    // }

    // Action UID Nam 으로 구성된 string이 배열의 element
    let systemMap = {};
    for(let _map of tList){
        let _tMap = [];
        _tMap = _map.split(" ");    
        console.log(_tMap);
    }


    return tList;
}

let tL = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]
solution(tL);
// console.log(solution(tL));
