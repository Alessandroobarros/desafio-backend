import app from './src/app.js'
import config from'./src/config/env.js'

// const port = process.env.APP_PORT || 3000

app.listen(config.APP_PORT, () => console.log(`server listening on ${config.APP_PORT}`))
