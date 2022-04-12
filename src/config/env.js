require('dotenv').config()

const env = process.env

module.exports = {
  DB_URI: env.DB_URI,
  APP_PORT: env.APP_PORT
}
