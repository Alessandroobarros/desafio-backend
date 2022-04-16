import Nivel from '../../models/nivel.js'
import config from '../../config/env.js'

const findAll = async () => {

  return await Nivel.find().limit(config.LIMIT)

}

const findById = async (id) => {

  return await Nivel.findOne({ _id: id })

}

export { findAll, findById}
