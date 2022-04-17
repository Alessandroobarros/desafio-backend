import mongoose from 'mongoose'

import config from './env.js'

const connect = () => {
  try{
    mongoose.connect(config.NODE_ENV === 'test' ? global.__MONGO_URI__ : config.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

  } catch (error) {
    console.log('Problema ao conectar no banco de dados', error)
  }
}
const disconnect = () => mongoose.disconnect()
const db = { connect, disconnect }

export default db
