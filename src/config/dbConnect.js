import mongoose from 'mongoose'

import config from './env.js'

const connect = () => {
  try{
    mongoose.connect(config.DB_URI, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
      // poolSize: 1
      // loggerLevel: 'debug',
      // logger: console.log
    })

  } catch (error) {
    console.log('Problema ao conectar no banco de dados', error)
  }
}
const disconnect = () => mongoose.disconnect()

export default { connect, disconnect }
