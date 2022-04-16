import Desenvolvedor from '../../models/desenvolvedor.js'
import config from '../../config/env.js'

const findAll = async () => {

  return await Desenvolvedor.find().populate('nivel').limit(config.LIMIT)

}

const findById = async (id) => {

  return await Desenvolvedor.findOne({ _id: id }).populate('nivel')

}

const findByNivel = async (id) => {

  return await Desenvolvedor.findOne({ nivel: id })

}

export { findById, findAll, findByNivel}
