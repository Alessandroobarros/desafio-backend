import app from './src/app.js'
import config from'./src/config/env.js'

app.listen(config.APP_PORT, () => console.log(`server listening on ${config.APP_PORT}`))
