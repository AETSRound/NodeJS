const odd = '홀수';
const even = '짝수';

// module.exports={
//     odd,
//     // odd : odd,
//     even,
//     // even : even,
// };

//or

exports.odd = odd;
exports.even = even;


// module.exports === exports  === {}
//최초엔 그냥 빈 객체

// module.exports = isOddorEvent()
//같이 하나만 넣거나, 새로운 객체를 생성하여 module.exports 에 넣으면 
// module.exports !== exports 가 되므로, 되도록 이 참조 관계가 연결 될 수 있게 하는게 좋다.

//module.exports 는 한가지 return 할때, 두가지 이상은 exports.무엇 으로 하는게 많다.
//하지만, 이 두가지를 한 파일에서 쓸수는 없다. module.exports 가 채택되어 exports.~ 으로 된것들이 무시되 버린다.