import Nivel from '../../models/nivel.js'

const removeById = async ( id ) => {
  return await Nivel.deleteOne({_id: id})
}

export default removeById
