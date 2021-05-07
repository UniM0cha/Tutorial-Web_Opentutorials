const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => {
    if (condition){
        resolve('성공');
    } else {
        reject('실패');
    }
});

promise
.then((message) => { // resolve 가 호출되면 then 실행. message는 resolve의 매개변수.
    console.log(message); //성공한 경우 실행
    return new Promise((resolve, reject) => {   // 다음 실행할 것.
        resolve(message);
    })
})
.then((message2) => {   
    console.log(message2);  //두번째 then으로 넘어옴.
    return new Promise((resolve, reject) => {
        resolve(message2);
    })
})
.then((message3) => {
    console.log(message3);
})
.catch((error) => { // reject가 호출되면 catch 실행. error는 reject의 매개변수.
    console.error(error); // 실패한 경우 실행
});

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})