const express = require('express')
const router = express.Router()
const UserControllers = require('../controllers/users.js')
const sampleUser = require('../data/sampleUser')



// * GET /users
//   * Return all users

router.get('/users/', UserControllers.listUsers)

// * GET /users/:id
//   * Return just the user that matches the path param (id)

router.get('/users/:id', UserControllers.showUser)

// * POST /users
//   * Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list. Currently we have users 1-10 (_data/index_). The next user should be 11

router.post('/users/', UserControllers.createUser)

// * PUT /users/:id
//   * Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request

router.put('/users/:id', UserControllers.updateUser)

// * DELETE /users/:id
//   * Delete one user by it's id

router.delete('/users/:id', UserControllers.deleteUser)

// _You may chose to alter these routes so they appear as ('/', '/:id') in your users file and then prefix them all with '/users' when we import them into index.. but you are not required to do so_

module.exports = router