const mongooseInstance = require('mongoose')

const { DB_URI } = require('./env')

const connect = () => {
  try{
    mongooseInstance.connect(DB_URI, {
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
const disconnect = () => mongooseInstance.disconnect()

module.exports = {
  connect,
  disconnect,
  mongooseInstance
}
