const user = require('../model/model');

exports.insert = (req , res) => {
    const new_user = new user(req.body);

    user.insert(new_user , (err , user) => {
        if(err) res.send(err);
        else {
            console.log("User Added");
            res.json(user);
        }
    });
};
exports.login = (req , res) => {
    const cur_user = new user(req.body);

    user.login(cur_user , (err , user) => {
        if(err) res.send(err);
        else {
            res.json(user);
        }
    })
}
