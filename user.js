/**
 * Created by amanchawla on 19/12/18.
 */
exports.registerUser = registerUser;

function registerUser(req, res) {
    var userName = req.body.user_name;
    if(!userName) {
        return res.send('Please send user name.');
    }
    
    connection.query('INSERT INTO tb_users VALUES($1)', [userName], function(error, result) {
        if(error) {
            console.error(error.message);
            return res.send('Something went wrong');
        }
        return res.send('Action complete');
    });
}