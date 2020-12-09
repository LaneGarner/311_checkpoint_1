const users = require('../data/index')
const sampleUser = require('../data/sampleUser')

// We will create five controller functions. These will correspond to the routes above. ALL LOGIC for retrieving or updating the "data" should be done here. After that is complete we will import these controller functions into the routes. The end result of your routes should look like this: `router.get('/users', usersController.listUsers)`. Create the following controller functions:

// * listUsers
//   * Should retrieve the entire array from _data/index_

exports.listUsers = (req, res) => res.json(users)


// * showUser
//   * Should retrieve just the user that matches the passed-in id

exports.showUser = (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    if (found) {
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    } else {
        res.status(404).json({ msg:`Not found... No user with the id of ${req.params.id}` })
    }
}


// * createUser
//   * Should add a user to the array

exports.createUser = (req, res) => {
    users.push({
        id: users.length + 1,
        ...req.body
    })
    res.json(users)
}


// * updateUser
//   * Should update one user in the array based on its id

exports.updateUser = (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));

    if (found) {
        const updateUser = req.body
        users.forEach(user => {
            if(user.id === parseInt(req.params.id)) {
                user.name = updateUser.name ? updateUser.name : user.name;
                user.username = updateUser.username ? updateUser.username : user.username;
                user.occupation = updateUser.occupation ? updateUser.occupation : user.occupation;
                user.occupation = updateUser.occupation ? updateUser.occupation : user.occupation;
                user.occupation = updateUser.occupation ? updateUser.occupation : user.occupation;

                res.json({ msg: 'User updated', user })
            }
        });
    } else {
        res.status(400).json({ msg: `Bad request... No user with the id of ${req.params.id}` });
    }
    res.json(users)
}


// * deleteUser
//   * Should delete one user from the array based on its id

exports.deleteUser = (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));

    if (found) {
        res.json({ msg: 'User deleted', users: users.filter(user => user.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({ msg: `Bad request... No user with the id of ${req.params.id}` })
    }
    res.json(users)
}