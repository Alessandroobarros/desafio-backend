import Desenvolvedor from '../../models/desenvolvedor.js'

const edit = async (id, dados) => {

  return await Desenvolvedor.findByIdAndUpdate(id, {$set: dados})
}

export default edit
