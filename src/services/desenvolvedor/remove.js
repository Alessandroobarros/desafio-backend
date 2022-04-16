import Desenvolvedor from '../../models/desenvolvedor.js'

const remove = async ( id ) => {
  return await Desenvolvedor.deleteOne({_id: id})
}

export default remove
