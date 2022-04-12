const app = require('./app')
const db = require('./config/dbConnect')
const { APP_PORT = 3000 } = require('./config/env')

db.connect()

app.listen(APP_PORT, () => console.log(`server listening on ${APP_PORT}`))
