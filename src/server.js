import app from './app.js'
import config from'./config/env.js'

app.listen(config.APP_PORT, () => console.log(`server listening on ${config.APP_PORT}`))
