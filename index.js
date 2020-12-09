const express = require('express')
const bodyParser = require('body-parser')
const users = require('./routes/users.js')
const app = express()
const port = process.env.PORT || 4000


app.get('/', (req, res) => res.send('default route'))

app.use(bodyParser.json())
app.use(users)

app.listen(port, () => {
  console.log('app is listening on:', port)
})