const fs = require('fs');

/*
//readFileSync
console.log('A');
let result = fs.readFileSync('syntax/sample.txt', 'utf-8');
console.log(result);
console.log('C');
*/

//readFile
console.log('A');
fs.readFile('syntax/sample.txt', 'utf-8', (err, result) => {
    console.log(result);
});
console.log('C');

//readFileSync는 리턴값이 있는데
//readFile은 리턴값 대신 콜백 함수가 있다
//readFile이 끝나면 콜백 함수를 실행

//되도록이면 비동기적으로