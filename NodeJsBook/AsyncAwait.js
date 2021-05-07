function findAndSaveUser(Users) {
    Users.findOne({})
    .then((user) => {
        user.name = 'zero';
        return user.save();
    })
    .then((user) => {
        user.name = 'zero';
        return findOne({gender:'m'});
    })
    .then((user) => {
        //생략
    })
    .catch(err => {
        console.error(err);
    });
}


//await 은 해당 프로미스가 resolve 될 때까지 기다린 뒤 다음 로직으로 넘어감.
async function findAndSaveUser(Users){
    let user = await Useres.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await findOne({gender:'m'});
}

//try catch문으로 에러처리
async function findAndSaveUser(Users){
    try{
        let user = await Useres.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await findOne({gender:'m'});
    }
    catch (error){
        console.error(error);
    };
}