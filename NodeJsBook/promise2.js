// function findAndSaveUser(Users) {
//     Users.findOne({},(err, user) => {
//         if (err) {
//             return console.error(err);
//         }
//         user.name = 'zero';
//         user.save((err) => {
//             if(err){
//                 return console.error(err);
//             }
//             Users.findOne({gender:'m'}, (err, user) => {

//             })
//         })
//     })
// }

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