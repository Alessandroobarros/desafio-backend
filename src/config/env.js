import dotenv from 'dotenv'

dotenv.config()
const env = process.env
const config = {
  DB_URI: env.DB_URI,
  PORT: env.PORT || 3000,
  LIMIT: env.PAGE_LIMIT
}
export default config
