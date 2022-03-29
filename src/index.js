// import randomWords from 'random-words'
var randomWords = require('random-words');

let wards = randomWords({exactly:2, maxLength: 5})

function findWordle(arr) {
    if(arr.some(e => e.length === 5)){
        return arr.find(word => word.length === 5);
    }else{
        return findWordle(arr = randomWords({exactly:2, maxLength: 5}));
    }
}

const actualWordle = findWordle(wards);

export default actualWordle;
